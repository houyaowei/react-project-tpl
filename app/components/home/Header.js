import React from  "react";
import { NavLink, Redirect } from 'react-router-dom'
import "../../assets/css/app.css"

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loggedIn: localStorage.getItem('loggedIn')
        }
        this.onLogout = this.onLogout.bind(this);
    }
    onLogout() {
        localStorage.setItem('loggedIn', '')
        this.setState({loggedIn: false})
    }
    render(){
        if (!this.state.loggedIn) {
            return (
              <Redirect to='/login' />
            )
        }
        return (
            <header className='fixed-top'>
                <div className='pull-left'>
                    <NavLink to='/home' exact>主页</NavLink>
                    <NavLink to='/monitor' exact>监控</NavLink>
                </div>
                <div className='pull-right'>
                <div className='header-info'>
                    欢迎您，{localStorage.getItem('username')}
                    <span style={{marginLeft: 10}}>|</span>
                    <a className='logout' onClick={this.onLogout}>退出</a>
                </div>
                </div>
            </header>
        );
    }
};


export default Header;