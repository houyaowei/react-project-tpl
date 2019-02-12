import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Login from "./Login";
import * as actions from "../../actions/index";

const mapStateToProps = state => {
  return {
    loginData: state.login.get("loginData"),
    Login: state.login.get("logininfo")
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);
