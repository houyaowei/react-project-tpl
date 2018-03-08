import React from  "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavLink, Redirect ,browserHistory} from 'react-router-dom';
import * as actions from "../../actions/index"
import PropTypes from 'prop-types';
import createHistory from "history/createBrowserHistory";
import "../../assets/css/app.css";
import "../../assets/css/dashboard.css";


class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loggedIn: localStorage.getItem('loggedIn'),
            showHeader: true
        }
        this.history = createHistory()
        this.onLogout = this.onLogout.bind(this);
        this.toggleHeader = this.toggleHeader.bind(this);
    }
    // componentDidUpdate(){
    //     console.log("loginStatus:" + this.props.Logout.get("loginStatus"));
    //     if (this.props.Logout.get("loginStatus")) {
    //         this.history.push('/home');
    //     }else {
    //         localStorage.clear();
    //         this.history.push('/login');
    //     }
    // }
    toggleHeader(){
        this.setState({
            showHeader : !this.state.showHeader
        });
        localStorage.setItem("showNav", this.state.showHeader);
        this.props.callbackParent(this.state.showHeader);
    }
    onLogout() {
        localStorage.clear();
        this.props.actions.logout();
    }
    render(){
        if (!this.state.loggedIn) {
            return (
              <Redirect to='/login' />
            )
        }
        const showHeader = this.state.showHeader;
        var style= {
            position: "absolute",
            top: showHeader ? "40px" : "5px",
            left: "50%",
            zIndex: "4"
        }
        return (
            <div>
            {
                showHeader ? (
                    <header className='fixed-top'>
                        <div className='pull-left'>
                            <NavLink to='/home' exact>主页</NavLink>
                            <NavLink to='/config' exact>基础管理</NavLink>
                            <NavLink to='/analysis' exact>统计分析</NavLink>
                            <NavLink to='/warning' exact>布控预警</NavLink>
                            <NavLink to='/basic' exact>基本组件</NavLink>
                        </div>
                        <div className='pull-right'>
                            <div className='header-info'>
                                欢迎您，{localStorage.getItem('username')}
                                <span style={{marginLeft: 10}}>|</span>
                                <a className='logout' onClick={this.onLogout}>退出</a>
                            </div>
                        </div>
                    </header>
                ): ""
            }
            <div style={style} className="toggle">
                <span onClick= {this.toggleHeader}>^^</span>
            </div>    
           </div>
        );
    }
};
Header.contextTypes = {
    showHeader: PropTypes.bool
}
const mapStateToProps = (state) => {
    return {
        Logout: state.login
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)

//export default Header;