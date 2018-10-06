import * as React from "react";
import { RegisterContainer } from "../containerComponents/Register";
import Card from "./Card";
import "../css/Home.css";

class Home extends React.Component {
  public render() {
    return (
      <div className="Home">
        <h1>Home page</h1>
        <Card>
          <RegisterContainer />
        </Card>
      </div>
    );
  }
}

export default Home;
