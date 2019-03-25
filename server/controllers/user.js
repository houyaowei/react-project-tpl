const res =  require("../mock/user");

async function getUsers(ctx, next) {
  // console.log("login method");
  ctx.response.body = res;
}

module.exports = {
  getUsers
};
