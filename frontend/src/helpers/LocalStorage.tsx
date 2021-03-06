export function getUserFromStorage(): any | null {
  /**
   * Retrieves the "user" from localstorage if it exists, otherwise returns null
   */
  const userJson = localStorage.getItem("user");
  const user = userJson ? JSON.parse(userJson) : null;
  if (user) {
    // Change id_ to id
    user.id = user._id;
    delete user._id;
  }

  return user;
}
