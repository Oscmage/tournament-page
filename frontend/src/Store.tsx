import rootReducer from "./reducers/Main";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

export const store = createStore(rootReducer, applyMiddleware(thunk));
