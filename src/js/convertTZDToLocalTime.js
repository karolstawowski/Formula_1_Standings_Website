// There was an attempt to display a race time based on local time and daylight savings time...

export function convertTZDToLocalTime(TZDTime) {
  let localTime = new Date();
  let UTCTime = TZDTime.slice(0, -1);

  const currentTimeZoneOffsetInHours =
    (localTime.getTimezoneOffset() / 60) * -1;

  // if offset is a full hour
  if (currentTimeZoneOffsetInHours % 1 == 0) {
    let UTCHourWithOffset =
      currentTimeZoneOffsetInHours +
      parseInt(UTCTime.substr(0, UTCTime.indexOf(":")));
    return UTCHourWithOffset.toString() + ":00";
  }
  // if offset is NOT a full hour
  else {
    let hours = Math.trunc(currentTimeZoneOffsetInHours);
    let minutes = (currentTimeZoneOffsetInHours % 1) * 60;
    let UTCHourWithOffset =
      hours + parseInt(UTCTime.substr(0, UTCTime.indexOf(":")));
    let UTCMinuteWithOffset =
      minutes + parseInt(UTCTime.substr(UTCTime.indexOf(":") + 1, 2));
    return UTCHourWithOffset + ":" + UTCMinuteWithOffset;
  }
}
