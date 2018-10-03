import User from "./../interface/User";
import { Registration } from "./../interface/State";

function requestRegister(user: User): any {
  return {
    type: Registration.REQUEST,
    user
  };
}

function registerSuccessfull(json: any) {
  return {
    type: Registration.SUCCESS,
    user: json
  };
}
// Register
export function register(user: User): any {
  // Try to register user
  return (dispatch: any) => {
    dispatch(requestRegister);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    };
    return fetch("/users/register", requestOptions)
      .then(handleResponse) // Add dispatch(registerFailure())
      .then(data => {
        dispatch(registerSuccessfull(data));
      });
  };
}

function loginSuccesful(json: any) {
  return {
    type: LOGIN_SUCCESS,
    user: json
  };
}

function requestLogin() {
  return {
    type: LOGIN_REQUEST
  };
}

export function login(username: string, password: string) {
  // Try to login
  return (dispatch: any) => {
    dispatch(requestLogin());
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    };
    return fetch("/users/authenticate", requestOptions)
      .then(handleResponse)
      .then(user => {
        dispatch(loginSuccesful(user));
        // login successful if there's a jwt token in the response
        if (user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem("user", JSON.stringify(user));
        }

        return user;
      });
  };
}

// Login
export const LOGIN_REQUEST = "USERS_LOGIN_REQUEST";
export const LOGIN_SUCCESS = "USERS_LOGIN_SUCCESS";
export const LOGIN_FAILURE = "USERS_LOGIN_FAILURE";

// Logout
export const LOGOUT = "USERS_LOGOUT";

// Get all
export const GETALL_REQUEST = "USERS_GETALL_REQUEST";
export const GETALL_SUCCESS = "USERS_GETALL_SUCCESS";
export const GETALL_FAILURE = "USERS_GETALL_FAILURE";

// Delete
export const DELETE_REQUEST = "USERS_DELETE_REQUEST";
export const DELETE_SUCCESS = "USERS_DELETE_SUCCESS";
export const DELETE_FAILURE = "USERS_DELETE_FAILURE";

function handleResponse(response: any) {
  return response.text().then((text: string) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        // TODO (LOGOUT)
        location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
