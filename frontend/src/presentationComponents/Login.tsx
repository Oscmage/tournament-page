import * as React from "react";
import LoginForm from "./LoginForm";
import { withRouter } from "react-router-dom";
import { IUser } from "../interface/State";
import "../css/Login.css";

class Login extends React.Component<
  {
    onLogin: (username: string, password: string) => Promise<boolean>;
    onLogout: () => void;
    loggedIn: boolean;
    user: IUser;
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
          <button onClick={this.props.onLogout}>Logout</button>
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
    return this.props.onLogin(username, password).then(() => {
      return Promise.resolve(true);
    });
  };
}

export default withRouter(Login);
