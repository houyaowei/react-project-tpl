import { put, call, take, select } from 'redux-saga/effects'
import * as actionTypes from '../constants/actionTypes'
import {loginMethod } from './apiCall';

export function* login() {
    try {
      console.log("saga-> login");
      var loginStatus = yield call(loginMethod);
      console.log("loginStatus:" + loginStatus);
      yield put({type: actionTypes.LOGIN, loginStatus: loginStatus });

    } catch (err) {
      yield put({type: actionTypes.ERROR})
    }
  }
  
  export function* loginFlow() {
    console.log("saga-> loginFlow");
    // let response = yield call(login, request.value)
    yield call(login)
  }


  /**
   * Fork 执行一个非阻塞操作。
    Take 暂停并等待action到达。
    Race 同步执行多个 effect，然后一旦有一个完成，取消其他 effect。
    Call 调用一个函数，如果这个函数返回一个 promise ，那么它会阻塞 saga，直到promise成功被处理。
    Put 触发一个Action。
    Select 启动一个选择函数，从 state 中获取数据。
   */