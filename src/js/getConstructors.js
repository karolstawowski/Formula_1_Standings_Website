import { getDataFromStorage } from './localStorage';
import { mainContent } from './variables/documentElements';
import {
  findCountryNameByNationality,
  findCountryCodeByNationality,
} from './countryCodes';

export async function getConstructors(lang, selectedYear, darkTheme) {
  const flagsApiProvider = 'https://flagcdn.com/';
  let innerContent = '';

  innerContent += `
    <table>
      <thead>
        <tr>`;
  if (lang === 'en') {
    innerContent += `
          <th> Position </th>
          <th> Constructor </th>
          <th> Country </th>
          <th> Points </th>`;
  } else if (lang === 'pl') {
    innerContent += `<th> Pozycja </th>
          <th> Zespół </th>
          <th> Kraj </th>
          <th> Ilość punktów </th>`;
  }
  innerContent += `
        </tr>
      </thead>
    <tbody>`;

  const data = await getDataFromStorage(
    selectedYear + 'Constructors',
    selectedYear + '/constructorStandings',
    darkTheme
  );

  for (const element of data['MRData'].StandingsTable.StandingsLists[0]
    .ConstructorStandings) {
    darkTheme
      ? (innerContent += "<tr class='tr-dark'>")
      : (innerContent += '<tr>');
    innerContent += `
        <td> ${element.position ?? '-'} </td>
        <td style="min-width: 120px" class="emphasise"> 
          <a href="${element.Constructor.url ?? '-'}" target="_blank"> 
            ${element.Constructor.name ?? '-'} 
          </a> 
        </td>
        <td title="${findCountryNameByNationality(
          element.Constructor.nationality ?? '-'
        )}">  
        <img class="flag" 
          src="${flagsApiProvider}${findCountryCodeByNationality(
      element.Constructor.nationality ?? '-'
    )}.svg" 
          alt="${element.Constructor.nationality ?? '-'}"> 
        </td>
        <td style="min-width: 120px" class="emphasise"> ${
          element.points ?? '-'
        } </td>
      </tr>`;
  }
  innerContent += `
    </tbody>
  </table>`;

  mainContent.innerHTML = innerContent;
}
