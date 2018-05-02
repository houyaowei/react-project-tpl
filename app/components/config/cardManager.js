import React from  "react";
import { Table,Popconfirm,Button,Modal,Input,Form,Select} from 'antd';
import 'antd/dist/antd.css'; 
import * as Mock_data from "../../../config/chartConfig";
const InputGroup = Input.Group;
const Option = Select.Option;
const Search = Input.Search;
const FormItem = Form.Item;

 
let card_type = [
    {
        key: "1",
        value: "普通卡"
    },
    {
        key: "2",
        value: "身份证"
    },
    {
        key: "3",
        value: "居住证"
    },
    {
        key: "4",
        value: "手机"
    },
    {
        key: "5",
        value: "指纹"
    },
    {
        key: "6",
        value: "人脸"
    },
    {
        key: "0",
        value: "其他"
    }
]

let card_able = [
    {
        key: "1",
        value: "是"
    },
    {
        key: "2",
        value: "否"
    }
]

let card_status = [
{
    key: "1",
    value: "正常"
},
{
    key: "2",
    value: "注销"
}
]

const CollectionCreateForm = Form.create()(
    (props) => {
      const { visible, onCancel, onCreate, form } = props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="发卡登记信息"
          okText="Create"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <FormItem label="发卡授权单位名称">
              {getFieldDecorator('fksqdw',
              {
                  rules: [{ required: true, message: '不能为空' }],
              })(<Input />)}
            </FormItem>
            <FormItem label="发卡类型">
              {getFieldDecorator('fklx',
              {
                  rules: [{ required: true, message: '不能为空' }],
              })(<Select>
                    <Option value="1">正常卡</Option><Option value="2">身份证</Option><Option value="3">居住证</Option><Option value="4">手机</Option>
                    <Option value="5">指纹</Option><Option value="6">人脸</Option><Option value="0">其他</Option>
                 </Select>)}
            </FormItem>
            <FormItem label="是否正式卡">
              {getFieldDecorator('sfzsk',
              {
                  rules: [{ required: true, message: '不能为空' }],
              })(<Select><Option value="1">是</Option><Option value="2">否</Option></Select>)}
            </FormItem>
            <FormItem label="状态">
              {getFieldDecorator('zt',
              {
                  rules: [{ required: true, message: '不能为空' }],
              })(<Select><Option value="1">正常</Option><Option value="2">注销</Option></Select>)}
            </FormItem>
            <FormItem label="到期时间">
              {getFieldDecorator('dqsj',
              {
                  rules: [{ required: true, message: '不能为空' }],
              })(<Input />)}
            </FormItem>
            <FormItem label="备注">
              {getFieldDecorator('bz', {})(<Input />)}
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

const EditableFklxCell = ({ editable, value, onChange }) => (
    <div>
      {editable
        ? <Select style={{ margin: '-5px 0' }} value={value} onChange={e => {onChange(e)}} >
            <Option value="1">正常卡</Option><Option value="2">身份证</Option><Option value="3">居住证</Option><Option value="4">手机</Option>
            <Option value="5">指纹</Option><Option value="6">人脸</Option><Option value="0">其他</Option>
          </Select>
        : value
      }
    </div>
  );

const EditableSfzskCell = ({ editable, value, onChange }) => (
    <div>
      {editable
        ? <Select style={{ margin: '-5px 0' }} value={value} onChange={e => {onChange(e)}} ><Option value="1">是</Option><Option value="2">否</Option></Select>
        : value
      }
    </div>
  );
  
const EditableZtCell = ({ editable, value, onChange }) => (
    <div>
      {editable
        ? <Select style={{ margin: '-5px 0' }} value={value} onChange={e => {onChange(e)}} ><Option value="1">正常</Option><Option value="2">注销</Option></Select>
        : value
      }
    </div>
  );

class Test extends React.Component {
    constructor(props){
        super(props);
        this.columns = [
            {
                title: '发卡标识',
                dataIndex: 'fkbs',
                render: (text, record) => this.renderColumns(text, record, 'fkbs'),
            }, 
            {
                title: '人员标识',
                dataIndex: 'rybs',
                render: (text, record) => this.renderColumns(text, record, 'rybs'),
            }, 
            {
                title: '发卡授权单位名称',
                dataIndex: 'fksqdw',
                render: (text, record) => this.renderColumns(text, record, 'fksqdw'),
            },
            {
                title: '发卡类型',
                dataIndex: 'fklx',
                render: (text, record) => this.renderColumns(text, record, 'fklx'),
            },
            {
                title: '是否正式卡',
                dataIndex: 'sfzsk',
                render: (text, record) => this.renderColumns(text, record, 'sfzsk'),
            },
            {
                title: '状态',
                dataIndex: 'zt',
                render: (text, record) => this.renderColumns(text, record, 'zt'),
            },
            {
                title: '注销时间',
                dataIndex: 'zxsj',
                render: (text, record) => this.renderColumns(text, record, 'zxsj'),
            },
            {
                title: '到期时间',
                dataIndex: 'dqsj',
                render: (text, record) => this.renderColumns(text, record, 'dqsj'),
            },
            {
                title: '备注',
                dataIndex: 'bz',
                render: (text, record) => this.renderColumns(text, record, 'bz'),
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
                            <a className="editbtn" onClick={() => this.edit(record.key)}><span className="editicon"></span>编辑</a>
                            <Popconfirm title="确定删除吗？" onConfirm={() =>this.onDelete(record.key)}  okText="确定" cancelText="取消">
                                <a className="deletebtn"><span className="deleteicon"></span>删除</a>
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
            dataSource : Mock_data.card_manage,
            count:5,
            pagination: {},
            loading: false,
            //modal弹窗
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
    
    edit(key) {                                         //更新视图为可编辑状态
        const newData = [...this.state.dataSource];
        //console.log(newData);
        const target = newData.filter(item => key === item.key)[0]; //将当前行数据过滤出来
        if (target) {
            target.editable = true;
            this.setState({ data: newData });  
        }
    } 

    save(key) {
        const newData = [...this.state.dataSource];
        const target = newData.filter(item => key === item.key)[0];
        if (target) {
          delete target.editable;
          this.setState({ data: newData });
          console.log(target);                                      //此处与后台交互保存已修改数据
        }
    }  //保存

    handleChange(value, key, column) {
        //console.log(column);
        const newData = [...this.state.dataSource];
        const target = newData.filter(item => key === item.key)[0];
        if (target) {
          target[column] = value;           //修改对应行中对应字段的值
          this.setState({ data: newData });
        }
    }   //行内编辑动态更新对应字段的值

    renderColumns(text, record, column) {
        if(column == "fklx") {
            return (
                <EditableFklxCell
                  editable={record.editable}
                  value={card_type.find(item => text == item.key).value}
                  onChange={value => this.handleChange(value, record.key, column)}
                />
              );
        }
        if(column == "sfzsk") {
            return (
                <EditableSfzskCell
                  editable={record.editable}
                  value={card_able.find(item => text == item.key).value}
                  onChange={value => this.handleChange(value, record.key, column)}
                />
              );
        }
        if(column == "zt") {
            return (
                <EditableZtCell
                  editable={record.editable}
                  value={card_status.find(item => text == item.key).value}
                  onChange={value => this.handleChange(value, record.key, column)}
                />
              );
        }
        if(column == "zxsj") {
            <EditableCell
              editable={false}
              value={text}
              onChange={value => this.handleChange(value, record.key, column)}
            />
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
        console.log(this.state.dataSource);
    }
  render() {
    return (  
    <div>
      <div className="searchbar">
            <form action="#">
                <label htmlFor="name" className="lable namelable">发卡标识</label>
                <input type="text" name="name" id="name" className="table-input nameinput"/>
                <label htmlFor="age" className="lable agelable">发卡单位</label>
                <input type="text" name="age" id="age" className="table-input ageinput"/>
                <label htmlFor="age" className="lable agelable">发卡类型</label>
                <input type="text" name="age" id="age" className="table-input ageinput"/>
                <label htmlFor="age" className="lable agelable">状态</label>
                <input type="text" name="age" id="age" className="table-input ageinput"/>
                <a href="#" className="abutton"><span className="searchicon"></span>搜索</a>
                <a className="addpeople" onClick={this.showModal}>添加+</a>
            </form>
      </div>
      <Table bordered size="small" columns={this.columns}
        dataSource={this.state.dataSource}    //替换为后台数据
        pagination={this.state.pagination}
        loading={this.state.loading}
        onChange={this.handleTableChange} />
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

