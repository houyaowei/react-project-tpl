import React from "react";
import PropTypes from 'prop-types';
import _ from "lodash";
import { Modal } from 'antd';
import * as RoutesConfig from '../../routes/RouterConfig';
import RenderRoutes from '../../routes/RenderRoutes';

var echarts = require('echarts');
import "../../assets/css/dashboard.css";
import Header from "./Header";
import 'antd/dist/antd.css';
import * as config from "../../../config/config";
import * as ChartConfig from "../../../config/chartConfig";
import CheckboxItem from "../commons/CheckboxItem";
import history from "../../routes/history";

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
        
        return (
            <div>
                this is home page
            </div>
            
        );
    }
}

Home.defaultProps = {
    funcs : [
        
    ],
    notifications : [
        
    ]
}

export default Home;