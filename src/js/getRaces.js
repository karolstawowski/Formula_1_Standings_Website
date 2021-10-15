import { getDataFromStorage } from "./localStorage";
import { findCountryCodeByCountryName } from "./countryCodes";
import { mainContent } from "./variables/documentElements";
import { displayLocaleDate, convertTZDToUTC } from "./dateConversionFunctions";
import { getDate } from "./dateConversionFunctions";

export async function getRaces(lang, selectedYear, darkTheme) {
  let nextRaceCounter = 0;
  let innerContent = "";
  innerContent += `<table><thead><tr>`;
  if (lang === "en") {
    innerContent += `
      <th> Round </th>
      <th> Country </th>
      <th> Grand Prix </th>
      <th> Date </th>
      <th> Time </th>
      <th> Circuit </th>`;
  } else if (lang === "pl") {
    innerContent += `
      <th> Runda </th>
      <th> Kraj </th>
      <th> Grand Prix </th>
      <th> Data </th>
      <th> Godzina </th>
      <th> Nazwa toru </th>`;
  }
  innerContent += `</tr></thead><tbody>`;
  const data = await getDataFromStorage(
    selectedYear + "Races",
    selectedYear,
    darkTheme
  );
  for (const element of data["MRData"].RaceTable.Races) {
    if (getDate(element.date) > Date.now() && nextRaceCounter < 1) {
      innerContent += "<tr class='tr-next-race'>";
      nextRaceCounter++;
    } else if (darkTheme) {
      innerContent += "<tr class='tr-dark'>";
    } else {
      innerContent += "<tr>";
    }
    innerContent += `
              <td style="min-width: 20px;"> ${element.round} </td>
              <td title="${
                element.Circuit.Location.country
              }" style="min-width: 60px;"> 
                <img class="flag" src="https://www.countryflags.io/${findCountryCodeByCountryName(
                  element.Circuit.Location.country
                )}/shiny/64.png" alt="${element.Circuit.Location.country}"> 
              </td>
              <td style="min-width: 230px;"> <a href="${
                element.url
              }" target="_blank"> ${element.raceName}<a/> </td>
              <td style="min-width: 110px;"> ${displayLocaleDate(
                element.date
              )} </td>
              <td style="min-width: 100px;"> ${
                element.time ? convertTZDToUTC(element.time) : "-"
              }</td>
              <td style="min-width: 300px;"> ${
                element.Circuit.circuitName
              } </td>
          </tr>`;
  }
  innerContent += "</tbody></table>";

  mainContent.innerHTML = innerContent;
}
