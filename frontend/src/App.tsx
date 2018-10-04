import "./App.css";
import "./css/Main.css";
import * as React from "react";
import FirstPage from "./presentationComponents/FirstPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./presentationComponents/Dashboard";
import PrivateRoute from "./presentationComponents/PrivateRoute";
import { MenuContainer } from "./containerComponents/Menu";

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div>
          <MenuContainer />
          <Switch>
            <Route exact path="/" component={FirstPage} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
