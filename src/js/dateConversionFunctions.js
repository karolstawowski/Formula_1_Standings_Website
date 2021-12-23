export function getDate(date) {
  const year = date.slice(0, 4);
  const month = date.slice(5, 7);
  const day = date.slice(8, 10);
  return new Date(year, parseInt(month) - 1, day);
}

export function displayLocaleDate(date) {
  const year = date.slice(0, 4);
  const month = date.slice(5, 7);
  const day = date.slice(8, 10);
  const convertedDate = new Date(year, parseInt(month) - 1, day);
  return convertedDate.toLocaleDateString().indexOf(".") === 1
    ? 0 + convertedDate.toLocaleDateString()
    : convertedDate.toLocaleDateString();
}

export function convertTZDToUTC(TZDTime) {
  return TZDTime.slice(0, -4) + " UTC";
}
