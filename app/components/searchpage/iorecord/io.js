import React from 'react';
import ReactDOM from 'react-dom';
import {Table,Icon , Input , Select ,Checkbox, Row, Col,message} from "antd";
import '../searchpage.css';
import * as Mock_data from "../../../../config/chartConfig";
import userimg from '../../../assets/images/search/mookdata/s1.png'
const Option = Select.Option;

export default class Iorecord extends React.Component{
    constructor(props){
        super(props);
        this.state={
           dataSource:[],
           choosepic:false,
           url:"",
        }
        this.columns = [
            {
                title: '姓名',
                dataIndex: 'name',               
            }, 
            {
                title: '性别',
                dataIndex: 'sex',              
            },
            {
                title: '年龄',
                dataIndex: 'age',               
            }, 
            {
                title: '手机号',
                dataIndex: 'telenum',               
            },
            {
                title: '身份证号',
                dataIndex: 'cardnum',              
            },
            {
                title: '是否黑名单',
                dataIndex: 'black',               
            },
            {
                title: '家庭住址',
                dataIndex: 'address',
            },
            {
                title: '设备ID',
                dataIndex: 'ID',             
            },
            {
                title: '进门时间',
                dataIndex: 'intime',
            },
            {
                title: '进门时间',
                dataIndex: 'outtime',
            },
            {
                title: '所属警区',
                dataIndex: 'belong',
            }];
        this.more = false;
        this.toggle = this.toggle.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onsearch = this.onsearch.bind(this);
        this.choosePhoto = this.choosePhoto.bind(this);

    }
    choosePhoto(e){
        let url="";
        var imgFile = e.target.files[0];
        var fr = new FileReader();
        fr.onload = (e) => {
            this.setState({
                choosepic:true,
                dataSource:Mock_data.Iorecord2,
                url: e.target.result
            })
        };
        fr.readAsDataURL(imgFile);
    }
    toggle(){
        let dom = ReactDOM.findDOMNode(this.refs['more']);
        let icon = ReactDOM.findDOMNode(this.refs['optionicon']);
        
        if(!this.more){
            icon.style.transform = "rotate(180deg)";
            dom.style.height = 172+"px";
            this.more = true;
        }
        else{
            icon.style.transform = "rotate(0deg)";
            dom.style.height = 0;
            this.more = false;
        }
    }
    onChange(checkedValues){
        
       if(this.state.dataSource.length==0){
           if(checkedValues.length==1){
           message.info("请先搜索！");
        }
       }
        else{
            switch(checkedValues.length){
                case 1: this.setState({
                    dataSource:Mock_data.Iorecord1
                });break;
                case 2: this.setState({
                    dataSource:Mock_data.Iorecord
                });break;
                case 3: this.setState({
                    dataSource:Mock_data.Iorecord2
                });break;
                case 4: this.setState({
                    dataSource:Mock_data.Iorecord
                });break;
                case 5: this.setState({
                    dataSource:Mock_data.Iorecord1
                });break;
            }

           
        }
    }
    onsearch(event){
        let val = ReactDOM.findDOMNode(this.refs.searchinput).value;
        if(event.keyCode==13){
            if(val.length==0){
                message.info("请输入搜索内容！");
            }
            else{
                this.setState({
                    dataSource:Mock_data.Iorecord
                })
            }
        }  
    }
    componentDidMount(){
       
    }

    render(){
        //var searchInput = this.props.location.state.searchInput
        return(
            <div>
                <div className="mainheader">
                    <div className="search-Content">
                        <div className="headersearch">
                            <input className="search-index-input"  placeholder="请输入搜索内容" ref="searchinput" onKeyDown={this.onsearch}/>
                            { /*<a className='search-button' onClick={this.onsearch}><span className="search-btn-icon"></span></a> */}
                           
                            <a className="filebtn"><input type="file"  ref="upimg" title="上传图片" onChange={this.choosePhoto} className="btnfile"/></a>
                            <a className="more-option" onClick={this.toggle}>更多选项<span className="option-more" ref="optionicon"></span></a>
                        </div> 
                        <div className="more-search-option" ref="more">
                            <Checkbox.Group style={{ width: '100%' }} onChange={this.onChange}>

                                <Row>
                                    <Col span={2}>时间：</Col>
                                    <Col span={3}><Checkbox value="t0">今天</Checkbox></Col>
                                    <Col span={3}><Checkbox value="t1">昨天</Checkbox></Col>
                                    <Col span={3}><Checkbox value="t2">最近三天</Checkbox></Col>
                                    <Col span={3}><Checkbox value="t3">最近七天</Checkbox></Col>
                                    <Col span={3}><Checkbox value="t4">最近一个月</Checkbox></Col>
                                    <Col span={3}><Checkbox value="t5">三个月</Checkbox></Col>
                                </Row>
                                <Row>
                                    <Col span={2}>人口类别</Col>
                                    <Col span={3}><Checkbox value="p0">常住人口</Checkbox></Col>
                                    <Col span={3}><Checkbox value="p1">流动人口</Checkbox></Col>
                                    <Col span={3}><Checkbox value="p2">访客</Checkbox></Col>
                                </Row>
                                <Row>
                                    <Col span={2}>性别</Col>
                                    <Col span={3}><Checkbox value="1">男</Checkbox></Col>
                                    <Col span={3}><Checkbox value="0">女</Checkbox></Col>
                                </Row>
                                <Row>
                                    <Col span={2}>是否正常开门</Col>
                                    <Col span={3}><Checkbox value="t">是</Checkbox></Col>
                                    <Col span={3}><Checkbox value="f">否</Checkbox></Col>
                                </Row>
                            </Checkbox.Group>
                        </div>
                        <div className="uploadimg">
                            {
                                this.state.choosepic?
                                <img src={this.state.url} alt="当前人脸" className="face"/>:
                                <img src={userimg} alt="当前人脸" className="face"/>
                            }
                        </div>
                        <div className="pmessage">
                        {
                            this.state.choosepic?
                            <div className="full">
                                <p>姓名：李华</p>
                                <p>性别：男</p>
                                <p>相似度：95%</p>
                            </div>:
                             <div className="full">
                                <p>无人脸对比数据...</p> 
                            </div>
                        }
                        </div>
                        <div className="dbimg">
                            {
                                this.state.choosepic?
                                <img src={this.state.url} alt="当前人脸" className="face"/>:
                                <img src={userimg} alt="当前人脸" className="face"/>
                            }
                        </div>
                    </div>
                </div>
                <div className="restable">
                <Table bordered size="small" columns={this.columns}
                    dataSource={this.state.dataSource}    //替换为后台数据
                    pagination={this.state.pagination}
                    />   
                </div>
            </div>
        )
    }
}