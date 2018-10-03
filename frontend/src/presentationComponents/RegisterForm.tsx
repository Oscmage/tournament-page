import * as React from "react";
import User from "./../interface/User";

class RegisterForm extends React.Component<
  { onRegister: (user: User) => void },
  { user: User; rePassword: string; passwordMatch: boolean }
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
      },
      rePassword: "",
      passwordMatch: true
    };
  }

  public render() {
    const form = (
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
          onFocus={this.disableMatchError}
          type="password"
          name="password"
        />
        <input
          placeholder="Renter Password"
          value={this.state.rePassword}
          onChange={this.updateRePassword}
          onFocus={this.disableMatchError}
          type="password"
          name="renterpassword"
        />
        <input type="submit" value="Submit" />
      </form>
    );
    if (this.state.passwordMatch) {
      return (
        <div className="RegisterForm">
          <h2>Registrera dig</h2>
          {form}
        </div>
      );
    } else {
      return (
        <div className="RegisterForm">
          <h2>Eeey, regga då</h2>
          {form}
          <p>Password does not match.</p>
        </div>
      );
    }
  }

  private disableMatchError = () => {
    this.setState({
      ...this.state,
      passwordMatch: true
    });
  };

  private onRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { user, rePassword } = this.state;
    if (user.password === rePassword) {
      this.props.onRegister(user);
    } else {
      this.setState({
        ...this.state,
        passwordMatch: false
      });
    }
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

  private updateRePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      ...this.state,
      rePassword: event.target.value
    });
  };
}

export default RegisterForm;
