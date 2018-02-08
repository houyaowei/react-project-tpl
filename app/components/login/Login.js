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
    componentDidUpdate(){
        if (this.props.Login.get("login")) {
            this.props.history.push('/home');
        }
    }
    login(){
        localStorage.setItem('loggedIn',true);
        var userName = ReactDOM.findDOMNode(this.refs.userName).value;
        var password = ReactDOM.findDOMNode(this.refs.password).value;

        this.props.actions.login();
    }
    render(){
        
        return (
            <form className="login-form">
                <FormGroup controlId="formBasicText">
                    <ControlLabel>userName</ControlLabel>
                    <FormControl
                        type="text"
                        key ="userName"
                        ref="userName"
                        placeholder="user name"
                        onChange={this.handleChange}
                    />
                    <ControlLabel>password</ControlLabel>
                    <FormControl
                        type="password"
                        key ="password"
                        ref="password"
                        placeholder="password"
                        onChange={this.handleChange}
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