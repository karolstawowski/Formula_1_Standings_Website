import { getDataFromStorage } from "./localStorage";
import {
  findCountryNameByNationality,
  findCountryCodeByNationality,
} from "./countryCodes";
import { mainContent } from "./variables/documentElements";

export async function getConstructors(lang, selectedYear, darkTheme) {
  let innerContent = "";
  innerContent += `<table><thead><tr>`;
  if (lang === "en") {
    innerContent += `
        <th> Position </th>
        <th> Constructor </th>
        <th> Country </th>
        <th> Points </th>`;
  } else if (lang === "pl") {
    innerContent += `<th> Pozycja </th>
        <th> Zespół </th>
        <th> Kraj </th>
        <th> Ilość punktów </th>`;
  }
  innerContent += `</tr></thead><tbody>`;
  const data = await getDataFromStorage(
    selectedYear + "Constructors",
    selectedYear + "/constructorStandings",
    darkTheme
  );
  for (const element of data["MRData"].StandingsTable.StandingsLists[0]
    .ConstructorStandings) {
    if (darkTheme) {
      innerContent += "<tr class='tr-dark'>";
    } else {
      innerContent += "<tr>";
    }
    innerContent += `
              <td> ${element.position} </td>
              <td style="min-width: 120px"> <a href="${
                element.Constructor.url ? element.Constructor.url : ""
              }" target="_blank"> ${element.Constructor.name} </a> </td>
              <td title="${findCountryNameByNationality(
                element.Constructor.nationality
              )}">  
                <img class="flag" src="https://www.countryflags.io/${findCountryCodeByNationality(
                  element.Constructor.nationality
                )}/shiny/64.png" alt="${element.Constructor.nationality}"> 
              </td>
              <td style="min-width: 120px"> ${element.points} </td>
          </tr>`;
  }
  innerContent += "</tbody></table>";

  mainContent.innerHTML = innerContent;
}
