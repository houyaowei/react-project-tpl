let Router = require("koa-router");
let { overview } = require("../../controllers/dashboard/overview");
let { deploytopfive } = require("../../controllers/dashboard/deploytopfive");
let { buildtopfive } = require("../../controllers/dashboard/buildtopfive");
let { rate } = require("../../controllers/dashboard/rate");

// exports = loginRouter;

function dashboard(app) {
  const dashboardRouter = new Router();
  dashboardRouter.post("/webpjm/pjm/project/overview", overview);
  dashboardRouter.post("/webpjm/pjm/project/buildtopfive", buildtopfive);
  dashboardRouter.post("/webpjm/pjm/project/deploytopfive", deploytopfive);
  dashboardRouter.post("/webpjm/pjm/project/rate", rate);

  app.use(dashboardRouter.routes());
  app.use(dashboardRouter.allowedMethods());
}

module.exports = dashboard;
