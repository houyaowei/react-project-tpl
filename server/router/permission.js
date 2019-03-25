let Router = require("koa-router");
const router = new Router();

let { getRole } = require("../controllers/role");
let { getUsers } = require("../controllers/user");
let { getPermissionList,getPermissionTree ,findPermissionById} = require("../controllers/permission");

router.post("/webuser/permission/sysrole-list", getRole);
router.post("/webuser/permission/user-list", getUsers);
router.post("/webuser/permission/syspermission-tree", getPermissionTree);
router.post("/webuser/permission/syspermission-list", getPermissionList);
router.post("/webuser/permission/syspermission-find-id", findPermissionById);

module.exports = {
  permissionRouter() {
    return router.routes();
  },
  permissionAllowedMethods() {
    return router.allowedMethods();
  }
};