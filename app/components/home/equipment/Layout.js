import React from "react";
import { Switch, NavLink, Route } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Layout, Menu } from "antd";

import UserManage from "../sysadmin/UserManage";
import Rolemanage from "../sysadmin/Rolemanage";
import AuthorityManage from "../sysadmin/AuthorityManage";
import Nothing from "./Nothing";
import histroy from "../../../routes/history";
import usermanage from "../../../assets/images/dashboard/uermanage.png";
import rolemanage from "../../../assets/images/dashboard/rolemanage.png";
import authormanage from "../../../assets/images/dashboard/authormanage.png";
import * as actions from "../../../actions/index";
import "./styles/layout.css";
import "./styles/excel.css";

const { Content, Sider } = Layout;

class LayoutComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      menuKey: 0,
      isShow: true,
      menuList: [],
      menuDataList: [],
      isAdmin: ""
    };
    this.menuKey = 0;
    this.onCollapse = this.onCollapse.bind(this);
    this.getData = this.getData.bind(this);

    this.routerMapper = {
      "11": "/iot/UserManage",
      "12": "/iot/Rolemanage",
      "13": "/iot/AuthorityManage"
    };
  }

  componentWillMount() {
    const { location } = this.props;
    switch (location.pathname) {
      case "/iot/UserManage":
        this.menuKey = "11";
        break;
      case "/iot/Rolemanage":
        this.menuKey = "12";
        break;
      case "/iot/AuthorityManage":
        this.menuKey = "13";
        break;

      case "/iot/Nothing":
        this.menuKey = "00";
        break;
      default:
        this.menuKey = "11";
        break;
    }

    const menuData = JSON.parse(sessionStorage.getItem("loginData"));
    const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
    const isAdmin = userInfo.isadmin;

    if (menuData.length) {
      const defaultMenu = this.menuKey === 0 ? (isAdmin ? "8" : menuData[0].index) : this.menuKey;

      this.setState({
        isShow: true,
        menuKey: defaultMenu
      });
      histroy.push(this.routerMapper[defaultMenu]);
    } else {
      const defaultMenu = this.menuKey === 0 ? "00" : this.menuKey;
      this.setState({
        isShow: false,
        menuKey: defaultMenu
      });
      histroy.push(this.routerMapper[defaultMenu]);
    }
  }

  componentDidMount() {
    const { loginData } = this.props;
    const menuData = JSON.parse(sessionStorage.getItem("loginData"));
    const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
    const isAdmin = userInfo.isadmin;
    let menuListDataList = [];
    if (loginData.data) {
      menuListDataList = loginData.data;
    }

    const menuList = [];
    for (let i = 0; i < menuData.length; i++) {
      menuList.push(menuData[i].url);
    }
    this.setState({
      menuList,
      isAdmin,
      menuListDataList
    });
  }

  onCollapse(collapsed) {}

  getData(item) {
    this.setState({ menuKey: item.key });
  }

  render() {
    const { menuKey, isAdmin } = this.state;
    return (
      <div className="right-body-container" style={{ minHeight: "75vh" }}>
        <Sider>
          <Menu
            defaultSelectedKeys={[menuKey]}
            selectedKeys={[menuKey]}
            defaultOpenKeys={["sub1"]}
            onClick={this.getData}
            mode="inline"
            theme="dark"
          >
            {isAdmin ? (
              <Menu.Item key="sub2" className="right-header">
                <span>权限管理</span>
              </Menu.Item>
            ) : (
              ""
            )}
            {isAdmin ? (
              <Menu.Item key="11" className="right-top">
                <NavLink to="/iot/UserManage">
                  <img className="app_img" src={usermanage} alt="logo" />
                  <span>用户管理</span>
                </NavLink>
              </Menu.Item>
            ) : (
              ""
            )}
            {isAdmin ? (
              <Menu.Item key="12">
                <NavLink to="/iot/Rolemanage">
                  <img className="app_img" src={rolemanage} alt="logo" />
                  <span>角色管理</span>
                </NavLink>
              </Menu.Item>
            ) : (
              ""
            )}
            {isAdmin ? (
              <Menu.Item key="13    ">
                <NavLink to="/iot/AuthorityManage">
                  <img className="app_img" src={authormanage} alt="logo" />
                  <span>权限管理</span>
                </NavLink>
              </Menu.Item>
            ) : (
              ""
            )}
          </Menu>
        </Sider>
        <div className="right-div-body">
          <Content style={{ background: "#ffffff" }}>
            <div style={{ background: "#ffffff" }}>
              <Switch>
                <Route path="/iot/Nothing" component={Nothing} />
                <Route path="/iot/UserManage" component={UserManage} />
                <Route path="/iot/Rolemanage" component={Rolemanage} />
                <Route path="/iot/AuthorityManage" component={AuthorityManage} />
              </Switch>
            </div>
          </Content>
          {/* <Footer style={{ textAlign: "center" }} /> */}
        </div>
      </div>
    );
  }
}

// export default LayoutComponent;

const mapStateToProps = state => {
  // console.log("state", state);
  return {
    loginData: state.login.get("loginData"),
    logininfo: state.login.get("logininfo")
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
)(LayoutComponent);
