import * as types from "../../constants/ActionTypes";

export const getPolic = p => {
  return {
    type: types.XAHC_GETPOLIC,
    current: p
  };
};

export const createPolic = data => {
  return { type: types.XAHC_ADDPOLIC, data };
};

export const delPolic = id => {
  return { type: types.XAHC_DELPOLIC, delId: id };
};

export const updatePolic = data => {
  return { type: types.XAHC_UPDATEPOLIC, data };
};
