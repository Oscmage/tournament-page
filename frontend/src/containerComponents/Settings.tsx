import { connect } from "react-redux";
import { update } from "./../actions/User";
import Settings from "../presentationComponents/Settings";
import { withRouter } from "react-router-dom";

const mapDispatchToProps = (dispatch: any) => ({
  update: (oldPassword: string, newPassword: string) => {
    return dispatch(update(oldPassword, newPassword));
  }
});

const mapStateToProps = (state: any) => {
  return {};
};

export const SettingsContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings) as any);
