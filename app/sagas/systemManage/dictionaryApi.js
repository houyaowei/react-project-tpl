import ServiceApi from "../../api/ServiceApi";
export const addDicApi = param => {
  return ServiceApi.add(param).then(res => res);
};

export const delDicApi = param => {
  return ServiceApi.del(param).then(res => res);
};

export const getDicApi = param => {
  return ServiceApi.get(param).then(res => res);
};

export const updateDicApi = param => {
  return ServiceApi.update(param).then(res => res);
};
