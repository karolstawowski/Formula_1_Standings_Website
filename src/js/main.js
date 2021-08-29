import {
  findCountryCodeByNationality,
  findCountryNameByNationality,
  findCountryCodeByCountryName,
} from "./countryCodes.js";
import { getDataFromStorage } from "./storeDataLocally.js";
import { reverseDateOrder } from "./functions.js";
import { listenToResize } from "./resizingListener.js";
import { listenToSidebarSwitch } from "./sidebarSwitchListener.js";
import { createSidebarButtons } from "./createSidebarButtons.js";
import { changeSidebarButtonsBackgroundColor } from "./changeSidebarButtonsBackgroundColor.js";
import { colorDefaultButtons } from "./colorSelectedButtonsByDef.js";
import * as elements from "./variables/getElementsFromDocument.js";
import * as colors from "./variables/colors.js";

let selectedMainButton = "races";
let yearGlobal = 2021;

// Fire on start
listenToResize();
listenToSidebarSwitch();
createSidebarButtons();
colorDefaultButtons();
getRaces(2021);

// On-click sidebar buttons
const buttons = document.querySelectorAll("button[fetch-button]");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    yearGlobal = button.id;
    // Display data based on button selected in main div
    if (selectedMainButton == "races") {
      getRaces(button.id);
    } else if (selectedMainButton == "driverChampionship") {
      getDrivers(button.id);
    } else if (selectedMainButton == "constructorChampionship") {
      getConstructors(button.id);
    }

    // Color other, not selected buttons
    buttons.forEach((otherButtons) => {
      otherButtons.style.backgroundColor = colors.sidebarButtonNotSelectedColor;
    });
    button.style.backgroundColor = colors.sidebarButtonSelectedColor;
  });
});

//
// Get and set races
//

async function getRaces(selectedYear) {
  let innerContent = "";
  elements.seasonname.innerHTML = "Season " + selectedYear;
  innerContent += `<table>
        <thead><tr>
            <th> Runda </th>
            <th> Kraj </th>
            <th> Nazwa wyścigu </th>
            <th> Nazwa toru </th>
            <th> Data </th>
        </tr></thead>`;
  const data = await getDataFromStorage(selectedYear + "Races", selectedYear);
  for (const element of data["MRData"].RaceTable.Races) {
    innerContent += `<tr>
            <td style="min-width: 20px;"> ${element.round} </td>
            <td title="${
              element.Circuit.Location.country
            }" style="min-width: 60px;"> <img class="flag" src="https://www.countryflags.io/${findCountryCodeByCountryName(
      element.Circuit.Location.country
    )}/shiny/64.png" alt="${element.Circuit.Location.country}"> </td>
            <td style="min-width: 220px;"> ${element.raceName} </td>
            <td style="min-width: 280px;"> ${element.Circuit.circuitName} </td>
            <td style="min-width: 100px;"> ${reverseDateOrder(
              element.date
            )} </td>
        </tr>`;
  }
  innerContent += "</table>";
  document.getElementById("main-content").innerHTML = innerContent;
}

// On-click main button #races
const buttonRaces = document.getElementById("races");
buttonRaces.addEventListener("click", function () {
  getRaces(yearGlobal);
  changeSidebarButtonsBackgroundColor((selectedMainButton = "races"));
});

//
// Get and set drivers
//

async function getDrivers(selectedYear) {
  let innerContent = "";
  seasonname.innerHTML = "Season " + selectedYear;
  innerContent += `<table>
        <thead><tr>
            <th> Pozycja </th>
            <th> Kierowca </th>
            <th> Kraj </th>
            <th> Drużyna </th>
            <th> Ilość punktów </th>
        </tr></thead>`;
  const data = await getDataFromStorage(
    selectedYear + "Drivers",
    selectedYear + "/driverStandings"
  );
  for (const element of data["MRData"].StandingsTable.StandingsLists[0]
    .DriverStandings) {
    innerContent += `<tr>
            <td> ${element.position} </td>
            <td style="min-width: 180px;"> ${element.Driver.givenName} ${
      element.Driver.familyName
    } </td>
            <td title="${findCountryNameByNationality(
              element.Driver.nationality
            )}" style="min-width: 60px;"> <img class="flag" src="https://www.countryflags.io/${findCountryCodeByNationality(
      element.Driver.nationality
    )}/shiny/64.png" alt="${element.Driver.nationality}"> </td>
            <td style="min-width: 120px;"> ${element.Constructors[0].name} </td>
            <td style="min-width: 130px;"> ${element.points} </td>
        </tr>`;
  }
  innerContent += "</table>";
  document.getElementById("main-content").innerHTML = innerContent;
}

