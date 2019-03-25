// Request URL: http://localhost:8090/user/login
// Request Method: POST
module.exports = {
  data: [
    {
      projectStatus: 1,
      appCount: 1,
      projectCode: "iot",
      createTime: "2019-01-09 15:10:21",
      projectOwner: "devops",
      updateTime: "2019-01-09 15:10:31",
      projectName: "iot",
      projectId: 55
    },
    {
      projectStatus: 1,
      appCount: 0,
      projectCode: "pasq",
      createTime: "2019-01-09 14:13:05",
      projectOwner: "devops",
      updateTime: "2019-01-09 14:13:10",
      projectName: "project2",
      projectId: 50
    },
    {
      projectStatus: 1,
      appCount: 0,
      projectCode: "project3",
      createTime: "2019-01-09 11:33:13",
      projectOwner: "devops",
      updateTime: "2019-01-09 11:33:23",
      projectName: "project3",
      projectId: 45
    }
  ],
  rtn_code: "0",
  rtn_msg: "OK",
  pageBean: {
    total: 3,
    size: 10,
    totalPage: 1,
    page: 1
  }
};
