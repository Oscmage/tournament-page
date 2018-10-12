import * as React from "react";
import "../css/RegisterTournament.css";
import { ITournament, ITeam } from "../interface/Tournament";
import { IRegisterTournament } from "../interface/Tournament";
import Team from "./Team";
import RegisterTournament from "./RegisterTournament";
import "../css/Tournament.css";

class Tournament extends React.Component<
  {
    tournament: ITournament;
    history?: any;
    register: (id: string, info: IRegisterTournament) => Promise<any>;
  },
  {}
> {
  public render() {
    const { tournament } = this.props;
    const teams = tournament.teams // Display teams that have confirmed.
      .filter((team: ITeam) => {
        return team.confirmed;
      })
      .map((team: ITeam) => <Team key={team._id} team={team} />);
    return (
      <div className="Tournament">
        <RegisterTournament
          tournament={tournament}
          register={this.props.register}
        />
        <div className="Teams">
          <h2>Registered and confirmed teams</h2>
          {teams}
        </div>
      </div>
    );
  }
}

export default Tournament;
