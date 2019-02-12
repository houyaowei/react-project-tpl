import "whatwg-fetch";
import { message } from "antd";
import history from "../routes/history";
import URL from "./urlConfig";

import * as StatusCode from "../constants/StatusCode";

const fetchApi = function(postData, url, resolve, obj) {
  const options = {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(postData)
  };

  fetch(url, options)
    .then(res => {
      return res.json();
    })
    .then(data => {
      if (data.rtn_code === StatusCode.XAHC_NOT_LOGIN) {
        history.push("/iot/login");
        message.info("请登录！");
      } else {
        resolve({ res: data, param: obj });
      }
    });
};

const fetchFileApi = function(postData, url, resolve, obj) {
  const options = {
    method: "POST",
    credentials: "include",
    body: postData
  };
  fetch(url, options)
    .then(res => {
      return res.json();
    })
    .then(data => {
      if (data.rtn_code === StatusCode.XAHC_NOT_LOGIN) {
        history.push("/iot/login");
        message.info("请登录！");
      } else {
        resolve({ res: data, param: obj });
      }
    });
};
const fetchApiGet = function(postData, url, resolve, obj) {
  const options = {
    method: "GET",
    credentials: "include"
  };
  fetch(url, options)
    .then(res => {
      return res.json();
    })
    .then(data => {
      if (data.rtn_code === StatusCode.XAHC_NOT_LOGIN) {
        history.push("/iot/login");
        message.info("请登录！");
      } else if (data.rtn_code === StatusCode.XAHC_DATA_NOTEXIST) {
        message.info("数据不存在");
      } else {
        resolve({ res: data, param: obj });
      }
    });
};

class ServiceApi {
  static login(payload) {
    return new Promise(resolve => {
      const url = URL.login;
      const postdata = {
        username: payload.name,
        pwd: payload.password,
        equipmenttype: payload.equipmenttype
      };
      fetchApi(postdata, url, resolve);
    });
  }

  static register(payload) {
    return new Promise(resolve => {
      const url = `${URL.register}?companyName=${payload.companyName}
      &contacts=${payload.contacts}&mobile=${payload.mobile}&loginName=
      ${payload.name}&pwd=${payload.password}`;

      const postdata = {};
      fetchApi(postdata, url, resolve);
    });
  }

  // 权限管理
  static add(param) {
    const that = this;
    let postdata = param.data;
    let url = "";
    return new Promise(resolve => {
      switch (param.from) {
        case "userManage":
          url = URL.usersave;
          break;
        case "roleManage":
          url = URL.sysroleSave;
          break;
        case "authorityManage":
          url = URL.syspermissionSave;
          break;
        case "addrole":
          url = `${URL.userAddsysrole} + ${postdata}`;
          postdata = {};
          break;
        case "addResource":
          url = `${URL.sysroleAddsyspermission} + ${postdata}`;
          break;
        case "locationManage":
          url = URL.addlocation;
          break;
        case "carinfo":
          // url = URL.addlocation;
          break;
        case "gatedevice" || "videodevice" || "barrierdevice":
          url = URL.adddevice;
          break;
        default:
      }
      fetchApi(postdata, url, resolve);
    });
  }

  static del(param) {
    let url = "";
    const postdata = {};
    return new Promise(resolve => {
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
      fetchApi(postdata, url, resolve);
    });
  }

  static get(param) {
    let url = "";
    const postdata = { conditions: [] };
    return new Promise(resolve => {
      switch (param.from) {
        case "userManage":
          url = `${URL.userList}?size=10&sortid=id&sortvalue=desc&page=${
            param.page
          }`;
          break;
        case "userFindone":
          url = `${URL.userFindone}?userId=${param.page}`;
          break;
        case "roleManage":
          if (param.page == null) {
            url = `${URL.sysrolelist}?size=50&sortid=id&sortvalue=desc`;
          } else {
            url = `${URL.sysrolelist}?size=10&sortid=id&sortvalue=desc&page=${
              param.page
            }`;
          }
          break;
        case "sysroleFind":
          url = `${URL.sysroleFind}?id=${param.page}`;
          break;
        case "authorityManage":
          if (param.page == null) {
            url = URL.syspermissionlist;
          } else {
            url = `${
              URL.syspermissionlist
            }?size=10&sortid=id&sortvalue=desc&page=${param.page}`;
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
        fetchApi("", url, resolve);
      } else {
        fetchApi(postdata, url, resolve);
      }
    });
  }

  static update(param) {
    const postdata = param.data;
    let url = "";
    return new Promise(resolve => {
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
      fetchApi(postdata, url, resolve);
    });
  }

  static search(param) {
    let url = "";
    let postdata = "";
    return new Promise(resolve => {
      switch (param.from) {
        case "userManage":
          if (param.params.inputType && param.params.inputName) {
            postdata = {
              conditions: [
                {
                  name: "name",
                  sopt: "cn",
                  value: param.params.inputName
                },
                {
                  name: "accountType",
                  sopt: "eq",
                  value: param.params.inputType
                }
              ]
            };
          } else if (param.params.inputType) {
            postdata = {
              conditions: [
                {
                  name: "accountType",
                  sopt: "eq",
                  value: param.params.inputType
                }
              ]
            };
          } else if (param.params.inputName) {
            postdata = {
              conditions: [
                {
                  name: "name",
                  sopt: "cn",
                  value: param.params.inputName
                }
              ]
            };
          } else {
            postdata = {
              conditions: []
            };
          }
          url = `${URL.userList}'?size=10&sortid=id&sortvalue=desc&page=${
            param.page
          }`;
          break;
        case "roleManage":
          if (param.params.inputType && param.params.inputName) {
            postdata = {
              conditions: [
                {
                  name: "role",
                  sopt: "cn",
                  value: param.params.inputName
                },
                {
                  name: "roleType",
                  sopt: "eq",
                  value: param.params.inputType
                }
              ]
            };
          } else if (param.params.inputType) {
            postdata = {
              conditions: [
                {
                  name: "roleType",
                  sopt: "eq",
                  value: param.params.inputType
                }
              ]
            };
          } else if (param.params.inputName) {
            postdata = {
              conditions: [
                {
                  name: "role",
                  sopt: "cn",
                  value: param.params.inputName
                }
              ]
            };
          } else {
            postdata = {
              conditions: []
            };
          }
          if (param.page == null) {
            url = URL.sysrolelist;
          } else {
            url = `${URL.sysrolelist}?size=10&sortid=id&sortvalue=desc&page=${
              param.page
            }`;
          }
          break;
        case "authorityManage":
          if (param.params.inputType && param.params.inputName) {
            postdata = {
              conditions: [
                {
                  name: "name",
                  sopt: "cn",
                  value: param.params.inputName
                },
                {
                  name: "resourceType",
                  sopt: "eq",
                  value: param.params.inputType
                }
              ]
            };
          } else if (param.params.inputType) {
            postdata = {
              conditions: [
                {
                  name: "resourceType",
                  sopt: "eq",
                  value: param.params.inputType
                }
              ]
            };
          } else if (param.params.inputName) {
            postdata = {
              conditions: [
                {
                  name: "name",
                  sopt: "cn",
                  value: param.params.inputName
                }
              ]
            };
          } else {
            postdata = {
              conditions: []
            };
          }
          url = `${URL.syspermissionlist}?size=10&sortid=id&sortvalue=desc&page=
            ${param.page}`;
          break;
        default:
      }
      // console.log("search", postdata, url, resolve);
      fetchApi(postdata, url, resolve);
    });
  }
}
export default ServiceApi;
