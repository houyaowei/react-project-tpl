import React from  "react";
import { Table,Popconfirm,Button,Modal,Input,Form,Select} from 'antd';
import 'antd/dist/antd.css'; 
import * as Mock_data from "../../../config/chartConfig";
const InputGroup = Input.Group;
const Option = Select.Option;
const Search = Input.Search;
const FormItem = Form.Item;

 
const certificate_type = [
    {
        key: "001",
        value: "身份证"
    },
    {
        key: "002",
        value: "护照"
    },
    {
        key: "003",
        value: "绿卡"
    },
    {
        key: "004",
        value: "签证"
    }
]

const CollectionCreateForm = Form.create()(
    (props) => {
      const { visible, onCancel, onCreate, form } = props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="房屋信息"
          okText="Create"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <FormItem label="房屋标识">
              {getFieldDecorator('fwbs',
              {
                  rules: [{ required: true, message: '不能为空' }],
              })(<Input />)}
            </FormItem>
            <FormItem label="业主姓名（房屋所有人）">
              {getFieldDecorator('yzxm',
              {
                  rules: [{ required: true, message: '不能为空' }],
              })(<Input />)}
            </FormItem>
            <FormItem label="证件种类">
              {getFieldDecorator('cyzjdm',
              {
                  rules: [{ required: true, message: '不能为空' }],
              })(<Select>{SelOptions(certificate_type)}</Select>)}
            </FormItem>
            <FormItem label="证件号码">
              {getFieldDecorator('zjhm',
              {
                  rules: [{ required: true, message: '不能为空' }],
              })(<Input />)}
            </FormItem>
            <FormItem label="业主手机号码">
              {getFieldDecorator('yzyddh', {})(<Input />)}
            </FormItem>
            <FormItem label="管理人姓名">
              {getFieldDecorator('glrxm', {})(<Input />)}
            </FormItem>
            <FormItem label="管理人身份证号码">
              {getFieldDecorator('glrsfzhm', {})(<Input />)}
            </FormItem>
            <FormItem label="房屋地址（全址）">
              {getFieldDecorator('fwdz', {})(<Input />)}
            </FormItem>
            <FormItem label="房屋编码">
              {getFieldDecorator('fwbm', {})(<Input />)}
            </FormItem>
            <FormItem label="警务区代码">
              {getFieldDecorator('jwqdm',
              {
                  rules: [{ required: true, message: '不能为空' }],
              })(<Input />)}
            </FormItem>
          </Form>
        </Modal>
      );
    }
  );

const EditableCell = ({ editable, value, onChange }) => (
    <div>
      {editable
        ? <Input style={{ margin: '-5px 0' }} value={value} onChange={e => onChange(e.target.value)} />
        : value
      }
    </div>
  );

const SelOptions = (data) => data.map(certificate => <Option key={certificate.key}>{certificate.value}</Option>);

const EditableZJZLCell = ({ editable, value, onChange }) => (
    <div>
      {editable
        ? <Select style={{ margin: '-5px 0' }} value={value} onChange={e => {onChange(e)}} >{SelOptions(certificate_type)}</Select>
        : value
      }
    </div>
  );

