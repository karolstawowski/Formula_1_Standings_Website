import { listenToResize } from './windowResizing';
import { listenToSidebarSwitch } from './sidebarSwitch';
import { createSidebarButtons } from './sidebarButtonsCreator';
import { changeSidebarButtonsBackgroundColor } from './sidebarButtonsColorSet';
import { colorDefaultButtons } from './colorDefaultButtons';
import { generateTable } from './generateTable';
import {
  updateLanguageContent,
  changeSeasonname,
} from './changeInterfaceLanguage';
import { getDrivers } from './getDrivers';
import { getConstructors } from './getConstructors';
import { getRaces } from './getRaces';
import * as elements from './variables/documentElements';
import * as colors from './variables/colors';
import { setCookie } from './setCookie';
import { getCookie } from './getCookie';

// Global variables
let selectedMainButton = 'races';
let yearGlobal = new Date().getFullYear();
let language = 'en';
let isDarkTheme = getCookie('isF1WebsiteDarkTheme') === 'true' ?? true;
const cookiesStoreHours = 48;

// Starting functions
listenToResize();
listenToSidebarSwitch();
createSidebarButtons();
colorDefaultButtons(yearGlobal);
updateLanguageContent(yearGlobal, language);
getRaces(language, yearGlobal, isDarkTheme);
// Highlight sidebar buttons on start
const buttons = document.querySelectorAll('button[fetch-button]');
highlightSidebarButton(document.getElementById(yearGlobal));

if (isDarkTheme) {
  elements.main.classList.add('darktheme');
  elements.seasonName.classList.add('darktheme');
  elements.sideBar.classList.add('darktheme');
  elements.sideBarList.classList.add('darktheme');
  elements.sidebarTitle.classList.add('darktheme');
  elements.navbar.classList.add('darktheme');
  elements.footer.classList.add('darktheme');
  elements.themeSlider.checked = true;
}

// Theme switch functionality
elements.themeSwitch.addEventListener('change', () => {
  isDarkTheme = !isDarkTheme;
  setCookie('isF1WebsiteDarkTheme', isDarkTheme, cookiesStoreHours);

  elements.main.classList.toggle('darktheme');
  elements.seasonName.classList.toggle('darktheme');
  elements.sideBar.classList.toggle('darktheme');
  elements.sideBarList.classList.toggle('darktheme');
  elements.sidebarTitle.classList.toggle('darktheme');
  elements.navbar.classList.toggle('darktheme');
  elements.footer.classList.toggle('darktheme');

  let tableRows = document.getElementsByTagName('tr');
  for (let element of tableRows) {
    element.classList.toggle('tr-dark');
  }
});

// Language buttons functionality
elements.en.addEventListener('click', () => {
  if (language === 'pl') {
    language = 'en';
    generateTable(selectedMainButton, yearGlobal, language, isDarkTheme);
    updateLanguageContent(yearGlobal, language);
  }
});

elements.pl.addEventListener('click', () => {
  if (language === 'en') {
    language = 'pl';
    generateTable(selectedMainButton, yearGlobal, language, isDarkTheme);
    updateLanguageContent(yearGlobal, language);
  }
});

// Sidebar buttons functionality
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    yearGlobal = parseInt(button.id);
    // Add on-hover colors for all buttons
    highlightSidebarButton(document.getElementById(yearGlobal));
    // Display data based on button selected in main div
    generateTable(selectedMainButton, yearGlobal, language, isDarkTheme);
    // Change season year in main
    changeSeasonname(yearGlobal, language);
    // Color other, not selected buttons
    buttons.forEach((otherButtons) => {
      otherButtons.style.backgroundColor = colors.sidebarButtonDefaultColor;
    });
    // Color selected button
    button.style.backgroundColor = colors.sidebarButtonSelectedColor;
  });
});

// Hightlight sidebar buttons
function highlightSidebarButton(button) {
  buttons.forEach((otherButtons) => {
    otherButtons.addEventListener('mouseover', () => {
      otherButtons.style.backgroundColor =
        colors.sidebarButtonDefaultHoverColor;
    }),
      otherButtons.addEventListener('mouseout', () => {
        otherButtons.style.backgroundColor = colors.sidebarButtonDefaultColor;
      });
  });
  button.addEventListener('mouseover', () => {
    button.style.backgroundColor = colors.sidebarButtonSelectedHoverColor;
  }),
    button.addEventListener('mouseout', () => {
      button.style.backgroundColor = colors.sidebarButtonSelectedColor;
    });
}

// Races button on-click (main)
const buttonRaces = document.getElementById('races');
buttonRaces.addEventListener('click', function () {
  getRaces(language, yearGlobal, isDarkTheme);
  changeSidebarButtonsBackgroundColor((selectedMainButton = 'races'));
});

// Drivers championship button on-click (main)
const buttonDrivers = document.getElementById('driver-championship');
buttonDrivers.addEventListener('click', function () {
  getDrivers(language, yearGlobal, isDarkTheme);
  changeSidebarButtonsBackgroundColor(
    (selectedMainButton = 'driverChampionship')
  );
});

// Constructors championship button on-click (main)
const buttonConstructors = document.getElementById('constructor-championship');
buttonConstructors.addEventListener('click', function () {
  getConstructors(language, yearGlobal, isDarkTheme);
  changeSidebarButtonsBackgroundColor(
    (selectedMainButton = 'constructorChampionship')
  );
});

// Highlight navbar buttons - mouseover
buttonRaces.addEventListener('mouseover', () => {
  if (selectedMainButton === 'races') {
    buttonRaces.style.background = colors.navbarButtonSelectedHoverColor;
  } else buttonRaces.style.background = colors.navbarButtonDefaultHoverColor;
});

buttonConstructors.addEventListener('mouseover', () => {
  if (selectedMainButton === 'constructorChampionship') {
    buttonConstructors.style.backgroundColor =
      colors.navbarButtonSelectedHoverColor;
  } else
    buttonConstructors.style.backgroundColor =
      colors.navbarButtonDefaultHoverColor;
  buttonConstructors.style.transition = 'background-color 0.1s ease-in';
});

buttonDrivers.addEventListener('mouseover', () => {
  if (selectedMainButton === 'driverChampionship') {
    buttonDrivers.style.backgroundColor = colors.navbarButtonSelectedHoverColor;
  } else
    buttonDrivers.style.backgroundColor = colors.navbarButtonDefaultHoverColor;
  buttonDrivers.style.transition = 'background-color 0.1s ease-in';
});

// Highlight navbar buttons - mouseout
const navbarButtons = [buttonRaces, buttonConstructors, buttonDrivers];

navbarButtons.forEach((button) =>
  button.addEventListener('mouseout', () => {
    button.style.backgroundColor = colors.navbarButtonDefaultColor;
    if (selectedMainButton === 'races') {
      buttonRaces.style.backgroundColor = colors.navbarButtonSelectedColor;
    } else if (selectedMainButton === 'driverChampionship') {
      buttonDrivers.style.backgroundColor = colors.navbarButtonSelectedColor;
    } else if (selectedMainButton === 'constructorChampionship') {
      buttonConstructors.style.backgroundColor =
        colors.navbarButtonSelectedColor;
    }
  })
);

// Copy email to user's clipboard
elements.emailIcon.addEventListener('click', () => {
  navigator.clipboard.writeText('stawowski.dev@gmail.com');
});

// Open email icon popup
elements.emailButton.addEventListener('click', () => {
  elements.emailPopup.classList.toggle('show-popup');
});
