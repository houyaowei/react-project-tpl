import Immutable from "immutable";
import * as types from "../constants/ActionTypes";
import * as StatusCode from "../constants/StatusCode";

const initState = Immutable.Map({
  accountData: []
});

const getAccount = (state = initState, action) => {
  switch (action.type) {
    case types.XAHC_EQU_ACCOUNT_SAGA:
      if (action.resData.res.rtn_code === StatusCode.XAHC_SUCCESSED) {
        return state.set("accountData", action.resData.res.data);
      }
      return state.set("accountData", []);

    default:
      return state;
  }
};
export default getAccount;
