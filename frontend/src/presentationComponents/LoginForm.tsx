import * as React from "react";

class LoginForm extends React.Component<
  { onLogin: (username: string, password: string) => any },
  {
    username: string;
    password: string;
    errorMsg: string | undefined;
  }
> {
  public constructor(props: any) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errorMsg: undefined
    };
  }

  public render() {
    const { errorMsg } = this.state;

    const form = (
      <form onFocus={this.resetError} onSubmit={this.onLogin}>
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
          type="password"
          name="password"
        />
        <input type="submit" value="Submit" />
      </form>
    );

    const error = errorMsg ? <p>{errorMsg}</p> : "";

    return (
      <div className="LoginForm">
        <h2>Logga in</h2>
        {form}
        {error}
      </div>
    );
  }

  private onLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    this.props
      .onLogin(this.state.username, this.state.password)
      .catch((err: any) => {
        this.setState({ ...this.state, errorMsg: err });
      });
  };

  private resetError = () => {
    this.setState({ ...this.state, errorMsg: undefined });
  };

  private updateUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ username: event.target.value });
  };

  private updatePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ password: event.target.value });
  };
}

export default LoginForm;
