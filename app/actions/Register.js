import * as types from "../constants/ActionTypes";

export const register = (companyName, contacts, mobile, name, password) => {
  return {
    type: types.XAHC_REGISTER,
    payload: {
      companyName,
      contacts,
      mobile,
      name,
      password
    }
  };
};
