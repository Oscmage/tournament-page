import * as React from "react";
import "../css/Dashboard.css";
import CreateTournament from "./CreateTournament";

class Dashboard extends React.Component {
  public render() {
    return (
      <div className="Dashboard">
        <h1>Dashboard page!</h1>
        <CreateTournament />
      </div>
    );
  }
}

export default Dashboard;
