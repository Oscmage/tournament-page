import * as React from "react";
import { ITeam, IPlayer } from "../interface/Tournament";
import Card from "./Card";
import Player from "./Player";
import "../css/Team.css";

class Team extends React.Component<{ team: ITeam }, {}> {
  public render() {
    const { team } = this.props;
    const players = team.igns.map((player: IPlayer) => (
      <Player key={player._id} player={player} />
    ));
    return (
      <Card extraClassName="Team" key={team._id}>
        <h3>{team.teamName}</h3>
        {players}
      </Card>
    );
  }
}

export default Team;
