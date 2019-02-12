let Router = require("koa-router");
// const router = new Router();

let { getRole } = require("../controllers/role");
let { getUsers,findOneUser,deleteUser } = require("../controllers/user");
let { getPermissionList,getPermissionTree ,findPermissionById} = require("../controllers/permission");

// module.exports = {
//   permissionRouter() {
//     return router.routes();
//   },
//   permissionAllowedMethods() {
//     return router.allowedMethods();
//   }
// };

function permission(app){
	const perRouter = new Router();

	//role
	perRouter.post("/webuser/permission/sysrole-list", getRole);

	//permission
	perRouter.post("/webuser/permission/syspermission-tree", getPermissionTree);
	perRouter.post("/webuser/permission/syspermission-list", getPermissionList);
	perRouter.post("/webuser/permission/syspermission-find-id", findPermissionById);

	//User
	perRouter.post("/webuser/permission/user-list", getUsers);
	perRouter.post("/webuser/permission/user-findone", findOneUser);
	perRouter.post("/webuser/permission/user-delete", deleteUser);

	app.use(perRouter.routes());
	app.use(perRouter.allowedMethods());
}

module.exports = permission;