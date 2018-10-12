import * as React from "react";
import { IPlayer } from "../interface/Tournament";

class Player extends React.Component<{ player: IPlayer }, {}> {
  public render() {
    const { player } = this.props;

    return <div className="Player">{player.name}</div>;
  }
}

export default Player;
