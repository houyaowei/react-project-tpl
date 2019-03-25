let Router = require("koa-router");
let { getAllMenuListByUserId } = require("../../controllers/admin/adminLayout");

// exports = loginRouter;

function getAllMenuListByUserIdInterceptor(app) {
  const adminLayoutRouter = new Router();
  adminLayoutRouter.post(
    "/websystem/system/menu/allMenuListByUserId",
    getAllMenuListByUserId
  );
  app.use(adminLayoutRouter.routes());
  app.use(adminLayoutRouter.allowedMethods());
}

module.exports = getAllMenuListByUserIdInterceptor;
