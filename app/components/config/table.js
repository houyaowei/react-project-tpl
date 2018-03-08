import React from  "react";
import { Table,Popconfirm,Button,Modal,Input,Form} from 'antd';
import 'antd/dist/antd.css'; 
import Modalbtn from "./modal";
class Test extends React.Component {
    constructor(props){
        super(props);
        this.columns = [
            {
                title: '姓名',
                dataIndex: 'name',
            }, 
            {
                title: '年龄',
                dataIndex: 'age',
            }, 
            {
                title: '联系方式',
                dataIndex: 'email',
            },
            {
                title: '家庭住址',
                dataIndex: 'address',
            },
            {
                title: '操作',
                dataIndex: 'operation',
                render: (text, record) => {
                    return (
                      this.state.dataSource.length > 0 ?
                      (
                        <a>
                            <Popconfirm title="确定删除吗？" okText="删除" cancelText="取消" onConfirm={() => this.onDelete(record.key)}>
                                <Button size="small" type="danger">删除</Button>
                            </Popconfirm>
                           <Modalbtn nowdata={record}/>
                        </a>
                      ) : null
                    );
                  },
            }
        ];
        this.state = {
            data: [],  //服务器返回数据
            dataSource : [
                    {
                        key:1,
                        name: 'xiao斌',
                        age: 32,
                        email:"xxx",
                        address: '西湖区湖底公园1号',
                    },
                    {
                        key:2,
                        name: '李小工',
                        age: 32,
                        email:"xxx",
                        address: '西湖区湖底公园1号',
                    },
                    {
                        key:3,
                        name: '张三',
                        age: 23,
                        email:"xxx",
                        address: '高新区',
                    },
                    {
                        key:4,
                        name: '吴彦祖',
                        age: 32,
                        email:"xxx",
                        address: '西湖区湖底公园1号',
                    },
                    {
                        key:5,
                        name: '胡彦祖',
                        age: 42,
                        email:"xxx",
                        address: '西湖区湖底公园1号'
                    }],
              count:5,
            pagination: {},
            loading: false,
            //modal弹窗
            visible: false,
            confirmLoading: false,
            nowdata: [{
                key:"",
                name: '',
                age:" " ,
                email:" ",
                address: " ",
          }],
          };
         this.handleTableChange = this.handleTableChange.bind(this);
         this.fetch = this.fetch.bind(this);
         this.onDelete = this.onDelete.bind(this);
        }
    //删除操作
    onDelete(key){
        const dataSource = [...this.state.dataSource];
        this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
        this.state.count-=1;
        console.log("删除第"+key+"项数据值");
    }
    handleTableChange(pagination, filters, sorter) {
        const pager = this.state.pagination;
        pager.current = pagination.current;
        this.setState({
        pagination: pager
        });
        const params = {
        pageSize: pagination.pageSize,
        currentPage: pagination.current,
        sortField: sorter.field,
        sortOrder: sorter.order
        };
        for (let key in filters) {
        if (filters.hasOwnProperty(key)) {
            params[key] = filters[key];
        }
        }
        this.fetch(params);
    }
    //联网获取后台数据
    fetch(params = {}) {
        console.log('请求参数：', params);
        this.setState({ loading: true });
        reqwest({
        url: 'https://randomuser.me/api',
        method: 'get',
        data: params,
        type: 'json',
        success: (result) => {
            const pagination = this.state.pagination;
            pagination.total = result.totalCount;  //
            console.log(result);
            this.setState({
            loading: false,
            data: result.data,
            pagination,
            });
        }
        });
    }
    componentDidMount() {
        //this.fetch();
    }
  render() {
    return (
    <div>
      <Table bordered size="small" columns={this.columns}
        dataSource={this.state.dataSource}    //替换为后台数据
        pagination={this.state.pagination}
        loading={this.state.loading}
        onChange={this.handleTableChange} />
    </div>
    );
  }
}

export default Test;

