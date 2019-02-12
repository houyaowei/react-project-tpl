import * as types from "../../constants/ActionTypes";

// 分页查询
export const get = (page = null, from = null) => {
  return {
    type: types.XAHC_GET,
    page,
    from
  };
};

// 搜索查询
export const search = (page = null, params = null, from = null) => {
  return {
    type: types.XAHC_SEARCHGET,
    page,
    params,
    from
  };
};

// 添加
export const add = (data = null, from = null) => {
  return {
    type: types.XAHC_ADD,
    data,
    from
  };
};
// 删除
export const del = (id = null, from = null) => {
  return {
    type: types.XAHC_DEL,
    id,
    from
  };
};
// 更新
export const update = (data = null, from = null) => {
  return {
    type: types.XAHC_UPDATE,
    data,
    from
  };
};

// 修改
export const editInfo = (page = null, params = null, from = null) => {
  return {
    type: types.XAHC_UPDATE_COMPANY_INFO,
    page,
    params,
    from
  };
};
