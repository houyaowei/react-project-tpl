import React from "react";
import Types from "prop-types";
// import ReactDOM from 'react-dom';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { message, Icon, Button, Input } from "antd";
// import md5 from 'md5';
import "whatwg-fetch";
import { trim } from "@utils";
import history from "../../routes/history";
import * as action from "../../actions/Register";

import "./Register.css";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      pass: "",
      errMsg: ""
    };
    this.formRef = React.createRef();
    this.register = this.register.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  componentWillReceiveProps(nextProps, nextState) {
    const registerStatus = nextProps || this.props;
    if (registerStatus === 1) {
      message.success("公司信息注册成功，将跳转到登录页");
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        // history.goBack();
        // history.go(-1);
        history.push("/iot/login");
        // nextProps.registerStatus === 0
      }, 1000);
    }
  }

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  updateName(e) {
    this.setState({
      name: e.target.value
    });
  }

  updatePass(e) {
    this.setState({
      pass: e.target.value
    });
  }

  onKeyDown(event) {
    if (event.keyCode === 13) {
      this.register();
    }
  }

  register() {
    let { name, pass } = this.state;
    name = trim(name);
    pass = trim(pass);

    const regex = new RegExp(
      "^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?![,.#%+@!$&*-:;^_`]+$)" +
        "[,.#%@!+$&*-:;^_0-9A-Za-z]{6,16}$/gm"
    );
    const userPattern = /^\w+$/;
    // const mobileTest = /^1[0-9]{10}$/;
    // const pattern = /^[\u4E00-\u9FA5A-Za-z0-9]{4,16}$/;
    if (name && pass) {
      if (!userPattern.test(name)) {
        this.setState({
          errMsg: "注册账号名称只能包含字母、数字、下划线"
        });
      }
      if (!regex.test(pass)) {
        this.setState({
          errMsg: "密码应6到16位，至少包含字母、数字、符号两种"
        });
      }

      // this.props.actions.register(
      //   companyName,
      //   contacts,
      //   mobile,
      //   name,
      //   md5(password)
      // );
      // sessionStorage.setItem('loggedIn', true);
      // this.setState({ errMsg: '' });
    }
  }

  render() {
    const { errMsg } = this.state;
    return (
      <div className="registerBox">
        <div className="register">
          <div className="register_content">
            {errMsg ? <span className="error-msg error-msg2">{errMsg}</span> : null}
            <form>
              <span className="register__inner_user">企业信息注册</span>
              <Input
                onChange={e => this.updateName(e)}
                onKeyDown={this.onKeyDown}
                placeholder="用户名"
                autoComplete="off"
                type="text"
                id="login-user"
              />
              <Input
                type="password"
                onChange={e => this.updatePass(e)}
                id="login-pass"
                placeholder="密码"
                onKeyDown={this.onKeyDown}
                inputRef={ref => {
                  this.password = ref;
                }}
                autoComplete="new-password"
                onFocus={() => {
                  this.password.type = "password";
                }}
              />

              <div className="register-inner__btn">
                <Button
                  style={{ width: "23%", marginLeft: "37%" }}
                  type="button"
                  onClick={this.register}
                  className="register-button"
                >
                  <span>注册</span>
                </Button>
              </div>
            </form>
            {/* <span className="register-login">
              <NavLink to="/iot/login" style={{ fontSize: 14 }}>
                去登录
              </NavLink>
            </span> */}
          </div>
        </div>
        {/* <div>
          <span className="register-footer">西安华信智慧数字科技有限公司</span>
        </div> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    registerStatus: state.register.get("registerStatus")
  };
};

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(action, dispatch) };
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);
