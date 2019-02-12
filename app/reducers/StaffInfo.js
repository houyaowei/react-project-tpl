import * as types from "../constants/ActionTypes";
import Immutable from "immutable";
import * as StatusCode from "../constants/StatusCode";

const initState = Immutable.Map({
  staffInfo: [],
  pageConfig: {}
});

const staffInfo = (state = initState, action) => {
  switch (action.type) {
    case types.XAHC_STAFF_INFO_SAGA:
      if (action.staffInfo.res.rtn_code == StatusCode.XAHC_SUCCESSED) {
        return state
          .set("staffInfo", action.staffInfo.res.list)
          .set("pageConfig", action.staffInfo.res.pageBean);
      }
      return state.set("staffInfo", []);
    default:
      return state;
  }
};

export default staffInfo;
