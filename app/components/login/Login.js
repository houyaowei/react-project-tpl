import React from  "react";
import ReactDOM from "react-dom";
import {Redirect } from 'react-router-dom'
import {Button,FormControl,FormGroup,ControlLabel,InputGroup} from "react-bootstrap";
import intl from 'react-intl-universal';
import "whatwg-fetch";
import _ from "lodash";
import "./login.css";
import {Select} from "antd";
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
    constructor(props){
        super(props);
        this.state = {
            name : "",
            pass : "",
            errMsg:"",
            initDone: false,
            defalutLanguage: "0" //0:中文 1:English
        };
        this.login = this.login.bind(this);
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log(nextProps + ",," + nextState);
        return true;
    }
    componentDidMount(){
        this.loadLocales();
    }
    componentDidUpdate(){
        // console.log(this.props.Login.get("loginStatus"));
        // if (this.props.Login.get("loginStatus")) {
        //     this.props.history.push('/home');
        // }else {
        //     localStorage.clear();
        //     this.props.history.push('/login');
        // }
    }

    loadLocales() {
        let currentLocale = intl.determineLocale({
          urlLocaleKey: "lang",
          cookieLocaleKey: "lang"
        });
        if (!_.find(SUPPOER_LOCALES, { value: currentLocale })) {
          currentLocale = "en-US";
        }

        fetch(`locales/${currentLocale}.json`)
          .then(res => {
            return res.json()
          })
          .then((data) => {
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
    login(){
        var userName = ReactDOM.findDOMNode(this.refs.userName).value;
        var password = ReactDOM.findDOMNode(this.refs.password).value;
        if(userName=="admin"&&password=="admin"){
            localStorage.setItem('loggedIn',true);
            this.props.actions.login(userName,password);
        }else if(userName==""||password==""){
            this.setState({
                errMsg:'用户名和密码不能为空'
            })
        }else{
            this.setState({
                errMsg:'用户名或密码不正确'
            })
        }
    }
    handleChange(value){
        location.search = `?lang=${value}`;
    }
    render(){
        return (
            <div className="login" >
                <span className="login__logo"></span>
                <div className="login__inner">
                    <div className="login__inner_slogan">
                    </div>
                    <div className="s_l">
                        <Select defaultValue="zh-CN" style={{ width: 120 }} onChange={this.handleChange}>
                          <Option value="zh-CN">中文</Option>
                          <Option value="en-US">English</Option>
                        </Select>
                    </div>
                    <div className="login__inner__right">
                        {this.state.errMsg?<span className="error-msg">{this.state.errMsg}</span>:null}
                        <form>
                            <span className="login__inner_user">用户登录/ User login</span>
                            <FormGroup style={{width:"91%"}}>
                                <InputGroup>
                                <InputGroup.Addon><span className="user-icon"></span></InputGroup.Addon>
                                <FormControl  style={{width:"91%"}} className="user-input" ref="userName" type="text" placeholder="请输入用户名"/>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup style={{width:"91%"}}>
                                <InputGroup>
                                <InputGroup.Addon><span className="pass-icon"></span></InputGroup.Addon>
                                <FormControl style={{width:"91%"}} type="password" ref="password" placeholder="请输入密码"/>
                                </InputGroup>
                            </FormGroup>
                            <div className="login-inner__other">
                                <span className="login-inner__rem"></span><span>{intl.get('login.remember')}</span>
                            </div>
                            <div className="login-inner__btn">
                                <Button style={{width:"91%"}} bsStyle="primary" type="button" onClick={this.login}>{intl.get('login.loginBtn')}</Button>
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>
            
        );
    }
};
Login.propTypes = {

};

export default Login;