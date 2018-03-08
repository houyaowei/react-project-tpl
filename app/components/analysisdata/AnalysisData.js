import React from 'react';
import { Cascader,Switch,Card,Col,Row,Layout,Menu,Icon} from 'antd';
import '../../assets/css/ayalysisdata.css';

const { Header, Content, Sider } = Layout;
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

function onChange(value) {
    // map.centerAndZoom("西安", 15);
}

export default class AnalysisData extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:'东莞',
            current: '1'
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
        // var switchButton =document.getElementById('switchButton');
        // // var chooseCity =document.getElementById('chooseCity');
        // // console.log(chooseCity)
        // // chooseCity.onchange = (value)=>{
        // //     console.log(value)
        // // }
        // switchButton.onclick = ()=>{
        //     heatmapOverlay.toggle();
        // };

    }
    render(){
        return(
            <Layout>
                <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                        <Menu.Item key="1">
                            <Icon type="user" />
                            <span className="nav-text">nav 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="video-camera" />
                            <span className="nav-text">nav 2</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload" />
                            <span className="nav-text">nav 3</span>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Icon type="bar-chart" />
                            <span className="nav-text">nav 4</span>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <Icon type="cloud-o" />
                            <span className="nav-text">nav 5</span>
                        </Menu.Item>
                        <Menu.Item key="6">
                            <Icon type="appstore-o" />
                            <span className="nav-text">nav 6</span>
                        </Menu.Item>
                        <Menu.Item key="7">
                            <Icon type="team" />
                            <span className="nav-text">nav 7</span>
                        </Menu.Item>
                        <Menu.Item key="8">
                            <Icon type="shop" />
                            <span className="nav-text">nav 8</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout style={{ marginLeft: 200 }}>
                    <Content>
                            <Cascader
                                defaultValue={['广东', '东莞']}
                                options={options}
                                onChange={this.chooseCity}
                                changeOnSelect
                            />
                            <div>
                                <span>热力图</span>
                                <Switch id='switchButton' onChange={this.toggleHeat}  checkedChildren="开" unCheckedChildren="关"/>
                            </div>
                            <Row className="right-top" gutter={20}>
                                <Col span={8}>
                                    <Card title={this.state.title+"人口民族统计top3"} >Card content</Card>
                                </Col>
                                <Col span={8}>
                                    <Card title={this.state.title+"流动人口"}>Card content</Card>
                                </Col>
                                <Col span={8}>
                                    <Card title={this.state.title+"人员进出数量"}>Card content</Card>
                                </Col>
                            </Row>
                            <div id="smallMap"></div>
                    </Content>
                </Layout>
            </Layout>

        )
    }
};
