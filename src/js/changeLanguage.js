import {
  seasonName,
  sidebarTitle,
  buttonRacesText,
  buttonConstructorsText,
  buttonDriversText,
} from "./variables/documentElements";

export function changeSeasonname(year, lang) {
  if (lang === "en") {
    seasonName.innerHTML = "Season " + year;
  } else if (lang === "pl") {
    seasonName.innerHTML = "Sezon " + year;
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
    buttonRacesText.innerHTML = "Races";
    buttonConstructorsText.innerHTML = "Constructor standings";
    buttonDriversText.innerHTML = "Driver standings";
  } else if (lang === "pl") {
    buttonRacesText.innerHTML = "Wyścigi";
    buttonConstructorsText.innerHTML = "Mistrzostwa konstruktorów";
    buttonDriversText.innerHTML = "Mistrzostwa kierowców";
  }
}

export function updateLanguageContent(year, lang) {
  changeSeasonname(year, lang);
  changeSidebarTitle(lang);
  changeNavbarButtons(lang);
}
