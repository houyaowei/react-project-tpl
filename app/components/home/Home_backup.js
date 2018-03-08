import React from "react";
import Header from "./Header";

class Home extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            collapsed: false
        }
        this.getEvents = this.getEvents.bind(this);
    }
    componentDidMount(){
        var map = new BMap.Map('map');
        var poi = new BMap.Point(116.307852,40.057031);
        map.centerAndZoom(poi, 16);
        map.enableScrollWheelZoom();  
        //地图导航
        // map.addControl(new BMap.NavigationControl()); 
        
        var marker = new BMap.Marker(poi);  // 创建标注
        map.addOverlay(marker);               // 将标注添加到地图中
        marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
       
        //添加城市选择空间
        var size = new BMap.Size(10, 20);
        map.addControl(new BMap.CityListControl({
            anchor: BMAP_ANCHOR_TOP_LEFT,
            offset: size,
            // 切换城市之间事件
            // onChangeBefore: function(){
            //    alert('before');
            // },
            // 切换城市之后事件
            // onChangeAfter:function(){
            //   alert('after');
            // }
        }));
        
        var styleOptions = {
            strokeColor:"red",    //边线颜色。
            fillColor:"red",      //填充颜色。当参数为空时，圆形将没有填充效果。
            strokeWeight: 3,       //边线的宽度，以像素为单位。
            strokeOpacity: 0.8,	   //边线透明度，取值范围0 - 1。
            fillOpacity: 0.6,      //填充的透明度，取值范围0 - 1。
            strokeStyle: 'solid' //边线的样式，solid或dashed。
        }
        var drawingManager = new BMapLib.DrawingManager(map, {
            isOpen: false, //是否开启绘制模式
            enableDrawingTool: true, //是否显示工具栏
            drawingToolOptions: {
                anchor: BMAP_ANCHOR_TOP_RIGHT, //位置
                offset: new BMap.Size(5, 5), //偏离值
            },
            circleOptions: styleOptions, //圆的样式
            polylineOptions: styleOptions, //线的样式
            polygonOptions: styleOptions, //多边形的样式
            rectangleOptions: styleOptions //矩形的样式
        }); 
        var overlays = [];
        var overlaycomplete = function(e){
            // overlays.push(e.overlay);
            // var str = "经度为：" + e.overlay.point.lng + ", 纬度为：" +e.overlay.point.lat;
            // alert(str);
            switch (e.drawingMode) {
                case "marker": {
                    var marker = e.overlay;
                    var markerMenu = new BMap.ContextMenu();
                    markerMenu.addItem(new BMap.MenuItem('删除标注 ', function () {
                        alert("删除站点");
                    }))
                    marker.addContextMenu(markerMenu);
                }
            }
        };
        var markercomplete = function(overlay){
            var markerMenu = new BMap.ContextMenu();
            markerMenu.addItem(new BMap.MenuItem('删除',function(){
                alert("删除站点");
            }));
            //markerMenu.addItem(new BMap.MenuItem('修改站名',updateMarker.bind(marker)));
            markerMenu.addItem(new BMap.MenuItem('修改',function(){
                alert("修改站名");
            }));
            overlay.addContextMenu(markerMenu);

            // var str = "经度为：" + overlay.point.lng + ", 纬度为：" +overlay.point.lat;
            // alert(str);
        }
        var polygoncomplete = function(overlay){
            //var str = "经度为：" + overlay.point.lng + ", 纬度为：" +overlay.point.lat;
            alert("绘制了" + overlay.getPath().length + "点");
        }
        drawingManager.addEventListener('overlaycomplete', overlaycomplete); //事件总接口
        // drawingManager.addEventListener('markercomplete', markercomplete);
        // drawingManager.addEventListener('polygoncomplete', polygoncomplete);
        //decode address
        var myGeo = new BMap.Geocoder();
        myGeo.getPoint("北京市海淀区上地10街", function(point){
            console.log(point);
        });
    }
    getEvents(){
        return {
            click: (e) => {
                console.log('map click event');
            }
        }
    }
    render(){
        return (
            <div>
                {/* <Map center={{lng: 116.402544, lat: 39.928216}} style={{height: '600px'}} mapStyle={{style: 'midnight'}} events={this.getEvents()} zoom="11">
                    <NavigationControl /> 
                    <MapTypeControl />
                    <ScaleControl />
                    <InfoWindow position={{lng: 116.402544, lat: 39.928216}} text="内容" title="标题"/>
                    <Boundary data={[
                        {
                            name: '海淀区',
                            count: 20
                        },
                        {
                            name: '朝阳区',
                            count: 10
                        }
                    ]} events={{
                        click:(e) => {console.log('boundary click');}
                    }}/>
                    <Polygon 
                        fillColor='red' 
                        strokeColor='yellow' 
                        path={[
                            {lng: 116.442519, lat: 39.945597},
                            {lng: 116.484488, lat: 39.905315},
                            {lng: 116.443094, lat: 39.886494},
                            {lng: 116.426709, lat: 39.900001}
                        ]}
                    />
                </Map> */}
                <div id="map" style={{height: '700px'}}>

                </div>
            </div>
        );
    }
}
Home.defaultProps = {

}

export default Home;