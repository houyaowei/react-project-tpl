import { put, call } from "redux-saga/effects";
import * as actionType from "../../constants/ActionType";
import { addDicApi, delDicApi, getDicApi, updateDicApi } from "./dictionaryApi";

export function* addDic(param) {
  try {
    let status = yield call(addDicApi, param);
    yield put({ type: actionType.SAGA_ADDDIC, status, param });
  } catch (err) {
    yield put({ type: actionType.ERROR });
  }
}

export function* delDic(param) {
  try {
    let status = yield call(delDicApi, param);
    yield put({
      type: actionType.SAGA_DELDIC,
      status: status,
      param
    });
  } catch (err) {
    yield put({ type: actionType.ERROR });
  }
}

export function* getDic(param) {
  try {
    let data = yield call(getDicApi, param);
    yield put({ type: actionType.SAGA_GETDIC, data: data, param });
  } catch (err) {
    yield put({ type: actionType.ERROR });
  }
}

export function* updateDic(param) {
  try {
    let status = yield call(updateDicApi, param);
    yield put({
      type: actionType.SAGA_UPDATEDIC,
      status: status,
      param
    });
  } catch (err) {
    yield put({ type: actionType.ERROR });
  }
}

export function* addDicMethod({ data, from }) {
  yield call(addDic, { data, from });
}

export function* delDicMethod({ id, from }) {
  yield call(delDic, { id, from });
}

export function* getDicMethod({ page, from }) {
  yield call(getDic, { page, from });
}

export function* updateDicMethod({ data, from }) {
  yield call(updateDic, { data, from });
}
