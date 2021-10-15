import { getDrivers } from "./getDrivers";
import { getConstructors } from "./getConstructors";
import { getRaces } from "./getRaces";

export function generateTable(selectedMainButton, year, language, theme) {
  if (selectedMainButton === "races") {
    getRaces(language, year, theme);
  } else if (selectedMainButton === "driverChampionship") {
    getDrivers(language, year, theme);
  } else if (selectedMainButton === "constructorChampionship") {
    getConstructors(language, year, theme);
  }
}
