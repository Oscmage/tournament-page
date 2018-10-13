import "../css/Settings.css";
import * as React from "react";
import Card from "./Card";
import Input from "./Input";
import { Request } from "../interface/General";

class Settings extends React.Component<
  {},
  {
    oldPassword: string;
    password: string;
    rePassword: string;
    updatePasswordStatus: Request;
  }
> {
  public constructor(props: any) {
    super(props);
    this.state = {
      oldPassword: "",
      password: "",
      rePassword: "",
      updatePasswordStatus: Request.NONE
    };
  }

  public render() {
    return (
      <Card extraClassName="Settings">
        <form className="Password" onSubmit={this.onSubmitUpdatePassword}>
          <Input
            name="Old Password"
            type="password"
            description="Old Password"
            required={true}
            onChange={this.onUpdateOldPassword}
            value={this.state.oldPassword}
          />
          <Input
            name="Password"
            type="password"
            description="New Password"
            required={true}
            onChange={this.onUpdatePassword}
            value={this.state.password}
          />
          <Input
            name="Reenter password"
            type="password"
            description="Reenter New Password"
            required={true}
            onChange={this.onUpdateRePassword}
            value={this.state.rePassword}
          />
          <input type="submit" />
        </form>
      </Card>
    );
  }

  private onUpdateOldPassword = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    this.resetPasswordStatus();
    this.setState({ ...this.state, oldPassword: event.target.value });
  };

  private onUpdatePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.resetPasswordStatus();
    this.setState({ ...this.state, password: event.target.value });
  };

  private onUpdateRePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.resetPasswordStatus();
    this.setState({ ...this.state, rePassword: event.target.value });
  };

  private onSubmitUpdatePassword = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    // Send put request to backend for updating password
  };

  private resetPasswordStatus = () => {
    this.setState({ ...this.state, updatePasswordStatus: Request.NONE });
  };
}

export default Settings;
