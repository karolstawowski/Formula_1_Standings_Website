import { getDrivers } from './getDrivers';
import { getConstructors } from './getConstructors';
import { getRaces } from './getRaces';

export function generateTable(selectedMainButton, year, language, isDarkTheme) {
  if (selectedMainButton === 'races') {
    getRaces(language, year, isDarkTheme);
  } else if (selectedMainButton === 'driverChampionship') {
    getDrivers(language, year, isDarkTheme);
  } else if (selectedMainButton === 'constructorChampionship') {
    getConstructors(language, year, isDarkTheme);
  }
}
