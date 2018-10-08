import * as React from "react";
import { IRegisterUser, Registration } from "./../interface/User";
import RegisterForm from "./RegisterForm";
import "../css/Register.css";
import Card from "./Card";

class Register extends React.Component<
  {
    onRegister: (user: IRegisterUser) => void;
    registration: Registration;
  },
  {}
> {
  public constructor(props: any) {
    super(props);
  }

  public render() {
    const reg = this.props.registration;
    if (!reg) {
      return (
        <div className="Register">
          <Card>
            <RegisterForm onRegister={this.props.onRegister} />
          </Card>
        </div>
      );
    } else {
      if (reg === Registration.REQUEST) {
        // TODO (DISPLAY LOADING SPINNER)
        return <div>SENT REQUEST TO CREATE USER! HOPE IT WORKS!</div>;
      }
      if (reg === Registration.SUCCESS) {
        // TODO (DISPLAY CREATED USER COMPONENT)
        return <div>LETS GO, WE CREATED A USER!</div>;
      }
      // TODO (DISPLAY ERROR FOR CREATING USER)
      return <div>SHIET, SOMETHING WENT WRONG</div>;
    }
  }
}

export default Register;
