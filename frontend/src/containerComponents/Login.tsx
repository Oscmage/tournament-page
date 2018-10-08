import { connect } from "react-redux";
import { login, logout } from "./../actions/User";
import Login from "./../presentationComponents/Login";
import { withRouter } from "react-router-dom";

const mapDispatchToProps = (dispatch: any) => ({
  onLogin: (
    username: string,
    password: string,
    history: any
  ): Promise<boolean> => {
    return dispatch(login(username, password, history));
  },
  onLogout: (history: any) => {
    dispatch(logout(history));
  }
});

const mapStateToProps = (state: any) => {
  return {
    loggedIn: state.authentication.loggedIn,
    user: state.authentication.user
  };
};

export const LoginContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Login) as any);
