import React from "react";
import md5 from "md5";
import propTypes from "prop-types";
import { Select, message } from "antd";
import { Button, FormControl, FormGroup, InputGroup } from "react-bootstrap";
import intl from "react-intl-universal";
import "whatwg-fetch";
import _ from "lodash";
import "./Login.css";
import "./Index.scss";
import history from "../../routes/history";
import logo from "../../assets/images/login/iotlogo.png";
import left from "../../assets/images/login/left.png";

const Option = Select.Option;

const SUPPOER_LOCALES = [
  {
    name: "English",
    value: "en-US"
  },
  {
    name: "简体中文",
    value: "zh-CN"
  }
];
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      pass: "",
      errMsg: ""
    };
    this.MAINPAGEURL = "/iot/equipment";
    this.REGISTERURL = "/iot/register";
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }
  static getDerivedStateFromProps(props, state){
    const {Login: loginStatus, loginData} = props;
    console.log(`loginStatus, ${loginStatus}`);
    return null;
  }
  getSnapshotBeforeUpdate(prevProps,prevState){

  }
  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps");
    // const { Login: loginStatus, loginData } = nextProps;
    // const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));

    // if (loginStatus === 1) {
    //   if (userInfo.isadmin === false) {
    //     if (loginData.data.length === 0) {
    //       message.error("该用户无任何有效权限，请联系管理员添加有效权限");
    //       return;
    //     } else {
    //       history.push(nextProps.loginData.data[0].url);
    //       return;
    //     }
    //   }

    //   history.push(this.MAINPAGEURL);
    // }
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

  componentDidMount() {
    fetch("/user/test", {
      method: "get"
    }).then(d => {
      console.log(d);
    });
    const { actions } = this.props;
    this.loadLocales();
    // actions.logout();
  }

  loadLocales() {
    let currentLocale = intl.determineLocale({
      urlLocaleKey: "lang",
      cookieLocaleKey: "lang"
    });
    if (!_.find(SUPPOER_LOCALES, { value: currentLocale })) {
      currentLocale = "en-US";
    }

    fetch(`/locales/${currentLocale}.json`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        intl.init({
          currentLocale,
          locales: {
            [currentLocale]: data
          }
        });
        // After loading CLDR locale data, start to render
        this.setState({ initDone: true });
      });
  }

  onKeyDown(event) {
    if (event.keyCode === 13) {
      this.login();
    }
  }

  login() {
    const { name, pass } = this.state;
    const { actions } = this.props;
    // if (name && password) {
    //   sessionStorage.setItem("loggedIn", true);
    //   let equipmenttype = "web";
    //   let password = md5(password);
    //   this.props.actions.login(name, password, equipmenttype);
    // } else if (name === "" || password === "") {
    //   this.setState({
    //     errMsg: "注册账号或者密码不能为空"
    //   });
    // } else {
    //   this.setState({
    //     errMsg: "用户名或密码不正确"
    //   });
    // }
    if (name === "" && pass === "") {
      this.setState({
        errMsg: "用户名和密码不能为空"
      });
    } else if (name === "") {
      this.setState({
        errMsg: "用户名不能为空"
      });
    } else if (pass === "") {
      this.setState({
        errMsg: "密码不能为空"
      });
    } else if (name && pass) {
      sessionStorage.setItem("loggedIn", true);
      const equipmenttype = "web";
      const password = md5(pass);
      actions.login(name, password, equipmenttype);
      this.setState({ errMsg: "" });
    } else {
      this.setState({
        errMsg: "用户名或密码不正确"
      });
    }
  }

  register() {
    history.replace(this.REGISTERURL);
  }
  // handleChange(value) {
  //   location.search = `?lang=${value}`;
  // }

  render() {
    const { errMsg } = this.state;
    return (
      <div className="login">
        <div className="login__logo">
          {/* <img className="login_img" src={logo} alt="logo" /> */}
          <span className="login__logo--title">前端开发平台React版</span>
        </div>
        <div className="login__inner">
          <div className="login__inner_slogan">
            <img src={left} alt="logo" />
          </div>

          <div className="s_l">
            {/* <Select defaultValue="zh-CN" style={{ width: 120 }} onChange={this.handleChange}>
              <Option value="zh-CN">中文</Option>
              <Option value="en-US">English</Option>
            </Select> */}
          </div>
          <div className="login__inner__right">
            {errMsg ? <span className="error-msg error-msgs">{errMsg}</span> : null}
            <form className="login-box">
              <span className="login__inner_user inner_user">欢迎登录</span>
              <FormGroup style={{ width: "100%", marginTop: 70 }}>
                <InputGroup>
                  {/* <InputGroup.Addon>
                    <Icon type="user" style={{ fontSize: 23, color: "#999999" }} />
                  </InputGroup.Addon> */}
                  <FormControl
                    style={{ width: 380, paddingLeft: 16 }}
                    className="user-input"
                    onChange={e => this.updateName(e)}
                    type="text"
                    onKeyDown={this.onKeyDown}
                    placeholder="用户名"
                    autoComplete="off"
                    id="login-user"
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup style={{ width: "100%", marginTop: 34 }}>
                <InputGroup>
                  {/* <InputGroup.Addon>
                    <Icon type="lock" style={{ fontSize: 23, color: "#999999" }} />
                  </InputGroup.Addon> */}
                  <FormControl
                    style={{ width: 380, paddingLeft: 16 }}
                    type="text"
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
                </InputGroup>
              </FormGroup>
              <div className="login-register" role="button" onClick={this.register}>
                {/* <Link to="/iot/register" style={{ fontSize: 14 }}> */}
                <span>新公司注册</span>
                {/* </Link> */}
              </div>
              <div className="login-inner__btn">
                <Button
                  style={{ width: 380 }}
                  type="button"
                  onClick={this.login}
                  className="login-button"
                  id="login-btn"
                >
                  {intl.get("login.loginBtn")}
                  {/* <span>登录</span> */}
                </Button>
              </div>
            </form>
          </div>
        </div>
        <div>
          <span className="login-footer">XXX公司版权所有</span>
        </div>
      </div>
    );
  }
}
Login.propTypes = {};

export default Login;
