export const dshEvent = [
  {
    name: "一个老人7天没有出门，请注意查看",
    type: "alarm"
  },
  {
    name: "智慧小区发生斗殴事件,请留意",
    type: "warn"
  },
  {
    name: "云水一路人流量超过警戒量",
    type: "warn"
  },
  {
    name: "云水二路人流量超过警戒量",
    type: "warn"
  },
  {
    name: "一个老人9天没有出门，请注意查看",
    type: "warn"
  },
  {
    name: "一个老人5天没有出门，请注意查看",
    type: "warn"
  },
  {
    name: "智慧小区二期发生斗殴事件",
    type: "warn"
  },
  {
    name: " 高新二路人流量超过警戒量",
    type: "notif"
  }
];
//不同小区民族top值
export const chart2 = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  legend: {
    textStyle: {
      color: "#333"
    },
    data: ["汉族", "苗族", "维吾尔族", "傣族", "壮族"]
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true
  },
  xAxis: {
    type: "value",
    axisLabel: {
      color: "#808080"
    }
  },
  yAxis: {
    type: "category",
    data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
    axisLabel: {
      color: "#808080"
    }
  },
  series: [
    {
      name: "汉族",
      type: "bar",
      stack: "总量",
      label: {
        normal: {
          show: true,
          position: "insideRight"
        }
      },
      data: [320, 302, 301, 334, 390, 330, 320]
    },
    {
      name: "苗族",
      type: "bar",
      stack: "总量",
      label: {
        normal: {
          show: true,
          position: "insideRight"
        }
      },
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: "维吾尔族",
      type: "bar",
      stack: "总量",
      label: {
        normal: {
          show: true,
          position: "insideRight"
        }
      },
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: "傣族",
      type: "bar",
      stack: "总量",
      label: {
        normal: {
          show: true,
          position: "insideRight"
        }
      },
      data: [150, 212, 201, 154, 190, 330, 410]
    },
    {
      name: "壮族",
      type: "bar",
      stack: "总量",
      label: {
        normal: {
          show: true,
          position: "insideRight"
        }
      },
      data: [820, 832, 901, 934, 1290, 1330, 1320]
    }
  ]
};

