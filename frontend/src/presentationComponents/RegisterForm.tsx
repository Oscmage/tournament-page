import * as React from "react";
import User from "./../interface/User";

class RegisterForm extends React.Component<
  { onRegister: (user: User) => void },
  {
    user: User;
    rePassword: string;
    passwordMatch: boolean;
    reEmail: string;
    emailMatch: boolean;
  }
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
      reEmail: "",
      emailMatch: true,
      passwordMatch: true
    };
  }

  public render() {
    const form = (
      <form onFocus={this.disableMatchError} onSubmit={this.onRegister}>
        <input
          required
          placeholder="First name"
          value={this.state.user.firstName}
          onChange={this.updateFirstName}
          type="text"
          name="fname"
          minLength={2}
          maxLength={100}
        />
        <input
          required
          placeholder="Last name"
          value={this.state.user.lastName}
          onChange={this.updateLastName}
          type="text"
          name="lname"
          minLength={2}
          maxLength={100}
        />
        <input
          required
          placeholder="Email"
          value={this.state.user.email}
          onChange={this.updateEmail}
          maxLength={100}
          type="email"
          name="email"
        />
        <input
          required
          placeholder="Renter Email"
          value={this.state.reEmail}
          onChange={this.updateReEmail}
          maxLength={100}
          type="email"
          name="renteremail"
        />
        <input
          required
          placeholder="Username"
          value={this.state.user.username}
          onChange={this.updateUsername}
          type="text"
          minLength={4}
          maxLength={30}
          name="username"
        />
        <input
          required
          placeholder="Password"
          value={this.state.user.password}
          onChange={this.updatePassword}
          type="password"
          minLength={6}
          maxLength={30}
          name="password"
        />
        <input
          required
          placeholder="Renter Password"
          value={this.state.rePassword}
          onChange={this.updateRePassword}
          onFocus={this.disableMatchError}
          type="password"
          minLength={6}
          maxLength={30}
          name="renterpassword"
        />
        <input required type="submit" value="Submit" />
      </form>
    );

    const passwordMatch = this.state.passwordMatch ? (
      ""
    ) : (
      <p>Password does not match.</p>
    );

    const emailMatch = this.state.emailMatch ? (
      ""
    ) : (
      <p>Email does not match.</p>
    );

    return (
      <div className="RegisterForm">
        <h2>Register</h2>
        <span>
          (Only if you want to host
          <br /> tournaments)
        </span>
        {form}
        {emailMatch}
        {passwordMatch}
      </div>
    );
  }

  private disableMatchError = () => {
    this.setState({
      ...this.state,
      passwordMatch: true,
      emailMatch: true
    });
  };

  private onRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { user, reEmail, rePassword } = this.state;

    const emailMatch = user.email === reEmail;
    if (!emailMatch) {
      this.setState({
        ...this.state,
        emailMatch: false
      });
    }

    const passwordMatch = user.password === rePassword;
    if (!passwordMatch) {
      this.setState({
        ...this.state,
        passwordMatch: false
      });
    }

    if (emailMatch && passwordMatch) {
      this.props.onRegister(user);
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

  private updateReEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      ...this.state,
      reEmail: event.target.value
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
