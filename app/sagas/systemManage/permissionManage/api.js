import * as request from "../../../api/serviceApi";

export const addApi = (param) => {
  return request.add(param).then((res) => res);
};

export const delApi = (param) => {
  return request.del(param).then((res) => res);
};

export const getApi = (param) => {
  return request.get(param).then((res) => res);
};

export const updateApi = (param) => {
  return request.update(param).then((res) => res);
};

export const searchApi = (param) => {
  return request.search(param).then((res) => res);
};

export const updateCompanyInfoApi = (param) => {
  return request.updateCompanyInfo(param).then((res) => res);
};
