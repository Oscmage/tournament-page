import "./App.css";
import "./css/Main.css";
import * as React from "react";
import Home from "./presentationComponents/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./presentationComponents/Dashboard";
import PrivateRoute from "./presentationComponents/PrivateRoute";
import { MenuContainer } from "./containerComponents/Menu";
import { RegisterContainer } from "./containerComponents/Register";
import TournamentContainer from "./containerComponents/Tournament";
import RegisterTournamentConfirm from "./containerComponents/RegisterTournamentConfirm";
import Settings from "./presentationComponents/Settings";

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div className="Page">
          <MenuContainer />
          <Switch>
            <Route exact path="/" component={Home} />

            <Route exact path="/register" component={RegisterContainer} />
            <Route
              exact
              path="/tournament/:tournamentdId/confirm/:teamId"
              component={RegisterTournamentConfirm}
            />
            <Route
              exact
              path="/tournament/:id"
              component={TournamentContainer}
            />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/settings" component={Settings} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
