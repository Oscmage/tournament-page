import "../css/Settings.css";
import * as React from "react";
import Card from "./Card";
import Input from "./Input";
import { Request } from "../interface/General";

class Settings extends React.Component<
  { update: (oldPassword: string, newPassword: string) => Promise<any> },
  {
    oldPassword: string;
    password: string;
    rePassword: string;
    updatePasswordStatus: Request;
    errorMsg: string;
  }
> {
  public constructor(props: any) {
    super(props);
    this.state = {
      oldPassword: "",
      password: "",
      rePassword: "",
      updatePasswordStatus: Request.NONE,
      errorMsg: ""
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
          <input type="submit" value="Update" />
          {this.requestStatus()}
          {this.getErrorMsg()}
        </form>
      </Card>
    );
  }

  private getErrorMsg = () => {
    const { errorMsg } = this.state;
    if (errorMsg !== "") {
      return <span>{errorMsg}</span>;
    }
    return "";
  };

  private requestStatus = () => {
    const status = this.state.updatePasswordStatus;
    if (status === Request.NONE) {
      return "";
    }

    if (status === Request.REQUEST) {
      return "Update requested";
    }

    if (status === Request.FAILURE) {
      return "Request Failed";
    }

    return "Update password success! ";
  };

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
    const { password, rePassword, oldPassword } = this.state;

    if (password !== rePassword) {
      this.setState({ ...this.state, errorMsg: "Password does not match" });
    } else {
      this.setState({ ...this.state, updatePasswordStatus: Request.REQUEST });

      this.props
        .update(oldPassword, password)
        .then(() => {
          this.setState({
            ...this.state,
            updatePasswordStatus: Request.SUCCESS
          });
        })
        .catch((error: string) => {
          this.setState({
            ...this.state,
            updatePasswordStatus: Request.FAILURE,
            errorMsg: error
          });
        });
    }
  };

  private resetPasswordStatus = () => {
    this.setState({
      ...this.state,
      updatePasswordStatus: Request.NONE,
      errorMsg: ""
    });
  };
}

export default Settings;
