import ajaxServiceApi from "../api/ajaxServiceApi";

export const loginMethod = () => {
    console.log('loading user');
    return ajaxServiceApi.login().then(res => res);
  };