class Test extends React.Component {
    constructor(props){
        super(props);
        this.columns = [
            {
                title: '房屋标识',
                dataIndex: 'fwbs',
                render: (text, record) => this.renderColumns(text, record, 'fwbs'),
            }, 
            {
                title: '业主姓名（房屋所有人）',
                dataIndex: 'yzxm',
                render: (text, record) => this.renderColumns(text, record, 'yzxm'),
            }, 
            {
                title: '证件种类',
                dataIndex: 'cyzjdm',
                render: (text, record) => this.renderColumns(text, record, 'cyzjdm'),
            },
            {
                title: '证件号码',
                dataIndex: 'zjhm',
                render: (text, record) => this.renderColumns(text, record, 'zjhm'),
            },
            {
                title: '业主手机号码',
                dataIndex: 'yzyddh',
                render: (text, record) => this.renderColumns(text, record, 'yzyddh'),
            },
            {
                title: '管理人姓名',
                dataIndex: 'glrxm',
                render: (text, record) => this.renderColumns(text, record, 'glrxm'),
            },
            {
                title: '管理人身份证号码',
                dataIndex: 'glrsfzhm',
                render: (text, record) => this.renderColumns(text, record, 'glrsfzhm'),
            },
            {
                title: '房屋地址（全址）',
                dataIndex: 'fwdz',
                render: (text, record) => this.renderColumns(text, record, 'fwdz'),
            },
            {
                title: '房屋编码',
                dataIndex: 'fwbm',
                render: (text, record) => this.renderColumns(text, record, 'fwbm'),
            },
            {
                title: '警务区代码',
                dataIndex: 'jwqdm',
                render: (text, record) => this.renderColumns(text, record, 'jwqdm'),
            },
            {
                title: '操作',
                dataIndex: 'operation',
                render: (text, record) => {
                const { editable } = record;   //当前行数据
                return (
                    <div className="editable-row-operations">
                    {
                        editable ?
                        <span>
                            <a onClick={() => this.save(record.key)}><span className="saveicon"></span>保存</a>
                            <Popconfirm title="确定删除吗？" onConfirm={() =>this.onDelete(record.key)}  okText="确定" cancelText="取消">
                                <a className="deletebtn"><span className="deleteicon"></span>删除</a>
                            </Popconfirm>
                           
                        </span>
                        : 
                        <span>
                            <a  className="editbtn" onClick={() => this.edit(record.key)}><span className="editicon"></span>编辑</a>
                            <Popconfirm title="确定删除吗？" onConfirm={() =>this.onDelete(record.key)}  okText="确定" cancelText="取消">
                                <a className="deletebtn" ><span className="deleteicon"></span>删除</a>
                            </Popconfirm>
                        </span>
                        //编辑数据表中以key索引的数据
                    }
                    </div>
                );
                },
            }
        ];
        this.state = {
            data: [],  //
            dataSource : Mock_data.house_manage,
            count:5,
            pagination: {},
            loading: false,
            //modal弹窗
            searchdata:[],
            visible: false,
            confirmLoading: false,
           
        };
        this.cacheData={};
        this.onDelete = this.onDelete.bind(this);
        this.showModal = this.showModal.bind(this);
        this.handleCancel =this.handleCancel.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
        this.saveFormRef = this.saveFormRef.bind(this);
        }
    
    edit(key) {
        if(this.props.location.state){
            const d = [...this.state.searchdata];
            const target = d.filter(item => key === item.key)[0]; //将当前行数据过滤出来
            target.editable = true;
            this.setState({ data: d });   //更新编辑视图*/
            //console.log(this.state.searchdata);
        }
        const newData = [...this.state.dataSource];
        //console.log(newData);
        const target = newData.filter(item => key === item.key)[0]; //将当前行数据过滤出来
        if (target) {
            target.editable = true;
            this.setState({ data: newData });   //更新视图为可编辑状态
        }
    } 

    save(key) {
        if(this.props.location.state){
            const newData = [...this.state.searchdata];
            const target = newData.filter(item => key === item.key)[0];
            if (target) {
              delete target.editable;
              this.setState({ data: newData });
              console.log(target);                                      //此处与后台交互保存已修改数据
            }
        }
        const newData = [...this.state.dataSource];
        const target = newData.filter(item => key === item.key)[0];
        if(target.zt == 2) {
            let date = new Date();
            target.zxsj = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDay();
         } else {
            target.zxsj = "";
         }
        if (target) {
          delete target.editable;
          this.setState({ data: newData });
          console.log(target);                                      //此处与后台交互保存已修改数据
        }
    }  //保存

    handleChange(value, key, column) {
        if(this.props.location.state){
            const newData = [...this.state.searchdata];
            const target = newData.filter(item => key === item.key)[0];
            if (target) {
              target[column] = value;
              this.setState({ data: newData });
            }
        }
        //console.log(column);
        const newData = [...this.state.dataSource];
        const target = newData.filter(item => key === item.key)[0];
        if (target) {
          target[column] = value;           //修改对应行中对应字段的值
          this.setState({ data: newData });
        }
    }   //行内编辑动态更新对应字段的值

