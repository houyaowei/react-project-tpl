import React from  "react";
import { Redirect } from 'react-router-dom'
import Tables from "./table"


import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class base extends React.Component {
 constructor(props){
     super(props);
     this.state = {
        collapsed: false,
        key:1,
      };
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
      <Layout style={{ minHeight: '100vh' }}>
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
            <Menu.Item key="1">
                <Icon type="pie-chart" />
                <span>人口管理</span>
            </Menu.Item>
            <Menu.Item key="2" >
                <Icon type="desktop" />
                <span>房屋管理</span>
            </Menu.Item>
            <Menu.Item key="3">
                <Icon type="inbox" />
                <span>卡管理</span>
            </Menu.Item>
            <Menu.Item key="4">
                <Icon type="inbox" />
                <span>警务区管理</span>
            </Menu.Item>
            <Menu.Item key="5">
                <Icon type="inbox" />
                <span>GIS资源管理</span>
            </Menu.Item>
            <Menu.Item key="6">
                <Icon type="inbox" />
                <span>门禁设备管理</span>
            </Menu.Item>
            <Menu.Item key="7">
                <Icon type="inbox" />
                <span>视频设备管理</span>
            </Menu.Item>
            <Menu.Item key="8">
                <Icon type="inbox" />
                <span>道闸设备管理</span>
            </Menu.Item> 
            <Menu.Item key="9">
                <Icon type="inbox" />
                <span>系统基础配置管理</span>
            </Menu.Item>
            <Menu.Item key="10">
                <Icon type="inbox" />
                <span>权限管理等维护功能</span>
            </Menu.Item>
            </Menu>
        </Sider>
        <Layout>
            <Header style={{ background: '#fff', padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>{this.state.key}</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                        <Tables/>
                    </div>
                </Content>

          <Footer style={{ textAlign: 'center' }}>
            
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default base;