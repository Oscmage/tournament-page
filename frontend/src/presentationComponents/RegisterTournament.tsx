import * as React from "react";
import "../css/RegisterTournament.css";
import { ITournament, tournamentType } from "../interface/Tournament";
import Card from "./Card";
import Input from "./Input";
import { IRegisterTournament } from "../interface/Tournament";

class RegisterTournament extends React.Component<
  {
    tournament: ITournament;
    history?: any;
    register: (id: string, info: IRegisterTournament) => any;
  },
  {
    teamName: string;
    email: string;
    igns: { name: string }[];
  }
> {
  public constructor(props: any) {
    super(props);
    const { tournament } = this.props;
    const igns = this.getIgnsInitialState(tournament);
    this.state = {
      teamName: "",
      email: "",
      igns
    };
  }

  public render() {
    const { tournament } = this.props;
    const { igns } = this.state;
    const inputs = igns.map((_, idx) => (
      <Input
        key={idx}
        required={true}
        value={this.state.igns[idx].name}
        onChange={this.updateIgn}
        type="text"
        name={idx + ""}
        description={"IGN " + (idx + 1)}
      />
    ));
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
            <Input
              required={true}
              value={this.state.teamName}
              onChange={this.updateTeamName}
              type="text"
              name="teamName"
              description="Team Name"
            />
            <Input
              required={true}
              value={this.state.email}
              onChange={this.updateEmail}
              type="email"
              name="email"
              description="Email"
            />
            {inputs}

            <input type="submit" value="Register your team!" />
          </form>
        </Card>
      </div>
    );
  }

  private getIgnsInitialState = (tournament: ITournament) => {
    let igns = [];
    if (tournament.type === tournamentType.SOLO) {
      igns = [{ name: "" }];
    } else if (tournament.type === tournamentType.DUO) {
      igns = [{ name: "" }, { name: "" }];
    } else {
      igns = [{ name: "" }, { name: "" }, { name: "" }, { name: "" }];
    }
    return igns;
  };

  private updateTeamName = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      ...this.state,
      teamName: event.target.value
    });
  };

  private updateEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      ...this.state,
      email: event.target.value
    });
  };

  private updateIgn = (event: React.ChangeEvent<HTMLInputElement>) => {
    const id = parseInt(event.target.name, 10);
    this.setState({
      ...this.state,
      igns: this.state.igns.map((obj, idx) => {
        if (id !== idx) {
          return obj;
        }
        return { ...obj, name: event.target.value };
      })
    });
  };

  private onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { tournament, register } = this.props;
    const { teamName, email, igns } = this.state;
    const info: IRegisterTournament = {
      teamName,
      email,
      igns
    };
    register(tournament._id, info)
      .then(() => {
        console.log("Success");
      })
      .catch(() => {
        console.log("Fail");
      });
  };
}

export default RegisterTournament;
