import * as React from "react";
import { LoginContainer } from "../containerComponents/Login";
import { RegisterContainer } from "../containerComponents/Register";

class FirstPage extends React.Component {
  public render() {
    return (
      <div className="FirstPage">
        <LoginContainer />
        <RegisterContainer />
      </div>
    );
  }
}

export default FirstPage;
