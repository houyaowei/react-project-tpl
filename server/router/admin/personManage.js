let Router = require("koa-router");
let {
  getPerson,
  findOnePerson,
  updatePerson,
  deletePerson
} = require("../../controllers/admin/personManage");
function personManage(app) {
  const personManageRouter = new Router();

  //personManage
  personManageRouter.get("/websystem/system/user", getPerson);
  personManageRouter.get(
    "/websystem/system/org/childOrgs/orgId/:orgId",
    getPerson
  );
  personManageRouter.get("/websystem/system/role/all", getPerson);

  // //permission
  // personManageRouter.post("/webuser/permission/syspermission-tree", getPermissionTree);
  // personManageRouter.post("/webuser/permission/syspermission-list", getPermissionList);
  // personManageRouter.post("/webuser/permission/syspermission-find-id", findPermissionById);
  // //User
  // personManageRouter.post("/webuser/permission/user-list", getUsers);
  // personManageRouter.post("/webuser/permission/user-findone", findOneUser);
  // personManageRouter.post("/webuser/permission/user-delete", deleteUser);

  app.use(personManageRouter.routes());
  app.use(personManageRouter.allowedMethods());
}

module.exports = personManage;
