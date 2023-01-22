export function setCookie(name, value, hoursToExpire) {
  const d = new Date();
  d.setTime(d.getTime() + hoursToExpire * 60 * 60 * 1000);
  const expires = 'expires=' + d.toUTCString();
  document.cookie = name + '=' + value + ';' + expires + ';path=/';
}
