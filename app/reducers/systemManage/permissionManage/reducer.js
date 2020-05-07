import Immutable from "immutable";
import { message } from "antd";
import * as type from "../../../constants/ActionTypes";
import * as StatusCode from "../../../constants/StatusCode";

const initState = Immutable.Map({
  companyGetOneData: [],
  userManageData: [],
  userFindoneData: [],
  roleManageData: [],
  sysroleFindData: [],
  authorityManageData: [],
  SyspermissionFindData: [],
  resManageData: [],
  findresData: [],
  pageConfig: {},
});

const reduce = (state = initState, action) => {
  // console.log("reducereducer", action);
  switch (action.type) {
    case type.SAGA_ADD:
      switch (action.param.from) {
        case "userManage":
          if (action.status.rtn_code === StatusCode.XAHC_SUCCESSED) {
            message.success("编辑成功！");
          } else if (action.status.rtn_code === StatusCode.XAHC_DATA_EXIST) {
            message.error("该用户已存在!");
          } else {
            message.error("编辑失败！");
          }
          return state;

        case "addrole":
          if (action.status.rtn_code === StatusCode.XAHC_SUCCESSED) {
            message.success("配置成功！");
          } else if (action.status.rtn_code === StatusCode.XAHC_DATA_EXIST) {
            message.error("该角色已存在!");
          } else {
            message.error("配置失败！");
          }
          return state;

        case "roleManage":
          if (action.status.rtn_code === StatusCode.XAHC_SUCCESSED) {
            message.success("添加成功！");
          } else if (action.status.rtn_code === StatusCode.XAHC_DATA_EXIST) {
            message.error("该角色已存在!");
          } else {
            message.error("添加失败！");
          }
          return state;

        case "authorityManage":
          if (action.status.rtn_code === StatusCode.XAHC_SUCCESSED) {
            message.success("添加成功！");
          } else if (action.status.rtn_code === StatusCode.XAHC_DATA_EXIST) {
            message.error("该权限已存在!");
          } else {
            message.error("添加失败！");
          }
          return state;

        case "addResource":
          if (action.status.rtn_code === StatusCode.XAHC_SUCCESSED) {
            message.success("添加成功！");
          } else if (action.status.rtn_code === StatusCode.XAHC_DATA_EXIST) {
            message.error("该权限已存在!");
          } else {
            message.error("添加失败！");
          }
          break;
        default:
          return state;
      }
      break;
    case type.SAGA_DEL:
      if (action.status.rtn_code === StatusCode.XAHC_SUCCESSED) {
        message.success("删除成功！");
      } else if (action.status.rtn_code === StatusCode.XAHC_ROLE_USED) {
        message.error("角色被使用无法删除!");
      } else if (action.status.rtn_code === StatusCode.XAHC_PEMISSION_USED) {
        message.error("权限被使用无法删除!");
      } else {
        message.error("删除失败！");
      }
      return state;

    case type.SAGA_GET:
      // console.log("reducerroleManage", action.data);
      if (action.data.rtn_code === StatusCode.XAHC_SUCCESSED) {
        switch (action.param.from) {
          case "companyGetOne":
            sessionStorage.setItem("companyId", action.data.data[0].companyId);
            return state
              .set("companyGetOneData", action.data)
              .set("pageConfig", action.data.pageBean);

          case "userManage":
            return state.set("userManageData", action.data);

          case "userFindone":
            return state.set("userFindoneData", action.data);

          case "roleManage":
            return state.set("roleManageData", action.data);

          case "sysroleFind":
            return state.set("sysroleFindData", action.data);

          case "authorityManage":
            return state.set("authorityManageData", action.data);

          case "syspermissionFind":
            return state.set("SyspermissionFindData", action.data);

          case "findres":
            return state.set("findresData", action.data);

          case "syspermissionTree":
            return state.set("syspermissionTreeData", action.data);
          default:
            return state;
        }
      } else {
        message.error("获取数据失败！");
        return state;
      }

    case type.SAGA_UPDATE:
      switch (action.param.from) {
        case "userManage":
          if (action.status.rtn_code === StatusCode.XAHC_SUCCESSED) {
            message.success("修改成功！");
          } else if (action.status.rtn_code === StatusCode.XAHC_DATA_EXIST) {
            message.error("该用户已存在！");
          } else {
            message.error("修改失败！");
          }
          return state;

        case "roleManage":
          if (action.status.rtn_code === StatusCode.XAHC_SUCCESSED) {
            message.success("修改成功！");
          } else if (action.status.rtn_code === StatusCode.XAHC_SYSROLE_EXITST) {
            message.error("该角色已存在！");
          } else {
            message.error("修改失败！");
          }
          return state;

        case "authorityManage":
          if (action.status.rtn_code === StatusCode.XAHC_SUCCESSED) {
            message.success("修改成功！");
          } else if (action.status.rtn_code === StatusCode.XAHC_DATA_EXIST) {
            message.error("该权限已存在！");
          } else if (action.status.rtn_code === StatusCode.XAHC_PERMISSION_EXITST) {
            message.error("该权限名称已存在！");
          } else {
            message.error("修改失败！");
          }
          return state;

        default:
          return state;
      }
    case type.SAGA_SEARCH:
      // console.log("reducerroleManage", action.data);
      if (action.data.rtn_code === StatusCode.XAHC_SUCCESSED) {
        switch (action.param.from) {
          case "userManage":
            return state.set("userManageData", action.data);
          case "roleManage":
            return state.set("roleManageData", action.data);
          case "authorityManage":
            return state.set("authorityManageData", action.data);
          case "findres":
            return state.set("findresData", action.data);
          default:
            return state;
        }
      } else {
        message.error("获取数据失败！");
        return state;
      }

    case type.SAGA_UPDATE_COMPANY_INFO:
      // console.log("reducerroleinfo", action.data);
      if (action.data.rtn_code === StatusCode.XAHC_SUCCESSED) {
        switch (action.param.from) {
          case "companyInfo":
            message.info("修改用户数据成功！");
            return state.set("companyInfo", action.data);
          default:
            return state;
        }
      } else {
        message.error("修改用户数据失败！");
        return state;
      }
    default:
      return state;
  }
};

export default reduce;
