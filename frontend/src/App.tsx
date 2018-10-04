import "./App.css";
import "./css/Main.css";
import * as React from "react";
import FirstPage from "./presentationComponents/FirstPage";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Dashboard from "./presentationComponents/Dashboard";
import PrivateRoute from "./presentationComponents/PrivateRoute";

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div>
          <div className="Menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </div>
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
