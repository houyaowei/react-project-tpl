import React from  "react";
import { NavLink, Route, Redirect,Switch } from 'react-router-dom'
import "./layout.css"
import './table-css/public.css';
import { Layout, Menu, Breadcrumb, Icon, Input, Select} from 'antd';
import { card_manage } from "../../../config/chartConfig";
import People from "./table"
import Cardmanage from "./cardManager";
import Housemanage from "./houseManager";

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
      this.set=["常住人口管理","流动人口管理","房东管理","访客管理","小区","楼","单元","房屋","卡管理"];
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
        <div className="right-body-container" style={{ minHeight: '100vh' }}>
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
             <SubMenu
                key="sub1"
                title={<span><Icon type="user" /><span>人口管理</span></span>}>
                <Menu.Item key="1">
                    <NavLink to='/config/'>
                        <span>常住人口</span>
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="2">
                    <span>流动人口</span>
                </Menu.Item>
                <Menu.Item key="3">
                    <span>房东管理</span>
                </Menu.Item>
                <Menu.Item key="4">
                    <span>访客管理</span>
                </Menu.Item>
            </SubMenu>
            <SubMenu
                key="sub2"
                title={<span><Icon type="user" /><span>房屋管理</span></span>}>
                <Menu.Item key="5" > 
                    <span>小区</span>
                </Menu.Item>
                <Menu.Item key="6" >
                    <span>楼</span>
                </Menu.Item>
                <Menu.Item key="7" >
                    <span>单元</span>
                </Menu.Item>
                <Menu.Item key="8" >
                    <NavLink to='/config/housemanage'>
                        <span>房屋</span>
                    </NavLink>
                </Menu.Item>
            </SubMenu>

            <Menu.Item key="9"> 
                <NavLink to='/config/cardmanage'>
                    <Icon type="inbox" />
                    <span>卡管理</span>
                </NavLink>
            </Menu.Item>

        
            </Menu>
        </Sider>
        <div className="right-div-body">
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>基础信息管理</Breadcrumb.Item>
                <Breadcrumb.Item>{this.set[this.state.key-1]}</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 20, background: '#fff', minHeight: 360 }}>
                <Switch>
                    <Route exact path="/config" component={People}/>
                    <Route path="/config/cardmanage" component={Cardmanage}/>
                    <Route path="/config/housemanage" component={Housemanage}/>
                </Switch>
            </div> 
          <Footer style={{ textAlign: 'center' }}>
            
          </Footer>
        </div>
      </div>
    );
  }
}

export default base;