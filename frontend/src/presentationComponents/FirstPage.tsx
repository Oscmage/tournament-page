import * as React from "react";
import { RegisterContainer } from "../containerComponents/Register";
import "../css/Home.css";

class FirstPage extends React.Component {
  public render() {
    return (
      <div className="FirstPage">
        <RegisterContainer />
      </div>
    );
  }
}

export default FirstPage;
