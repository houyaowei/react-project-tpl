import Immutable from "immutable";
import { message } from "antd";
import * as types from "../constants/ActionTypes";
import * as StatusCode from "../constants/StatusCode";

const initState = Immutable.Map({
  registerStatus: 0,
});

const register = (state = initState, action) => {
  switch (action.type) {
    case types.XAHC_REGISTER_SAGA:
      if (action.registerStatus.rtn_code === StatusCode.XAHC_SUCCESSED) {
        // message.info("用户信息注册成功");
        // return state.set("registerStatus", 1);
        if (state.get("registerStatus") === 1) {
          // console.log("registerStatus", state)
          return state.set("registerStatus", 0);
        } else {
          // console.log("registerStatus00", state)
          return state.set("registerStatus", 1);
        }
      } else if (action.registerStatus.rtn_code === StatusCode.XAHC_DATA_EXIST) {
        sessionStorage.clear();
        message.warning("注册账号名称已存在");
        return state.set("registerStatus", 0);
      } else if (action.registerStatus.rtn_code === StatusCode.XAHC_COMPANY_EXIST) {
        sessionStorage.clear();
        message.warning("公司名称已存在");
        return state.set("registerStatus", 0);
      }
      return state;

    default:
      return state;
  }
};

export default register;
