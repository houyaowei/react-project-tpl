

let Router = require("koa-router");
let { login } = require("../controllers/login");


const router = new Router();

router.post("/user/login", login);


module.exports = {
  router() {
    return router.routes();
  },
  allowedMethods() {
    return router.allowedMethods();
  }
};
