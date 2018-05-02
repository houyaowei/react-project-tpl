import React from "react";
import history from "../../../routes/history";
import "./preWarn.css";
import * as configdata from "../../../../config/chartConfig";

import people from "../../../assets/images/warn/people.png";
import device from "../../../assets/images/warn/device.png";

class PreWarn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      conut: 0,
      show: false,
      data: {},
      userdata: configdata.userdata
    };
    this.map = null;
    this.heatmapOverlay = null;
    this.marker = [];
    this.overlays = []; //图形区域对象集合
    //热力图点集合
    this.hotpoints = [
      { lng: 116.418261, lat: 39.921984, count: 50 },
      { lng: 116.423332, lat: 39.916532, count: 51 },
      { lng: 116.419787, lat: 39.930658, count: 15 },
      { lng: 116.418455, lat: 39.920921, count: 40 },
      { lng: 116.418843, lat: 39.915516, count: 100 },
      { lng: 116.42546, lat: 39.918503, count: 6 },
      { lng: 116.423289, lat: 39.919989, count: 18 },
      { lng: 116.418162, lat: 39.915051, count: 80 },
      { lng: 116.422039, lat: 39.91782, count: 11 },
      { lng: 116.41387, lat: 39.917253, count: 7 },
      { lng: 116.41773, lat: 39.919426, count: 42 },
      { lng: 116.421107, lat: 39.916445, count: 4 },
      { lng: 116.417521, lat: 39.917943, count: 27 },
      { lng: 116.419812, lat: 39.920836, count: 23 },
      { lng: 116.420682, lat: 39.91463, count: 60 },
      { lng: 116.415424, lat: 39.924675, count: 8 },
      { lng: 116.419242, lat: 39.914509, count: 15 },
      { lng: 116.422766, lat: 39.921408, count: 25 },
      { lng: 116.421674, lat: 39.924396, count: 21 },
      { lng: 116.427268, lat: 39.92267, count: 1 },
      { lng: 116.417721, lat: 39.920034, count: 51 },
      { lng: 116.412456, lat: 39.92667, count: 7 },
      { lng: 116.420432, lat: 39.919114, count: 11 },
      { lng: 116.425013, lat: 39.921611, count: 35 },
      { lng: 116.418733, lat: 39.931037, count: 22 },
      { lng: 116.419336, lat: 39.931134, count: 4 },
      { lng: 116.413557, lat: 39.923254, count: 5 },
      { lng: 116.418367, lat: 39.92943, count: 3 },
      { lng: 116.424312, lat: 39.919621, count: 100 },
      { lng: 116.423874, lat: 39.919447, count: 87 },
      { lng: 116.424225, lat: 39.923091, count: 32 },
      { lng: 116.417801, lat: 39.921854, count: 44 },
      { lng: 116.417129, lat: 39.928227, count: 21 },
      { lng: 116.426426, lat: 39.922286, count: 80 },
      { lng: 116.421597, lat: 39.91948, count: 32 },
      { lng: 116.423895, lat: 39.920787, count: 26 },
      { lng: 116.423563, lat: 39.921197, count: 17 },
      { lng: 116.417982, lat: 39.922547, count: 17 },
      { lng: 116.426126, lat: 39.921938, count: 25 },
      { lng: 116.42326, lat: 39.915782, count: 100 },
      { lng: 116.419239, lat: 39.916759, count: 39 },
      { lng: 116.417185, lat: 39.929123, count: 11 },
      { lng: 116.417237, lat: 39.927518, count: 9 },
      { lng: 116.417784, lat: 39.915754, count: 47 },
      { lng: 116.420193, lat: 39.917061, count: 52 },
      { lng: 116.422735, lat: 39.915619, count: 100 },
      { lng: 116.418495, lat: 39.915958, count: 46 },
      { lng: 116.416292, lat: 39.931166, count: 9 },
      { lng: 116.419916, lat: 39.924055, count: 8 },
      { lng: 116.42189, lat: 39.921308, count: 11 },
      { lng: 116.413765, lat: 39.929376, count: 3 },
      { lng: 116.418232, lat: 39.920348, count: 50 },
      { lng: 116.417554, lat: 39.930511, count: 15 },
      { lng: 116.418568, lat: 39.918161, count: 23 },
      { lng: 116.413461, lat: 39.926306, count: 3 },
      { lng: 116.42232, lat: 39.92161, count: 13 },
      { lng: 116.4174, lat: 39.928616, count: 6 },
      { lng: 116.424679, lat: 39.915499, count: 21 },
      { lng: 116.42171, lat: 39.915738, count: 29 },
      { lng: 116.417836, lat: 39.916998, count: 99 },
      { lng: 116.420755, lat: 39.928001, count: 10 },
      { lng: 116.414077, lat: 39.930655, count: 14 },
      { lng: 116.426092, lat: 39.922995, count: 16 },
      { lng: 116.41535, lat: 39.931054, count: 15 },
      { lng: 116.413022, lat: 39.921895, count: 13 },
      { lng: 116.415551, lat: 39.913373, count: 17 },
      { lng: 116.421191, lat: 39.926572, count: 1 },
      { lng: 116.419612, lat: 39.917119, count: 9 },
      { lng: 116.418237, lat: 39.921337, count: 54 },
      { lng: 116.423776, lat: 39.921919, count: 26 },
      { lng: 116.417694, lat: 39.92536, count: 17 },
      { lng: 116.415377, lat: 39.914137, count: 19 },
      { lng: 116.417434, lat: 39.914394, count: 43 },
      { lng: 116.42588, lat: 39.922622, count: 27 },
      { lng: 116.418345, lat: 39.919467, count: 8 },
      { lng: 116.426883, lat: 39.917171, count: 3 },
      { lng: 116.423877, lat: 39.916659, count: 34 },
      { lng: 116.415712, lat: 39.915613, count: 14 },
      { lng: 116.419869, lat: 39.931416, count: 12 },
      { lng: 116.416956, lat: 39.925377, count: 11 },
      { lng: 116.42066, lat: 39.925017, count: 38 },
      { lng: 116.416244, lat: 39.920215, count: 91 },
      { lng: 116.41929, lat: 39.915908, count: 54 },
      { lng: 116.422116, lat: 39.919658, count: 21 },
      { lng: 116.4183, lat: 39.925015, count: 15 },
      { lng: 116.421969, lat: 39.913527, count: 3 },
      { lng: 116.422936, lat: 39.921854, count: 24 },
      { lng: 116.41905, lat: 39.929217, count: 12 },
      { lng: 116.424579, lat: 39.914987, count: 57 },
      { lng: 116.42076, lat: 39.915251, count: 70 },
      { lng: 116.425867, lat: 39.918989, count: 8 }
    ];

    this.showModal = this.showModal.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.onChange = this.onChange.bind(this);
    this.shut = this.shut.bind(this);
  }
  componentDidMount() {
    let that = this;
    this.map = new BMap.Map("map");
    //this.map.setMapStyle({style:'dark'});113.801628,23.045871
    var poi = new BMap.Point(113.801628, 23.045871);
    this.map.centerAndZoom(poi, 16);
    this.map.enableScrollWheelZoom();

    for (var i = 0; i < that.state.userdata.length; i++) {
      var myIcon = new BMap.Icon(
        require("../../../assets/images/warn/camera.png"),
        new BMap.Size(22, 22)
      );
      that.marker[i] = new BMap.Marker(
        new BMap.Point(
          that.state.userdata[i].point.lng,
          that.state.userdata[i].point.lat
        ),
        { icon: myIcon }
      ); // 创建标注
      let content = "";
      if (that.state.userdata[i].message.mediatype == "img") {
        content = that.set_infowindow(that.state.userdata[i]); //内容
      } else if (that.state.userdata[i].message.mediatype == "video") {
        content = that.set_video_infowindow(that.state.userdata[i]); //内容
      }
      that.marker[i].setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
      that.map.addOverlay(that.marker[i]); // 将标注添加到地图中
      addClickHandler(content, that.marker[i]);
    }
    function addClickHandler(content, marker) {
      marker.addEventListener("click", function(e) {
        openInfo(content, e, marker);
      });
    }
    function openInfo(content, e, m) {
      let p = e.target;
      let point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
      let infoWindow = new BMap.InfoWindow(content, {
        width: 460, // 信息窗口宽度
        height: 420, // 信息窗口高度
        title: "信息窗口", // 信息窗口标题
        enableMessage: true //设置允许信息窗发送短息
      }); // 创建信息窗口对象
      that.map.openInfoWindow(infoWindow, point); //开启信息窗口
    }
    if (this.props.history.location.state) {
      if ("dashboard" == this.props.history.location.state.from) {
        this.props.selectWarning();
        var myIcon = new BMap.Icon(
          require("../../../assets/images/warn/camera.png"),
          new BMap.Size(22, 22)
        );
        var marker = new BMap.Marker(poi, { icon: myIcon });
        this.map.addOverlay(marker);
        // marker.setAnimation(BMAP_ANIMATION_BOUNCE);
        var opts = {
          width: 200,
          height: 100,
          title: "预警",
          enableMessage: true
        };
        var infoWindow = new BMap.InfoWindow(
          "老人在该公寓内已7天未出门，请查看！",
          opts
        );
        this.map.openInfoWindow(infoWindow, poi);
      }
    }
    this.heatmapOverlay = new BMapLib.HeatmapOverlay({ radius: 20 });
    this.map.addOverlay(that.heatmapOverlay);
    this.heatmapOverlay.setDataSet({ data: this.hotpoints, max: 100 });

    var Chart = require("echarts"); //chart模块
    var colors = ["#5793f3", "#d14a61", "#675bba"];
    var yjchart = Chart.init(document.getElementById("chart"));
    var finishchart = Chart.init(document.getElementById("finish-chart"));
    finishchart.setOption({
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
        orient: "vertical",
        right: "10px",
        top: "30px",
        data: ["已完成", "已预警", "未完成"],
        textStyle: { color: "#999" },
        itemGap: 25
      },
      color: ["#ffca3a", "#a6dc67", "#ff4453"],
      series: [
        {
          name: "当前情况",
          type: "pie",
          center: ["30%", "50%"],
          radius: ["40%", "55%"],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: "center"
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: "14"
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            { value: 335, name: "已完成" },
            { value: 310, name: "已预警" },
            { value: 234, name: "未完成" }
          ]
        }
      ]
    });
    yjchart.setOption(
      {
        color: colors,
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999"
            }
          }
        },
        legend: {
          data: ["黑名单", "空巢老人", "昼伏夜出"],
          textStyle: { color: "#999999" }
        },
        grid: {
          top: 70,
          bottom: 50
        },
        xAxis: [
          {
            type: "category",
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
          }
        ],
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "黑名单",
            type: "line",
            data: [20, 47, 8, 5, 12, 23, 9]
          },
          {
            name: "空巢老人",
            type: "line",
            data: [22, 12, 20, 14, 15, 30, 7]
          },
          {
            name: "昼伏夜出",
            type: "line",
            data: [12, 9, 13, 14, 25, 6, 17]
          }
        ]
      },
      true
    );

    window.addEventListener("resize", function() {
      finishchart.resize();
      yjchart.resize(); //窗口改变大小时重绘图表
    });
  }
  showModal() {
    this.setState({
      visible: true
    });
  }
  handleOk(e) {
    console.log(e);
    this.setState({
      visible: false
    });
  }
  handleCancel(e) {
    console.log(e);
    this.setState({
      visible: false
    });
  }
  onChange(checked) {
    if (checked) {
      this.heatmapOverlay.show();
    } else {
      this.heatmapOverlay.hide();
    }
  }
  shut() {
    this.setState({ show: false });
  }
  chooseEvent(i, x, y, data) {
    var poi = new BMap.Point(x, y);
    this.map.centerAndZoom(poi, 16);
    this.show_infoWindow(i, data, poi);
  }

  show_infoWindow(i, data, poi) {
    if (data.message.mediatype == "img") {
      let sContent = this.set_infowindow(data);
      let infoWindow = new BMap.InfoWindow(sContent); // 创建图像信息窗口对象
      this.marker[i].openInfoWindow(infoWindow, poi);
    } else if (data.message.mediatype == "video") {
      let sContent = this.set_video_infowindow(data);
      let infoWindow = new BMap.InfoWindow(sContent); // 创建视频信息窗口对象
      this.marker[i].openInfoWindow(infoWindow, poi);
    }
  }
  set_infowindow(data) {
    return (
      '<div><div class="img"><img src=' +
      data.message.img +
      ' alt="event" id="e_img"/></div><div class="message"><div class="pe"> <div><strong>时间：</strong><span>' +
      data.message.time +
      "</span></div><div><strong>地点：</strong><span>" +
      data.message.address +
      "</span></div>  <div><strong>人数：</strong><span>" +
      data.message.pnum +
      '</span></div> </div><div class="pe"><div><strong>事件种类：</strong><span>' +
      data.message.type +
      "</span></div><div><strong>处理状态：</strong><span>" +
      data.message.status +
      "</span></div></div></div></div>"
    );
  }
  set_video_infowindow(data) {
    return (
      '<div><div class="img"><video  ref="media"  controls="true" webkit-controls type="video/mp4"  src=' +
      data.message.img +
      " " +
      ' webkit-playsinline playsinline id="e_img"></video></div><div class="message"><div class="pe"> <div><strong>时间：</strong><span>' +
      data.message.time +
      "</span></div><div><strong>地点：</strong><span>" +
      data.message.address +
      "</span></div>  <div><strong>人数：</strong><span>" +
      data.message.pnum +
      '</span></div> </div><div class="pe"><div><strong>事件种类：</strong><span>' +
      data.message.type +
      "</span></div><div><strong>处理状态：</strong><span>" +
      data.message.status +
      "</span></div></div></div></div>"
    );
  }
  render() {
    return (
      <div id="position" style={{ height: "100%" }}>
        <div id="map" style={{ height: "100vh" }} />
        <div id="table">
          <div className="pre-warn">
            <span className="pre-warn_title">预警完成情况</span>
            <div className="pre-warn_content">
              <div className="pre-warn_card">
                <div className="pre-warn_people" />
                <div className="pre-warn_equip" />
              </div>
              <div className="finishchart">
                <div className="pre-warn_echart" id="finish-chart" />
              </div>
            </div>
          </div>
          <div className="io-analysis">
            <span className="io-analysis_title">预警趋势</span>
            <div className="centerchart">
              <div id="chart" />
            </div>
          </div>
          <div className="eventlist">
            <span className="eventlist_title">
              事件提示<a className="moreinfo">更多</a>
            </span>
            {/* <div className="event-cutline"/> */}
            <ul>
              {this.state.userdata.map((item, key) => {
                return (
                  <li key={key}>
                    <span>{item.name}</span>
                    <a
                      onClick={() =>
                        this.chooseEvent(
                          key,
                          item.point.lng,
                          item.point.lat,
                          item
                        )
                      }
                    >
                      点击查看
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default PreWarn;
