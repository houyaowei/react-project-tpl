import React from 'react';
import { Menu,Layout,Icon} from 'antd';
import '../../assets/css/ayalysisdata.css';
import AnalysisHome from './AnalysisHome';
import AnalysisPage1 from './AnalysisPage1';
import AnalysisPage2 from './AnalysisPage2';
import AnalysisPage3 from './AnalysisPage3';
import AnalysisPage4 from './AnalysisPage4';
import AnalysisPage5 from './AnalysisPage5';
import AnalysisPage6 from './AnalysisPage6';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;
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

// window.addEventListener("storage", function(e){
//     console.log("oldValue: "+ e.oldValue + " newValue:" + e.newValue );
// });
export default class Analysis extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:'东莞',
            current: '1',
            collapsed: false,
            showNav:false
        };
        this.onCollapse = this.onCollapse.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    onCollapse () {
        this.setState({ collapsed:!this.state.collapsed });
    }
    handleClick(e) {
        this.setState({current:e.key})
    }


    render(){
        return(
            <div  className="right-body-container" style={{ minHeight: '100vh',backgroundColor:"#e5eafe"}}>
                <Sider collapsible
                       collapsed={this.state.collapsed}
                       onCollapse={this.onCollapse}>
                    {/*<div>\n</div>*/}
                    <Menu onClick={this.handleClick} theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                            <Icon type="pie-chart"/>
                            <span>整体数据分析</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="smile" />
                            <span>流动人口宏观分析</span>
                        </Menu.Item>
                        <Menu.Item key="6">
                            <Icon type="team" />
                            <span>游客数量分析</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="user" />
                            <span>访客数量宏观分析</span>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Icon type="form" />
                            <span>人员进出数量分析</span>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <Icon type="idcard" />
                            <span>民族人数数量分析</span>
                        </Menu.Item>
                        <Menu.Item key="7">
                            <Icon type="home" />
                            <span>区域对比分析</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <div className="right-div-body" style={{backgroundColor:"#e5eafe"}}>
                        {this.state.current==1?<AnalysisHome/>:
                            this.state.current==2?<AnalysisPage1/>:
                                this.state.current==3?<AnalysisPage2/>:
                                    this.state.current==4?<AnalysisPage3/>:
                                        this.state.current==5?<AnalysisPage4/>:
                                            this.state.current==6?<AnalysisPage5/>:<AnalysisPage6/>}
                </div>
            </div>
        )
    }
};
