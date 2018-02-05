import React from  "react";
import { Redirect } from 'react-router-dom'
import Header from "../components/home/Header"

class Container extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loggedIn: localStorage.getItem('loggedIn')
          }
    }
    render(){
        if (!this.state.loggedIn) {
            return (
              <Redirect to='/login' />
            )
          } else if (this.props.location.pathname === '/') {
            return (
              <Redirect to='/home' />
            )
          }
        return (
            <div>
                <Header />
                <div className='main-layout'>
                    {this.props.children}
                </div>
            </div>
        );
    }
};

export default Container;