import { getRaces, getDrivers, getConstructors } from "./main";

export function generateTable(selectedMainButton, year, language, theme) {
  if (selectedMainButton === "races") {
    getRaces(language, year, theme);
  } else if (selectedMainButton === "driverChampionship") {
    getDrivers(language, year, theme);
  } else if (selectedMainButton === "constructorChampionship") {
    getConstructors(language, year, theme);
  }
}
