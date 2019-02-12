import { combineReducers } from "redux";
import login from "./login";
import register from "./Register";
import account from "./getAccount";

import permissionManage from "./systemManage/permissionManage/reducer";

const rootReducer = combineReducers({
  login,
  register,
  account,
  permissionManage
});

export default rootReducer;
