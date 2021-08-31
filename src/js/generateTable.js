export function generateTable(selectedMainButton, year, language) {
  if (selectedMainButton == "races") {
    getRaces(language, year);
  } else if (selectedMainButton == "driverChampionship") {
    getDrivers(language, year);
  } else if (selectedMainButton == "constructorChampionship") {
    getConstructors(language, year);
  }
}
