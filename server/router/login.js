let Router = require("koa-router");

const loginRouter = new Router();

let { login } = require("../controllers/login");

loginRouter.post("/user/login", login);

exports = loginRouter;