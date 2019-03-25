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
                  initflag: 1,
                  menuType: "button" // 区分menu/button   0 1 表示？
                },
                {
                  menuName: "able",
                  menuId: 72,
                  parentMenuId: 7,
                  initflag: 0,
                  menuType: "button" // 区分menu/button
                },
                {
                  menuName: "编辑",
                  menuId: 73,
                  parentMenuId: 7,
                  initflag: 1,
                  menuType: "button" // 区分menu/button
                },
                {
                  menuName: "删除",
                  menuId: 74,
                  parentMenuId: 7,
                  initflag: 0,
                  menuType: "button" // 区分menu/button
                },
                {
                  menuName: "查询",
                  menuId: 75,
                  parentMenuId: 7,
                  initflag: 0,
                  menuType: "button" // 区分menu/button
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
    },
    {
      childMenus: [
        {
          childMenus: [],
          initflag: 1,
          menuIcon: "dashboard",
          menuId: 13,
          menuName: "项目概览",
          menuUrl: "project/sub1",
          parentMenuId: 2
        },
        {
          childMenus: [
            {
              initflag: 1,
              menuIcon: "api",
              menuId: 20,
              menuName: "定义组件",
              menuUrl: "project/2",
              parentMenuId: 14
            },
            {
              initflag: 1,
              menuIcon: "code",
              menuId: 21,
              menuName: "关联代码",
              menuUrl: "project/3",
              parentMenuId: 14
            }
          ],
          initflag: 1,
          menuIcon: "appstore",
          menuId: 14,
          menuName: "项目管理",
          menuUrl: "project/sub2",
          parentMenuId: 2
        },
        {
          childMenus: [
            {
              initflag: 1,
              menuIcon: "profile",
              menuId: 24,
              menuName: "构建管理",
              menuUrl: "project/6",
              parentMenuId: 15
            },
            {
              initflag: 1,
              menuIcon: "customer-service",
              menuId: 25,
              menuName: "部署管理",
              menuUrl: "project/7",
              parentMenuId: 15
            },
            {
              initflag: 1,
              menuIcon: "shopping-cart",
              menuId: 27,
              menuName: "介质仓库",
              menuUrl: "project/9",
              parentMenuId: 15
            },
            {
              initflag: 0,
              menuIcon: "cloud",
              menuId: 41,
              menuName: "镜像仓库",
              menuUrl: "project/24",
              parentMenuId: 15
            },
            {
              initflag: 0,
              menuIcon: "car",
              menuId: 42,
              menuName: "应用市场",
              menuUrl: "project/25",
              parentMenuId: 15
            }
          ],
          initflag: 1,
          menuIcon: "global",
          menuId: 15,
          menuName: "构建&部署",
          menuUrl: "project/sub3",
          parentMenuId: 2
        },
        {
          childMenus: [
            {
              initflag: 1,
              menuIcon: "area-chart",
              menuId: 28,
              menuName: "效率报表",
              menuUrl: "project/10",
              parentMenuId: 16
            },
            {
              initflag: 1,
              menuIcon: "bar-chart",
              menuId: 29,
              menuName: "质量报表",
              menuUrl: "project/11",
              parentMenuId: 16
            }
          ],
          initflag: 1,
          menuIcon: "contacts",
          menuId: 16,
          menuName: "持续反馈",
          menuUrl: "project/sub4",
          parentMenuId: 2
        },
        {
          childMenus: [
            {
              initflag: 1,
              menuIcon: "camera",
              menuId: 31,
              menuName: "组件运维",
              menuUrl: "project/13",
              parentMenuId: 17
            }
          ],
          initflag: 1,
          menuIcon: "desktop",
          menuId: 17,
          menuName: "运维监控",
          menuUrl: "project/sub5",
          parentMenuId: 2
        },
        {
          childMenus: [
            {
              initflag: 1,
              menuIcon: "environment",
              menuId: 32,
              menuName: "环境",
              menuUrl: "project/14",
              parentMenuId: 18
            },
            {
              initflag: 1,
              menuIcon: "inbox",
              menuId: 33,
              menuName: "资源",
              menuUrl: "project/15",
              parentMenuId: 18
            },
            {
              initflag: 1,
              menuIcon: "team",
              menuId: 34,
              menuName: "团队",
              menuUrl: "project/16",
              parentMenuId: 18
            },
            {
              initflag: 1,
              menuIcon: "compass",
              menuId: 35,
              menuName: "角色",
              menuUrl: "project/17",
              parentMenuId: 18
            }
          ],
          initflag: 1,
          menuIcon: "setting",
          menuId: 18,
          menuName: "设置",
          menuUrl: "project/sub6",
          parentMenuId: 2
        }
      ],
      initflag: 1,
      menuIcon: "",
      menuId: 2,
      menuName: "项目侧",
      menuUrl: "project",
      parentMenuId: 0
    }
  ],
  rtn_code: "0",
  rtn_msg: "OK"
};
