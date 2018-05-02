import React from "react";
import { Button ,Icon} from 'antd';
import * as analysisDataConfig from "../../../config/analysisDataConfig";

class AnalysisPage5 extends React.Component {
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
        myChart1.setOption(analysisDataConfig.analysisVisitorOption);
    }
    render(){
        return (
            <div>
                {/*<div className="analysis-top-button" style={{marginTop:5,marginLeft:20}}>*/}
                    {/*<Button ghost>一个月</Button>*/}
                    {/*<Button ghost>三个月</Button>*/}
                    {/*<Button ghost>一年</Button>*/}
                {/*</div>*/}
                <div>
                    <div className="chart-title" style={{marginTop:"15px"}}>游客动向总览</div>
                    <div id="chart1" className="chart-chinamap"></div>
                    <div className="analysis-visit-right">
                        <div className="chart-container-topright1">
                            <div className="chart-title"> 游客目的城市人口排名</div>
                            <ul className="chart-container-topright-ul1">
                                <li className="chart-container-topright-ul1-top3">1</li>
                                <li className="chart-container-topright-ul1-top3">2</li>
                                <li className="chart-container-topright-ul1-top3">3</li>
                                <li>4</li>
                                <li>5</li>
                                <li>6</li>
                                <li>7</li>
                                <li>8</li>
                                <li>9</li>
                                <li>10</li>
                            </ul>
                            <ul className="chart-container-topright-ul2">
                                <li>上海市<span style={{float:"right"}}>286543<Icon type="arrow-up" style={{color:"red"}}/></span></li>
                                <li>西安市<span style={{float:"right"}}>262845<Icon type="arrow-up" style={{color:"red"}}/></span></li>
                                <li>天津市<span style={{float:"right"}}>214467<Icon type="arrow-down" style={{color:"green"}}/></span></li>
                                <li>成都市<span style={{float:"right"}}>143536<Icon type="arrow-up" style={{color:"red"}}/></span></li>
                                <li>太原市<span style={{float:"right"}}>121532<Icon type="arrow-down" style={{color:"green"}}/></span></li>
                                <li>拉萨市<span style={{float:"right"}}>110985<Icon type="arrow-down" style={{color:"green"}}/></span></li>
                                <li>齐齐哈尔市<span style={{float:"right"}}>109955<Icon type="arrow-up" style={{color:"red"}}/></span></li>
                                <li>乌鲁木齐市<span style={{float:"right"}}>108265<Icon type="arrow-down" style={{color:"green"}}/></span></li>
                                <li>广州市<span style={{float:"right"}}>106565<Icon type="arrow-up" style={{color:"red"}}/></span></li>
                                <li>香港市<span style={{float:"right"}}>103915<Icon type="arrow-up" style={{color:"red"}}/></span></li>
                            </ul>
                        </div>
                        <div className="chart-container-topright1" style={{marginTop:"60px"}}>
                            <div className="chart-title"> 游客来源地人数排名</div>
                            <ul className="chart-container-topright-ul1">
                                <li className="chart-container-topright-ul1-top3">1</li>
                                <li className="chart-container-topright-ul1-top3">2</li>
                                <li className="chart-container-topright-ul1-top3">3</li>
                                <li>4</li>
                                <li>5</li>
                                <li>6</li>
                                <li>7</li>
                                <li>8</li>
                                <li>9</li>
                                <li>10</li>
                            </ul>
                            <ul className="chart-container-topright-ul2">
                                <li>深圳市<span style={{float:"right"}}>98324<Icon type="arrow-up" style={{color:"red"}}/></span></li>
                                <li>北京市<span style={{float:"right"}}>94321<Icon type="arrow-up" style={{color:"red"}}/></span></li>
                                <li>重庆市<span style={{float:"right"}}>86334<Icon type="arrow-down" style={{color:"green"}}/></span></li>
                                <li>西安市<span style={{float:"right"}}>81354<Icon type="arrow-up" style={{color:"red"}}/></span></li>
                                <li>三亚市<span style={{float:"right"}}>74345<Icon type="arrow-down" style={{color:"green"}}/></span></li>
                                <li>哈尔滨市<span style={{float:"right"}}>76532<Icon type="arrow-down" style={{color:"green"}}/></span></li>
                                <li>拉萨市<span style={{float:"right"}}>56174<Icon type="arrow-up" style={{color:"red"}}/></span></li>
                                <li>乌鲁木齐市<span style={{float:"right"}}>54234<Icon type="arrow-up" style={{color:"red"}}/></span></li>
                                <li>桂林市<span style={{float:"right"}}>49823<Icon type="arrow-down" style={{color:"green"}}/></span></li>
                                <li>长沙市<span style={{float:"right"}}>35742<Icon type="arrow-up" style={{color:"red"}}/></span></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default AnalysisPage5;