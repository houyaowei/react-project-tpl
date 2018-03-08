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
        this.showHeader = this.showHeader.bind(this);
    }
    componentDidMount(){
        document.getElementById("content").style.marginTop="50px";
    }
    showHeader(status){
     // this.setState({head:status});
     let divStyle = document.getElementById("content").style;
     divStyle.transition="all .2s ease-in-out";
     if(status)
     {
         divStyle.transition="all .2s ease-in-out";
        divStyle.marginTop="0px";
    }
    else{
        document.getElementById("content").style.marginTop="50px";
    }
 }
    
    render(){
        return (
            <div>
                <Header callbackParent={this.showHeader}/>
                <div className='main-layout' id="content">
                    {this.props.children}
                </div>
            </div>
        );
    }
};

export default Container;