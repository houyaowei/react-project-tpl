import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { message, Icon } from "antd";
import history from "../../routes/history";
import * as actions from "../../actions/index";

import "../../assets/css/header.css";
import logo from "../../assets/images/dashboard/iotlogo.png";
import manage from "../../assets/images/dashboard/manage.png";
import drop from "../../assets/images/dashboard/drop.png";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: sessionStorage.getItem("loggedIn"),
      showSearch: false,
      searchInput: "",
      words: [],
      userName: "",
      shouldFlush: true
    };
    this.currentUId = sessionStorage.getItem("uid");
    this.onLogout = this.onLogout.bind(this);
    this.sessionStorageUpdated = this.sessionStorageUpdated.bind(this);
  }

  componentWillMount() {
    const storage = JSON.parse(sessionStorage.getItem("userInfo"));
    if (storage) {
      this.setState({
        userName: storage.account
      });
    }
  }

  sessionStorageUpdated() {
    const { shouldFlush } = this.state;
    const uid = sessionStorage.getItem("uid");
    if (!uid || !this.currentUId) {
      return;
    }
    if (shouldFlush && uid !== this.currentUId) {
      message.warning("登录账号已发生改变，请刷新页面");
      this.setState({
        shouldFlush: false
      });
    }
  }

  componentDidMount() {
    window.addEventListener("storage", this.sessionStorageUpdated);
  }

  onLogout() {
    const { actions: operations } = this.props;
    sessionStorage.clear();
    operations.logout();
  }

  render() {
    const { userName } = this.state;
    if (!(sessionStorage.getItem("loginStatue") === 1)) {
      history.push("/iot/login");
    }
    return (
      <div className="header-top">
        <div className="header-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="header-right">
          <div className="dropmeau">
            <ol>
              <li>
                <span className="dropli">
                  <img className="app_img" src={manage} alt="logo" />
                  {userName}

                  <img className="header-drop" src={drop} alt="logo" />
                </span>
                <ul className="meaulist">
                  <li onClick={this.onLogout}>
                    <Icon type="poweroff" className="poweroff" />
                    退出
                  </li>
                </ul>
              </li>
            </ol>
          </div>
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
