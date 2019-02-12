import ajaxServiceApi from "../api/serviceApi";

// login
export const loginMethod = payload => {
  return ajaxServiceApi.login(payload).then(res => res);
};

// user register
export const registerMethod = payload => {
  return ajaxServiceApi.register(payload).then(res => res);
};
