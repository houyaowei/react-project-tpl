import React from  "react";
import {Button,FormControl,FormGroup,ControlLabel} from "react-bootstrap";
import "./login.css";

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name : "",
            pass : ""
        };
        //bind this
        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
    }
    handleChange(e) {
        
    }
    login(){
        localStorage.setItem('loggedIn',true);
        this.props.history.push('/home');
    }
    render(){
        return (
            <form className="login-form">
                <FormGroup controlId="formBasicText">
                    <ControlLabel>userName</ControlLabel>
                    <FormControl
                        type="text"
                        key ="userName"
                        placeholder="user name"
                        onChange={this.handleChange}
                    />
                    <ControlLabel>password</ControlLabel>
                    <FormControl
                        type="password"
                        key ="password"
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