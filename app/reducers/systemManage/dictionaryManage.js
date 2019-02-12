import * as type from "../../constants/ActionType";
import * as StatusCode from "../../constants/StatusCode";
import Immutable from "immutable";
import { message } from "antd";

const initState = Immutable.Map({
  dicManageData: []
});

const reduce = (state = initState, action) => {
  switch (action.type) {
    case type.SAGA_ADDDIC:
      if (action.status.res.rtn_code == StatusCode.XAHC_SUCCESSED) {
        message.success("添加成功！");
      } else {
        message.error("添加失败！");
      }
      return state;
      break;

    case type.SAGA_DELDIC:
      if (action.status.res.rtn_code == StatusCode.XAHC_SUCCESSED) {
        message.success("删除成功！");
      } else {
        message.error("删除失败！");
      }
      return state;
      break;

    case type.SAGA_GETDIC:
      if (action.data.res.rtn_code == StatusCode.XAHC_SUCCESSED) {
        switch (action.param.from) {
          case "userManage":
            return state.set("dicManageData", action.data.res);
            break;
        }
      } else {
        message.error("获取用户数据失败！");
        return state;
      }
      break;

    case type.SAGA_UPDATEDIC:
      if (action.status.res.rtn_code == StatusCode.XAHC_SUCCESSED) {
        message.success("修改成功！");
      } else {
        message.error("修改失败！");
      }
      return state;
      break;
    default:
      return state;
  }
};

export default reduce;
