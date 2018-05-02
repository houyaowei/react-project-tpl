import React from  "react";
import { Button , Select , Icon ,Input} from 'antd';
import "./deploy.css";

const Option = Select.Option;
const Search = Input.Search;

class Deploy extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showVideo: false,
            point:[],
            showCard: false,
            src:"",
            showPeopleData:false,
            mapLevel: 15,
            searchName:'',
            eventData : [
                '发生两辆车相撞事故',
                '有歹徒进行抢劫',
                '歹徒持刀劫持了一名人质',
                '有群众举报聚众赌博'
            ],
            srcSearchImage:'',
            srcSearchImage1:'',
            currentStatus:0
        }
        this.marker = [];
        this.map = null;
        // this.showData = this.showData.bind(this);
        this.choosePosition = this.choosePosition.bind(this);
        this.closeCard = this.closeCard.bind(this);
        this.chooseEvent = this.chooseEvent.bind(this);
        this.choosePhoto = this.choosePhoto.bind(this);
        // this.searchData = this.searchData.bind(this);
        this.deplpySearch = this.deplpySearch.bind(this);
        this.changeSize = this.changeSize.bind(this);
    }
    choosePosition(e){
        // var pos = e.target.innerHTML.split(',');
        // var poi = new BMap.Point(parseFloat(pos[0]),parseFloat(pos[1])+0.003);
        // this.map.centerAndZoom(poi, this.state.mapLevel);
        // this.setState({showCard:true})
        this.chooseEvent();
    }
    addMarker(point){
        var marker = new BMap.Marker(point);
        this.map.addOverlay(marker);
    }
    chooseEvent(e){
        var i = Math.floor(Math.random()*10);
        var poi = new BMap.Point(this.state.point[i].lng,this.state.point[i].lat);
        // var marker = new BMap.Marker(poi)
        this.map.centerAndZoom(poi, this.state.mapLevel);
        // this.map.addOverlay(marker);
        // this.setState({showCard:true})
        var sContent =
            `<video  autoplay controls style='width:438px;height:304px;'><source src= ${require('../../../assets/video/video10.mp4')} type="video/mp4"></video>`
        var infoWindow = new BMap.InfoWindow(sContent);

        this.marker[i].openInfoWindow(infoWindow,poi);
    }
    closeCard(){
        this.setState({showCard:false})
    }
    choosePhoto(e) {
        var imgFile = e.target.files[0];
        var fr = new FileReader();
        fr.onload = (e) => {
            this.setState({srcSearchImage: e.target.result})
        };
        fr.readAsDataURL(imgFile);
        this.setState({searchName:'',src:'',eventData:[
                '进入了光明小区！',
                '在达利便利店进行了购物',
                '离开了人民广场！',
                '在五星饭店疑似参与了聚众赌博！'
            ],srcSearchImage1:'../../../images/search/track_people.jpg'})
        this.chooseEvent();
        this.setState({searchName:'马明泽'})
    }
    deplpySearch(value){
        this.setState({
            searchName:value,
            src:'../../../images/search/people.jpg',
            srcSearchImage:'../../../images/search/track_people.jpg',
            srcSearchImage1:'../../../images/search/track_people.jpg',
            eventData:[
                '进入了光明小区！',
                '在达利便利店进行了购物',
                '离开了人民广场！',
                '在五星饭店疑似参与了聚众赌博！'
            ]});
        this.chooseEvent();
    }
    changeSize(event){
        var videoContainer = document.getElementsByClassName("video-container")[0];
        var video = videoContainer.getElementsByTagName("video");
        if(this.state.currentStatus==0){
            document.getElementsByClassName("deploy-searh")[0].style.display = "none";
            document.getElementById("deployEvent").style.display = "none";
            event.target.style.bottom = "913px";
            event.target.style.left = "1165px";
            event.target.style.fontSize = "22px";
            event.target.style.transition = "all 0.4s";
            for(var i=0;i<video.length;i++){
                video[i].style.width = "360px";
                video[i].style.height = "260px";
                video[i].style.margin = "5px";
                video[i].style.transition = "all 0.4s";
            }
            this.setState({currentStatus:1})
        }else{
            document.getElementsByClassName("deploy-searh")[0].style.display = "block";
            document.getElementById("deployEvent").style.display = "block";
            event.target.style.bottom = "442px";
            event.target.style.left = "515px";
            event.target.style.fontSize = "18px";
            for(var i=0;i<video.length;i++){
                video[i].style.width = "140px";
                video[i].style.height = "100px";
                video[i].style.margin = "6px 6px";
                video[i].style.transition = "all 0.4s";
            }
            this.setState({currentStatus:0})
        }
    }
    componentDidMount(){
        this.map = new BMap.Map('map');
        var poi = new BMap.Point(113.7536, 23.0259);
        this.map.centerAndZoom(poi, this.state.mapLevel);
        this.map.enableScrollWheelZoom();
        var overlays = [];
        var overlaycomplete = (e)=>{
            var path = e.overlay.getPath();//Array<Point> 返回多边型的点数组
            var lng = (path[0].lng+path[2].lng)/2;
            var lat = (path[0].lat+path[2].lat)/2;
            var poi = new BMap.Point(lng,lat);
            this.setState({mapLevel:this.state.mapLevel+1})
            this.map.centerAndZoom(poi,this.state.mapLevel);
            // for(var i=0;i<path.length;i++){
            //     console.log("lng:"+path[i].lng+"\n lat:"+path[i].lat);
            // }
            drawingManager.close()
            var lngSpan = Math.abs(path[3].lng - path[1].lng);
            var latSpan = Math.abs(path[1].lat - path[3].lat);
            for (var i = 0; i < 9; i ++) {
                var point = new BMap.Point(path[3].lng + lngSpan * (Math.random() * 0.7), path[1].lat - latSpan * (Math.random() * 0.7));
                var myIcon = new BMap.Icon(require('../../../assets/images/warn/camera.png'), new BMap.Size(22,22));
                this.marker[i] = new BMap.Marker(point,{icon:myIcon});
                this.map.addOverlay(this.marker[i]);
                // this.addMarker(point);
                this.state.point.push(point)
            }
            this.setState({
                            showVideo:true
                        })
            var speed=40;
            var demo=document.getElementById("demo");
            var demo2=document.getElementById("demo2");
            var demo1=document.getElementById("demo1");
            setTimeout(()=>{var a = demo2.getElementsByTagName("a");
                console.log(a)
                for(var i=0;i<a.length;i++){
                    console.log(a[i])
                    a[i].addEventListener('click',this.chooseEvent);
                }
            },1000)

            demo2.innerHTML=demo1.innerHTML
            function Marquee(){
                if(demo.scrollTop>=demo1.offsetHeight){
                    demo.scrollTop=0;
                }
                else{
                    demo.scrollTop=demo.scrollTop+1;
                }
            }
            var MyMar=setInterval(Marquee,speed)
            demo.onmouseover=function(){clearInterval(MyMar)}
            demo.onmouseout=function(){MyMar=setInterval(Marquee,speed)}
        };
        var styleOptions = {
            strokeColor:"red",    //边线颜色。
            // fillColor:"red",      //填充颜色。当参数为空时，圆形将没有填充效果。
            strokeWeight: 3,       //边线的宽度，以像素为单位。
            strokeOpacity: 0.8,	   //边线透明度，取值范围0 - 1。
            fillOpacity: 0.01,      //填充的透明度，取值范围0 - 1。
            strokeStyle: 'solid' //边线的样式，solid或dashed。
        }
        var drawingManager = new BMapLib.DrawingManager(this.map, {
            isOpen: false, //是否开启绘制模式
            enableDrawingTool: true, //是否显示工具栏
            drawingToolOptions: {
                anchor: BMAP_ANCHOR_TOP_RIGHT, //位置
                offset: new BMap.Size(5, 5), //偏离值
                drawingModes : [
                    BMAP_DRAWING_POLYGON,
                    BMAP_DRAWING_RECTANGLE
                ]
            },
            polygonOptions: styleOptions, //多边形的样式
            rectangleOptions: styleOptions //矩形的样式
        });
        //添加鼠标绘制工具监听事件，用于获取绘制结果
        drawingManager.addEventListener('overlaycomplete', overlaycomplete);
        function clearAll() {
            for(var i = 0; i < overlays.length; i++){
                map.removeOverlay(overlays[i]);
            }
            overlays.length = 0
        }

    }
    componentDidUpdate(){

    }

    render(){
        return(
            <div className="deploy-container">
                <div id="map"></div>
                {this.state.showVideo?
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
                        {/*{this.state.searchName?*/}
                            {/*<div className="deploy-searh-result-container">*/}
                                {/*<ul className="deploy-search-result-detail">*/}
                                    {/*<li>{`姓名：  ${this.state.searchName}`}</li>*/}
                                    {/*<li>{`年龄：  68`}</li>*/}
                                    {/*<li>{`籍贯：  陕西 西安`}</li>*/}
                                    {/*<li>{`社区：  阳光小区`}</li>*/}
                                    {/*<li>{`详细地址： 8单元1803`}</li>*/}
                                {/*</ul>*/}
                            {/*{!this.state.src.length==0?<img src={this.state.src}/>:null}*/}
                            {/*</div>:null}*/}
                        {!this.state.srcSearchImage.length==0||this.state.searchName?
                            <div className="deploy-searh-result-container">
                                <img className="search-image" style={{marginLeft:"66px"}} src={this.state.srcSearchImage}/>
                                <span className="deploy-search-icon-text">匹配度90%</span>
                                <span className="deploy-search-arrow"></span>
                                <img className="search-image" style={{marginLeft:"128px"}} src={this.state.srcSearchImage1}/>
                                <div className="deploy-search-image-detail">
                                    <span className="deploy-search-image-detail-label">姓名：</span><span>{this.state.searchName}</span>
                                    <span className="deploy-search-image-detail-label" style={{marginLeft:40}}>年龄：</span><span>32</span>
                                    <span className="deploy-search-image-detail-label" style={{marginLeft:40}}>籍贯：</span><span>广东东莞</span><br/>
                                    <span className="deploy-search-image-detail-label" style={{marginTop:15}}>社区：</span><span>光明小区</span>
                                    <span className="deploy-search-image-detail-label" style={{marginTop:15,marginLeft:25}}>详细地址：</span><span>高新区8单元1803</span>
                                </div>
                            </div> :null}
                        <Icon className="deploy-video-size-button" onClick={this.changeSize} type="arrows-alt" />
                        <div className="video-container" onClick={this.choosePosition}>
                            {/*<div><button className="deploy-video-size-button" onClick={this.changeSize}>切换</button></div>*/}
                            <video src= {require('../../../assets/video/video1.mp4')} autoPlay muted loop>{this.state.point[0].lng},{this.state.point[0].lat}</video>
                            <video src= {require('../../../assets/video/video2.mp4')} autoPlay muted loop>{this.state.point[1].lng},{this.state.point[1].lat}</video>
                            <video style={{zIndex:-1}} src= {require('../../../assets/video/video3.mp4')} autoPlay muted loop>{this.state.point[2].lng},{this.state.point[2].lat}</video>
                            <br/>
                            <video src= {require('../../../assets/video/video4.mp4')} autoPlay muted loop>{this.state.point[3].lng},{this.state.point[3].lat}</video>
                            <video src= {require('../../../assets/video/video5.mp4')} autoPlay muted loop>{this.state.point[4].lng},{this.state.point[4].lat}</video>
                            <video src= {require('../../../assets/video/video6.mp4')} autoPlay muted loop>{this.state.point[5].lng},{this.state.point[5].lat}</video>
                            <br/>
                            <video src= {require('../../../assets/video/video7.mp4')} autoPlay muted loop>{this.state.point[6].lng},{this.state.point[6].lat}</video>
                            <video src= {require('../../../assets/video/video8.mp4')} autoPlay muted loop>{this.state.point[7].lng},{this.state.point[7].lat}</video>
                            <video src= {require('../../../assets/video/video9.mp4')} autoPlay muted loop>{this.state.point[8].lng},{this.state.point[8].lat}</video>
                        </div>
                        <div id="deployEvent" className="event-list">
                            <div className="event-list-title"><span>事件提示</span></div>
                            <div id="demo">
                                <ul id="demo1">
                                    <li>
                                        <span>{this.state.eventData[0]}</span>
                                        <a onClick={this.chooseEvent}>点击查看</a>
                                    </li>
                                    <li>
                                        <span>{this.state.eventData[1]}</span>
                                        <a onClick={this.chooseEvent}>点击查看</a>
                                    </li>
                                    <li>
                                        <span>{this.state.eventData[2]}</span>
                                        <a onClick={this.chooseEvent}>点击查看</a>
                                    </li>
                                    <li>
                                        <span>{this.state.eventData[3]}</span>
                                        <a onClick={this.chooseEvent}>点击查看</a>
                                    </li>
                                    <li>
                                        <span>{this.state.eventData[1]}</span>
                                        <a onClick={this.chooseEvent}>点击查看</a>
                                    </li>
                                    <li>
                                        <span>{this.state.eventData[3]}</span>
                                        <a onClick={this.chooseEvent}>点击查看</a>
                                    </li>
                                </ul>
                                <ul id="demo2"></ul>
                            </div>
                        </div>
                    </div>
                    :null}
            </div>
        )
    }
}
export default Deploy;