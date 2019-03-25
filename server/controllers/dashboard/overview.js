const res = require("../../mock/dashboard/overview");

async function overview(ctx, next) {
  console.log("login method", res);
  ctx.response.body = res;
}

module.exports = {
  overview
};
