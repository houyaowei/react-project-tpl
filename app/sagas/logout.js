import { put, call } from "redux-saga/effects";
import * as actionTypes from "../constants/ActionTypes";

export function* logout() {
  try {
    yield put({ type: actionTypes.LOGOUT_SAGA, loginStatus: false });
  } catch (err) {
    yield put({ type: actionTypes.ERROR });
  }
}

export function* logoutFlow() {
  yield call(logout);
}
