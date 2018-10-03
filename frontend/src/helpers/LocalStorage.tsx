export function getUserFromStorage(): any | null {
  /**
   * Retrieves the "user" from localstorage if it exists, otherwise returns null
   */
  const userJson = localStorage.getItem("user");
  return userJson ? JSON.parse(userJson) : null;
}
