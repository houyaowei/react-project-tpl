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
              parentMenuId: 3,
              childMenus: [
                {
                  menuName: "新增",
                  menuId: 71,
                  parentMenuId: 7,
                  initflagButton: 0
                },
                {
                  menuName: "able",
                  menuId: 72,
                  parentMenuId: 7,
                  initflagButton: 0
                },
                {
                  menuName: "编辑",
                  menuId: 73,
                  parentMenuId: 7,
                  initflagButton: 1
                },
                {
                  menuName: "删除",
                  menuId: 74,
                  parentMenuId: 7,
                  initflagButton: 0
                },
                {
                  menuName: "查询",
                  menuId: 75,
                  parentMenuId: 7,
                  initflagButton: 1
                }
              ]
            },
            {
              initflag: 1,
              menuIcon: "compass",
              menuId: 8,
              menuName: "角色管理",
              menuUrl: "admin/3",
              parentMenuId: 3,
              childMenus: [
                {
                  menuName: "新增",
                  menuId: 81,
                  parentMenuId: 8,
                  initflagButton: 1
                },
                {
                  menuName: "授权",
                  menuId: 82,
                  parentMenuId: 8,
                  initflagButton: 1
                },
                {
                  menuName: "编辑",
                  menuId: 83,
                  parentMenuId: 8,
                  initflagButton: 1
                },
                {
                  menuName: "删除",
                  menuId: 84,
                  parentMenuId: 8,
                  initflagButton: 1
                },
                {
                  menuName: "查询",
                  menuId: 85,
                  parentMenuId: 8,
                  initflagButton: 1
                }
              ]
            },
            {
              initflag: 1,
              menuIcon: "menu-fold",
              menuId: 9,
              menuName: "菜单管理",
              menuUrl: "admin/4",
              parentMenuId: 3,
              childMenus: [
                {
                  menuName: "增加下级菜单",
                  menuId: 91,
                  parentMenuId: 9,
                  initflagButton: 1
                },
                {
                  menuName: "编辑此菜单",
                  menuId: 92,
                  parentMenuId: 9,
                  initflagButton: 1
                }
                //编辑两个不一样的名称？？？怎样去区分
              ]
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
              parentMenuId: 3,
              childMenus: [
                {
                  menuName: "增加下级菜单",
                  menuId: 61,
                  parentMenuId: 6,
                  initflagButton: 1
                },
                {
                  menuName: "编辑此菜单",
                  menuId: 62,
                  parentMenuId: 6,
                  initflagButton: 1
                },
                {
                  menuName: "删除此菜单",
                  menuId: 63,
                  parentMenuId: 6,
                  initflagButton: 1
                }
                //编辑/删除两个不一样的名称？？？怎样去区分
              ]
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
