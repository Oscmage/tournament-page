export function getUserFromStorage(): any | null {
  /**
   * Retrieves the "user" from localstorage if it exists, otherwise returns null
   */
  const userJson = localStorage.getItem("user");
  const user = userJson ? JSON.parse(userJson) : null;
  // Change id_ to id
  user.id = user._id;
  delete user._id;
  // Change token to jwt
  user.jwt = user.token;
  delete user.token;

  return user;
}
