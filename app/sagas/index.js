import "babel-polyfill";
import { all, takeEvery } from "redux-saga/effects";
import * as types from "../constants/ActionTypes";
import { loginFlow } from "./login";
import { logoutFlow } from "./logout";
import { registerFlow } from "./Register";
import {
  addMethod,
  delMethod,
  getMethod,
  updateMethod,
  searchMethod,
  updateCompanyInfoMethod
} from "./systemManage/permissionManage/callApi";

export default function* mySaga() {
  yield all([
    takeEvery(types.XAHC_LOGIN, loginFlow),
    takeEvery(types.XAHC_LOGOUT, logoutFlow),
    takeEvery(types.XAHC_REGISTER, registerFlow),
    // permission
    takeEvery(types.XAHC_ADD, addMethod),
    takeEvery(types.XAHC_DEL, delMethod),
    takeEvery(types.XAHC_GET, getMethod),
    takeEvery(types.XAHC_UPDATE, updateMethod),
    takeEvery(types.XAHC_SEARCHGET, searchMethod),
    takeEvery(types.XAHC_UPDATE_COMPANY_INFO, updateCompanyInfoMethod)
  ]);
}
