import * as React from "react";
import LoginForm from "./LoginForm";
import { IUser } from "../interface/State";
import "../css/Login.css";

class Login extends React.Component<
  {
    onLogin: (username: string, password: string) => void;
    onLogout: () => void;
    loggedIn: boolean;
    user: IUser;
  },
  {}
> {
  public render() {
    const { loggedIn, onLogout, onLogin, user } = this.props;
    if (loggedIn) {
      if (user) {
        return (
          <div className="Login">
            <p>
              Welcome {user.firstName} {user.lastName} or should I call you{" "}
              {user.username}. You have user id {user.id} and token: {user.jwt}
            </p>
            <button onClick={onLogout}>Logout</button>
          </div>
        );
      } else {
        return (
          <div className="Login">
            <button onClick={onLogout}>Logout</button>
          </div>
        );
      }
    } else {
      return (
        <div className="Login">
          <LoginForm onLogin={onLogin} />
        </div>
      );
    }
  }
}

export default Login;
