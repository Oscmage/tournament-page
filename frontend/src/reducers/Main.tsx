import { combineReducers } from "redux";
import registration from "./Registration";
import authentication from "./Authentication";

const rootReducer = combineReducers({ registration, authentication });

export default rootReducer;
