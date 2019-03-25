const getSystemMenuAllListRes = require("../../mock/menuManage/systemMenuAllList");
const getSystemMenuMenuIdRes = require("../../mock/menuManage/systemMenuMenuId");
const getSystemmMenuChildMenusRes = require("../../mock/menuManage/systemmMenuChildMenus");

async function getSystemMenuAllList(ctx, next) {
  // console.log("getSystemMenuAll", ctx, next);
  ctx.response.body = getSystemMenuAllListRes;
}

async function getSystemMenuMenuId(ctx, next) {
  // console.log("getSystemMenuMenuId", ctx.params, ctx.query, ctx.request, next);
  // 需要判断menu的级别，菜单显示页面， menu级别/button级别
  let dataInfo = null;
  if (ctx.params.menuId.length === 1) {
    let paramsMenuId = ctx.params.menuId;
    dataInfo = {
      createTime: "2018-09-05 11:26:57",
      createUser: "",
      id: paramsMenuId,
      initFlag: 1,
      menuCode: "system_manager_person",
      menuDesc: "人员管理",
      menuIcon: "",
      menuId: paramsMenuId,
      menuName: "管理侧",
      menuStatus: 0,
      menuType: 0,
      menuUrl: "system",
      menuorder: 2,
      parentMenuId: 1,
      updateTime: "2018-09-06 11:59:17",
      updateUser: "",
      childMenus: [
        {
          menuName: "新增",
          menuId: 71,
          parentMenuId: 7,
          initflagButton: 0
        },
        {
          menuName: "able",
          menuId: 72,
          parentMenuId: 7,
          initflagButton: 0
        },
        {
          menuName: "编辑",
          menuId: 73,
          parentMenuId: 7,
          initflagButton: 1
        },
        {
          menuName: "删除",
          menuId: 74,
          parentMenuId: 7,
          initflagButton: 0
        },
        {
          menuName: "查询",
          menuId: 75,
          parentMenuId: 7,
          initflagButton: 1
        }
      ]
    };
  } else if (ctx.params.menuId.length === 2) {
    let paramsMenuId = ctx.params.menuId;
    // console.log("paramsMenuId", paramsMenuId);
    dataInfo = {
      createTime: "2018-09-05 11:26:57",
      createUser: "",
      id: paramsMenuId,
      initFlag: 0,
      menuCode: "system_manager_person_button_add",
      menuDesc: "新增",
      menuIcon: "",
      menuId: paramsMenuId,
      menuName: "管理侧",
      menuStatus: 0,
      menuType: 1, // 区分menu/button?
      menuUrl: "system",
      menuorder: 3, // 记录级别
      // parentMenuId: paramsMenuId.substring(0, paramsMenuId.length - 1),
      parentMenuId: paramsMenuId.substr(0, paramsMenuId.length - 1),
      updateTime: "2018-09-06 11:59:17",
      updateUser: ""
    };
  }
  ctx.response.body = { rtn_code: "0", rtn_msg: "OK", data: dataInfo };
}

async function getSystemmMenuChildMenus(ctx, next) {
  let dataInfo = null;
  let paramsMenuId = ctx.query.menuId;
  if (paramsMenuId.length === 1) {
    ctx.response.body = getSystemmMenuChildMenusRes;
  } else if (paramsMenuId.length === 2) {
    dataInfo = {
      data: [],
      rtn_code: "0",
      rtn_msg: "OK",
      pageBean: { total: 0, size: 10, totalPage: 0, page: 1 }
    };
    ctx.response.body = dataInfo;
  }
}

async function getSystemmMenuChildMenus(ctx, next) {
  let dataInfo = null;
  let paramsMenuId = ctx.query.menuId;
  if (paramsMenuId.length === 1) {
    ctx.response.body = getSystemmMenuChildMenusRes;
  } else if (paramsMenuId.length === 2) {
    dataInfo = {
      data: [],
      rtn_code: "0",
      rtn_msg: "OK",
      pageBean: { total: 0, size: 10, totalPage: 0, page: 1 }
    };
    ctx.response.body = dataInfo;
  }
}

async function putSystemMenuInfo(ctx, next) {
  console.log("putSystemMenuInfo", ctx.params, ctx.query, ctx.request, next);
  // 后台拿childMenus的menuId去查找按钮的信息
  const menuInfo = ctx.request.body;
  ctx.response.body = { rtn_code: "0", rtn_msg: "OK", data: menuInfo };
}

module.exports = {
  getSystemMenuAllList,
  getSystemMenuMenuId,
  getSystemmMenuChildMenus,
  putSystemMenuInfo
};
