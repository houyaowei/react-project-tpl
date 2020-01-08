import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import UserManager from "./UserManage";
import RoleManager from "./Rolemanage";
import resManager from "./resManage";
import dictionaryManage from "./dictionaryManage";
// import "./style/sysadmin.css";
import { Layout, Menu, Icon } from "antd";
const { Content, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class base extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      key: 1,
      rowdata: []
    };
    this.onCollapse = this.onCollapse.bind(this);
    this.getData = this.getData.bind(this);
  }
  onCollapse(collapsed) {
    // console.log(collapsed);
    this.setState({ collapsed });
  }
  getData(item) {
    this.setState({ key: item.key });
    // console.log(this.state.key);
  }
  componentDidMount() {}
  render() {
    return (
      <div className="right-body-container" style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          onCollapse={false}
        >
          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            onClick={this.getData}
            mode="inline"
            theme="dark"
            inlineCollapsed={this.state.collapsed}
            inlineCollapsed={false}
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>权限管理</span>
                </span>
              }
            >
              <Menu.Item key="1">
                <NavLink to="/pasq/sysadmin/usermanage">
                  <Icon type="inbox" />
                  <span>用户管理</span>
                </NavLink>
              </Menu.Item>
              <Menu.Item key="2">
                <NavLink to="/pasq/sysadmin/rolemanage">
                  <Icon type="inbox" />
                  <span>角色管理</span>
                </NavLink>
              </Menu.Item>
              <Menu.Item key="3">
                <NavLink to="/pasq/sysadmin/meaumanage">
                  <Icon type="inbox" />
                  <span>资源管理</span>
                </NavLink>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="4">
              <NavLink to="/pasq/sysadmin/usermanage">
                <Icon type="inbox" />
                <span>功能管理</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="5">
              <NavLink to="/pasq/sysadmin/usermanage">
                <Icon type="inbox" />
                <span>系统日志</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="6">
              <NavLink to="/pasq/sysadmin/dictionaryManage">
                <Icon type="inbox" />
                <span>数据字典管理</span>
              </NavLink>
            </Menu.Item>
          </Menu>
        </Sider>
        <div className="right-div-body">
          <Content style={{ margin: "0 16px" }}>
            <div style={{ padding: 20, background: "#fff", minHeight: 360 }}>
              <Switch>
                <Route exact path="/pasq/sysadmin" component={UserManager} />
                <Route path="/pasq/sysadmin/usermanage" component={UserManager} />
                <Route path="/pasq/sysadmin/rolemanage" component={RoleManager} />
                <Route path="/pasq/sysadmin/meaumanage" component={resManager} />
                <Route path="/pasq/sysadmin/dictionaryManage" component={dictionaryManage} />
              </Switch>
            </div>
          </Content>
        </div>
      </div>
    );
  }
}

export default base;
