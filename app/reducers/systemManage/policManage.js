import * as types from "../../constants/ActionTypes";
import * as StatusCode from "../../constants/StatusCode";
import Immutable from "immutable";
import history from "../../routes/history";
import { message } from "antd";

const initState = Immutable.Map({
  polic: [],
});

const polic = (state = initState, action) => {
  // console.log("policreducer", action);
  switch (action.type) {
    case types.SAGA_ADDPOLIC:
      if (action.status.rtn_code == StatusCode.XAHC_SUCCESSED) {
        message.info("添加成功！");
        return;
      }
      return state;
      break;

    case types.SAGA_DELPOLIC:
      if (action.status.rtn_code == StatusCode.XAHC_SUCCESSED) {
        message.info("删除成功！");
      }
      return state;
      break;

    case types.SAGA_GETPOLIC:
      if (action.PolicData.rtn_code == StatusCode.XAHC_SUCCESSED) {
        return state.set("polic", action.PolicData);
      } else {
        return state;
      }
      break;

    case types.SAGA_UPDATEPOLIC:
      if (action.status.rtn_code == StatusCode.XAHC_SUCCESSED) {
        message.info("修改成功！");
      } else {
        message.info("修改失败！");
      }
      return state;
      break;
    default:
      return state;
  }
};

export default polic;
