const res = require("../../mock/roleManage/systemRole");
const systemMenuAllRes = require("../../mock/roleManage/systemMenuAll");
const getRoleAuthorizeRes = require("../../mock/roleManage/roleAuthorize");

async function getRole(ctx, next) {
  // console.log("getRole", ctx, next);
  ctx.response.body = res;
}
async function getSystemMenuAll(ctx, next) {
  // console.log("getSystemMenuAll", ctx, next);
  ctx.response.body = systemMenuAllRes;
}

async function getRoleAuthorize(ctx, next) {
  // console.log(
  //   "getRoleAuthorize",
  //   ctx.params.menuId,
  //   ctx.querystring,
  //   ctx.query,
  //   ctx.url,
  //   ctx.request,
  //   next
  // );
  // console.log("getRoleAuthorize", ctx);
  ctx.response.body = getRoleAuthorizeRes;
  // let RoleId = ctx.query.RoleId;
  // let Roles = res.list;
  // let u = Roles.filter(u => {
  //   if (u.id == RoleId) {
  //     return u;
  //   }
  // });
  // ctx.response.body = { rtn_code: "0", rtn_msg: "OK", data: u[0] };
  // ctx.response.body = { rtn_code: "0", rtn_msg: "OK" };
}

async function postRoleAuthorize(ctx, next) {
  // console.log("postRoleAuthorize", ctx.request.body, next);
  // 传过去什么返回什么，此处，用修改逻辑；
  const menuList = ctx.request.body;
  ctx.response.body = { rtn_code: "0", rtn_msg: "OK", data: menuList };
}

async function findOneRole(ctx, next) {
  let RoleId = ctx.query.RoleId;
  let Roles = res.list;
  let u = Roles.filter(u => {
    if (u.id == RoleId) {
      return u;
    }
  });
  ctx.response.body = {
    rtn_code: "0",
    rtn_msg: "OK",
    data: u[0]
  };
}
async function updateRole(ctx, next) {
  let RoleId = ctx.query.RoleId;
  let Roles = res.list;
  let u = Roles.filter(u => {
    if (u.id == RoleId) {
      return u;
    }
  });
  ctx.response.body = {
    rtn_code: "0",
    rtn_msg: "OK",
    data: u[0]
  };
}
async function deleteRole(ctx, next) {
  let id = ctx.query.id;
  let Roles = res.list;

  for (var i = Roles.length - 1; i >= 0; i--) {
    if (id == Roles[i].id) {
      Roles.splice(i, 1);
    }
  }
  ctx.response.body = res;
}
module.exports = {
  getRole,
  getSystemMenuAll,
  getRoleAuthorize,
  postRoleAuthorize,
  findOneRole,
  updateRole,
  deleteRole
};
