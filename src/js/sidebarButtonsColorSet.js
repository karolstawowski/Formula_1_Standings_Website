import * as buttons from './variables/documentElements';
import * as colors from './variables/colors';

export function changeSidebarButtonsBackgroundColor(selectedMainButton) {
  if (selectedMainButton === 'races') {
    buttons.buttonRaces.style.backgroundColor =
      colors.navbarButtonSelectedColor;
    buttons.buttonDrivers.style.backgroundColor =
      colors.navbarButtonDefaultColor;
    buttons.buttonConstructors.style.backgroundColor =
      colors.navbarButtonDefaultColor;
  } else if (selectedMainButton === 'driverChampionship') {
    buttons.buttonRaces.style.backgroundColor = colors.navbarButtonDefaultColor;
    buttons.buttonDrivers.style.backgroundColor =
      colors.navbarButtonSelectedColor;
    buttons.buttonConstructors.style.backgroundColor =
      colors.navbarButtonDefaultColor;
  } else if (selectedMainButton === 'constructorChampionship') {
    buttons.buttonRaces.style.backgroundColor = colors.navbarButtonDefaultColor;
    buttons.buttonDrivers.style.backgroundColor =
      colors.navbarButtonDefaultColor;
    buttons.buttonConstructors.style.backgroundColor =
      colors.navbarButtonSelectedColor;
  }
}
