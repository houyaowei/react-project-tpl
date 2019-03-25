let Router = require("koa-router");
let {
  getRole,
  getSystemMenuAll,
  getRoleAuthorize,
  postRoleAuthorize,
  findOneRole,
  updateRole,
  deleteRole
} = require("../../controllers/admin/roleManage");
function roleManage(app) {
  const roleManageRouter = new Router();

  //roleManage
  roleManageRouter.get("/websystem/system/role", getRole);
  roleManageRouter.get("/websystem/system/menu/manager/all", getSystemMenuAll);

  // roleManageRouter.get("/websystem/system/role/menus/", getRoleAuthorize);

  roleManageRouter.get(
    "/websystem/system/role/menus/:menuId",
    getRoleAuthorize
  );

  roleManageRouter.post("/websystem/system/role/authorize", postRoleAuthorize);

  app.use(roleManageRouter.routes());
  app.use(roleManageRouter.allowedMethods());
}

module.exports = roleManage;
