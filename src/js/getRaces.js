import { findCountryCodeByCountryName } from './countryCodes';
import { convertDateToString } from './dateConversionFunctions';
import { getDataFromStorage } from './localStorage';
import { mainContent } from './variables/documentElements';

export async function getRaces(lang, selectedYear, darkTheme) {
  const flagsApiProvider = 'https://flagcdn.com/';
  let isNextRaceFound = false;
  let innerContent = '';

  innerContent += `
    <table>
      <thead>
        <tr>`;
  if (lang === 'en') {
    innerContent += `
          <th> Round </th>
          <th> Country </th>
          <th> Grand Prix </th>
          <th> Qualifying </th>
          <th> Race </th>
          <th> Circuit </th>`;
  } else if (lang === 'pl') {
    innerContent += `
          <th> Runda </th>
          <th> Kraj </th>
          <th> Grand Prix </th>
          <th> Kwalifikacje </th>
          <th> Wyścig </th>
          <th> Nazwa toru </th>`;
  }
  innerContent += `
        </tr>
      </thead>
    <tbody>`;

  const data = await getDataFromStorage(
    selectedYear + 'Races',
    selectedYear,
    darkTheme
  );

  data['MRData'].RaceTable.Races.map((race) => {
    const raceDateISOString =
      race.date && race.time ? race.date + 'T' + race.time : '-';
    const raceDate = new Date(raceDateISOString);

    const qualifyingDateISOString =
      race.Qualifying && race.Qualifying.date && race.Qualifying.time
        ? race.Qualifying.date + 'T' + race.Qualifying.time
        : '-';
    const qualifyingDate = new Date(qualifyingDateISOString);

    if (raceDate > Date.now() && !isNextRaceFound) {
      innerContent += "<tr class='tr-next-race'>";
      isNextRaceFound = true;
    } else {
      darkTheme
        ? (innerContent += "<tr class='tr-dark'>")
        : (innerContent += '<tr>');
    }

    innerContent += `
        <td style="min-width: 20px;"> ${race.round ?? '-'} </td>
        <td title="${
          race.Circuit.Location.country ?? '-'
        }" style="min-width: 60px;"> 
          <img class="flag" 
            src="${flagsApiProvider}${findCountryCodeByCountryName(
      race.Circuit.Location.country ?? '-'
    )}.svg" 
            alt="${race.Circuit.Location.country ?? '-'}"/> 
        </td>
        <td style="min-width: 230px;" class="race-name"> 
          <a href="${race.url ?? '-'}" target="_blank"> 
            ${race.raceName ?? '-'}
          <a/>
        </td>
        <td style="min-width: 100px;" class="qualifying-date"> ${
          race.Qualifying ? convertDateToString(qualifyingDate) : '-'
        }</td>
        <td style="min-width: 110px;" class="race-date"> ${
          race.time ? convertDateToString(raceDate) : '-'
        }</td>
        <td style="min-width: 300px;"> ${race.Circuit.circuitName ?? '-'} </td>
      </tr>`;
  });
  innerContent += `
    </tbody>
  </table>`;

  mainContent.innerHTML = innerContent;
}