export const warningResult = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  legend: {
    data: ["次(天)"],
    right: 30,
    textStyle: {
      color: "#333"
    }
  },
  xAxis: {
    type: "category",
    axisLabel: {
      color: "#808080"
    },
    data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
  },
  yAxis: {
    type: "value",
    axisLabel: {
      color: "#808080"
    }
  },
  series: [
    {
      name: "次(天)",
      data: [82, 93, 91, 93, 120, 30, 75],
      type: "line"
    }
  ]
};
export const influentPeople = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      crossStyle: {
        color: "#999"
      }
    }
  },
  legend: {
    data: ["访客", "黑名单", "酒店", "空巢老人"],
    right: 50,
    textStyle: {
      color: "#333"
    }
  },
  xAxis: {
    type: "category",
    data: [
      "1月",
      "2月",
      "3月",
      "4月",
      "5月",
      "6月",
      "7月",
      "8月",
      "9月",
      "10月",
      "11月",
      "12月"
    ],
    axisPointer: {
      type: "shadow"
    },
    axisLabel: {
      color: "#808080"
    }
  },
  yAxis: {
    type: "value",
    axisLabel: {
      color: "#808080"
    }
  },
  series: [
    {
      name: "访客",
      type: "bar",
      data: [16, 29, 72, 23, 25, 76, 135, 162, 32, 20, 64, 33]
    },
    {
      name: "黑名单",
      type: "bar",
      data: [26, 59, 9, 26, 28, 70, 75, 82, 48, 18, 6, 21]
    },
    {
      name: "酒店",
      type: "bar",
      data: [26, 59, 9, 26, 28, 70, 70, 182, 48, 18, 60, 23]
    },
    {
      name: "空巢老人",
      type: "line",
      data: [49, 22, 31, 75, 66, 10, 12, 23, 33, 56, 22, 53]
    }
  ]
};
export const dashboardMap = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      id: "1",
      properties: {
        name: "东莞市"
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [113.631434, 22.785249],
            [113.68352, 22.726393],
            [113.715946, 22.728106],
            [113.729528, 22.733648],
            [113.760595, 22.732608],
            [113.776022, 22.749145],
            [113.79979, 22.762082],
            [113.798487, 22.77558],
            [113.807751, 22.782751],
            [113.807005, 22.789617],
            [113.817114, 22.787828],
            [113.82107, 22.790862],
            [113.820972, 22.79716],
            [113.831136, 22.798712],
            [113.844592, 22.807118],
            [113.848474, 22.818176],
            [113.846604, 22.836261],
            [113.852499, 22.841124],
            [113.858657, 22.842748],
            [113.867071, 22.838869],
            [113.881669, 22.84166],
            [113.884552, 22.850042],
            [113.893209, 22.857826],
            [113.912232, 22.848021],
            [113.938528, 22.848007],
            [113.947005, 22.843024],
            [113.944255, 22.833765],
            [113.967204, 22.82016],
            [113.97863, 22.817777],
            [113.984701, 22.809241],
            [113.995636, 22.80674],
            [114.002808, 22.777409],
            [114.009012, 22.770248],
            [114.028642, 22.76568],
            [114.047152, 22.769052],
            [114.059539, 22.761654],
            [114.072539, 22.763837],
            [114.080466, 22.747169],
            [114.084996, 22.753782],
            [114.098323, 22.751574],
            [114.106395, 22.747544],
            [114.108111, 22.739044],
            [114.117326, 22.727155],
            [114.124784, 22.727983],
            [114.13017, 22.721509],
            [114.134691, 22.723224],
            [114.140491, 22.718419],
            [114.14728, 22.722351],
            [114.149828, 22.708201],
            [114.159587, 22.702453],
            [114.158268, 22.696263],
            [114.174126, 22.685435],
            [114.170178, 22.676054],
            [114.161741, 22.672732],
            [114.162997, 22.66756],
            [114.185264, 22.661484],
            [114.198891, 22.693261],
            [114.205844, 22.699472],
            [114.204325, 22.71681],
            [114.216392, 22.722775],
            [114.214091, 22.731504],
            [114.220991, 22.743088],
            [114.207121, 22.767605],
            [114.19559, 22.774785],
            [114.192046, 22.787241],
            [114.216219, 22.795831],
            [114.234421, 22.812199],
            [114.242731, 22.841095],
            [114.236687, 22.855163],
            [114.241066, 22.861219],
            [114.23774, 22.886459],
            [114.241095, 22.890298],
            [114.251958, 22.886907],
            [114.258703, 22.890678],
            [114.264876, 22.899504],
            [114.265529, 22.912212],
            [114.255831, 22.911544],
            [114.251683, 22.917598],
            [114.23667, 22.920244],
            [114.221313, 22.931672],
            [114.221214, 22.946262],
            [114.231592, 22.957351],
            [114.235162, 22.972301],
            [114.216796, 22.99308],
            [114.207081, 22.991661],
            [114.191541, 22.997404],
            [114.177649, 22.986809],
            [114.17647, 22.978614],
            [114.162405, 22.981628],
            [114.16136, 22.989072],
            [114.155619, 22.984336],
            [114.153147, 22.99099],
            [114.144768, 22.984733],
            [114.144776, 22.991176],
            [114.138136, 23.00128],
            [114.135644, 22.996352],
            [114.12993, 23.001853],
            [114.14296, 23.01313],
            [114.147118, 23.027759],
            [114.152704, 23.028418],
            [114.15457, 23.03201],
            [114.133301, 23.050195],
            [114.134771, 23.054268],
            [114.12191, 23.052436],
            [114.113576, 23.055145],
            [114.102445, 23.073146],
            [114.094479, 23.097538],
            [114.08996, 23.100679],
            [114.068637, 23.106421],
            [114.034286, 23.088819],
            [114.021588, 23.088506],
            [114.016052, 23.089743],
            [114.012029, 23.095828],
            [114.007285, 23.09439],
            [114.000541, 23.097758],
            [113.988756, 23.112911],
            [113.975477, 23.119985],
            [113.942793, 23.11515],
            [113.911884, 23.122055],
            [113.89858, 23.117985],
            [113.882901, 23.131111],
            [113.869525, 23.120916],
            [113.849908, 23.122],
            [113.824519, 23.134862],
            [113.765517, 23.137252],
            [113.745865, 23.14825],
            [113.72727, 23.149034],
            [113.697904, 23.128874],
            [113.667911, 23.118717],
            [113.665906, 23.123526],
            [113.651134, 23.119365],
            [113.647395, 23.110219],
            [113.616998, 23.109712],
            [113.591792, 23.093186],
            [113.559166, 23.085371],
            [113.545494, 23.061822],
            [113.528657, 23.043727],
            [113.534516, 23.004743],
            [113.570678, 22.917848],
            [113.575491, 22.860302],
            [113.581525, 22.848676],
            [113.604923, 22.829064],
            [113.631434, 22.785249]
          ]
        ]
      }
    }
  ]
};
//人口管理数据
export let people_manage = [
  {
    key: 1,
    name: "何洪斌",
    age: 32,
    sex: "男",
    cardnum: 322144197209232234,
    home: "陕西西安",
    nation: "汉族",
    marr: "已婚",
    email: "13647323223",
    address: "西湖区湖底公园1号"
  },
  {
    key: 2,
    name: "李小工",
    age: 32,
    sex: "男",
    cardnum: 342144198209232124,
    home: "陕西西安",
    nation: "汉族",
    marr: "已婚",
    email: "13223343333",
    address: "雁塔区华美十字"
  },
  {
    key: 3,
    name: "张三",
    age: 23,
    sex: "男",
    cardnum: 322144197209232234,
    home: "陕西西安",
    nation: "汉族",
    marr: "未婚",
    email: "13572623432",
    address: "高新二路"
  },
  {
    key: 4,
    name: "赵文慧",
    age: 26,
    sex: "女",
    cardnum: 622144199209232234,
    home: "广东佛山",
    nation: "汉族",
    marr: "未婚",
    email: "17824433233",
    address: "张家村"
  },
  {
    key: 5,
    name: "胡兵",
    age: 42,
    sex: "男",
    cardnum: 433144197709232234,
    home: "陕西西安",
    nation: "汉族",
    marr: "已婚",
    email: "18123223233",
    address: "城北华夏小区"
  },
  {
    key: 6,
    name: "何洁",
    age: 22,
    sex: "女",
    cardnum: 622144199609231134,
    home: "四川成都",
    nation: "汉族",
    marr: "未婚",
    email: "13562343234",
    address: "李家村"
  },
  {
    key: 7,
    name: "赵晓辉",
    age: 27,
    sex: "男",
    cardnum: 242144199109232234,
    home: "陕西铜川",
    nation: "汉族",
    marr: "未婚",
    email: "18909889878",
    address: "西湖区湖底公园1号"
  },
  {
    key: 8,
    name: "张三",
    age: 23,
    sex: "男",
    cardnum: 322144197209232234,
    home: "陕西西安",
    nation: "汉族",
    marr: "未婚",
    email: "13243454645",
    address: "高新区"
  },
  {
    key: 9,
    name: "吴彦燕",
    age: 32,
    sex: "女",
    cardnum: 622144198209232234,
    home: "甘肃兰州",
    nation: "汉族",
    marr: "已婚",
    email: "13452346346",
    address: "西湖区湖底公园1号"
  },
  {
    key: 10,
    name: "胡彦祖",
    age: 42,
    sex: "男",
    cardnum: 322144197209232234,
    home: "陕西西安",
    nation: "汉族",
    marr: "已婚",
    email: "18920908767",
    address: "西湖区湖底公园1号"
  },
  {
    key: 11,
    name: "何洪斌",
    age: 32,
    sex: "男",
    cardnum: 322144197209232234,
    home: "陕西西安",
    nation: "汉族",
    marr: "已婚",
    email: "13572623454",
    address: "西湖区湖底公园1号"
  },
  {
    key: 12,
    name: "李小工",
    age: 32,
    sex: "男",
    cardnum: 322144197209232234,
    home: "陕西西安",
    nation: "汉族",
    marr: "已婚",
    email: "18787232345",
    address: "西湖区湖底公园1号"
  },
  {
    key: 13,
    name: "张三",
    age: 23,
    sex: "男",
    cardnum: 322144197209232234,
    home: "陕西西安",
    nation: "汉族",
    marr: "未婚",
    email: "19224338933",
    address: "高新区"
  },
  {
    key: 14,
    name: "吴彦祖",
    age: 32,
    sex: "男",
    cardnum: 322144197209232234,
    home: "陕西西安",
    nation: "汉族",
    marr: "未婚",
    email: "13571661415",
    address: "西湖区湖底公园1号"
  },
  {
    key: 15,
    name: "胡彦祖",
    age: 42,
    sex: "男",
    cardnum: 322144197209232234,
    home: "陕西西安",
    nation: "汉族",
    marr: "未婚",
    email: "18816751345",
    address: "西湖区湖底公园1号"
  },
  {
    key: 16,
    name: "李大壮",
    age: 42,
    sex: "男",
    cardnum: 322144197209232234,
    home: "陕西西安",
    nation: "汉族",
    marr: "未婚",
    email: "18627465634",
    address: "城南幸福小区"
  },
  {
    key: 17,
    name: "赵亮",
    age: 12,
    sex: "男",
    cardnum: 322144197209232234,
    home: "陕西西安",
    nation: "汉族",
    marr: "未婚",
    email: "18222358840",
    address: "雁塔区三爻村"
  },
  {
    key: 18,
    name: "李洪涛",
    age: 23,
    sex: "男",
    cardnum: 322144197209232234,
    home: "陕西西安",
    nation: "汉族",
    marr: "未婚",
    email: "13562345323",
    address: "高新区"
  },
  {
    key: 19,
    name: "周星星",
    age: 22,
    sex: "男",
    cardnum: 322144197209232234,
    home: "陕西西安",
    nation: "汉族",
    marr: "未婚",
    email: "13577898764",
    address: "高新二路口"
  },
  {
    key: 20,
    name: "胡博士",
    age: 42,
    sex: "男",
    cardnum: 322144197209232234,
    home: "陕西西安",
    nation: "汉族",
    marr: "未婚",
    email: "14723235679",
    address: "雁塔区三爻小区B5栋"
  },
  {
    key: 21,
    name: "李大壮",
    age: 42,
    sex: "男",
    cardnum: 322144197209232234,
    home: "陕西西安",
    nation: "汉族",
    marr: "未婚",
    email: "18627465634",
    address: "城南幸福小区"
  },
  {
    key: 22,
    name: "赵亮",
    age: 12,
    sex: "男",
    cardnum: 322144197209232234,
    home: "陕西西安",
    nation: "汉族",
    marr: "未婚",
    email: "18222358840",
    address: "雁塔区三爻村"
  },
  {
    key: 23,
    name: "李洪涛",
    age: 23,
    sex: "男",
    cardnum: 322144197209232234,
    home: "陕西西安",
    nation: "汉族",
    marr: "未婚",
    email: "13562345323",
    address: "高新区"
  },
  {
    key: 24,
    name: "周星星",
    age: 22,
    sex: "男",
    cardnum: 322144197209232234,
    home: "陕西西安",
    nation: "汉族",
    marr: "未婚",
    email: "13577898764",
    address: "高新二路口"
  },
  {
    key: 25,
    name: "胡博士",
    age: 42,
    sex: "男",
    cardnum: 322144197209232234,
    home: "陕西西安",
    nation: "汉族",
    marr: "未婚",
    email: "14723235679",
    address: "雁塔区三爻小区B5栋"
  }
];

//
