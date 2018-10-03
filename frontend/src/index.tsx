import { createStore, applyMiddleware } from "redux";
import * as React from "react";
import * as ReactDOM from "react-dom";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import rootReducer from "./reducers/Main";
import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

export const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
