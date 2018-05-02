import React from  "react";
import { Redirect } from 'react-router-dom'
import Tables from "./table"
import "./sysadmin.css"
import { Layout, Menu, Breadcrumb, Icon, Input, Select} from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const Search = Input.Search;
const InputGroup = Input.Group;
const Option = Select.Option;
class base extends React.Component {
 constructor(props){
     super(props);
     this.state = {
        collapsed: false,
        key:1,
      };
      this.set=["常住人口管理","流动人口管理","房东管理","访客管理","户籍地址资源目录","综合地理资源和人口管理","门禁设备管理","视频设备管理","道闸设备管理","卡管理","国际行政区域划分资源目录","道路管理","警务区数据同步管理","用户管理","权限管理","菜单管理","功能管理","系统日志"];
      this.onCollapse = this.onCollapse.bind(this);
      this.getData = this.getData.bind(this);
 } 
  onCollapse(collapsed){
    console.log(collapsed);
    this.setState({ collapsed });
  }
  getData(item){
      this.setState({ key:item.key });
      console.log(this.state.key);
  }
  render() {
    return (
      <div  className="right-body-container" style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}>
          
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            onClick={this.getData}
            mode="inline"
            theme="dark"
            inlineCollapsed={this.state.collapsed}>
            <Menu.Item key="14">
                <Icon type="inbox" />
                <span>用户管理</span>
            </Menu.Item>
            <Menu.Item key="15">
                <Icon type="inbox" />
                <span>权限管理</span>
            </Menu.Item>
            <Menu.Item key="16">
                <Icon type="inbox" />
                <span>菜单管理</span>
            </Menu.Item>
            <Menu.Item key="17">
                <Icon type="inbox" />
                <span>功能管理</span>
            </Menu.Item>
            <Menu.Item key="18">
                <Icon type="inbox" />
                <span>系统日志</span>
            </Menu.Item>
            </Menu>
        </Sider>
        <div className="right-div-body">
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>基础信息管理</Breadcrumb.Item>
                    <Breadcrumb.Item>{this.set[this.state.key-1]}</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ padding: 20, background: '#fff', minHeight: 360 }}>
                        <Tables/>
                    </div>
                </Content>
          <Footer style={{ textAlign: 'center' }}>
            
          </Footer>
        </div>
      </div>
    );
  }
}

export default base;