const res = require("../../mock/dashboard/listbyuser");

async function listbyuser(ctx, next) {
  ctx.response.body = res;
}

module.exports = {
  listbyuser
};
