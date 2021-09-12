export function reverseDateOrder(date) {
  let year = date.slice(0, 4);
  let month = date.slice(5, 7);
  let day = date.slice(8, 10);
  let reversedDate;
  reversedDate = day + "-" + month + "-" + year;
  return reversedDate;
}

export function convertTZDToUTC(TZDTime) {
  return TZDTime.slice(0, -4) + " UTC";
}
