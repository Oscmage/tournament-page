import * as React from "react";
import "../css/TournamentList.css";
import { ITournament } from "../interface/Tournament";

class TournamentList extends React.Component<
  { tournamentList: (ITournament)[] },
  {}
> {
  public render() {
    const tournamentList = this.props.tournamentList.map(tournament => (
      <li key={tournament._id}>
        <h3>{tournament.name}</h3>
        <p>Description: {tournament.description}</p>
        <p>Date: {tournament.date.format("YYYY-MM-DD, hh:mm")}</p>
        <p>
          Register deadline:{" "}
          {tournament.registerDeadline.format("YYYY-MM-DD, hh:mm")}
        </p>
        <p>Max amount of teams: {tournament.maxTeams}</p>
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
