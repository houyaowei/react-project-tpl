let Router = require("koa-router");
let { listbyuser } = require("../../controllers/dashboard/listbyuser");

function listbyuserProject(app) {
  const listbyuserRouter = new Router();
  listbyuserRouter.post("/webpjm/pjm/project/listbyuser", listbyuser);

  app.use(listbyuserRouter.routes());
  app.use(listbyuserRouter.allowedMethods());
}

module.exports = listbyuserProject;
