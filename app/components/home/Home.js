import React from "react";
import PropTypes from 'prop-types';
import _ from "lodash";
import { Modal } from 'antd';
var echarts = require('echarts');
import history from "../../routes/history"

import "../../assets/css/dashboard.css";
import * as config from "../../../config/config";
import * as ChartConfig from "../../../config/chartConfig";
import CheckboxItem from "../commons/CheckboxItem";


class Home extends React.Component {
    constructor(props){
        super(props);
        this.map = null;
        this.state = {
            visible: false,
            dshEventList :ChartConfig.dshEvent,
        }
        this.handleOk = this.handleOk.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.showModal = this.showModal.bind(this);
        this.jumpTo = this.jumpTo.bind(this);
        this.showDetail = this.showDetail.bind(this);
    }
    componentDidMount(){
        // this.map = new BMap.Map('map');
        // const myGeo = new BMap.Geocoder();
        // const self = this;
        // myGeo.getPoint(config.DEFAULT_LOCATION, function(point){
        //     const poi = new BMap.Point(point.lng,point.lat);
        //     self.map.centerAndZoom(poi, 16);
        //     self.map.enableScrollWheelZoom();  
        //     //地图导航
        //     // self.map.addControl(new BMap.NavigationControl()); 
        // });
        //区域人口分布
        var myChart1 = echarts.init(document.getElementById('nationDis'));
        myChart1.setOption(ChartConfig.chart2);
        //区域人口分布
        var myChart2 = echarts.init(document.getElementById('warningResult'));
        myChart2.setOption(ChartConfig.warningResult);
        //流动人口实时状态
        var myChart3 = echarts.init(document.getElementById('influentPeople'));
        myChart3.setOption(ChartConfig.influentPeople);
        window.onresize = ()=>{
            myChart1.resize();
            myChart2.resize();
            myChart3.resize();
        }

        //地图，参考http://www.echartsjs.com/gallery/editor.html?c=map-usa
        // http://blog.csdn.net/zhishi_tudouni/article/details/77837875
        // var mainChart = echarts.init(document.getElementById('mapDistrict'));
        // echarts.registerMap("guangdong", ChartConfig.dashboardMap);
        // mainChart.setOption({
        //     series: [
        //         {
        //             top: "80",
        //             aspectScale : 1,
        //             type: 'map',
        //             map : "guangdong",
        //             roam : false,
        //             label: {
        //                 emphasis: {
        //                     textStyle: {
        //                         color: '#fff'
        //                     }
        //                 }
        //             }
        //         }
        //     ]
        // });
        setTimeout(() => {
            this.state.dshEventList.unshift({
                name : "有新事件，点击查看",
                type: "alarm"
            });
            this.setState({
                dshEventList : this.state.dshEventList
            });
        },4000);
    }
    jumpTo(){
        history.push("/config");
    }
    jumpToHouse(){
        history.push("/config/housemanage");
    }
    jumpToSys(){
        history.push("/sysadmin");
    }
    jumpToPreWarn(){
        history.push("/warning/prewarn");
    }
    jumpToAnalysis(){
        history.push("/analysis");
    }
    showDetail(){
        // var poi = new BMap.Point(116.307852,40.057031);
        // this.map.centerAndZoom(poi, 16);
        // var marker = new BMap.Marker(poi);  
        // this.map.addOverlay(marker);              
        // marker.setAnimation(BMAP_ANIMATION_BOUNCE); 
        history.push("warning/prewarn?from=dashboard",{
            from : "dashboard"
        });
    }
    showModal(){
        this.setState({
            visible : true
        });
    }
    handleOk(){
        this.setState({
            visible : false
        });
    }
    handleCancel(){
        this.setState({
            visible : false
        });
    }
    render(){
        var style= {
            height: window.screen.height - 90
        }
        var d = new Date();
        
        const funcs = this.props.funcs;
        let arrFunc = [];
        _.each(funcs,function(func){
            let r = Math.random();
            arrFunc.push(
                <CheckboxItem key={r} funcName={func.name} subFuncName = {func.subFunc} />
            );
        });
       const weatherStyle = {
           background : "url(/images/dashboard/weather.png)",
           width: "24px",
           height : "24px",
           verticalAlign: "middle"
       }
       const locStyle = {
            background : "url(/images/dashboard/loc-icon.png)",
            width: "14px",
            height : "20px",
            verticalAlign: "middle"
        }
        const addFuncStyle = {
            flexGrow: "1",
            float: "right",
            position: "relative",
            right: "24px",
            top: "18px",
            background : "url(/images/dashboard/add.png)",
            cursor: "point",
            width: "15px",
            height : "15px",
            verticalAlign: "middle"
        }
       
        return (
            <div>
                <div className="home-first-column">
                    <section className="area-info">
                        <span className="inline-block area-info__title title">辖区信息</span>
                        <div id="areaInfo" className="area-info__content">
                            <div className="inline-block area-info__img"></div>
                            <div className="inline-block area-info__people content">
                                <ul>
                                    <li>常驻<span className="pad">257942</span>人</li>
                                    <li>流动<span className="pad">148992</span>人</li>
                                    <li>月访客<span className="pad">82480</span>人</li>
                                    <li>60岁以上<span className="pad">80489</span>人</li>
                                </ul>
                            </div>
                            <div className="area-info__other">
                                <ul>
                                    <li>
                                        <span style={weatherStyle}></span>
                                        <span>36</span>
                                    </li>
                                    <li>
                                        <span style={locStyle}></span>
                                        <span>东莞</span> 
                                    </li>
                                    <li>
                                        <span>当地时间:</span>
                                        <span>{d.getFullYear() + "-" + (d.getMonth()+1) + '-' + d.getDate()}</span> 
                                    </li>
                                </ul>
                                </div>
                        </div>
                        
                    </section>
                    <section className="nation-distribution">
                        <div className="nation-distribution__title title">
                            区域人口民族分布
                        </div>
                        <div id="nationDis" className="nation-distribution__chart">

                        </div>
                    </section> 
                    <section className="freq-func">
                        <div className="freq-func__title">
                            <span className="title">常用功能项</span> 
                            <span>
                                <span style={addFuncStyle} onClick={this.showModal}></span>
                            </span>
                        </div>
                        
                        <div className="freq-func__items">
                            <div className="inline-block freq-func__items__pad" onClick={this.jumpTo}>
                                <div className="freq-func__items__p__icon"></div>
                                <span className="freq-func__items__title content" >人口管理</span>
                            </div>
                            
                            <div className="inline-block freq-func__items__pad" onClick={this.jumpToHouse}>
                                <div className="freq-func__items__h__icon"></div>
                                <span className="freq-func__items__title content" onClick={this.jumpTo}>房屋管理</span>
                            </div>
                            <div className="inline-block freq-func__items__pad" onClick={this.jumpToSys}>
                                <div className="freq-func__items__list__icon"></div>
                                <span className="freq-func__items__title content" onClick={this.jumpTo}>系统管理</span>
                            </div>
                            <div className="inline-block freq-func__items__pad" onClick={this.jumpToPreWarn}>
                                <div className="freq-func__items__alarm__icon"></div>
                                <span className="freq-func__items__title content" onClick={this.jumpTo}>预警管理</span>
                            </div>
                            <div className="inline-block freq-func__items__pad" onClick={this.jumpToAnalysis}>
                                <div className="freq-func__items__find__icon"></div>
                                <span className="freq-func__items__title content" onClick={this.jumpTo}>统计分析</span>
                            </div>
                        </div>
                    </section>
                </div>
                <section className="home-second-column">
                    <div className="map-district" id="mapDistrict">
                        <img src="/images/dashboard/main-map.png" style={{position:"relative",top:"20px",left:"18%"}}/>
                    </div>
                    <div  className="influent-people">
                        <div className="influent-people__title title">
                            流动人口趋势图
                        </div>
                        <div id="influentPeople" className="influent-people__content">

                        </div>
                    </div>
                </section>
                <section className="home-third-column">
                    <div className="month-total">
                        <div className="month-total__title title">
                            本月预警统计
                        </div>
                        <div className="month-total__item">
                            <span className="month-total__item__total"></span>
                            <span className="month-total__item__normal"></span>
                        </div>
                        <div className="month-total__item">
                            <span className="month-total__item__unnormal"></span>
                            <span className="month-total__item__alarm"></span>
                        </div>
                    </div>
                    <div className="warning-result">
                        <div className="warning-result__title title">本周预警趋势</div>
                        <div id="warningResult" className="warning-result__content">>

                        </div>
                    </div>
                   
                    <div className="warning-area">
                        <span className="warning-area__title title">预警信息</span>
                        <div className="warning-area__content">
                            {
                                this.state.dshEventList.map((item, key) => {
                                    return <div key={Math.random()} onClick={this.showDetail}>
                                            <span className={`warning-area__${item.type}-icon`}></span>
                                            <span className={`warning-area__${item.type}-content`}> {item.name}</span>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </section>
                
                <Modal
                    title="自定义快捷操作"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    >
                    {arrFunc}
                </Modal>
            </div>
        );
    }
}

Home.defaultProps = {
    funcs : [
        {
            "name" : "统计分析",
            "router" : "analysis",
            "subFunc" : [
                {
                    "name" : "整体数据分析",
                    "router" : "analysis/a1"
                },
                {
                    "name" : "游客数量分析",
                    "router" : "analysis/a2"
                }
            ]
        },
        {
            "name" : "智能预警",
            "router" : "basic",
            "subFunc" : [
                {
                    "name" : "布控",
                    "router" : "basic/a1"
                },
                {
                    "name" : "预警",
                    "router" : "basic/a2"
                }
            ]
        }
    ],
    notifications : [
        {
            severity: "1",
            content : "一个老人6天没有出门"
        },
        {
            severity: "2",
            content : "一个老人7天没有出门"
        },
        {
            severity: "3",
            content : "一位大爷丢了一只狗"
        }
    ]
}

export default Home;