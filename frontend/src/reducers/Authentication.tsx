import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from "./../actions/User";
import { getUserFromStorage } from "../helpers/LocalStorage";

const user = getUserFromStorage();
const initialState = user ? { loggedIn: true, user } : {};

export default function authentication(state = initialState, action: any) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case LOGIN_SUCCESS:
      return { ...state, loggedIn: true, user: action.user };
    case LOGIN_FAILURE:
      return {};
    case LOGOUT:
      return { ...state, loggedIn: false };
    default:
      return state;
  }
}
