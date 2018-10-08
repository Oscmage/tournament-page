import { getUserFromStorage } from "./LocalStorage";

export function authHeader() {
  // return authorization header with jwt token
  const user = getUserFromStorage();

  if (user && user.token) {
    return { Authorization: "Bearer " + user.token };
  } else {
    // This will obviously fail
    return { Authorization: "Bearer " + "None" };
  }
}
