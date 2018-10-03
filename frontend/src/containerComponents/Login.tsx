import { connect } from "react-redux";
import { login } from "./../actions/User";
import Login from "./../presentationComponents/Login";

const mapDispatchToProps = (dispatch: any) => ({
  onLogin: (username: string, password: string) => {
    dispatch(login(username, password));
  }
});

export const LoginContainer = connect(
  null,
  mapDispatchToProps
)(Login);
