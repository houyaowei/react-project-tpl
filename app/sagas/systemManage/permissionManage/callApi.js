import { put, call, take } from "redux-saga/effects";
import * as actionType from "../../../constants/ActionTypes";
import {
  addApi,
  delApi,
  getApi,
  updateApi,
  searchApi,
  updateCompanyInfoApi
} from "./api";

export function* add(param) {
  try {
    const status = yield call(addApi, param);
    yield put({ type: actionType.SAGA_ADD, status, param });
  } catch (err) {
    yield put({ type: actionType.ERROR });
  }
}

export function* del(param) {
  // console.log("delparam", param);
  try {
    const status = yield call(delApi, param);
    yield put({ type: actionType.SAGA_DEL, status, param });
  } catch (err) {
    yield put({ type: actionType.ERROR });
  }
}

export function* get(param) {
  try {
    const data = yield call(getApi, param);
    yield put({ type: actionType.SAGA_GET, data, param });
  } catch (err) {
    yield put({ type: actionType.ERROR });
  }
}

export function* update(param) {
  try {
    const status = yield call(updateApi, param);
    yield put({ type: actionType.SAGA_UPDATE, status, param });
  } catch (err) {
    yield put({ type: actionType.ERROR });
  }
}

export function* search(param) {
  try {
    const data = yield call(searchApi, param);
    yield put({ type: actionType.SAGA_SEARCH, data, param });
  } catch (err) {
    yield put({ type: actionType.ERROR });
  }
}

export function* updateCompanyInfo(param) {
  // console.log("updateCompanyInfo", param);
  try {
    const data = yield call(updateCompanyInfoApi, param);
    yield put({ type: actionType.SAGA_UPDATE_COMPANY_INFO, data, param });
  } catch (err) {
    yield put({ type: actionType.ERROR });
  }
}

export function* addMethod({ data, from }) {
  yield call(add, { data, from });
}

export function* delMethod({ id, from }) {
  yield call(del, { id, from });
}

export function* getMethod({ page, from }) {
  yield call(get, { page, from });
}

export function* updateMethod({ data, from }) {
  yield call(update, { data, from });
}

export function* searchMethod({ page, params, from }) {
  yield call(search, { page, params, from });
}

export function* updateCompanyInfoMethod({ page, params, from }) {
  yield call(updateCompanyInfo, { page, params, from });
}
