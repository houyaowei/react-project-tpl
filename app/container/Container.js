import React from  "react";
import { Redirect } from 'react-router-dom'
import Header from "../components/home/Header"
//import HeaderContainer from "../components/home/HeaderContainer"

class Container extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loggedIn: localStorage.getItem('loggedIn'),
            head:false,
        }
    
    }
    componentDidMount(){
        
    }
        
    render(){
        return (
            <div>
                <Header/>
                <div className='main-layout' id="content">
                    {/* {this.props.children} */}
                    dadfasdf
                </div>
            </div>
        );
    }
};

export default Container;