const res = require("../../mock/allMenuListByUserId");

async function getAllMenuListByUserId(ctx, next) {
  // console.log("login method");
  ctx.response.body = res;
}

module.exports = {
  getAllMenuListByUserId
};
