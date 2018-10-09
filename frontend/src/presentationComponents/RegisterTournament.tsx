import * as React from "react";
import "../css/RegisterTournament.css";
import { ITournament } from "../interface/Tournament";
import Spinner from "./Spinner";
import Card from "./Card";

class RegisterTournament extends React.Component<
  { tournament: ITournament | undefined; history?: any },
  {}
> {
  public render() {
    const { tournament } = this.props;
    if (tournament) {
      return (
        <div className="RegisterTournament">
          <Card>
            <h2>{tournament.name}</h2>
            <p>Description: {tournament.description}</p>
            <p>Date: {tournament.date.format("YYYY-MM-DD, hh:mm")}</p>
            <p>
              Register deadline:{" "}
              {tournament.registerDeadline.format("YYYY-MM-DD, hh:mm")}
            </p>
            <p>Max amount of teams: {tournament.maxTeams}</p>
            <form onSubmit={this.onFormSubmit}>
              <input placeholder="Team name" />
              <input placeholder="Email" />
              <input placeholder="IGN player 1" />
              <input placeholder="IGN player 2" />
              <input placeholder="Backup Player IGN " />
              <input type="submit" value="Register your team!" />
            </form>
          </Card>
        </div>
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

  public onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
}

export default RegisterTournament;
