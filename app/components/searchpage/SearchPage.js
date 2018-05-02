import React from 'react';
import ReactDOM from 'react-dom';
import history from "../../routes/history";
import {Layout, Menu , Icon , Input , Select , Button,Checkbox, Row, Col,message} from "antd";
import './searchpage.css';

import Searchresult from './search-result';
import Searchlist from './search-result-list';
import Track from "../track/Track";
import Iorecord from "./iorecord/io";
//模拟数据1
import userimg1 from '../../assets/images/search/mookdata/s1.png'
import house1 from '../../assets/images/search/mookdata/s2.png'


let data1 = [ {
                    person:{
                        name:"李晓东",
                        age:34,
                        address:"陕西西安",
                        house:"阳光小区",
                        detailed_address:"8单元153",
                        img:userimg1,
                        status:"黑名单"
                    },     //个人信息
                    house:{
                        housenum:1,
                        housearea:112,
                        city:"西安",
                        house:"阳光小区",
                        detailed_address:"8单元153",
                        houseimg:house1,
                    },     //房屋信息
                    visiter:{
                        data:[[2, 5, 9, 16, 18, 20,11], [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 31.6, 46.6, 55.4, 18.4, 10.3, 0.7]],
                    },     //访客记录
                    inout:{
                        data:[66, 12, 200, 234, 90, 230, 20],
                    },     //出入记录
                },

                {
                    person:{
                        name:"汪洋",
                        age:32,
                        address:"北京",
                        house:"现代城小区",
                        detailed_address:"1单元4006",
                        img:userimg1,
                        status:"正常"
                    },     //个人信息
                    house:{
                        housenum:5,
                        housearea:400,
                        city:"北京",
                        house:"现代城小区",
                        detailed_address:"1单元4006",
                        houseimg:house1,
                    },     //房屋信息
                    visiter:{
                        data:[[4, 10, 9, 16, 8, 20,11], [33.9, 15.9, 1.1, 18.7, 8.3, 69.2, 31.6, 6.6, 55.4, 18.4, 1.3, 0.7]],
                    },     //访客记录
                    inout:{
                        data:[10, 52, 200, 334, 390, 330, 220],
                    },     //出入记录
                },

                {
                    person:{
                        name:"胡伟杰",
                        age:53,
                        address:"陕西西安",
                        house:"佳园里小区",
                        detailed_address:"2单元2006",
                        img:userimg1,
                        status:"正常"
                    },     //个人信息
                    house:{
                        housenum:3,
                        housearea:245,
                        city:"西安",
                        house:"佳园里小区",
                        detailed_address:"2单元2006",
                        houseimg:house1,
                    },     //房屋信息
                    visiter:{
                        data:[[6, 1, 9, 6, 18, 17,11], [223.9, 15.9, 1.1, 18.7, 8.3, 69.2, 31.6, 6.6, 55.4, 18.4, 1.3, 0.7]],
                    },     //访客记录
                    inout:{
                        data:[300, 122, 10, 34, 290, 330, 220],
                    },     //出入记录
                },];
let data2 = [  {
            person:{
                name:"陈小号",
                age:30,
                address:"中国北京",
                house:"现代城小区",
                detailed_address:"6单元4002",
                img:userimg1,
                status:"黑名单"
            },     //个人信息
            house:{
                housenum:2,
                housearea:445,
                city:"中国北京",
                house:"现代城小区",
                detailed_address:"6单元4002",
                houseimg:house1,
                status:"正常"
            },     //房屋信息
            visiter:{
                data:[[13, 15, 9, 6, 18, 20,11], [223.9, 15.9, 1.1, 18.7, 8.3, 69.2, 31.6, 6.6, 55.4, 18.4, 1.3, 0.7]],
            },     //访客记录
            inout:{
                data:[300, 122, 10, 34, 290, 330, 220],
            },     //出入记录
        },

            {
                person:{
                    name:"李蔓蔓",
                    age:53,
                    address:"中国香港",
                    house:"沁园香湾小区",
                    detailed_address:"12单元206",
                    img:userimg1,
                    status:"正常"
                },     //个人信息
                house:{
                    housenum:3,
                    housearea:150,
                    city:"中国香港",
                    house:"沁园香湾小区",
                    detailed_address:"12单元206",
                    houseimg:house1,
                },     //房屋信息
                visiter:{
                    data:[[12, 5, 19, 6, 9, 10,11], [223.9, 15.9, 1.1, 18.7, 8.3, 69.2, 31.6, 6.6, 55.4, 18.4, 1.3, 0.7]],
                },     //访客记录
                inout:{
                    data:[100, 322, 210, 14, 290, 30, 220],
                },     //出入记录
            },];
