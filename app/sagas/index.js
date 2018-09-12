import 'babel-polyfill';
import {takeEvery,takeLatest} from "redux-saga"
import * as types from '../constants/ActionTypes'
import {loginFlow} from "./login"
import {logoutFlow} from "./logout"

export default function* mySaga() {
    // yield* takeEvery(types.XAHC_LOGIN, loginFlow);
    // yield* takeEvery(types.XAHC_LOGOUT, logoutFlow);
    yield [
        takeEvery(types.XAHC_LOGIN, loginFlow),
        takeEvery(types.XAHC_LOGOUT, logoutFlow)
    ]
}