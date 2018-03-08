import React from "react";
import PropTypes from 'prop-types';
import _ from "lodash";
import { Modal } from 'antd';
var echarts = require('echarts');
import "../../assets/css/dashboard.css";
import Header from "./Header";
import 'antd/dist/antd.css';
import * as config from "../../../config/config";
import * as ChartConfig from "../../../config/chartConfig";
import CheckboxItem from "../commons/CheckboxItem";
import history from "../../routes/history"

class Home extends React.Component {
    constructor(props){
        super(props);
        this.map = null;
        this.state = {
            visible: false
        }
        this.handleOk = this.handleOk.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.showModal = this.showModal.bind(this);
        this.jumpTo = this.jumpTo.bind(this);
        this.showDetail = this.showDetail.bind(this);
    }
    componentDidMount(){
        this.map = new BMap.Map('map');
        const myGeo = new BMap.Geocoder();
        const self = this;
        myGeo.getPoint(config.DEFAULT_LOCATION, function(point){
            const poi = new BMap.Point(point.lng,point.lat);
            self.map.centerAndZoom(poi, 16);
            self.map.enableScrollWheelZoom();  
            //地图导航
            self.map.addControl(new BMap.NavigationControl()); 
        });
        //区域人口分布
        var myChart = echarts.init(document.getElementById('charts2'));
        myChart.setOption(ChartConfig.chart2);
        //区域人口分布
        var myChart = echarts.init(document.getElementById('warningResult'));
        myChart.setOption(ChartConfig.warningResult);
        //流动人口实时状态
        var myChart = echarts.init(document.getElementById('influentPeople'));
        myChart.setOption(ChartConfig.influentPeople);
    }
    jumpTo(){
        history.push("analysis");
    }
    showDetail(){
        var poi = new BMap.Point(116.307852,40.057031);
        this.map.centerAndZoom(poi, 16);
        var marker = new BMap.Marker(poi);  
        this.map.addOverlay(marker);              
        marker.setAnimation(BMAP_ANIMATION_BOUNCE); 
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
            height: window.screen.height - 20
        }
        const funcs = this.props.funcs;
        let arrFunc = [];
        _.each(funcs,function(func){
            let r = Math.random();
            arrFunc.push(
                <CheckboxItem key={r} funcName={func.name} subFuncName = {func.subFunc} />
            );
        });
        const notifications = this.props.notifications;
        // let arrNotifis = [];
        // _.each(notifications, function(notifi){
        //     arrNotifis.push(
                
        //     );
        // });
        return (
            <div>
                <div id="map" style={style}>
                </div>
                <div className="area-info">
                    <span className="inline-block area-info__title">辖区信息</span>
                    <div id="areaInfo">
                        <div className="inline-block area-info__img"></div>
                        <div className="inline-block area-info__people">
                            <ul>
                                <li>常驻人口<span className="pad">200</span>人</li>
                                <li>流动人口<span className="pad">200</span>人</li>
                                <li>月访客<span className="pad">200</span>人</li>
                                <li>60岁以上人口<span className="pad">200</span>人</li>
                            </ul>
                        </div>
                    </div>
                    <div className="area-info__other">
                        <span>晴</span>
                        <span>西安</span>
                        <span>时间:2018-3-7</span>
                    </div>
                </div>
                <div id="charts2" className="total-chart2">

                </div>
                <div id="warningResult" className="warning-result">

                </div>
                <div  className="influent-people">
                    <div className="influent-people__title">
                        流动人口实时状态
                    </div>
                    <div id="influentPeople" className="influent-people__content">

                    </div>
                </div>
                <div className="warning-area">
                    <span className="warning-area__title">紧急通知</span>
                    <div className="warning-area__content">
                        <div onClick={this.showDetail}>一个老人6天没有出门</div>
                        <div>一个老人7天没有出门</div>
                        <div>一位大爷丢了一只狗</div>
                    </div>
                </div>
                <div className="freq-func">
                    <div className="freq-func__title">
                        <span>常用功能项</span> 
                        <span>
                            <span onClick={this.showModal}>+</span>
                        </span>
                    </div>
                    
                    <div className="freq-func__items">
                        <span onClick={this.jumpTo}></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="month-total">
                    <div className="month-total__title">
                        本月整体统计
                    </div>
                    <div className="month-total__item">
                        <span></span>
                        <span></span>
                    </div>
                    <div className="month-total__item">
                        <span></span>
                        <span></span>
                    </div>
                </div>
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
            "name" : "分析",
            "router" : "analysis",
            "subFunc" : [
                {
                    "name" : "分析一",
                    "router" : "analysis/a1"
                },
                {
                    "name" : "分析二",
                    "router" : "analysis/a2"
                }
            ]
        },
        {
            "name" : "基本功能",
            "router" : "basic",
            "subFunc" : [
                {
                    "name" : "功能一",
                    "router" : "basic/a1"
                },
                {
                    "name" : "功能二",
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