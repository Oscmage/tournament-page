import * as React from "react";
import "../css/Dashboard.css";
import { CreateTournamentContainer } from "../containerComponents/CreateTournament";

class Dashboard extends React.Component {
  public render() {
    return (
      <div className="Dashboard Page">
        <CreateTournamentContainer />
      </div>
    );
  }
}

export default Dashboard;
