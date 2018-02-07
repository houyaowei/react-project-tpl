import {takeEvery,takeLatest} from "redux-saga"
import { call, put } from 'redux-saga/effects'
import 'babel-polyfill';

import * as types from '../constants/ActionTypes'

function* increateNum(action) {
    try {
    //    const user = yield call(Api.fetchUser, action.payload.userId);
       yield put({type: types.INCREATMENT_NUMBER, count: 6});
    } catch (e) {
       yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
 }

export default function* mySaga() {
    yield* takeLatest(types.INCREATMENT_NUMBER, increateNum);
}