let data3 = [   {
            person:{
                name:"李艳",
                age:53,
                address:"中国香港",
                house:"黎明港小区",
                detailed_address:"5单元506",
                img:userimg1,
                status:"正常"
            },     //个人信息
            house:{
                housenum:3,
                housearea:245,
                city:"中国香港",
                house:"黎明港小区",
                detailed_address:"5单元506",
                houseimg:house1,
            },     //房屋信息
            visiter:{
                data:[[6, 12, 9, 17, 10,17,11], [223.9, 15.9, 1.1, 18.7, 8.3, 69.2, 31.6, 6.6, 55.4, 18.4, 1.3, 0.7]],
            },     //访客记录
            inout:{
                data:[10, 12, 100, 340, 90, 330, 20],
            },     //出入记录
        },

        {
            person:{
                name:"吴莎",
                age:32,
                address:"中国北京",
                house:"现代城小区",
                detailed_address:"8单元2202",
                img:userimg1,
                status:"正常"
            },     //个人信息
            house:{
                housenum:3,
                housearea:345,
                city:"中国北京",
                house:"现代城小区",
                detailed_address:"8单元2202",
                houseimg:house1,
            },     //房屋信息
            visiter:{
                data:[[11, 15, 4, 11, 12, 2,6], [223.9, 15.9, 1.1, 18.7, 8.3, 69.2, 31.6, 6.6, 55.4, 18.4, 1.3, 0.7]],
            },     //访客记录
            inout:{
                data:[10, 422, 610, 134, 90, 0, 20],
            },     //出入记录
        },
];

