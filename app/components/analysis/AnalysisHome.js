import React from "react";
import * as ChartConfig from "../../../config/chartConfig";
import * as analysisDataConfig from "../../../config/analysisDataConfig";
var echarts = require('echarts');

class AnalysisHome extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title:'东莞',
            numOfTotlePeople:257992,
            numOfFlowPeople:148962,
            numOfVisitPeople:54923,
            numOfOldPeople:84793,
        };
        this.timerID1 = null;
        this.timerID2 = null;
        this.timerHeat = null;
        this.map = null;
        this.heatmapOverlay = null;
        // this.chooseCity = this.chooseCity.bind(this);
    }

    // chooseCity(value){
    //     console.log(value);
    //     if(value.length===1){
    //         this.map.centerAndZoom(value[0],9);
    //         this.setState({title:value[0]})
    //     }else if(value.length===2){
    //         this.map.centerAndZoom(value[1],13);
    //         this.setState({title:value[1]})
    //     }
    // }
    componentDidMount(){
        this.map = new BMap.Map('smallMap');
        var poi = new BMap.Point(116.307852,40.057031);
        this.map.centerAndZoom(poi, 15);
        this.map.enableScrollWheelZoom();
        //添加热力图
        this.heatmapOverlay = new BMapLib.HeatmapOverlay({
            "radius":30,
            "visible":true,
            "opacity":70
        });
        this.map.addOverlay(this.heatmapOverlay);
        //模拟热点数据
        var points = analysisDataConfig.heatMapPoints;
        var testData ={data:points[1],max:200};
        this.heatmapOverlay.setDataSet(testData);
        var i =0;
        this.timerHeat =setInterval(()=>{
            if(i==0){
                var testData ={data:points[0],max:200};
                this.heatmapOverlay.setDataSet(testData);
                i=1;
            }else{
                var testData ={data:points[1],max:200};
                this.heatmapOverlay.setDataSet(testData);
                i=0;
            }
        },2000)
        var myChart1 = echarts.init(document.getElementById('chart1'));
        myChart1.setOption(ChartConfig.chart2);
        var myChart2 = echarts.init(document.getElementById('chart2'));
        myChart2.setOption(ChartConfig.warningResult);
        var myChart4 = echarts.init(document.getElementById('chart4'));
        
        myChart4.setOption(analysisDataConfig.peopleOverview);
        window.onresize = ()=>{
            myChart1.resize();
            myChart2.resize();
            myChart4.resize();
        }
        function makeThreeNum(num){
            var num = (num || "").toString();
            return num;
        }
        function getRand(min, max){
            return parseInt(Math.random()*(max-min)+min);
        }
        function addStep(base){
            return (parseInt(getRand(1, 10)) + parseInt(base));
        }
        var w_old1 = this.state.numOfTotlePeople;
        var w_old2 = this.state.numOfFlowPeople;
        var w_old3 = this.state.numOfVisitPeople;
        function update1(oldNum, newNum){
            w_old1 = newNum;
            var  oldNum = makeThreeNum(oldNum),
                newNum = makeThreeNum(newNum),
                numberHTML = '';
            for (var i = 0; i < oldNum.length; i++) {
                if(oldNum[i] !== newNum[i]){
                    numberHTML += "<li class=\"group active\">" +
                        "<span class=\"old\">" + oldNum[i] + "</span>" +
                        "<span class=\"new\">" + newNum[i] + "</span></li>";
                }else{
                    numberHTML += "<li class=\"group\">" +
                        "<span class=\"old\">" + oldNum[i] + "</span>" +
                        "<span class=\"new\">" + newNum[i] + "</span></li>";
                }
            }
            document.getElementById('titleNumber1').innerHTML = numberHTML;
        }
        function update2(oldNum, newNum){
            w_old2 = newNum;
            var  oldNum = makeThreeNum(oldNum),
                newNum = makeThreeNum(newNum),
                numberHTML = '';
            for (var i = 0; i < oldNum.length; i++) {
                if(oldNum[i] !== newNum[i]){
                    numberHTML += "<li class=\"group active\">" +
                        "<span class=\"old\">" + oldNum[i] + "</span>" +
                        "<span class=\"new\">" + newNum[i] + "</span></li>";
                }else{
                    numberHTML += "<li class=\"group\">" +
                        "<span class=\"old\">" + oldNum[i] + "</span>" +
                        "<span class=\"new\">" + newNum[i] + "</span></li>";
                }
            }
            document.getElementById('titleNumber2').innerHTML = numberHTML;
        }
        function update3(oldNum, newNum){
            w_old3 = newNum;
            var  oldNum = makeThreeNum(oldNum),
                newNum = makeThreeNum(newNum),
                numberHTML = '';
            for (var i = 0; i < oldNum.length; i++) {
                if(oldNum[i] !== newNum[i]){
                    numberHTML += "<li class=\"group active\">" +
                        "<span class=\"old\">" + oldNum[i] + "</span>" +
                        "<span class=\"new\">" + newNum[i] + "</span></li>";
                }else{
                    numberHTML += "<li class=\"group\">" +
                        "<span class=\"old\">" + oldNum[i] + "</span>" +
                        "<span class=\"new\">" + newNum[i] + "</span></li>";
                }
            }
            document.getElementById('titleNumber3').innerHTML = numberHTML;
        }
        this.timerID1 =setInterval(()=>{
            update1(w_old1, addStep(w_old1),'titleNumber1');
            update3(w_old3, addStep(w_old3),'titleNumber3');
        }, 2000);
        this.timerID2 = setInterval(()=>{
            update2(w_old2, addStep(w_old2),'titleNumber2');
        }, 3000);
    }
    componentWillUnmount(){
        clearInterval(this.timerID1);
        clearInterval(this.timerHeat);
        clearInterval(this.timerID2);
    }
    render(){
        return (
            <div className='right-body'>
                <div className="analysis-all-show">
                    <div className="analysis-all-show-div">
                        <span className="analysis-all-show-icon1"></span>
                        <ul className="analysis-all-show-ul">
                            <li className="analysis-all-show-ul-title">当前总人口</li>
                            <li className="analysis-all-show-ul-english">The current totle people</li>
                            <li className="analysis-all-show-ul-number1">
                                {/*{this.state.numOfTotlePeople}*/}
                                <ul id="titleNumber1" className="title-number-ul">
                                    <li><span>2</span></li>
                                    <li><span>5</span></li>
                                    <li><span>7</span></li>
                                    <li><span>9</span></li>
                                    <li><span>9</span></li>
                                    <li><span>2</span></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="analysis-all-show-div">
                        <span className="analysis-all-show-icon2"></span>
                        <ul className="analysis-all-show-ul">
                            <li className="analysis-all-show-ul-title">当前流动人口</li>
                            <li className="analysis-all-show-ul-english">The current totle people</li>
                            <li className="analysis-all-show-ul-number2">
                                <ul id="titleNumber2" className="title-number-ul">
                                    <li><span>1</span></li>
                                    <li><span>4</span></li>
                                    <li><span>8</span></li>
                                    <li><span>9</span></li>
                                    <li><span>6</span></li>
                                    <li><span>2</span></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="analysis-all-show-div">
                        <span className="analysis-all-show-icon3"></span>
                        <ul className="analysis-all-show-ul">
                            <li className="analysis-all-show-ul-title">访客总人口</li>
                            <li className="analysis-all-show-ul-english">The current totle people</li>
                            <li className="analysis-all-show-ul-number3">
                                <ul id="titleNumber3" className="title-number-ul">
                                    <li><span>3</span></li>
                                    <li><span>5</span></li>
                                    <li><span>4</span></li>
                                    <li><span>9</span></li>
                                    <li><span>2</span></li>
                                    <li><span>3</span></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="analysis-all-show-div">
                        <span className="analysis-all-show-icon4"></span>
                        <ul className="analysis-all-show-ul">
                            <li className="analysis-all-show-ul-title">60岁以上人口</li>
                            <li className="analysis-all-show-ul-english">The current totle people</li>
                            <li className="analysis-all-show-ul-number4">{this.state.numOfOldPeople}</li>
                        </ul>
                    </div>
                </div>
                <div id="smallMap"/>
                <div className="chart-middle">
                    <div className="chart-middle-left">
                        <div className="chart-title">人口民族分类</div>
                        <div id="chart1" className="chart"></div>
                    </div>
                    <div className="chart-middle-right">
                        <div className="chart-title">出入记录分析</div>
                        <div id="chart2" className="chart"></div>
                    </div>
                </div>
                <div className="all-chart" >
                    <div id="chart4" className="all-chart-c"></div>
                </div>
                {/*<div id="chart2" className="chart"></div>*/}
                {/*<div id="chart3" className="chart"></div>*/}
            </div>
        );
    }
}

export default AnalysisHome;