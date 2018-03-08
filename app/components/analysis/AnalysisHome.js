import React from "react";
import { Cascader,Switch,Card,Col,Row } from 'antd';
var echarts = require('echarts');

const options = [{
    value: '广东',
    label: '广东',
    children: [{
        value: '东莞',
        label: '东莞',
    },{
        value: '广州',
        label: '广州',
    },{
        value: '深圳',
        label: '深圳',
    }]
}, {
    value: '江苏',
    label: '江苏',
    children: [{
        value: '南京',
        label: '南京',
    }],
}];
class AnalysisHome extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title:'东莞',
        };
        this.map = null;
        this.heatmapOverlay = null;
        this.toggleHeat = this.toggleHeat.bind(this);
        this.chooseCity = this.chooseCity.bind(this);
    }
    toggleHeat(){
        this.heatmapOverlay.toggle();
    }
    chooseCity(value){
        console.log(value);
        if(value.length===1){
            this.map.centerAndZoom(value[0],9);
            this.setState({title:value[0]})
        }else if(value.length===2){
            this.map.centerAndZoom(value[1],13);
            this.setState({title:value[1]})
        }
    }
    componentDidMount(){
        this.map = new BMap.Map('smallMap');
        var poi = new BMap.Point(116.307852,40.057031);
        this.map.centerAndZoom(poi, 15);
        this.map.enableScrollWheelZoom();
        //添加热力图
        this.heatmapOverlay = new BMapLib.HeatmapOverlay({
            "radius":20,
            "visible":true,
            "opacity":70
        });
        this.map.addOverlay(this.heatmapOverlay);
        //模拟热点数据
        var points =[
            {"lng":116.302261,"lat":40.051984,"count":50},
            {"lng":116.322332,"lat":40.056532,"count":51},
            {"lng":116.299787,"lat":40.050658,"count":15},
            {"lng":116.301455,"lat":40.050921,"count":40},
            {"lng":116.321843,"lat":40.055516,"count":100},
            {"lng":116.30246,"lat":40.058503,"count":6},
            {"lng":116.301289,"lat":40.059989,"count":18},
            {"lng":116.303162,"lat":40.055051,"count":80},
            {"lng":116.321039,"lat":40.05782,"count":11},
            {"lng":116.31387,"lat":40.057253,"count":7},
            {"lng":116.31673,"lat":40.059426,"count":42},
            {"lng":116.318107,"lat":40.056445,"count":4},
            {"lng":116.307521,"lat":40.057943,"count":27},
            {"lng":116.316812,"lat":40.050836,"count":23},
            {"lng":116.315682,"lat":40.05463,"count":60},
            {"lng":116.304424,"lat":40.054675,"count":8},
            {"lng":116.309242,"lat":40.054509,"count":15},
            {"lng":116.308766,"lat":40.051408,"count":25},
            {"lng":116.305674,"lat":40.054396,"count":21},
            {"lng":116.302261,"lat":40.051984,"count":50},
            {"lng":116.322332,"lat":40.056532,"count":51},
            {"lng":116.299787,"lat":40.050658,"count":15},
            {"lng":116.301455,"lat":40.050921,"count":40},
            {"lng":116.321843,"lat":40.055516,"count":100},
            {"lng":116.30246,"lat":40.058503,"count":6},
            {"lng":116.301289,"lat":40.059989,"count":18},
            {"lng":116.305162,"lat":40.055051,"count":80},
            {"lng":116.304039,"lat":40.05782,"count":11},
            {"lng":116.30387,"lat":40.057253,"count":7},
            {"lng":116.30273,"lat":40.059426,"count":42},
            {"lng":116.301107,"lat":40.056445,"count":4},
            {"lng":116.300521,"lat":40.057943,"count":27},
            {"lng":116.299812,"lat":40.050836,"count":23},
            {"lng":116.298682,"lat":40.05463,"count":60},
            {"lng":116.297424,"lat":40.054675,"count":8},
            {"lng":116.296242,"lat":40.054509,"count":15},
            {"lng":116.295766,"lat":40.051408,"count":25},
            {"lng":116.321674,"lat":40.054396,"count":58},
            {"lng":116.321674,"lat":40.054396,"count":21},
            {"lng":116.321674,"lat":40.054396,"count":34},
            {"lng":116.321674,"lat":40.054396,"count":55},
            {"lng":116.321674,"lat":40.054396,"count":23},
            {"lng":116.321674,"lat":40.054396,"count":21},
            {"lng":116.321674,"lat":40.054396,"count":15},
            {"lng":116.321674,"lat":40.054396,"count":76},
        ];
        var testData ={data:points,max:200};
        this.heatmapOverlay.setDataSet(testData);
        this.heatmapOverlay.toggle();
        var myChart1 = echarts.init(document.getElementById('chart1'));
        var myChart2 = echarts.init(document.getElementById('chart2'));
        var myChart3 = echarts.init(document.getElementById('chart3'));
        var option = [{
            title: {
                text: '各民族人口统计',
                subtext: '单位/万人'
            },
            tooltip: {},
            legend: {
                data:['人数']
            },
            xAxis: {
                data: ["汉族","回族","壮族","维吾尔族","满族"]
            },
            yAxis: {},
            series: [{
                name: '人数',
                type: 'bar',
                data: [5, 20, 36, 10, 10]
            }]
        },{
            title: {
                text: '各民族人口TOP5',
                subtext: '单位/万人'
            },
            tooltip: {},
            legend: {
                data:['人数']
            },
            xAxis: {
            },
            yAxis: {
                data: ["汉族","回族","壮族","维吾尔族","满族"]
            },
            series: [{
                name: '人数',
                type: 'bar',
                data: [9, 16, 18, 23, 30]
            }]
        },{
            title : {
                text: '各民族所占比例',
                x:'center'
            },
            tooltip : {
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ["汉族","回族","壮族","维吾尔族","满族"]
            },
            series : [
                {
                    name: '民族',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:335, name:'满足'},
                        {value:310, name:'维吾尔族'},
                        {value:234, name:'壮族'},
                        {value:135, name:'回族'},
                        {value:1548, name:'汉族'}
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        }];
        myChart1.setOption(option[0]);
        myChart2.setOption(option[1]);
        myChart3.setOption(option[2]);
    }
    render(){
        return (
            <div className='right-body'>
                <Cascader
                    size="large"
                    defaultValue={['广东', '东莞']}
                    options={options}
                    onChange={this.chooseCity}
                    changeOnSelect
                />
                <div className="heatmap-switch">
                    <span>热力图</span>
                    <Switch id='switchButton' onChange={this.toggleHeat}  checkedChildren="开" unCheckedChildren="关"/>
                </div>
                <div id="smallMap"/>
                <Row className="right-top" >
                    <Col span={7}>
                        <div id="chart1" className="chart"></div>
                    </Col>
                    <Col span={9}>
                        <div id="chart2" className="chart"></div>
                    </Col>
                    <Col span={7}>
                        <div id="chart3" className="chart"></div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default AnalysisHome;