const res =  require("../mock/login");

async function login(ctx, next) {
  // console.log("login method");
  ctx.response.body = res;
}

module.exports = {
  login
};
