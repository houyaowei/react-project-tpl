import React from 'react';
import ReactDOM from 'react-dom';
import { Table } from 'antd';

export default class Searchresult extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
        };
    }
    componentDidMount(){
      
    }
    render(){
        return(       
               <div className="listitem">
                    <img src={this.props.data.person.img} alt="res" className="list-img"/>
                    <span className="listname"><span className="listtitle">姓名：</span>{this.props.data.person.name}</span>
                    <span className="listname"><span className="listtitle">籍贯：</span>{this.props.data.person.address}</span>
                    <span className="listname"><span className="listtitle">社区：</span>{this.props.data.person.house}</span>
                    <span className="listname"><span className="listtitle">详细地址：</span>{this.props.data.person.detailed_address}</span>
                    <span className="listname"><span className="listtitle">最近位置：</span>{this.props.data.person.house}</span>
                    <a className="getmore">查看详情</a>
               </div>          
        )
    }
}