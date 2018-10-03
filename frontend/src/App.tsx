import "./App.css";
import "./css/Main.css";
import * as React from "react";
import { LoginContainer } from "./containerComponents/Login";
import { RegisterContainer } from "./containerComponents/Register";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <LoginContainer />
        <RegisterContainer />
      </div>
    );
  }
}

export default App;
