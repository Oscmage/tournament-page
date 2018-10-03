import "./App.css";
import * as React from "react";
import Login from "./presentationComponents/Login";
import { RegisterContainer } from "./containerComponents/Register";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Login />
        <RegisterContainer />
      </div>
    );
  }
}

export default App;
