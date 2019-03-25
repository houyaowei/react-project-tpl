const res = require("../../mock/dashboard/buildtopfive");

async function buildtopfive(ctx, next) {
  console.log("login method", res);
  ctx.response.body = res;
}

module.exports = {
  buildtopfive
};
