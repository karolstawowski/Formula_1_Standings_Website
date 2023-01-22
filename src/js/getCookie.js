export function getCookie(name) {
  const cookies = document.cookie;
  const cookiesArray = cookies.replace(/ /g, '').split(';');
  const cookie = cookiesArray.find((cookie) => cookie.startsWith(name));

  if (!cookie) {
    return undefined;
  }

  return cookie.split('=')[1];
}
