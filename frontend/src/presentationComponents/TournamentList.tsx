import * as React from "react";
import "../css/TournamentList.css";
import { ITournament } from "../interface/Tournament";

class TournamentList extends React.Component<
  { tournamentList: (ITournament)[] },
  {}
> {
  public render() {
    const tournamentList = this.props.tournamentList.map(tournament => (
      <li key={tournament._id}>{tournament.name}</li>
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
