import URL from "./urlConfig";
import request from "./request";

export const login = (payload) => {
  const data = {
    username: payload.name,
    pwd: payload.password,
    equipmenttype: payload.equipmenttype,
  };
  return request({
    url: URL.login,
    method: "POST",
    data,
  });
};
export const register = (payload) => {
  const url = `${URL.register}?companyName=${payload.companyName}
    &contacts=${payload.contacts}&mobile=${payload.mobile}&loginName=
    ${payload.name}&pwd=${payload.password}`;

  const data = {};
  return request({
    url,
    method: "POST",
    data,
  });
};
