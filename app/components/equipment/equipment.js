import React from "react";
import { Redirect } from "react-router-dom";

import Tables from "./table";
import Video from "./videomanage";
import Barrier from "./barrier";

import "./equipment.css";
import "./table-style/public.css";
import { Layout, Menu, Breadcrumb, Icon, Input, Select } from "antd";
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const Search = Input.Search;
const InputGroup = Input.Group;
const Option = Select.Option;
class base extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      key: 1
    };
    this.set = [
      "门禁设备管理",
      "视频设备管理",
      "道闸设备管理",
      "停车场管理",
      "可视对讲机管理",
      "周界报警主机管理",
      "消防能源检测",
      "地址门牌系统"
    ];
    this.onCollapse = this.onCollapse.bind(this);
    this.getData = this.getData.bind(this);
  }
  onCollapse(collapsed) {
    console.log(collapsed);
    this.setState({ collapsed });
  }
  getData(item) {
    this.setState({ key: item.key });
    console.log(this.state.key);
  }
  render() {
    return (
      <div className="right-body-container" style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            onClick={this.getData}
            mode="inline"
            theme="dark"
            inlineCollapsed={this.state.collapsed}
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>设备管理</span>
                </span>
              }
            >
              <Menu.Item key="1">
                <Icon type="inbox" />
                <span>门禁设备管理</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="inbox" />
                <span>视频设备管理</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="inbox" />
                <span>道闸设备管理</span>
              </Menu.Item>
              <Menu.Item key="4">
                <Icon type="inbox" />
                <span>停车场</span>
              </Menu.Item>
              <Menu.Item key="5">
                <Icon type="inbox" />
                <span>可视对讲机</span>
              </Menu.Item>
              <Menu.Item key="6">
                <Icon type="inbox" />
                <span>周界报警主机</span>
              </Menu.Item>
              <Menu.Item key="7">
                <Icon type="inbox" />
                <span>消防能源检测</span>
              </Menu.Item>
              <Menu.Item key="8">
                <Icon type="inbox" />
                <span>地址门牌系统</span>
              </Menu.Item>
              <Menu.Item key="9">
                <Icon type="inbox" />
                <span>电子巡查</span>
              </Menu.Item>
              <Menu.Item key="10">
                <Icon type="inbox" />
                <span>梯控</span>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <div className="right-div-body">
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>设备管理</Breadcrumb.Item>
              <Breadcrumb.Item>{this.set[this.state.key - 1]}</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 20, background: "#fff", minHeight: 360 }}>
              {this.state.key == 1 ? (
                <Tables />
              ) : this.state.key == 2 ? (
                <Video />
              ) : this.state.key == 3 ? (
                <Barrier />
              ) : this.state.key == 4 ? (
                <Tables />
              ) : this.state.key == 5 ? (
                <Video />
              ) : this.state.key == 6 ? (
                <Barrier />
              ) : this.state.key == 7 ? (
                <Video />
              ) : this.state.key == 8 ? (
                <Barrier />
              ) : this.state.key == 9 ? (
                <Video />
              ) : this.state.key == 10 ? (
                <Barrier />
              ) : (
                ""
              )}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }} />
        </div>
      </div>
    );
  }
}

export default base;
