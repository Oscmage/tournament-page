import * as React from "react";
// import Card from "./Card";
import "../css/Home.css";
import TournamentListContainer from "../containerComponents/TournamentList";
import Card from "./Card";

class Home extends React.Component {
  public render() {
    return (
      <div className="Home">
        <Card>
          <TournamentListContainer />
        </Card>
      </div>
    );
  }
}

export default Home;
