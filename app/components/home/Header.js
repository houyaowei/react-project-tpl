import React from "react";
import ReactDOM from "react-dom";
import { NavLink, Redirect } from "react-router-dom";
import history from "../../routes/history";
import createHistory from "history/createBrowserHistory";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions/index";

import "../../assets/css/header.css";
import logo from "../../assets/images/dashboard/logo.png";
import searchicon from "../../assets/images/dashboard/find-icon.png";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: localStorage.getItem("loggedIn"),
      showSearch: false,
      searchInput: "",
      words: []
    };
    this.onLogout = this.onLogout.bind(this);
  }

  onLogout() {
    localStorage.clear();
    this.props.actions.logout();
  }
  render() {
    return (
      <div className="header-top">
        <div className="header-logo">
          <span className="logo-title">西安华信智慧组件平台</span>
        </div>
        <div className="navul">
          <ul className="header-top-ul">
            {/* <li>
              <NavLink to="/home" exact>
                主页
              </NavLink>
            </li> */}
            <li>
              <NavLink to="/analysis" exact>
                统计分析
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="dropmeau">
          <ol>
            <li>
              <span className="dropli">
                <span className="header-manager" />
                管理员
                <span className="oper-icon" />
              </span>
              <ul className="meaulist">
                <li>用户信息</li>
                <li>我的收藏</li>
                <li>设置</li>
                <li onClick={this.onLogout}>退出</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    Logout: state.login
  };
};
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
