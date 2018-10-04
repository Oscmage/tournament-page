import { connect } from "react-redux";
import { login, logout } from "./../actions/User";
import Login from "./../presentationComponents/Login";

const mapDispatchToProps = (dispatch: any) => ({
  onLogin: (username: string, password: string): Promise<boolean> => {
    return dispatch(login(username, password));
  },
  onLogout: () => {
    dispatch(logout());
  }
});

const mapStateToProps = (state: any) => {
  return {
    loggedIn: state.authentication.loggedIn,
    user: state.authentication.user
  };
};

export const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);