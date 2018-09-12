import React from "react";
var echarts = require('echarts');
import { Button ,Icon} from 'antd';
import * as analysisDataConfig from "../../../config/analysisDataConfig";

class AnalysisPage2 extends React.Component {
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

    }
    componentDidMount(){

        var myChart1 = echarts.init(document.getElementById('chart1'));
        var myChart2 = echarts.init(document.getElementById('chart2'));
        var myChart3 = echarts.init(document.getElementById('chart3'));
        var myChart4 = echarts.init(document.getElementById('chart4'));
        var myChart5 = echarts.init(document.getElementById('chart5'));
        var myChart6 = echarts.init(document.getElementById('chart6'));
        var myChart7 = echarts.init(document.getElementById('chart7'));
        function randomData() {
            now = new Date(+now + oneDay);
            value = 50+ Math.random() * 21 - 10;
            return {
                name: now.toString(),
                value: [
                    [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
                    Math.round(value)
                ]
            }
        }
        var data = [];
        var data1 = [];
        var now = +new Date(2005, 9, 3);
        var oneDay = 24 * 3600 * 1000;
        var value = Math.random() * 1000;
        for (var i = 0; i < 100; i++) {
            data.push(randomData());
        }
        myChart1.setOption(analysisDataConfig.analysisPageOption[0]);
        myChart2.setOption(analysisDataConfig.analysisPageOption[1]);
        myChart3.setOption(analysisDataConfig.analysisPageOption[2]);
        myChart4.setOption(analysisDataConfig.analysisPageOption[3]);
        myChart5.setOption(analysisDataConfig.analysisPageOption[4]);
        myChart6.setOption(analysisDataConfig.analysisPageOption[5]);
        myChart7.setOption(analysisDataConfig.analysisPageOption[6]);
        setInterval(function () {

            for (var i = 0; i < 5; i++) {
                data.shift();
                data.push(randomData());
            }
            myChart3.setOption({
                series: [{
                    data: data
                }]
            });
        }, 2000);
    }
    render(){
        return (
            <div>
                <div className="analysis-top-button" style={{marginTop:5,marginLeft:20}}>
                    <Button ghost>一个月</Button>
                    <Button ghost>三个月</Button>
                    <Button ghost>一年</Button>
                </div>
                <div className="chart-container-topleft">
                    <div className="chart-title"> 社区流动人口量具体展示</div>
                    <div className="chart-container-topleft-chart" id="chart1"></div>
                </div>
                <div className="chart-container-topright">
                    <div className="chart-title"> 社区流动人口量排名</div>
                    <ul className="chart-container-topright-ul1">
                        <li className="chart-container-topright-ul1-top3">1</li>
                        <li className="chart-container-topright-ul1-top3">2</li>
                        <li className="chart-container-topright-ul1-top3">3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>
                    </ul>
                    <ul className="chart-container-topright-ul2">
                        <li>莲花社区<span style={{float:"right"}}>286543<Icon type="arrow-up" style={{color:"red"}}/></span></li>
                        <li>东八里村<span style={{float:"right"}}>262845<Icon type="arrow-up" style={{color:"red"}}/></span></li>
                        <li>西八里村<span style={{float:"right"}}>214467<Icon type="arrow-down" style={{color:"green"}}/></span></li>
                        <li>翡翠青莲社区<span style={{float:"right"}}>143536<Icon type="arrow-up" style={{color:"red"}}/></span></li>
                        <li>茶张村<span style={{float:"right"}}>121532<Icon type="arrow-down" style={{color:"green"}}/></span></li>
                        <li>洪都府郡<span style={{float:"right"}}>110985<Icon type="arrow-down" style={{color:"green"}}/></span></li>
                        <li>明珠新村<span style={{float:"right"}}>109955<Icon type="arrow-up" style={{color:"red"}}/></span></li>
                    </ul>
                </div>
                <div className="chart-container-center">
                    <div className="chart-container-center-block">
                        <ul className="center-block-ul">
                            <li className="center-block-title">莲花社区</li>
                            <li style={{color:'#000000',marginTop:10}}>同比率</li>
                            <li className="center-block-number">82%</li>
                        </ul>
                        <div className="center-block-chart" id="chart2"></div>
                    </div>
                    <div className="chart-container-center-block">
                        <ul className="center-block-ul">
                            <li className="center-block-title">洪都府郡</li>
                            <li style={{color:'#000000',marginTop:10}}>同比率</li>
                            <li className="center-block-number" style={{color:"red"}}>121%</li>
                        </ul>
                        <div className="center-block-chart" id="chart4"></div>
                    </div>
                    <div className="chart-container-center-block">
                        <ul className="center-block-ul">
                            <li className="center-block-title">西八里村</li>
                            <li style={{color:'#000000',marginTop:10}}>同比率</li>
                            <li className="center-block-number">71%</li>
                        </ul>
                        <div className="center-block-chart" id="chart5"></div>
                    </div>
                    <div className="chart-container-center-block">
                        <ul className="center-block-ul">
                            <li className="center-block-title">茶张村</li>
                            <li style={{color:'#000000',marginTop:10}}>同比率</li>
                            <li className="center-block-number">96%</li>
                        </ul>
                        <div className="center-block-chart" id="chart6"></div>
                    </div>
                    <div className="chart-container-center-block">
                        <ul className="center-block-ul">
                            <li className="center-block-title">明珠新村</li>
                            <li style={{color:'#000000',marginTop:10}}>同比率</li>
                            <li className="center-block-number" style={{color:"orange"}}>101%</li>
                        </ul>
                        <div className="center-block-chart" id="chart7"></div>
                    </div>
                </div>
                <div className="chart-container-bottom">
                    <div className="chart-title"> 社区流动人口量波动分析</div>
                    <div className="chart-container-bottom-chart" id="chart3"></div>
                </div>
            </div>
        );
    }
}

export default AnalysisPage2;