    renderColumns(text, record, column) {
        if(column == "cyzjdm") {
            return (
                <EditableZJZLCell
                  editable={record.editable}
                  value={certificate_type.find(item => text == item.key).value}
                  onChange={value => this.handleChange(value, record.key, column)}
                />
              );
        }
        return (
            <EditableCell
              editable={record.editable}
              value={text}
              onChange={value => this.handleChange(value, record.key, column)}
            />
          );
    }
        //删除操作
    onDelete(key){
        if(this.props.location.state){
            const dataSource = [...this.state.searchdata];
            this.setState({ searchdata: dataSource.filter(item => item.key !== key) });
            this.state.count-=1;
            console.log("删除第"+key+"项数据值");
        }
        const dataSource = [...this.state.dataSource];
        this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
        this.state.count-=1;
        console.log("删除第"+key+"项数据值");
    }

   
    showModal(){
        this.setState({ visible: true });   //显示模态框
    }
    
    handleCancel(){
        this.setState({ visible: false });
    }
    handleCreate(){                    //模态框提交事件
        const form = this.form;
        form.validateFields((err, values) => {
          if (err) {
            return;
          }
          console.log('Received values of form: ', values);
          values.key= Date.parse(new Date());  //前端试用后期不需要唯一key
          values.fkbs = "11221220171212000006";
          values.rybs = "MJXT000012000006";
          if(values.zt == 2) {
            let date = new Date();
            values.zxsj = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDay();
          }
          this.state.dataSource.push(values);
          this.setState({dataSource:this.state.dataSource,visible: false});
          form.resetFields();
        });
    }
    saveFormRef(form){
        this.form = form;
    }
    componentDidMount() {
        if(this.props.location.state){
            this.setState({
                searchdata:[
                    {
                        "key": 1,
                        "fwbs": "MJXT000010000001",
                        "fwdz": this.props.location.state.house.house.detailed_address,
                        "fwbm": "7512369",
                        "cyzjdm": "001",
                        "glrxm": this.props.location.state.house.person.name,
                        "glrsfzhm": "120456195503214213",
                        "id": 1,
                        "yzxm":  this.props.location.state.house.person.name,
                        "yzyddh": 13845123698,
                        "zjhm": "120456197511211563",
                        "jwqdm": "440103440000"
                    },
                ]
            })
        }
        console.log(this.state.dataSource);
    }
  render() {
    return (  
    <div>
       <div className="searchbar">
            <form action="#">
                <label htmlFor="name" className="lable namelable">业主姓名</label>
                <input type="text" name="name" id="name" className="table-input nameinput"/>
                <label htmlFor="age" className="lable agelable">证件号码</label>
                <input type="text" name="age" id="age" className="table-input ageinput"/>
                <label htmlFor="age" className="lable agelable">手机号</label>
                <input type="text" name="age" id="age" className="table-input ageinput"/>
                <label htmlFor="age" className="lable agelable">房屋编码</label>
                <input type="text" name="age" id="age" className="table-input ageinput"/>
                <a href="#" className="abutton"><span className="searchicon"></span>搜索</a>
                <a className="addpeople" onClick={this.showModal}>添加+</a>
            </form>
      </div>
      {
           this.props.location.state?
           <Table bordered size="small" columns={this.columns}
           dataSource={this.state.searchdata}    //替换为后台数据
           pagination={this.state.pagination}
           loading={this.state.loading}
           onChange={this.handleTableChange} />:
           <Table bordered size="small" columns={this.columns}
           dataSource={this.state.dataSource}    //替换为后台数据
           pagination={this.state.pagination}
           loading={this.state.loading}
           onChange={this.handleTableChange} />
      }
     
        <CollectionCreateForm
          ref={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
    </div>
    );
  }
}

export default Test;

