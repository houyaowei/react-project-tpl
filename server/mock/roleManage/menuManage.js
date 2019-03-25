// Request URL: http://192.168.100.212:8080/websystem/system/menu/manager/all?time=1546917971869
// Request Method: GET

module.exports = {
  data: [
    {
      childMenus: [
        {
          childMenus: [
            {
              initflag: 1,
              menuIcon: "user-add",
              menuId: 7,
              menuName: "人员管理",
              menuUrl: "admin/2",
              parentMenuId: 3
            },
            {
              initflag: 1,
              menuIcon: "compass",
              menuId: 8,
              menuName: "角色管理",
              menuUrl: "admin/3",
              parentMenuId: 3
            },
            {
              initflag: 1,
              menuIcon: "menu-fold",
              menuId: 9,
              menuName: "菜单管理",
              menuUrl: "admin/4",
              parentMenuId: 3
            },
            {
              initflag: 1,
              menuIcon: "profile",
              menuId: 10,
              menuName: "操作日志",
              menuUrl: "admin/5",
              parentMenuId: 3
            },
            {
              initflag: 1,
              menuIcon: "usergroup-add",
              menuId: 6,
              menuName: "机构管理",
              menuUrl: "admin/1",
              parentMenuId: 3
            }
          ],
          initflag: 1,
          menuIcon: "bank",
          menuId: 3,
          menuName: "系统管理",
          menuUrl: "admin/sub1",
          parentMenuId: 1
        },
        {
          childMenus: [],
          initflag: 1,
          menuIcon: "disconnect",
          menuId: 4,
          menuName: "系统集成",
          menuUrl: "admin/sub2",
          parentMenuId: 1
        },
        {
          childMenus: [
            {
              initflag: 1,
              menuIcon: "schedule",
              menuId: 11,
              menuName: "项目立项",
              menuUrl: "admin/6",
              parentMenuId: 5
            },
            {
              initflag: 1,
              menuIcon: "printer",
              menuId: 12,
              menuName: "项目审核",
              menuUrl: "admin/7",
              parentMenuId: 5
            }
          ],
          initflag: 1,
          menuIcon: "desktop",
          menuId: 5,
          menuName: "项目管理",
          menuUrl: "admin/sub3",
          parentMenuId: 1
        }
      ],
      initflag: 1,
      menuIcon: "",
      menuId: 1,
      menuName: "管理侧",
      menuUrl: "system",
      parentMenuId: 0
    }
  ],
  rtn_code: "0",
  rtn_msg: "OK"
};
