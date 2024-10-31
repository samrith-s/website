export function setCookie(name: string, value: string | number | boolean) {
  document.cookie = `${name}=${value};Path=/;Expires=Fri, 31 Dec 9999 23:59:59 GMT;`;
}

export function deleteCookie(name: string) {
  document.cookie = `${name}=;Path=/;Expires=Thu, 01 Jan 1970 00:00:00 GMT;`;
}
