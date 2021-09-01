import {
  seasonname,
  sidebarTitle,
  buttonRaces,
  buttonConstructors,
  buttonDrivers,
} from "./variables/documentElements";

export function changeSeasonname(year, lang) {
  if (lang === "en") {
    seasonname.innerHTML = "Season " + year;
  } else if (lang === "pl") {
    seasonname.innerHTML = "Sezon " + year;
  }
}

function changeSidebarTitle(lang) {
  if (lang === "en") {
    sidebarTitle.innerHTML = "Season";
  } else if (lang === "pl") {
    sidebarTitle.innerHTML = "Sezon";
  }
}

function changeNavbarButtons(lang) {
  if (lang === "en") {
    buttonRaces.innerHTML = "Races";
    buttonConstructors.innerHTML = "Constructor standings";
    buttonDrivers.innerHTML = "Driver standings";
  } else if (lang === "pl") {
    buttonRaces.innerHTML = "Wyścigi";
    buttonConstructors.innerHTML = "Mistrzostwa konstruktorów";
    buttonDrivers.innerHTML = "Mistrzostwa kierowców";
  }
}

export function updateLanguageContent(year, lang) {
  changeSeasonname(year, lang);
  changeSidebarTitle(lang);
  changeNavbarButtons(lang);
}
