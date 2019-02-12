import * as types from "../constants/ActionTypes";

export const getAppList = companyId => {
  return {
    type: types.XAHC_APP_MANAGE,
    payload: {
      companyId
    }
  };
};
export const addApp = payload => {
  return {
    type: types.XAHC_ADD_APP,
    payload: {
      appName: payload.appName,
      pkgName: payload.pkgName,
      signName: payload.signName,
      describe: payload.describe,
      companyId: payload.companyId
    }
  };
};
export const appIdDetails = value => {
  return {
    type: types.XAHC_EQU_APPIDDETAILS,
    payload: {
      value
    }
  };
};
