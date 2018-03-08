import React from  "react";
import ReactDOM from "react-dom";
import {Redirect } from 'react-router-dom'
import {Button,FormControl,FormGroup,ControlLabel} from "react-bootstrap";
import "./login.css";

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name : "",
            pass : ""
        };
        this.login = this.login.bind(this);
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log(nextProps + ",," + nextState);
        return true;
    }
    componentDidUpdate(){
        console.log(this.props.Login.get("loginStatus"));
        if (this.props.Login.get("loginStatus")) {
            this.props.history.push('/home');
        }else {
            localStorage.clear();
            this.props.history.push('/login');
        }
    }
    login(){
        localStorage.setItem('loggedIn',true);
        var userName = ReactDOM.findDOMNode(this.refs.userName).value;
        var password = ReactDOM.findDOMNode(this.refs.password).value;

        this.props.actions.login(userName,password);
    }
    render(){
        
        return (
            <form className="login-form">
                <FormGroup>
                    <ControlLabel>userName</ControlLabel>
                    <FormControl
                        type="text"
                        key ="userName"
                        ref="userName"
                        placeholder="user name"
                    />
                    <ControlLabel>password</ControlLabel>
                    <FormControl
                        type="password"
                        key ="password"
                        ref="password"
                        placeholder="password"
                    />
                    <Button bsStyle="primary" onClick={this.login}>Primary</Button>
                </FormGroup>
            </form>
        );
    }
};
Login.propTypes = {

};

export default Login;