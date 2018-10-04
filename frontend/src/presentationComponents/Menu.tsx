import * as React from "react";
import { Link } from "react-router-dom";
import { LoginContainer } from "../containerComponents/Login";
import "../css/Menu.css";

class Menu extends React.Component<
  { loggedIn: boolean },
  { display: boolean; loginRegistered: boolean; logoutRegistered: boolean }
> {
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

    // If this is not present the display button will have to be pressed twice to display logout.
    if (this.props.loggedIn && !this.state.loginRegistered) {
      this.resetDropdownState(true, false);
    }

    // If this is not present the display will have to be pressed twice after logging in and out.
    if (!this.props.loggedIn && !this.state.logoutRegistered) {
      this.resetDropdownState(false, true);
    }

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

  private resetDropdownState(login: boolean, logout: boolean) {
    this.setState({
      ...this.state,
      display: false,
      loginRegistered: login,
      logoutRegistered: logout
    });
  }
}

export default Menu;
