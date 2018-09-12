import React from  "react";
import ReactDOM from "react-dom";
import { Redirect } from 'react-router-dom';
import Header from "../components/home/Header";
import Footer from "../components/home/Footer";
import "../assets/css/app.css";

class Container extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){

    }
    
    render(){
        // if (!this.state.loggedIn) {
        //     return (
        //         <Redirect to='/login' />
        //     )
        // }
        const style = {
            display: 'flex',
            flexDirection: 'column'
        }
        return (
            <div>
                <Header/>
                <div className='main-layout' ref='content'>
                    {this.props.children}
                </div>
            </div>
        );
    }
};

export default Container;