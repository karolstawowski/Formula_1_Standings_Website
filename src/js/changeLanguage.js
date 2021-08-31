import {
  en,
  pl,
  theadConstructors,
  theadRaces,
  theadDrivers,
} from "./variables/getElementsFromDocument";

export function changeToEnglish() {
  console.log(theadRaces);
  en.addEventListener("click", () => {
    let racesTemplate =
      "<tr><th> Round </th><th> Country </th><th> Race </th><th> Circuit </th><th> Date </th>";
    theadRaces.innerHTML = racesTemplate;
  });
}
