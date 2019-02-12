import * as types from "../../constants/ActionTypes";

//分页查询
export const get = (page = null, from = null) => {
  return {
    type: types.XAHC_GETDIC,
    page: page,
    from: from
  };
};
//添加
export const add = (data = null, from = null) => {
  return { type: types.XAHC_ADDDIC, data: data, from: from };
};
//删除
export const del = (id = null, from = null) => {
  return { type: types.XAHC_DELDIC, id: id, from: from };
};
//更新
export const update = (data = null, from = null) => {
  return { type: types.XAHC_UPDATEDIC, data: data, from: from };
};
