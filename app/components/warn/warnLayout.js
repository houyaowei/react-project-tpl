import React from  "react";
import ReactDOM from "react-dom";
import { NavLink, Route, Redirect,Switch } from 'react-router-dom'
import { browserHistory } from 'react-router';
import "./warn.css";
import PreWarn from "./preWarn/PreWarn";
import Deploy from "./deploy/Deploy"
import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

class ControlLayout extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            current: '1',
            collapsed: false,
        };
        this.handleClick = this.handleClick.bind(this);
        this.onCollapse = this.onCollapse.bind(this);
    }
    componentDidMount(){
        if(this.props.history.location.state){
            if("dashboard" == this.props.history.location.state.from){
                this.setState({current:"2"});
            }
        }
    }
    handleClick(e){
        this.setState({
            current: e.key,
        });
    }
    selectWarning(){
        this.setState({
            current:2
        });
    }
    onCollapse(collapsed){    
        this.setState({ collapsed });
    }
    render(){
        const warningPage = (props) => {
            return (
                <PreWarn selectWarning={this.selectWarning.bind(this)}
                {...props} />
            )
        };
        return(
               <div className="right-body-container">
                    <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                    >
                        <Menu theme="dark" selectedKeys={[this.state.current]} mode="inline"  onClick={this.handleClick}>
                            <Menu.Item key="1">
                                <NavLink to='/warning'>
                                    <Icon type="pie-chart" /><span>布控</span>
                                </NavLink>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <NavLink to='/warning/prewarn'>
                                     <Icon type="desktop" /><span>预警</span>
                                </NavLink>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                   <div className="right-div-body">
                       <Switch>
                           <Route path="/warning/prewarn" render={warningPage} />
                           <Route path="/warning/" exact component={Deploy}/>
                       </Switch>
                   </div>
                </div>
        )
    }
}
export default ControlLayout;