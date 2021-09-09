import { getRaces, getDrivers, getConstructors } from "./main";

export function generateTable(selectedMainButton, year, language) {
  if (selectedMainButton == "races") {
    getRaces(language, year);
  } else if (selectedMainButton == "driverChampionship") {
    getDrivers(language, year);
  } else if (selectedMainButton == "constructor-championship") {
    getConstructors(language, year);
  }
}
