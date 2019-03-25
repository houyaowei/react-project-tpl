let Router = require("koa-router");
let {
  getSystemMenuAllList,
  getSystemMenuMenuId,
  getSystemmMenuChildMenus,
  putSystemMenuInfo
} = require("../../controllers/admin/menuManage");

function menuManage(app) {
  const menuManageRouter = new Router();
  //menuManage
  menuManageRouter.get("/websystem/system/menu/all", getSystemMenuAllList);
  menuManageRouter.get(
    "/websystem/system/menu/menuId/:menuId",
    getSystemMenuMenuId
  );

  menuManageRouter.get(
    "/websystem/system/menu/childMenus",
    getSystemmMenuChildMenus
  );

  menuManageRouter.put("/websystem/system/menu", putSystemMenuInfo);

  app.use(menuManageRouter.routes());
  app.use(menuManageRouter.allowedMethods());
}

module.exports = menuManage;
