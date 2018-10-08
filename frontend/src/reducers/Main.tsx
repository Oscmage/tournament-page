import { combineReducers } from "redux";
import registration from "./Registration";
import authentication from "./Authentication";
import tournamentCreation from "./TournamentCreation";

const rootReducer = combineReducers({
  registration,
  authentication,
  tournamentCreation
});

export default rootReducer;
