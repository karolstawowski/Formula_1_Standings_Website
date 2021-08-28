import * as buttons from './variables/getElementsFromDocument.js';
import * as colors from './variables/colors.js';

export function changeSidebarButtonsBackgroundColor(selectedMainButton) {
    if (selectedMainButton == "races") {
        buttons.buttonRaces.style.backgroundColor = colors.mainButtonSelectedColor;
        buttons.buttonDrivers.style.backgroundColor = colors.mainButtonNotSelectedColor;
        buttons.buttonConstructors.style.backgroundColor = colors.mainButtonNotSelectedColor;
    }
    else if (selectedMainButton == "driverChampionship") {
        buttons.buttonRaces.style.backgroundColor = colors.mainButtonNotSelectedColor;
        buttons.buttonDrivers.style.backgroundColor = colors.mainButtonSelectedColor;
        buttons.buttonConstructors.style.backgroundColor = colors.mainButtonNotSelectedColor;
    }
    else if (selectedMainButton == "constructorChampionship") {
        buttons.buttonRaces.style.backgroundColor = colors.mainButtonNotSelectedColor;
        buttons.buttonDrivers.style.backgroundColor = colors.mainButtonNotSelectedColor;
        buttons.buttonConstructors.style.backgroundColor = colors.mainButtonSelectedColor;
    }
}