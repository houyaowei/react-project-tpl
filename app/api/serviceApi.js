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

export const get = (param) => {
  let url = "";
  const postdata = { conditions: [] };
  switch (param.from) {
    case "userManage":
      url = `${URL.userList}?size=10&sortid=id&sortvalue=desc&page=${param.page}`;
      break;
    case "userFindone":
      url = `${URL.userFindone}?userId=${param.page}`;
      break;
    case "roleManage":
      if (param.page == null) {
        url = `${URL.sysrolelist}?size=50&sortid=id&sortvalue=desc`;
      } else {
        url = `${URL.sysrolelist}?size=10&sortid=id&sortvalue=desc&page=${param.page}`;
      }
      break;
    case "sysroleFind":
      url = `${URL.sysroleFind}?id=${param.page}`;
      break;
    case "authorityManage":
      if (param.page == null) {
        url = URL.syspermissionlist;
      } else {
        url = `${URL.syspermissionlist}?size=10&sortid=id&sortvalue=desc&page=${param.page}`;
      }
      break;
    case "syspermissionFind":
      url = `${URL.syspermissionFind}?permissionId=${param.page}`;
      break;
    case "companyGetOne":
      if (param.page == null) {
        url = URL.companyInfoList;
      } else {
        url = `${URL.companyInfoList}
          ?size=10&sortid=id&sortvalue=desc&page=${param.page}`;
      }
      break;
    case "syspermissionTree":
      url = URL.syspermissionTree;
      break;
    default:
  }
  if (param.from === "syspermissionTree") {
    return request({
      url,
      method: "POST",
      data,
    });
  } else {
    return request({
      url,
      method: "POST",
      postdata,
    });
  }
};

export const update = (param) => {
  const postdata = param.data;
  let url = "";
  switch (param.from) {
    case "userManage":
      url = URL.userUpdate;
      break;
    case "roleManage":
      url = URL.sysroleUpdate;
      break;
    case "authorityManage":
      url = URL.syspermissionUpdate;
      break;
    case "doordevice":
      url = URL.updatedoor;
      break;
    case "barrierdevice":
      url = URL.updatereading;
      break;
    case "gatedevice" || "videodevice":
      url = URL.updatedevice;
      break;
    case "locationManage":
      url = URL.updatelocation;
      break;
    case "carinfo":
      // url = URL.updatelocation;
      break;
    case "adddevice":
      url = URL.updatedevice;
      break;
    default:
  }
  return request({
    url,
    method: "POST",
    postdata,
  });
};
export const search = (param) => {
  let url = "";
  let postdata = "";
  switch (param.from) {
    case "userManage":
      if (param.params.inputType && param.params.inputName) {
        postdata = {
          conditions: [
            {
              name: "name",
              sopt: "cn",
              value: param.params.inputName,
            },
            {
              name: "accountType",
              sopt: "eq",
              value: param.params.inputType,
            },
          ],
        };
      } else if (param.params.inputType) {
        postdata = {
          conditions: [
            {
              name: "accountType",
              sopt: "eq",
              value: param.params.inputType,
            },
          ],
        };
      } else if (param.params.inputName) {
        postdata = {
          conditions: [
            {
              name: "name",
              sopt: "cn",
              value: param.params.inputName,
            },
          ],
        };
      } else {
        postdata = {
          conditions: [],
        };
      }
      url = `${URL.userList}'?size=10&sortid=id&sortvalue=desc&page=${param.page}`;
      break;
    case "roleManage":
      if (param.params.inputType && param.params.inputName) {
        postdata = {
          conditions: [
            {
              name: "role",
              sopt: "cn",
              value: param.params.inputName,
            },
            {
              name: "roleType",
              sopt: "eq",
              value: param.params.inputType,
            },
          ],
        };
      } else if (param.params.inputType) {
        postdata = {
          conditions: [
            {
              name: "roleType",
              sopt: "eq",
              value: param.params.inputType,
            },
          ],
        };
      } else if (param.params.inputName) {
        postdata = {
          conditions: [
            {
              name: "role",
              sopt: "cn",
              value: param.params.inputName,
            },
          ],
        };
      } else {
        postdata = {
          conditions: [],
        };
      }
      if (param.page == null) {
        url = URL.sysrolelist;
      } else {
        url = `${URL.sysrolelist}?size=10&sortid=id&sortvalue=desc&page=${param.page}`;
      }
      break;
    case "authorityManage":
      if (param.params.inputType && param.params.inputName) {
        postdata = {
          conditions: [
            {
              name: "name",
              sopt: "cn",
              value: param.params.inputName,
            },
            {
              name: "resourceType",
              sopt: "eq",
              value: param.params.inputType,
            },
          ],
        };
      } else if (param.params.inputType) {
        postdata = {
          conditions: [
            {
              name: "resourceType",
              sopt: "eq",
              value: param.params.inputType,
            },
          ],
        };
      } else if (param.params.inputName) {
        postdata = {
          conditions: [
            {
              name: "name",
              sopt: "cn",
              value: param.params.inputName,
            },
          ],
        };
      } else {
        postdata = {
          conditions: [],
        };
      }
      url = `${URL.syspermissionlist}?size=10&sortid=id&sortvalue=desc&page=
          ${param.page}`;
      break;
    default:
  }
  return request({
    url,
    method: "POST",
    postdata,
  });
};
export const del = (param) => {
  let url = "";
  const postdata = {};
  switch (param.from) {
    case "userManage":
      url = `${URL.userDelete}?id=${param.id}`;
      break;
    case "roleManage":
      url = `${URL.sysroleDelete}?id=${param.id}`;
      break;
    case "authorityManage":
      url = `${URL.syspermissionDelete}?permissionId=${param.id}`;
      break;
    case "gatedevice" || "videodevice" || "barrierdevice":
      url = `${URL.deldevice}?id=${param.id}`;
      break;
    case "locationManage":
      url = `${URL.dellocation}?id=${param.id}`;
      break;
    case "carinfo":
      // url = URL.dellocation + "?id=" + param.id;
      break;
    default:
  }
  return request({
    url,
    method: "POST",
    postdata,
  });
};
