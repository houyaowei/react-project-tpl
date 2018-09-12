import * as types from "../constants/ActionTypes";

export const login = (name, pass) => {
  console.log("action->login");
  return {
    type: types.XAHC_LOGIN,
    //
    payload: {
      name,
      pass
    }
  };
};
export const logout = (name, pass) => {
  console.log("action->logout");
  return {
    type: types.XAHC_LOGOUT
  };
};
