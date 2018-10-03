import * as React from "react";
import LoginForm from "./LoginForm";

class Login extends React.Component<
  { onLogin: (username: string, password: string) => void },
  {}
> {
  public render() {
    return (
      <div className="Login">
        <LoginForm onLogin={this.props.onLogin} />
      </div>
    );
  }
}

export default Login;
