//不同小区民族top值
export const chart2 = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        textStyle : {
            color: "#fff"
        },
        data: ['汉族', '苗族','维吾尔族','傣族','壮族']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis:  {
        type: 'value',
        axisLabel: {
            color: "#fff"
        }
    },
    yAxis: {
        type: 'category',
        data: ['周一','周二','周三','周四','周五','周六','周日'],
        axisLabel: {
            color: "#fff"
        }
    },
    series: [
        {
            name: '汉族',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [320, 302, 301, 334, 390, 330, 320]
        },
        {
            name: '苗族',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '维吾尔族',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '傣族',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [150, 212, 201, 154, 190, 330, 410]
        },
        {
            name: '壮族',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [820, 832, 901, 934, 1290, 1330, 1320]
        }
    ]
}

export const warningResult = {
    legend: {
        textStyle : {
            color: "#fff"
        }
    },
    xAxis: {
        type: 'category',
        axisLabel: {
            color: "#fff"
        },
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            color: "#fff"
        }
    },
    series: [{
        data: [82, 93, 91, 93, 120, 30, 75],
        type: 'line'
    }]
};
export const influentPeople = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    legend: {
        data:['访客','黑名单','酒店','空巢老人'],
        textStyle : {
            color: "#fff"
        }
    },
    xAxis: {
            type: 'category',
            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
            axisPointer: {
                type: 'shadow'
            },
            axisLabel: {
                color: "#fff"
            }
    },
    yAxis: {
            type: 'value',
            axisLabel: {
                color: "#fff"
            }
        }
    ,
    series: [
        {
            name:'访客',
            type:'bar',
            data:[6, 9, 7.0, 23, 25, 76, 135, 162, 32, 20.0, 6.4, 3.3]
        },
        {
            name:'黑名单',
            type:'bar',
            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        },
        {
            name:'酒店',
            type:'bar',
            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        },
        {
            name:'空巢老人',
            type:'line',
            data:[9.0, 22, 31, 15, 6, 10, 12, 23, 33, 16, 22, 23]
        }
    ]
};
