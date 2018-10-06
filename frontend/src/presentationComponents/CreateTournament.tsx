import * as React from "react";
import "../css/CreateTournament.css";
import Card from "./Card";
import Input from "./Input";
import ICreateTournament from "../interface/Tournament";

class CreateTournament extends React.Component<
  { onCreate: (tournamentParams: ICreateTournament) => void },
  {}
> {
  public render() {
    return (
      <div className="CreateTournament">
        <Card>
          <div className="CreateTournamentInner">
            <h2>Create new tournament!</h2>
            <form onSubmit={this.onSubmit}>
              <Input
                name="name"
                description="Name of Tournament"
                type="text"
                required={false}
                minLength={4}
              />
              <div className="Input">
                <span>Description</span>
                <textarea name="description" />
              </div>
              <Input
                name="date"
                description="Date (When will it take place)"
                type="date"
                required={false}
              />
              <Input
                name="date"
                description="Time"
                type="time"
                required={false}
              />
              <Input
                name="maxTeams"
                description="Max amount of teams"
                type="number"
                required={false}
              />
              <Input
                name="registerDeadline"
                description="Date to last register"
                type="date"
                required={false}
              />
              <Input
                name="registerDeadline"
                description="Time to last register"
                type="time"
                required={false}
              />
              <input type="submit" />
            </form>
          </div>
        </Card>
      </div>
    );
  }

  private onSubmit = () => {
    const tournamentParams: ICreateTournament = {
      creator: "oscmage",
      name: "test",
      description: "Test",
      date: new Date(),
      registerDeadline: new Date(),
      maxTeams: 10,
      admin: [],
      available: true
    };
    this.props.onCreate(tournamentParams);
  };
}

export default CreateTournament;
