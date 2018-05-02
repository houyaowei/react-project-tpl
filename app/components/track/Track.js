import React from 'react';
import './track.css';
import { Steps,Input } from 'antd';
const Step = Steps.Step;
const Search = Input.Search;

const pois = [
    new BMap.Point(113.75167, 23.0259),
    new BMap.Point(113.76167, 23.0159),
    new BMap.Point(113.77352, 23.0259),
    new BMap.Point(113.77352, 23.0359),
    new BMap.Point(113.78352, 23.0359)
];
var points = [
    new BMap.Point(113.75167, 23.0259),
    new BMap.Point(113.76167, 23.0159),
    new BMap.Point(113.77352, 23.0259),
    new BMap.Point(113.77352, 23.0359),
    new BMap.Point(113.77852, 23.0359),
    new BMap.Point(113.78352, 23.0359),
];
export default class Track extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentTime:0,
            searchName:'',
            data:[],
            data1:[]
        }
        this.map = null;
        this.timerID = null;
        this.timerID1 = null;
        this.choosePhoto = this.choosePhoto.bind(this);
        this.deplpySearch = this.deplpySearch.bind(this);
    }
    deplpySearch(value){
        this.setState({
            searchName:value,
            data:["光明小区","希望小学","国展中心","北客站","茶张村","大唐不夜城"],
            data1:["2018-3-21 12:25","2018-3-21 12:37","2018-3-21 13:22","2018-3-21 15:41","2018-3-21 17:21","2018-3-21 19:02"]
            });
        var sy = new BMap.Symbol(BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW, {
            scale: 0.6,//图标缩放大小
            strokeColor:'#fff',//设置矢量图标的线填充颜色
            strokeWeight: '2',//设置线宽
        });
        var icons = new BMap.IconSequence(sy, '10', '30');
        var polyline =new BMap.Polyline(pois, {
            enableEditing: false,//是否启用线编辑，默认为false
            enableClicking: true,//是否响应点击事件，默认为true
            icons:[icons],
            strokeWeight:'8',//折线的宽度，以像素为单位
            strokeOpacity: 0.8,//折线的透明度，取值范围0 - 1
            strokeColor:"#18a45b" //折线颜色
        });

        this.map.addOverlay(polyline);

        var i = 0;
        var marker = new BMap.Marker(points[i]);
        this.map.addOverlay(marker);
        this.timerID = setInterval(()=>{
            if(this.state.currentTime<5){
                this.map.clearOverlays()
                // var myIcon = new BMap.Icon(require('./camera.png'), new BMap.Size(22,22));
                marker = new BMap.Marker(points[i]);
                this.map.addOverlay(marker);
                var sy = new BMap.Symbol(BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW, {
                    scale: 0.6,//图标缩放大小
                    strokeColor:'#fff',//设置矢量图标的线填充颜色
                    strokeWeight: '2',//设置线宽
                });
                var icons = new BMap.IconSequence(sy, '10', '30');
                var polyline =new BMap.Polyline(pois, {
                    enableEditing: false,//是否启用线编辑，默认为false
                    enableClicking: true,//是否响应点击事件，默认为true
                    icons:[icons],
                    strokeWeight:'8',//折线的宽度，以像素为单位
                    strokeOpacity: 0.8,//折线的透明度，取值范围0 - 1
                    strokeColor:"#18a45b" //折线颜色
                });
                this.map.addOverlay(polyline);
                var sContent =
                    `<div class="track-card-img"/><ul class="track-card-ul"><li><span>姓名：</span><span>${this.state.searchName}</span></li><li><span>时间：</span><span>2018-3-21</span></li><li><span>地点：</span><span>${this.state.data[i]}</span></li></ul>`
                var infoWindow = new BMap.InfoWindow(sContent);
                marker.openInfoWindow(infoWindow,pois[i]);
                i++;
                this.setState({currentTime:this.state.currentTime+1})

            }else{
                this.map.clearOverlays()
                marker = new BMap.Marker(points[i]);
                this.map.addOverlay(marker);
                var sy = new BMap.Symbol(BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW, {
                    scale: 0.6,//图标缩放大小
                    strokeColor:'#fff',//设置矢量图标的线填充颜色
                    strokeWeight: '2',//设置线宽
                });
                var icons = new BMap.IconSequence(sy, '10', '30');
                var polyline =new BMap.Polyline(pois, {
                    enableEditing: false,//是否启用线编辑，默认为false
                    enableClicking: true,//是否响应点击事件，默认为true
                    icons:[icons],
                    strokeWeight:'8',//折线的宽度，以像素为单位
                    strokeOpacity: 0.8,//折线的透明度，取值范围0 - 1
                    strokeColor:"#18a45b" //折线颜色
                });
                this.map.addOverlay(polyline);
                var sContent =
                    `<div class="track-card-img"/><ul class="track-card-ul"><li><span>姓名：</span><span>${this.state.searchName}</span></li><li><span>时间：</span><span>2018-3-21</span></li><li><span>地点：</span><span>${this.state.data[i]}</span></li></ul>`
                var infoWindow = new BMap.InfoWindow(sContent);
                marker.openInfoWindow(infoWindow,pois[i]);
                i = 0;
                this.setState({
                    currentTime:0
                })
            }
        }, 2000);
        var ul = document.getElementById('trackUl');
        var list = ul.getElementsByTagName('li');
        var span = document.getElementsByClassName("track-ul-timespan");
        var j = 0;
        this.timerID1 = setInterval(()=>{
            if(j!=0){
                list[j-1].style.color = "#000000";
                span[j-1].style.color = "#808080";
            }else{
                list[list.length-1].style.color = "#000000";
                span[span.length-1].style.color = "#808080";

            }
            list[j].style.color = "#507ff7";
            span[j].style.color = "#507ff7";
            j++;
            if(j>list.length-1){
                j = 0;
            }

        },2000)
    }
    choosePhoto(e) {
        // var imgFile = e.target.files[0];
        // var fr = new FileReader();
        // fr.onload = (e) => {
        //     this.setState()
        // };
        // fr.readAsDataURL(imgFile);
    }
    componentDidMount(){
        this.map = new BMap.Map('trackMap');
        this.map.centerAndZoom(new BMap.Point(113.76352, 23.0259), 15);
        // this.map.enableScrollWheelZoom();
    }
    componentDidUpdate(){

    }
    componentWillUnmount(){
        clearInterval(this.timerID);
        clearInterval(this.timerID1);
    }
    render(){
        return(
            <div style={{position:"relative"}}>
                <div id="trackMap"></div>
                <div className="track-event-ul-container">
                    <div className="event-list-title" style={{lineHeight:"50px"}}><span>路线轨迹时间对照表</span></div>

                        <ul id="trackUl" className="track-event-ul">
                            <li style={{marginTop:"29px"}}><span>{this.state.data[0]}</span><span className="track-ul-timespan">{this.state.data1[0]}</span></li>
                            <li><span>{this.state.data[1]}</span><span className="track-ul-timespan">{this.state.data1[1]}</span></li>
                            <li><span>{this.state.data[2]}</span><span className="track-ul-timespan">{this.state.data1[2]}</span></li>
                            <li><span>{this.state.data[3]}</span><span className="track-ul-timespan">{this.state.data1[3]}</span></li>
                            <li><span>{this.state.data[4]}</span><span className="track-ul-timespan">{this.state.data1[4]}</span></li>
                            <li><span>{this.state.data[5]}</span><span className="track-ul-timespan">{this.state.data1[5]}</span></li>
                        </ul>
                </div>
                {this.state.searchName?
                    <Steps progressDot size="default" className="time-line-step" current={this.state.currentTime-1}>
                        <Step title="12:21"/>
                        <Step title="12:23"/>
                        <Step title="12:58"/>
                        <Step title="15:42"/>
                        <Step title="16:38"/>
                        <Step title="18:07"/>
                    </Steps>:null}
                <div>
                    <div className="deploy-searh">
                        <Search
                            className="deploy-searh-input"
                            placeholder="可输入"
                            onSearch={this.deplpySearch}
                        />
                        <span className="deploy-searchq"></span>
                        <Input
                            className="deploy-searh-input-img"
                            type="file" title="上传图片"
                            onChange={this.choosePhoto} multiple/>
                        <span className="deploy-search-button"></span>
                    </div>
                </div>
            </div>
        )
    }
}