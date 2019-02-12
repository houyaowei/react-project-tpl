import ServiceApi from "../../../api/serviceApi";

export const addApi = param => {
  return ServiceApi.add(param).then(res => res);
};

export const delApi = param => {
  return ServiceApi.del(param).then(res => res);
};

export const getApi = param => {
  return ServiceApi.get(param).then(res => res);
};

export const updateApi = param => {
  return ServiceApi.update(param).then(res => res);
};

export const searchApi = param => {
  return ServiceApi.search(param).then(res => res);
};

export const updateCompanyInfoApi = param => {
  return ServiceApi.updateCompanyInfo(param).then(res => res);
};
