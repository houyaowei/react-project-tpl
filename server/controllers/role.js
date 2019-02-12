const res =  require("../mock/role");

async function getRole(ctx, next) {
  // console.log("login method");
  ctx.response.body = res;
}

module.exports = {
  getRole
};
