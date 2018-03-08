import React from "react";
var echarts = require('echarts');
import { Row,Col,Select } from 'antd'

const Option = Select.Option;
class AnalysisPage4 extends React.Component {
    constructor(props){
        super(props);
        this.state={
            title:'一个月',
            current:this.props.current
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(value) {
        this.setState({title:value})
    }

    componentDidUpdate(){
        var myChart1 = echarts.init(document.getElementById('chart1'));
        var myChart2 = echarts.init(document.getElementById('chart2'));
        var myChart3 = echarts.init(document.getElementById('chart3'));
        var myChart4 = echarts.init(document.getElementById('chart4'));
        var option1 = [{
            title: {
                text: `各民族人数同比${this.state.title}分析`
            },
            tooltip: {},
            legend: {
                data:['默认','往期']
            },
            xAxis: {
                data: ["人口"]
            },
            yAxis: {},
            series: [{
                name: '默认',
                type: 'bar',
                data: [21]
            },{
                name: '往期',
                type: 'bar',
                data: [14]
            }]
        },{
            title: {
                text: `各民族人数环比${this.state.title}分析`
            },
            tooltip: {},
            legend: {
                data:['默认','周边','周边2']
            },
            xAxis: {
                data: ["人口"]
            },
            yAxis: {},
            series: [{
                name: '默认',
                type: 'bar',
                data: [15]
            },{
                name: '周边',
                type: 'bar',
                data: [17]
            },{
                name: '周边2',
                type: 'bar',
                data: [21]
            }]
        },{
            title: {
                text: `各民族人数${this.state.title}波动分析`
            },
            tooltip: {},
            legend: {
            },
            xAxis: {
                type: 'category',
                data: ['5', '10', '15', '20', '25', '30']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [560, 720, 893, 934, 1290, 1270, 1320],
                type: 'line'
            }]
        },{
            title: {
                text: `各民族人数${this.state.title}top5分析`
            },
            tooltip: {},
            legend: {
            },
            xAxis: {
                type: 'value',
            },
            yAxis: {
                type: 'category',
                data: ['top5','top4','top3','top2','top1']
            },
            series: [{
                data: [536, 650, 710, 1300, 1580],
                type: 'bar'
            }]
        }];
        myChart1.setOption(option1[0]);
        myChart2.setOption(option1[1]);
        myChart3.setOption(option1[2]);
        myChart4.setOption(option1[3]);
    }
    componentDidMount(){
        var myChart1 = echarts.init(document.getElementById('chart1'));
        var myChart2 = echarts.init(document.getElementById('chart2'));
        var myChart3 = echarts.init(document.getElementById('chart3'));
        var myChart4 = echarts.init(document.getElementById('chart4'));
        var option = [{
            title: {
                text: `各民族人数同比${this.state.title}分析`
            },
            tooltip: {},
            legend: {
                data:['默认','往期']
            },
            xAxis: {
                data: ["人口"]
            },
            yAxis: {},
            series: [{
                name: '默认',
                type: 'bar',
                data: [20]
            },{
                name: '往期',
                type: 'bar',
                data: [16]
            }]
        },{
            title: {
                text: `各民族人数环比${this.state.title}分析`
            },
            tooltip: {},
            legend: {
                data:['默认','周边','周边2']
            },
            xAxis: {
                data: ["人口"]
            },
            yAxis: {},
            series: [{
                name: '默认',
                type: 'bar',
                data: [20]
            },{
                name: '周边',
                type: 'bar',
                data: [25]
            },{
                name: '周边2',
                type: 'bar',
                data: [16]
            }]
        },{
            title: {
                text: `各民族人数${this.state.title}波动分析`
            },
            tooltip: {},
            legend: {
            },
            xAxis: {
                type: 'category',
                data: ['5', '10', '15', '20', '25', '30']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line'
            }]
        },{
            title: {
                text: `各民族人数${this.state.title}top5分析`
            },
            tooltip: {},
            legend: {
            },
            xAxis: {
                type: 'value',
            },
            yAxis: {
                type: 'category',
                data: ['top5','top4','top3','top2','top1']
            },
            series: [{
                data: [820, 840, 901, 934, 1290],
                type: 'bar'
            }]
        }];
        myChart1.setOption(option[0]);
        myChart2.setOption(option[1]);
        myChart3.setOption(option[2]);
        myChart4.setOption(option[3]);
    }
    render(){
        return (
            <div>
                <Select defaultValue="一个月" style={{ width: 120 }} onChange={this.handleChange}>
                    <Option value="一个月">一个月</Option>
                    <Option value="三个月">三个月</Option>
                    <Option value="一年">一年</Option>
                </Select>
                <Row>
                    <Col span={12}>
                        <div className="big-chart" id="chart1"></div>
                    </Col>
                    <Col span={12}>
                        <div className="big-chart" id="chart2"></div>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <div className="big-chart" id="chart3"></div>
                    </Col>
                    <Col span={12}>
                        <div className="big-chart" id="chart4"></div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default AnalysisPage4;