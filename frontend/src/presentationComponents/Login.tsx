import * as React from "react";
import LoginForm from "./LoginForm";
import { Redirect, withRouter } from "react-router-dom";
import { IUser } from "../interface/State";
import "../css/Login.css";

class Login extends React.Component<
  {
    onLogin: (username: string, password: string) => Promise<boolean>;
    onLogout: () => void;
    loggedIn: boolean;
    user: IUser;
  },
  { redirect: boolean }
> {
  public constructor(props: any) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  public render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <div className="Login">
        <LoginForm onLogin={this.onLogin} />
      </div>
    );
  }

  private onLogin = (username: string, password: string): any => {
    return this.props.onLogin(username, password).then(() => {
      this.setState({
        redirect: true
      });
    });
  };
}

export default withRouter(Login);
