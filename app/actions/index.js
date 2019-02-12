import * as types from "../constants/ActionTypes";

export const login = (name, password, equipmenttype) => {
  return {
    type: types.XAHC_LOGIN,
    payload: {
      name,
      password,
      equipmenttype
    }
  };
};
export const logout = (name, pass) => {
  return {
    type: types.XAHC_LOGOUT
  };
};
