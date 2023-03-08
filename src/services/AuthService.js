export function userIsAuthenticated() {
  return localStorage.getItem("token");
}

export function logoutUser() {
  localStorage.removeItem("token");
}
