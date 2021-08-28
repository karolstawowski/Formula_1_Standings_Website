// Reverse date order
export function reverseDateOrder(date) {
  let year = "";
  let month = "";
  let day = "";
  let newDate;
  for (let i = 0; i < 4; i++) {
    year += date[i];
  }
  for (let i = 5; i < 7; i++) {
    month += date[i];
  }
  for (let i = 8; i < 10; i++) {
    day += date[i];
  }
  newDate = day + "-" + month + "-" + year;
  return newDate;
}

export function getDataBasedOnMainButtons(selectedMainButton) {
  if (selectedMainButton == "races") {
    getRaces(button.id);
  } else if (selectedMainButton == "driverChampionship") {
    getDrivers(button.id);
  } else if (selectedMainButton == "constructorChampionship") {
    getConstructors(button.id);
  }
}
