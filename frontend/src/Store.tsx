import rootReducer from "./reducers/Main";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

const initialState = {
  tournamentCreation: { tournaments: [] }
};
export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)
);