let moocdata = {data1,data2,data3};
const Option = Select.Option;
const {  Content, Sider ,Header} = Layout;
const SubMenu = Menu.SubMenu;
export default class SearchPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            current: '1',
            collapsed: false,
            showNav:false,
            cardflag:true,
            resultdata:[],
            data:[
                {
                    person:{
                        name:"李晓东",
                        age:34,
                        address:"陕西西安",
                        house:"阳光小区",
                        detailed_address:"8单元153",
                        img:userimg1,
                        status:"黑名单"
                    },     //个人信息
                    house:{
                        housenum:1,
                        housearea:112,
                        city:"西安",
                        house:"阳光小区",
                        detailed_address:"8单元153",
                        houseimg:house1,
                    },     //房屋信息
                    visiter:{
                        data:[[2, 5, 9, 16, 18, 20,11], [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 31.6, 46.6, 55.4, 18.4, 10.3, 0.7]],
                    },     //访客记录
                    inout:{
                        data:[66, 12, 200, 234, 90, 230, 20],
                    },     //出入记录
                },

                {
                    person:{
                        name:"汪洋",
                        age:32,
                        address:"北京",
                        house:"现代城小区",
                        detailed_address:"1单元4006",
                        img:userimg1,
                        status:"正常"
                    },     //个人信息
                    house:{
                        housenum:5,
                        housearea:400,
                        city:"北京",
                        house:"现代城小区",
                        detailed_address:"1单元4006",
                        houseimg:house1,
                    },     //房屋信息
                    visiter:{
                        data:[[2, 3,2, 1, 5, 2, 14], [33.9, 15.9, 1.1, 18.7, 8.3, 69.2, 31.6, 6.6, 55.4, 18.4, 1.3, 0.7]],
                    },     //访客记录
                    inout:{
                        data:[10, 52, 200, 334, 390, 330, 220],
                    },     //出入记录
                },

                {
                    person:{
                        name:"胡伟杰",
                        age:53,
                        address:"陕西西安",
                        house:"佳园里小区",
                        detailed_address:"2单元2006",
                        img:userimg1,
                        status:"正常"
                    },     //个人信息
                    house:{
                        housenum:3,
                        housearea:245,
                        city:"西安",
                        house:"佳园里小区",
                        detailed_address:"2单元2006",
                        houseimg:house1,
                    },     //房屋信息
                    visiter:{
                        data:[[1,3,5,23,4,2,3], [223.9, 15.9, 1.1, 18.7, 8.3, 69.2, 31.6, 6.6, 55.4, 18.4, 1.3, 0.7]],
                    },     //访客记录
                    inout:{
                        data:[300, 122, 10, 34, 290, 330, 220],
                    },     //出入记录
                },

                {
                    person:{
                        name:"刘家豪",
                        age:30,
                        address:"中国北京",
                        house:"现代城小区",
                        detailed_address:"6单元4002",
                        img:userimg1,
                        status:"正常"
                    },     //个人信息
                    house:{
                        housenum:2,
                        housearea:445,
                        city:"中国北京",
                        house:"现代城小区",
                        detailed_address:"6单元4002",
                        houseimg:house1,
                    },     //房屋信息
                    visiter:{
                        data:[[4,3,2,5,7,11,20], [223.9, 15.9, 1.1, 18.7, 8.3, 69.2, 31.6, 6.6, 55.4, 18.4, 1.3, 0.7]],
                    },     //访客记录
                    inout:{
                        data:[300, 122, 10, 34, 290, 330, 220],
                    },     //出入记录
                },

                {
                    person:{
                        name:"李明浩",
                        age:53,
                        address:"中国香港",
                        house:"沁园香湾小区",
                        detailed_address:"12单元206",
                        img:userimg1,
                        status:"正常"
                    },     //个人信息
                    house:{
                        housenum:3,
                        housearea:150,
                        city:"中国香港",
                        house:"沁园香湾小区",
                        detailed_address:"12单元206",
                        houseimg:house1,
                    },     //房屋信息
                    visiter:{
                        data:[[20,22,11,6,8,10,10], [223.9, 15.9, 1.1, 18.7, 8.3, 69.2, 31.6, 6.6, 55.4, 18.4, 1.3, 0.7]],
                    },     //访客记录
                    inout:{
                        data:[100, 322, 210, 14, 290, 30, 220],
                    },     //出入记录
                },

                {
                    person:{
                        name:"刘健涛",
                        age:36,
                        address:"中国北京",
                        house:"现代城小区",
                        detailed_address:"10单元506",
                        img:userimg1,
                        status:"正常"
                    },     //个人信息
                    house:{
                        housenum:5,
                        housearea:285,
                        city:"中国北京",
                        house:"现代城小区",
                        detailed_address:"10单元506",
                        houseimg:house1,
                    },     //房屋信息
                    visiter:{
                        data:[[2,10,8,6,10,2,15], [223.9, 15.9, 1.1, 18.7, 8.3, 69.2, 31.6, 6.6, 55.4, 18.4, 1.3, 0.7]],
                    },     //访客记录
                    inout:{
                        data:[600, 322, 110, 34, 290, 330, 220],
                    },     //出入记录
                },

                {
                    person:{
                        name:"柴雪",
                        age:53,
                        address:"中国香港",
                        house:"黎明港小区",
                        detailed_address:"5单元506",
                        img:userimg1,
                        status:"正常"
                    },     //个人信息
                    house:{
                        housenum:3,
                        housearea:245,
                        city:"中国香港",
                        house:"黎明港小区",
                        detailed_address:"5单元506",
                        houseimg:house1,
                    },     //房屋信息
                    visiter:{
                        data:[[10,2,4,15,4,10,22], [223.9, 15.9, 1.1, 18.7, 8.3, 69.2, 31.6, 6.6, 55.4, 18.4, 1.3, 0.7]],
                    },     //访客记录
                    inout:{
                        data:[10, 12, 100, 340, 90, 330, 20],
                    },     //出入记录
                },

                {
                    person:{
                        name:"赵小涛",
                        age:32,
                        address:"中国北京",
                        house:"现代城小区",
                        detailed_address:"8单元2202",
                        img:userimg1,
                        status:"正常"
                    },     //个人信息
                    house:{
                        housenum:3,
                        housearea:345,
                        city:"中国北京",
                        house:"现代城小区",
                        detailed_address:"8单元2202",
                        houseimg:house1,
                    },     //房屋信息
                    visiter:{
                        data:[[3,5,1,9,10,23,10], [223.9, 15.9, 1.1, 18.7, 8.3, 69.2, 31.6, 6.6, 55.4, 18.4, 1.3, 0.7]],
                    },     //访客记录
                    inout:{
                        data:[10, 422, 610, 134, 90, 0, 20],
                    },     //出入记录
                },
            ],
        }
        this.cadata = this.state.resultdata;
        this.more = false;
        this.onCollapse = this.onCollapse.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.toggle = this.toggle.bind(this);
        this.onChange = this.onChange.bind(this);
        this.showcard = this.showcard.bind(this);
        this.showlist = this.showlist.bind(this);
        this.onsearch = this.onsearch.bind(this);
    }

    onsearch(){
        this.props.location.state = false;
       
        if( this.refs.inp.value.length!=0){
            this.setState({resultdata:data3});
        }
        else{
            message.info("请输入搜索内容！")
        }
       
    } 

    showcard(){
        this.setState({cardflag:true});
    }
    showlist(){
        this.setState({cardflag:false});
    }
    componentDidMount(){
        
    }
    toggle(){
        let dom = ReactDOM.findDOMNode(this.refs['more']);
        let icon = ReactDOM.findDOMNode(this.refs['optionicon']);
        
        if(!this.more){
            icon.style.transform = "rotate(180deg)";
            dom.style.height = 130+"px";
            this.more = true;
        }
        else{
            icon.style.transform = "rotate(0deg)";
            dom.style.height = 0;
            this.more = false;
        }
    }
    onChange(checkedValues) {
        this.props.location.state = false;
        switch(checkedValues.length){
            case 0:
                this.setState({resultdata:this.cadata}); 
                break;
            case 1: 
                this.setState({resultdata:data1}); 
                break;
            case 2: 
                this.setState({resultdata:data2}) ;
                break;
            case 3: 
                this.setState({resultdata:data3}) ;
                break;
            case 4:
                this.setState({resultdata:data1}) ;
                break;
            case 5: 
                this.setState({resultdata:data2}) ;
                break;
            case 6: 
                this.setState({resultdata:data3}) ;
                break;
            case 7: 
                this.setState({resultdata:data2}) ;
                break;
            case 8: 
                this.setState({resultdata:data1}) ;
                break;
        }
        console.log('checked = ', checkedValues);
      }
    onCollapse () {
        this.setState({ collapsed:!this.state.collapsed });
    }
    handleClick(e) {
        this.setState({current:e.key})
    }
    render(){
        //var searchInput = this.props.location.state.searchInput
        return(
            <div className="right-body-container" style={{ minHeight: '100vh' ,backgroundColor:"transparent"}}>
                <Sider collapsible
                       collapsed={this.state.collapsed}
                       onCollapse={this.onCollapse}>
                    <Menu onClick={this.handleClick} theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                            <Icon type="pie-chart"/>
                            <span>结果预览</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="desktop" />
                            <span>人员轨迹分析</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="desktop" />
                            <span>出入记录查询</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <div className="right-div-body" style={{backgroundColor:"transparent"}}>
                    {this.state.current==1?
                        <div>
                            <div className="mainheader">
                                <div className="search-Content">
                                    <div className="headersearch">
                                        <input className="search-index-input" ref="inp" placeholder="请输入搜索内容" />
                                        <a className='search-button' onClick={this.onsearch}><span className="search-btn-icon"></span></a>
                                        <span className='search-title'>省</span>
                                        <Select  style={{ width: 120 }} className="search-option">
                                            <Option value="shanxi">陕西</Option>
                                            <Option value="guangdong">广东</Option>
                                            <Option value="hainan">海南</Option>
                                            <Option value="heilongjiang">黑龙江</Option>
                                        </Select>
                                        <span className='search-title'>市区</span>
                                        <Select  style={{ width: 120 }} className="search-option">
                                            <Option value="shanxi">西安</Option>
                                            <Option value="guangdong">汉中</Option>
                                            <Option value="hainan">渭南</Option>
                                            <Option value="heilongjiang">韩城</Option>
                                        </Select>
                                        <span className='search-title'>区(县)</span>
                                        <Select  style={{ width: 120 }} className="search-option">
                                            <Option value="shanxi">勉县</Option>
                                            <Option value="guangdong">镇巴</Option>
                                            <Option value="hainan">洋县</Option>
                                            <Option value="heilongjiang">合阳县</Option>
                                        </Select>
                                        <a className="asearchbtn"  onClick={this.onsearch}>查询</a>
                                        <a className="more-option" onClick={this.toggle}>更多选项<span className="option-more" ref="optionicon"></span></a>
                                        <a className="selectview selectcard"  onClick={this.showcard}><span className="cardview"></span>图形显示</a>
                                        <a className="selectview selectlist"  onClick={this.showlist}><span className="listview" ></span>列表显示</a>
                                    </div>
                                    <div className="more-search-option" ref="more">
                                        <Checkbox.Group style={{ width: '100%' }} onChange={this.onChange}>

                                            <Row>
                                                <Col span={2}>年龄范围：</Col>
                                                <Col span={3}><Checkbox value="age0">5~10岁</Checkbox></Col>
                                                <Col span={3}><Checkbox value="age1">10~18岁</Checkbox></Col>
                                                <Col span={3}><Checkbox value="age2">18~25岁</Checkbox></Col>
                                                <Col span={3}><Checkbox value="age3">25~45岁</Checkbox></Col>
                                                <Col span={3}><Checkbox value="age4">45~80岁</Checkbox></Col>
                                            </Row>
                                            <Row>
                                                <Col span={2}>出入次数</Col>
                                                <Col span={3}><Checkbox value="house0">0-5次</Checkbox></Col>
                                                <Col span={3}><Checkbox value="house1">6-10次</Checkbox></Col>
                                                <Col span={3}><Checkbox value="house2">11-15次</Checkbox></Col>
                                                <Col span={3}><Checkbox value="house3">16-20次</Checkbox></Col>
                                                <Col span={3}><Checkbox value="house4">21-25次</Checkbox></Col>
                                            </Row>
                                            <Row>
                                                <Col span={2}>性别</Col>
                                                <Col span={3}><Checkbox value="1">男</Checkbox></Col>
                                                <Col span={3}><Checkbox value="0">女</Checkbox></Col>
                                            </Row>
                                        </Checkbox.Group>
                                    </div>
                                </div>
                            </div>                           
			            {
                            this.props.location.state?
                                <div className="search-result-container">
                                    {
                                        this.state.cardflag ? 
                                        <div>
                                            {
                                                this.state.data.map((value,key)=>{
                                                    return <Searchresult data={this.state.data[key]}  chart1={"chart1"+key} chart2={"chart2"+key}/>;
                                                })
                                            }
                                        </div> :
                                        <div className="list-result-Content">
                                            {   
                                                this.state.data.map((value,key)=>{
                                                    return <Searchlist  data={this.state.data[key]}/> 
                                                })
                                            }
                                        </div>
                                    }
                                </div>
                            :
                                <div className="search-result-container">
                                    {
                                        this.state.cardflag ?
                                            <div>
                                                {
                                                    this.state.resultdata.map((value,key)=>{
                                                        return <Searchresult data={this.state.resultdata[key]}  chart1={"chart1"+key} chart2={"chart2"+key}/>;
                                                    })
                                                }
                                            </div> :
                                            <div className="list-result-Content">
                                                {
                                                    this.state.resultdata.map((value,key)=>{
                                                        return <Searchlist  data={this.state.resultdata[key]}/>
                                                    })
                                                }
                                            </div>
                                    }
                                </div>
			            }
                        </div>:this.state.current==2?
                        <Track/>:
                        <Iorecord/>    
                    }

                </div>
            </div>
        )
    }
}