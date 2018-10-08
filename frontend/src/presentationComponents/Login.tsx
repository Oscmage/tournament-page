import * as React from "react";
import LoginForm from "./LoginForm";
import { withRouter } from "react-router-dom";
import { IUser } from "../interface/User";
import "../css/Login.css";

class Login extends React.Component<
  {
    onLogin: (
      username: string,
      password: string,
      history: any
    ) => Promise<boolean>;
    onLogout: (history: any) => void;
    loggedIn: boolean;
    user: IUser;
    history: any; // The history received from withRouter
  },
  {}
> {
  public constructor(props: any) {
    super(props);
    this.state = {};
  }

  public render() {
    if (this.props.user) {
      return (
        <div className="Logout">
          <button onClick={this.onLogout}>Logout</button>
        </div>
      );
    } else {
      return (
        <div className="Login">
          <LoginForm onLogin={this.onLogin} />
        </div>
      );
    }
  }

  private onLogin = (username: string, password: string): Promise<boolean> => {
    return this.props.onLogin(username, password, this.props.history);
  };

  private onLogout = () => {
    this.props.onLogout(this.props.history);
  };
}

export default withRouter(Login);
