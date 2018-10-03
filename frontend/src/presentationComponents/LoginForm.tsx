import * as React from "react";

class LoginForm extends React.Component<
  { onLogin: (username: string, password: string) => void },
  { username: string; password: string }
> {
  public constructor(props: any) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  public render() {
    return (
      <div className="LoginForm">
        <h2>Logga in</h2>
        <form onSubmit={this.onLogin}>
          <input
            placeholder="Username"
            value={this.state.username}
            onChange={this.updateUsername}
            type="text"
            name="username"
          />
          <input
            placeholder="Password"
            value={this.state.password}
            onChange={this.updatePassword}
            type="text"
            name="password"
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

  private onLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.onLogin(this.state.username, this.state.password);
  };

  private updateUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ username: event.target.value });
  };

  private updatePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ password: event.target.value });
  };
}

export default LoginForm;
