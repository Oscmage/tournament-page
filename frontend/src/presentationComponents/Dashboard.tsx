import * as React from "react";
import "../css/Dashboard.css";
import { CreateTournamentContainer } from "../containerComponents/CreateTournament";

class Dashboard extends React.Component {
  public render() {
    return (
      <div className="Dashboard">
        <h1>Dashboard page!</h1>
        <CreateTournamentContainer />
      </div>
    );
  }
}

export default Dashboard;
