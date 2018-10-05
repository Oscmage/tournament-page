import * as React from "react";
import { RegisterContainer } from "../containerComponents/Register";
import Card from "./Card";
import "../css/Home.css";

class FirstPage extends React.Component {
  public render() {
    return (
      <div className="FirstPage">
        <Card>
          <RegisterContainer />
        </Card>
      </div>
    );
  }
}

export default FirstPage;
