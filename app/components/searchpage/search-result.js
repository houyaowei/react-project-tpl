import React from 'react';
import ReactDOM from 'react-dom';
import history from "../../routes/history";
export default class Searchresult extends React.Component{
    constructor(props){
        super(props);
        this.state={
            chart1:"",
            chart2:"",
        };
        this.people_manage = this.people_manage.bind(this);
        this.house_manage = this.house_manage.bind(this);
    }
    people_manage(data){
        history.push( "/config",{person: data});
    }
    house_manage(data){
        history.push( "/config/housemanage",{house: data});
    }
    componentWillReceiveProps(){
        this.setState({chart1:this.props.chart1,chart2:this.props.chart2});
        var Chart = require('echarts');  //chart模块
        var yjchart = Chart.init(document.getElementById(this.props.chart1));
        var yjchart1 = Chart.init(document.getElementById(this.props.chart2));
        var colors = ['#5793f3', '#d14a61', '#675bba'];
        yjchart.setOption({
            color: colors,
            tooltip: {
                trigger: 'none',
                axisPointer: {
                    type: 'cross'
                }
            },
            legend: {
                data:["访客记录"],
                textStyle:{color:"#999999",},
            },
            grid: {
                top: 70,
                bottom: 50
            },
            xAxis: [
                {
                    type: 'category',
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLine: {
                        onZero: false,
                        lineStyle: {
                            color: "#333333"
                        }
                    },
                    axisPointer: {
                        label: {
                            formatter: function (params) {
                                return '访客数量：' + params.value
                                    + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                            },
                            color:"#999999"
                            
                        }
                    },
                    data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
                },
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLine: {
                        onZero: false,
                        lineStyle: {
                            color: "#333333"
                        }
                    },
                    axisPointer: {
                        label: {
                            color:"#999999", 
                        }
                    },
                    
                },
            ],
            series: [
                {
                    name:'访客记录',
                    type:'line',
                    smooth: true,
                    data:this.props.data.visiter.data[0]
                },
            ]    
        }, true);
        yjchart1.setOption({
            color: ['#3398DB'],
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['第一周', '第二周', '第三周', '第四周', '第五周', '第六周', '第七周'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'直接访问',
                    type:'bar',
                    barWidth: '60%',
                    data:this.props.data.inout.data,
                }
            ]
        }, true);
    }
    componentDidMount(){
        this.setState({chart1:this.props.chart1,chart2:this.props.chart2});
        var Chart = require('echarts');  //chart模块
        var yjchart = Chart.init(document.getElementById(this.props.chart1));
        var yjchart1 = Chart.init(document.getElementById(this.props.chart2));
        var colors = ['#5793f3', '#d14a61', '#675bba'];
        yjchart.setOption({
            color: colors,
            tooltip: {
                trigger: 'none',
                axisPointer: {
                    type: 'cross'
                }
            },
            legend: {
                data:["访客记录"],
                textStyle:{color:"#999999",},
            },
            grid: {
                top: 70,
                bottom: 50
            },
            xAxis: [
                {
                    type: 'category',
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLine: {
                        onZero: false,
                        lineStyle: {
                            color: "#333333"
                        }
                    },
                    axisPointer: {
                        label: {
                            formatter: function (params) {
                                return '访客数量：' + params.value
                                    + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                            },
                            color:"#999999"
                            
                        }
                    },
                    data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
                },
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLine: {
                        onZero: false,
                        lineStyle: {
                            color: "#333333"
                        }
                    },
                    axisPointer: {
                        label: {
                            color:"#999999", 
                        }
                    },
                    
                },
            ],
            series: [
                {
                    name:'访客记录',
                    type:'line',
                    smooth: true,
                    data:this.props.data.visiter.data[0]
                },
            ]    
        }, true);
        yjchart1.setOption({
            color: ['#3398DB'],
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['第一周', '第二周', '第三周', '第四周', '第五周', '第六周', '第七周'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'直接访问',
                    type:'bar',
                    barWidth: '60%',
                    data:this.props.data.inout.data,
                }
            ]
        }, true);
        window.addEventListener('resize',function(){
            yjchart.resize();
            yjchart1.resize();  //窗口改变大小时重绘图表
        })
    }
    render(){
        return(
            <div className="result-Content">
                <div className="card-result" onClick={() => this.people_manage(this.props.data)}>
                    <p className="card-tile">个人信息<span className="title-right-more"></span></p>
                    <div className="result-img-message">
                            <div className="imgcontent">
                                <img className="search-result-photo" src={this.props.data.person.img}/>
                            </div>
                            <div className="ulcontent">
                                <ul className="search-result-detail">
                                    <li><span className="search-result-detail-title">姓名：</span><span className="resulevalue">{this.props.data.person.name}</span></li>
                                    <li><span  className="search-result-detail-title">年龄：</span><span className="resulevalue">{this.props.data.person.age}岁</span></li>
                                    <li><span  className="search-result-detail-title">籍贯：</span><span className="resulevalue">{this.props.data.person.address}</span></li>
                                    <li><span  className="search-result-detail-title">社区：</span><span className="resulevalue">{this.props.data.person.house}</span></li>
                                    <li><span  className="search-result-detail-title">详细地址：</span><span className="resulevalue">{this.props.data.person.detailed_address}</span></li>
                                </ul>
                            </div>
                    </div>
                    <div className="status">
                        {
                            this.props.data.person.status=="黑名单"?
                            <p><span className="status-card-black"></span><span className="status-title">黑名单</span></p> :
                            this.props.data.person.status=="正常"?
                            <p><span className="status-card-normal"></span><span className="status-title">正常</span></p>:''
                        }
                    </div>
                </div>
                <div className="card-result" onClick={() => this.house_manage(this.props.data)}>
                    <p className="card-tile">房屋<span className="title-right-more"></span></p>
                    <div className="result-img-message">
                            <div className="imgcontent">
                                <img className="search-result-photo" src={this.props.data.house.houseimg}/>
                            </div>
                            <div className="ulcontent">
                                <ul className="search-result-detail">
                                    <li><span className="search-result-detail-title">名下房屋数量：</span><span className="resulevalue">{this.props.data.house.housenum}</span></li>
                                    <li><span  className="search-result-detail-title">面积：</span><span className="resulevalue">{this.props.data.house.housearea}平</span></li>
                                    <li><span  className="search-result-detail-title">所在城市：</span><span className="resulevalue">{this.props.data.house.city}</span></li>
                                    <li><span  className="search-result-detail-title">社区：</span><span className="resulevalue">{this.props.data.house.house}</span></li>
                                    <li><span  className="search-result-detail-title">详细地址：</span><span className="resulevalue">{this.props.data.house.detailed_address}</span></li>
                                </ul>
                            </div>
                    </div>
                    <div className="status">
                        {
                            this.props.data.person.status=="黑名单"?
                            <p><span className="status-card-black"></span><span className="status-title">黑名单</span></p> :
                            this.props.data.person.status=="正常"?
                            <p><span className="status-card-normal"></span><span className="status-title">正常</span></p>:''
                        }
                    </div>
                </div>
                <div className="card-result">
                    <p className="card-tile">访客记录<span className="title-right-more"></span></p>
                    <div className="result-visiter" id={this.props.chart1}>
                            
                    </div>
                </div>
                <div className="card-result">
                    <p className="card-tile">出入记录<span className="title-right-more"></span></p>
                    <div className="result-out" id={this.props.chart2}>
                            
                    </div>
                </div>
            </div>
        )
    }
}