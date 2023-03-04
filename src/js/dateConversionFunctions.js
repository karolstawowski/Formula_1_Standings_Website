export const convertDateToString = (date) => {
  const day = date.getUTCDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  const hour = date.getHours().toString().padStart(2, '0');
  const minute = date.getMinutes().toString().padStart(2, '0');

  const outputDateString =
    day + '.' + month + '.' + year + ' ' + hour + ':' + minute + ' ';

  return outputDateString;
};
