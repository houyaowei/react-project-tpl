const res = require("../../mock/dashboard/deploytopfive");

async function deploytopfive(ctx, next) {
  console.log("login method", res);
  ctx.response.body = res;
}

module.exports = {
  deploytopfive
};
