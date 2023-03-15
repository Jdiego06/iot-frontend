export function getAuthenticatedUser() {
  const user = localStorage.getItem("authUser");
  if (user !== null) {
    return JSON.parse(user);
  }

  return null;
}

export function setAuthenticatedUser(user) {
  localStorage.setItem("authUser", JSON.stringify(user));
}

export function removeAuthenticatedUser() {
  localStorage.removeItem("authUser");
}
