import User from "./../interface/User";
import { Registration } from "./../interface/State";
import { handleResponse } from "../helpers/Api";

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

function registerFailure() {
  return {
    type: Registration.FAILURE
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
      .then(handleResponse)
      .then(data => {
        dispatch(registerSuccessfull(data));
      })
      .catch(() => {
        dispatch(registerFailure());
      });
  };
}

function loginSuccesful(json: any) {
  const firstName = json.firstName;
  const lastName = json.lastName;
  const jwt = json.token;
  const username = json.username;
  const id = json._id;
  return {
    type: LOGIN_SUCCESS,
    user: {
      id,
      firstName,
      lastName,
      username,
      jwt
    }
  };
}

function requestLogin() {
  return {
    type: LOGIN_REQUEST
  };
}

export function login(username: string, password: string, history: any) {
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
        // login successful if there's a jwt token in the response
        if (user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem("user", JSON.stringify(user));
        }

        dispatch(loginSuccesful(user));
        history.push("/dashboard");
        return Promise.resolve(true);
      });
  };
}

export function logout(history: any) {
  return (dispatch: any) => {
    // remove user from local storage to log user out
    localStorage.removeItem("user");
    history.push("/"); // Redirect to home page when logout
    dispatch({ type: LOGOUT });
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
