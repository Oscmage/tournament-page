import * as React from "react";

class Register extends React.Component<
  { onRegister: any },
  { user: { firstName: string; lastName: string; email: string } }
> {
  public constructor(props: any) {
    super(props);
    this.state = { user: { firstName: "", lastName: "", email: "" } };
  }

  public render() {
    return (
      <div className="Register">
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
}

export default Register;
