let Router = require("koa-router");
let { login } = require("../controllers/login");

// exports = loginRouter;

function loginInterceptor(app){
	const loginRouter = new Router();
	loginRouter.post("/user/login", login);

	app.use(loginRouter.routes());
	app.use(loginRouter.allowedMethods());
}

module.exports = loginInterceptor;