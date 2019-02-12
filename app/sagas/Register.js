import { put, call, take } from "redux-saga/effects";
import * as actionTypes from "../constants/ActionTypes";
import { registerMethod } from "./apiCall";

export function* register(payload) {
  try {
    const registerStatus = yield call(registerMethod, payload);
    yield put({
      type: actionTypes.XAHC_REGISTER_SAGA,
      registerStatus
    });
  } catch (err) {
    yield put({ type: actionTypes.ERROR });
  }
}

export function* registerFlow({ payload }) {
  const response = yield call(register, payload);
}
