export function displayLocaleDate(date) {
  let year = date.slice(0, 4);
  let month = date.slice(5, 7);
  let day = date.slice(8, 10);
  let convertedDate = new Date(year, parseInt(month) - 1, day);
  return convertedDate.toLocaleDateString().indexOf(".") === 1
    ? 0 + convertedDate.toLocaleDateString()
    : convertedDate.toLocaleDateString();
}

export function convertTZDToUTC(TZDTime) {
  return TZDTime.slice(0, -4) + " UTC";
}
