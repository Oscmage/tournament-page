import * as React from "react";
import "../css/TournamentSnapshot.css";
import { ITournament } from "../interface/Tournament";
import Card from "./Card";
import Spinner from "./Spinner";

class TournamentSnapshot extends React.Component<
  { tournament: ITournament | undefined; history?: any },
  {}
> {
  public render() {
    const { tournament } = this.props;
    if (tournament) {
      return (
        <Card>
          <div className="TournamentSnapshot">
            <h3>{tournament.name}</h3>
            <p>Type: {tournament.type}</p>
            <p>Description: {tournament.description}</p>
            <p>Date: {tournament.date.format("YYYY-MM-DD, hh:mm")}</p>
            <p>
              Register deadline:{" "}
              {tournament.registerDeadline.format("YYYY-MM-DD, hh:mm")}
            </p>
            <p>Max amount of teams: {tournament.maxTeams}</p>
            <button onClick={this.onTournamentRegister}>Register</button>
          </div>
        </Card>
      );
    } else {
      return <Spinner />;
    }
  }

  public onTournamentRegister = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    // If we get here we will have a tournament but compiler can't know
    console.log(this.props.history);
    if (this.props.tournament) {
      const { _id } = this.props.tournament;
      this.props.history.push(`/tournaments/${_id}`);
    }
  };
}

export default TournamentSnapshot;