// On-click main button #driverChampionship
const buttonDrivers = document.getElementById("driverChampionship");
buttonDrivers.addEventListener("click", function () {
  getDrivers(yearGlobal);
  changeSidebarButtonsBackgroundColor(
    (selectedMainButton = "driverChampionship")
  );
});

//
// Get and set constructors
//

async function getConstructors(selectedYear) {
  let innerContent = "";
  seasonname.innerHTML = "Season " + selectedYear;
  innerContent += `<table style="max-height: 380px;">
        <thead><tr>
            <th> Pozycja </th>
            <th> Konstruktor </th>
            <th> Kraj </th>
            <th> Ilość punktów </th>
        </tr></thead>`;
  const data = await getDataFromStorage(
    selectedYear + "Constructors",
    selectedYear + "/constructorStandings"
  );
  for (const element of data["MRData"].StandingsTable.StandingsLists[0]
    .ConstructorStandings) {
    innerContent += `<tr>
            <td> ${element.position} </td>
            <td> ${element.Constructor.name} </td>
            <td title="${findCountryNameByNationality(
              element.Constructor.nationality
            )}"> <img class="flag" src="https://www.countryflags.io/${findCountryCodeByNationality(
      element.Constructor.nationality
    )}/shiny/64.png" alt="${element.Constructor.nationality}"> </td>
            <td style="min-width: 120px"> ${element.points} </td>
        </tr>`;
  }
  innerContent += "</table>";

  document.getElementById("main-content").innerHTML = innerContent;
}

// On-click main button #constructorChampionship
const buttonConstructors = document.getElementById("constructorChampionship");
buttonConstructors.addEventListener("click", function () {
  getConstructors(yearGlobal);
  changeSidebarButtonsBackgroundColor(
    (selectedMainButton = "constructorChampionship")
  );
});

// On hover for navbar buttons
const navbarButtons = [buttonRaces, buttonConstructors, buttonDrivers];
buttonRaces.addEventListener("mouseover", () => {
  if (selectedMainButton === "races") {
    buttonRaces.style.background = colors.mainButtonSelectedAndHighlightedColor;
  } else buttonRaces.style.background = colors.mainButtonHighlightedColor;
  buttonRaces.style.transition = "background-color 0.1s ease-in";
});

buttonConstructors.addEventListener("mouseover", () => {
  if (selectedMainButton === "constructorChampionship") {
    buttonConstructors.style.backgroundColor =
      colors.mainButtonSelectedAndHighlightedColor;
  } else
    buttonConstructors.style.backgroundColor =
      colors.mainButtonHighlightedColor;
  buttonConstructors.style.transition = "background-color 0.1s ease-in";
});

buttonDrivers.addEventListener("mouseover", () => {
  if (selectedMainButton === "driverChampionship") {
    buttonDrivers.style.backgroundColor =
      colors.mainButtonSelectedAndHighlightedColor;
  } else
    buttonDrivers.style.backgroundColor = colors.mainButtonHighlightedColor;
  buttonDrivers.style.transition = "background-color 0.1s ease-in";
});

navbarButtons.forEach((button) =>
  button.addEventListener("mouseout", () => {
    button.style.backgroundColor = colors.mainButtonNotSelectedColor;
    if (selectedMainButton == "races") {
      buttonRaces.style.backgroundColor = colors.mainButtonSelectedColor;
    } else if (selectedMainButton == "driverChampionship") {
      buttonDrivers.style.backgroundColor = colors.mainButtonSelectedColor;
    } else if (selectedMainButton == "constructorChampionship") {
      buttonConstructors.style.backgroundColor = colors.mainButtonSelectedColor;
    }
  })
);
