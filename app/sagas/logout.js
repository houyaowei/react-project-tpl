import { put, call, take } from 'redux-saga/effects'
import * as actionTypes from '../constants/actionTypes'
import {loginMethod } from './apiCall';

export function* logout() {
    try {
      console.log("saga-> logout");
      yield put({type: actionTypes.LOGOUT_SAGA, loginStatus: false });

    } catch (err) {
      yield put({type: actionTypes.ERROR})
    }
  }
  
  export function* logoutFlow() {
    console.log("saga-> logoutFlow");
    yield call(logout);
  }