import * as React from "react";
import User from "./../interface/User";

class RegisterForm extends React.Component<
  { onRegister: (user: User) => void },
  { user: User }
> {
  public constructor(props: any) {
    super(props);
    this.state = {
      user: {
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: ""
      }
    };
  }

  public render() {
    return (
      <div className="RegisterForm">
        <form onSubmit={this.onRegister}>
          <input
            placeholder="First name"
            value={this.state.user.firstName}
            onChange={this.updateFirstName}
            type="text"
            name="fname"
          />
          <input
            placeholder="Last name"
            value={this.state.user.lastName}
            onChange={this.updateLastName}
            type="text"
            name="lname"
          />
          <input
            placeholder="Email"
            value={this.state.user.email}
            onChange={this.updateEmail}
            type="text"
            name="email"
          />
          <input
            placeholder="Username"
            value={this.state.user.username}
            onChange={this.updateUsername}
            type="text"
            name="username"
          />
          <input
            placeholder="Password"
            value={this.state.user.password}
            onChange={this.updatePassword}
            type="text"
            name="password"
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

  private onRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.onRegister(this.state.user);
  };

  private updateFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      user: { ...this.state.user, firstName: event.target.value }
    });
  };

  private updateLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      user: { ...this.state.user, lastName: event.target.value }
    });
  };

  private updateEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      user: { ...this.state.user, email: event.target.value }
    });
  };

  private updateUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      user: { ...this.state.user, username: event.target.value }
    });
  };

  private updatePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      user: { ...this.state.user, password: event.target.value }
    });
  };
}

export default RegisterForm;
