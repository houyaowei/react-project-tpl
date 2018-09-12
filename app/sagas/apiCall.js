import ajaxServiceApi from "../api/ajaxServiceApi";

export const loginMethod = () => {
    console.log('apiCall->loginMethod');
    console.log(ajaxServiceApi.login);
    return ajaxServiceApi.login().then(res => res);
  };