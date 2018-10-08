import { combineReducers } from "redux";
import registration from "./Registration";
import authentication from "./Authentication";
import tournament from "./Tournament";
import tournaments from "./Tournaments";

const rootReducer = combineReducers({
  registration,
  authentication,
  tournament,
  tournaments
});

export default rootReducer;
