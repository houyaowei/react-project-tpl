const res = require("../../mock/dashboard/rate");

async function rate(ctx, next) {
  console.log("login method", res);
  ctx.response.body = res;
}

module.exports = {
  rate
};
