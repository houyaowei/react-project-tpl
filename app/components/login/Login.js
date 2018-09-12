import React from "react";
import ReactDOM from "react-dom";
import { Redirect } from "react-router-dom";
import {
  Button,
  FormControl,
  FormGroup,
  ControlLabel,
  InputGroup
} from "react-bootstrap";
import "./login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      pass: "",
      errMsg: ""
    };
    this.login = this.login.bind(this);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps + ",," + nextState);
    return true;
  }
  componentDidUpdate() {
    // console.log(this.props.Login.get("loginStatus"));
    // if (this.props.Login.get("loginStatus")) {
    //     this.props.history.push('/home');
    // }else {
    //     localStorage.clear();
    //     this.props.history.push('/login');
    // }
  }
  login() {
    var userName = ReactDOM.findDOMNode(this.refs.userName).value;
    var password = ReactDOM.findDOMNode(this.refs.password).value;
    if (userName == "admin" && password == "admin") {
      localStorage.setItem("loggedIn", true);
      this.props.actions.login(userName, password);
    } else if (userName == "" || password == "") {
      this.setState({
        errMsg: "用户名和密码不能为空"
      });
    } else {
      this.setState({
        errMsg: "用户名或密码不正确"
      });
    }
  }
  render() {
    return (
      <div className="login">
        <span className="logo">西安华信智慧组件库 </span>
        <div className="login__inner">
          <div className="login__inner__right">
            {this.state.errMsg ? (
              <span className="error-msg">{this.state.errMsg}</span>
            ) : null}
            <form>
              <span className="login__inner_user">用户登录/ User login</span>
              <FormGroup style={{ width: "91%" }}>
                <InputGroup>
                  <InputGroup.Addon>
                    <span className="user-icon" />
                  </InputGroup.Addon>
                  <FormControl
                    style={{ width: "91%" }}
                    className="user-input"
                    ref="userName"
                    type="text"
                    placeholder="请输入用户名"
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup style={{ width: "91%" }}>
                <InputGroup>
                  <InputGroup.Addon>
                    <span className="pass-icon" />
                  </InputGroup.Addon>
                  <FormControl
                    style={{ width: "91%" }}
                    type="password"
                    ref="password"
                    placeholder="请输入密码"
                  />
                </InputGroup>
              </FormGroup>
              <div className="login-inner__other">
                <span className="login-inner__rem" />
                <span>记住密码</span>
              </div>
              <div className="login-inner__btn">
                <Button
                  style={{ width: "91%" }}
                  bsStyle="primary"
                  type="button"
                  onClick={this.login}
                >
                  登录
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
Login.propTypes = {};

export default Login;
