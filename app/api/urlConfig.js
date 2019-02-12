export default {
  // 登录登出
  login: "/user/login",
  logout: "/user/logout",
  // 注册
  register: "/company/add",

  // 员工信息
  staffInfo: "/webuser/staffInfo/getStaffInfo",
  appList: "/webuser/app/getList",

  userList: "/webuser/permission/user-list",
  userFindone: "/webuser/permission/user-findone",
  userUpdate: "/webuser/permission/user-update",
  userSave: "/webuser/permission/user-save", // ADDUSER
  userDelete: "/webuser/permission/user-delete",
  userAddsysrole: "/webuser/permission/user-addsysrole", // userADDSYSROLE

  sysrolelist: "/webuser/permission/sysrole-list",
  sysroleFind: "/webuser/permission/sysrole-find",
  sysroleUpdate: "/webuser/permission/sysrole-update",
  sysroleSave: "/webuser/permission/sysrole-save", // ADDsysrole
  sysroleDelete: "/webuser/permission/sysrole-delete",
  sysroleAddsyspermission: "/webuser/permission/sysrole-addsyspermission", // sysroleAddsyspermission

  syspermissionlist: "/webuser/permission/syspermission-list",
  syspermissionFind: "/webuser/permission/syspermission-find-id",
  syspermissionUpdate: "/webuser/permission/syspermission-update",
  syspermissionSave: "/webuser/permission/syspermission-save", // ADDsyspermission  http://192.168.100.107:7070
  syspermissionDelete: "/webuser/permission/syspermission-delete",

  syspermissionTree: "/webuser/permission/syspermission-tree" // menuTree
};
