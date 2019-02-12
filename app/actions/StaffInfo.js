import * as types from "../constants/ActionTypes";

export const getStaffInfo = (currentPage, condition) => {
  return {
    type: types.XAHC_STAFF_INFO,
    payload: {
      currentPage,
      condition
    }
  };
};
