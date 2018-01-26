import React from  "react";
import {Form,FormGroup,Col,FormControl,Checkbox,Button} from "react-bootstrap";

class Login extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Form horizontal>
                <FormGroup controlId="formHorizontalEmail">
                    <Col  sm={2}>
                        Email
                    </Col>
                    <Col sm={4}>
                        <FormControl type="email" placeholder="Email" />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col  sm={2}>
                        Password
                    </Col>
                    <Col sm={4}>
                        <FormControl type="password" placeholder="Password" />
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={3}>
                        <Checkbox>Remember me</Checkbox>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={3}>
                        <Button type="submit" onClick={() => alert('click')}>Sign in</Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
};

export default Login;