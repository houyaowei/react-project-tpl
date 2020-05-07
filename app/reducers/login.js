import Immutable from "immutable";
import { message } from "antd";
import * as types from "../constants/ActionTypes";
import history from "../routes/history";
import * as StatusCode from "../constants/StatusCode";

const initState = Immutable.Map({
  logininfo: 0,
  loginStatus: 0,
  loginData: [],
});

const login = (state = initState, action) => {
  switch (action.type) {
    case types.LOGIN_SAGA:
      if (action.loginStatus.rtn_code === StatusCode.XAHC_SUCCESSED) {
        sessionStorage.setItem("loginStatue", 1);
        sessionStorage.setItem("salt", action.loginStatus.salt);
        sessionStorage.setItem("uid", action.loginStatus.uid);
        sessionStorage.setItem("userInfo", JSON.stringify(action.loginStatus));

        sessionStorage.setItem("loginData", JSON.stringify(action.loginStatus.data));

        return state.set("logininfo", 1).set("loginData", action.loginStatus);
      } else if (action.loginStatus.rtn_code === StatusCode.XAHC_DATA_NOTEXIST) {
        sessionStorage.setItem("loginStatue", 0);
        message.warning("用户不存在");
        return state.set("logininfo", 2);
      } else if (action.loginStatus.rtn_code === StatusCode.XAHC_PASS_ERROR) {
        sessionStorage.setItem("loginStatue", 0);
        message.error("密码错误");
        return state.set("logininfo", 3);
      } else if (action.loginStatus.rtn_code === StatusCode.XAHC_USER_UNAVAILABLE) {
        sessionStorage.setItem("loginStatue", 0);
        message.error("用户状态异常，请联系管理员");
        return state.set("logininfo", 3);
      } else {
        return state.set("loginStatus", action.loginStatus.login);
      }
    case types.LOGOUT_SAGA:
      sessionStorage.setItem("loginStatue", 0);
      sessionStorage.clear();
      history.push("/iot/login");
      return state.set("logininfo", 0);
    default:
      return state;
  }
};

export default login;
