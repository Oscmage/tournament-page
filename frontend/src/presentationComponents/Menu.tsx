import * as React from "react";
import { Link } from "react-router-dom";
import { LoginContainer } from "../containerComponents/Login";
import "../css/Menu.css";

class Menu extends React.Component<
  { loggedIn: boolean },
  { display: boolean; loginRegistered: boolean; logoutRegistered: boolean }
> {
  public static getDerivedStateFromProps(props: any, state: any) {
    // Need to reset the dropdown state, otherwise the user have to click twice.
    if (props.loggedIn !== state.loggedIn) {
      return {
        ...props,
        display: false
      };
    }
    return null;
  }
  public constructor(props: any) {
    super(props);
    this.state = {
      display: false,
      loginRegistered: false,
      logoutRegistered: false
    };
  }

  public render() {
    const login = this.state.display ? <LoginContainer /> : "";

    const loginIcon = this.props.loggedIn ? (
      <div onClick={this.onLoginButton} className="Avatar" />
    ) : (
      <button onClick={this.onLoginButton}>Login</button>
    );
    return (
      <div className="Menu">
        <div className="Links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </div>
        <div className="LoginContainer">
          <div className="LoginButtonContainer">{loginIcon}</div>
          {login}
        </div>
      </div>
    );
  }

  private onLoginButton = () => {
    this.setState({ ...this.state, display: !this.state.display });
  };
}

export default Menu;
