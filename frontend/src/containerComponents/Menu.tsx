import { connect } from "react-redux";
import Menu from "./../presentationComponents/Menu";

const mapStateToProps = (state: any) => {
  return {
    loggedIn: state.authentication.loggedIn
  };
};

export const MenuContainer = connect(mapStateToProps)(Menu);
