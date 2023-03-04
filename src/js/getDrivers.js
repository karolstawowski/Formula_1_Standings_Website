import { getDataFromStorage } from './localStorage';
import {
  findCountryNameByNationality,
  findCountryCodeByNationality,
} from './countryCodes';
import { mainContent } from './variables/documentElements';

export async function getDrivers(lang, selectedYear, darkTheme) {
  const flagsApiProvider = 'https://flagcdn.com/';
  let innerContent = '';

  innerContent += `
    <table>
      <thead>
        <tr>`;
  if (lang === 'en') {
    innerContent += `
          <th> Position </th>
          <th> Driver </th>
          <th> Number </th>
          <th> Country </th>
          <th> Team </th>
          <th> Points </th>`;
  } else if (lang === 'pl') {
    innerContent += `
          <th> Pozycja </th>
          <th> Kierowca </th>
          <th> Numer </th>
          <th> Kraj </th>
          <th> Zespół </th>
          <th> Ilość punktów </th>`;
  }
  innerContent += `
        </tr>
      </thead>
    <tbody>`;

  const data = await getDataFromStorage(
    selectedYear + 'Drivers',
    selectedYear + '/driverStandings',
    darkTheme
  );

  for (const element of data['MRData'].StandingsTable.StandingsLists[0]
    .DriverStandings) {
    darkTheme
      ? (innerContent += "<tr class='tr-dark'>")
      : (innerContent += '<tr>');
    innerContent += `
        <td> ${element.position ?? '-'} </td>
        <td style="min-width: 180px;" class="emphasise"> 
          <a href="${element.Driver.url ?? ''}" target="_blank"> 
            ${element.Driver.givenName ?? '-'} ${
      element.Driver.familyName ?? '-'
    } 
          </a> 
        </td>
        <td> ${element.Driver.permanentNumber ?? '-'} </td>
        <td title="${findCountryNameByNationality(
          element.Driver.nationality
        )}" style="min-width: 60px;"> 
          <img class="flag" 
            src="${flagsApiProvider}${findCountryCodeByNationality(
      element.Driver.nationality ?? '-'
    )}.svg" 
            alt="${element.Driver.nationality ?? '-'}"> 
        </td>
        <td style="min-width: 120px;"> ${
          element?.Constructors[0]?.name ?? '-'
        } </td>
        <td style="min-width: 130px;" class="emphasise"> ${
          element.points ?? '-'
        } </td>
      </tr>`;
  }
  innerContent += `
    </tbody>
  </table>`;

  mainContent.innerHTML = innerContent;
}
