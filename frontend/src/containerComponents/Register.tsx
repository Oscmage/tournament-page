import { connect } from "react-redux";
import IRegisterUser from "./../interface/User";
import { register } from "./../actions/User";
import Register from "./../presentationComponents/Register";

const mapDispatchToProps = (dispatch: any) => ({
  onRegister: (user: IRegisterUser) => {
    dispatch(register(user));
  }
});

const mapStateToProp = (state: any) => {
  return state.registration === {} ? undefined : state.registration;
};

export const RegisterContainer = connect(
  mapStateToProp,
  mapDispatchToProps
)(Register);
