import React from 'react'
import ReactDOM from "react-dom";
import { NavLink, Redirect} from 'react-router-dom';
import history from "../../routes/history";
import createHistory from "history/createBrowserHistory";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from "../../actions/index"

import "../../assets/css/header.css";
import logo from "../../assets/images/dashboard/logo.png";
import searchicon from "../../assets/images/dashboard/find-icon.png";

import fetchJsonp from 'fetch-jsonp';
const inputwords = {
    s:["主页","基本信息管理","统计分析","设备管理","预警","布控","以图搜图","区域对比统计","卡管理","常住人口管理"]
};

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loggedIn: localStorage.getItem('loggedIn'),
            showSearch:false,
            searchInput:'',
            words:[],
        };
        this.showSearch = this.showSearch.bind(this);
        this.onLogout = this.onLogout.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.setValue = this.setValue.bind(this);
    }
  //用户按下enter键
  onKeyDown(event){
    let searchInput = document.getElementsByClassName('text-input')[0].value;
    if(event.keyCode==13&&searchInput.length!=0){
        history.push( "/search",{searchInput: this.state.searchInput});
        this.refs['worddiv'].style.height = 0;
        document.getElementsByClassName('text-input')[0].value = "";
        }
}
    //点击下拉候选项
    setValue(value){
        history.push( "/search",{searchInput: value});
        this.refs['worddiv'].style.height = 0;
        document.getElementsByClassName('text-input')[0].value = "";
        console.log(value);
    }

    inputChange(e){
        let that = this;
        let searchInput = document.getElementsByClassName('text-input')[0].value;
        let wordsdiv = this.refs['worddiv'];
        /*let url= "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+searchInput+"&cb=callback";
        fetchJsonp(url, {
            jsonpCallback: 'cb',
            jsonpCallbackFunction: 'callback'
        }).then(function(response){
            return response.json()
        }).then(function(json) {
            //console.log('返回json为', json)
           
        }).catch(function(ex) {
            console.log('解析失败', ex)
        })*/
        if(searchInput.length == 0)
        {
            wordsdiv.style.height = 0;
            wordsdiv.style.border="0px";
        }
        else{
            wordsdiv.style.height = (inputwords.s.length)*35+"px";
            that.setState({
            searchInput:searchInput,
            words:inputwords.s,
        });
        }
        
    }

    showSearch(){
        let input = document.getElementsByClassName('text-input');
        if(!this.state.showSearch)
        {
            input[0].style.width = "200px";
            input[0].style.opacity = 1;
            input[0].style.paddingLeft = "20px";
            this.setState({showSearch:true});
        }
        else if(this.state.showSearch)
        {
            input[0].style.width = 0;
            input[0].style.opacity = 0;
            input[0].style.paddingLeft = 0;
            input[0].value="";
            this.setState({showSearch:false,});
        }
    }

    onLogout() {
        localStorage.clear();
        this.props.actions.logout();
    }
   render(){
        
       return(
               <div className="header-top">
                    <div className="header-logo">
                        <img src={logo} alt="logo"/>
                        <span className="logo-title">智慧平安社区平台</span>
                    </div>
                    <div className="navul">
                        <ul className="header-top-ul">
                            <li><NavLink to='/home' exact>主页</NavLink></li>
                            <li><NavLink to='/config' exact>基础信息管理</NavLink></li>
                            <li><NavLink to='/analysis' exact>统计分析</NavLink></li>
                            <li><NavLink to='/warning' exact>智能预警</NavLink></li>
                            <li><NavLink to='/search' exact>综合查询</NavLink></li>
                            <li><NavLink to='/equipment' exact>设备管理</NavLink></li>
                            <li><NavLink to='/sysadmin' exact>系统管理</NavLink></li>
                        </ul>
                    </div>
                    <div className="search-content">
                        <div className="search-div">
                            <div className="input-content">
                                <input type="text" className="text-input" onChange={this.inputChange} onKeyDown={this.onKeyDown}/>
                            </div>
                            <div className="inputicon" onClick={this.showSearch}>
                                <img src={searchicon} alt="search" className="searchbtn"/>
                            </div>
                        </div>
                        <div className="showword" ref="worddiv">
                                <ul className="search-words">
                                    {
                                        this.state.words.map((item,key)=>{
                                            return <li key={key} onClick={()=>this.setValue(item)}>{item}</li>
                                        })
                                    }
                                </ul>
                        </div>
                    </div>
                    <div className="dropmeau">
                       <ol>
                           <li><span className="dropli"><span className="header-manager"></span>管理员<span className="oper-icon"></span></span>
                               <ul className="meaulist">
                                    <li>用户信息</li>
                                    <li>我的收藏</li>
                                    <li>设置</li>
                                    <li onClick={this.onLogout}>退出</li>
                               </ul>
                           </li>
                       </ol>
                    </div>
               </div>
       );
   }
    }
const mapStateToProps = (state) => {
    return {
        Logout: state.login
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)