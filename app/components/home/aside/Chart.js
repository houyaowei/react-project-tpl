import React from "react";
var echarts = require('echarts');

class Chart extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            collapsed: false
        }
    }
    componentDidMount(){
        var myChart = echarts.init(document.getElementById('basic'));
        var option = {
            title: {
                text: 'ECharts'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };
        myChart.setOption(option);
    }
    render(){
        return (
            <div style={{display:"inline-block"}}>
                <div style={{height:"500px",width:"500px"}} id="basic"></div>
            </div>
        );
    }
}

export default Chart;