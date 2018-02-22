import 'babel-polyfill';
import {takeEvery,takeLatest} from "redux-saga"
import * as types from '../constants/ActionTypes'
import {loginFlow} from "./login"

export default function* mySaga() {
    yield* takeEvery(types.XAHC_LOGIN, loginFlow);
}