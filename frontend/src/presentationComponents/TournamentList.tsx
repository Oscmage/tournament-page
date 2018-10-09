import * as React from "react";
import "../css/TournamentList.css";
import { ITournament } from "../interface/Tournament";
import TournamentSnapshot from "./TournamentSnapshot";

class TournamentList extends React.Component<
  { tournamentList: (ITournament)[]; history?: any },
  {}
> {
  public render() {
    const tournamentList = this.props.tournamentList.map(tournament => (
      <li key={tournament._id}>
        <TournamentSnapshot
          tournament={tournament}
          history={this.props.history}
        />
      </li>
    ));

    return (
      <div className="TournamentList">
        <h2>Available Tournaments</h2>
        <ul>{tournamentList}</ul>
      </div>
    );
  }
}

export default TournamentList;
