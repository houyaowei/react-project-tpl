const res =  require("../mock/permission");

async function getPermissionList(ctx, next) {
  console.log("get Permissions ");
  console.log(res);
  ctx.response.body = res.permission_list;
}
async function getPermissionTree(ctx, next) {
  ctx.response.body = res.permission_tree;
}
async function findPermissionById(ctx, next) {
  ctx.response.body = res.permissions_by_id;
}
module.exports = {
  getPermissionList,
  getPermissionTree,
  findPermissionById
};
