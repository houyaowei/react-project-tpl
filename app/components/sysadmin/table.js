import React from  "react";
import { Table,Popconfirm,Button,Modal,Input,Form,Select} from 'antd';
import 'antd/dist/antd.css'; 
import * as Mock_data from "../../../config/chartConfig";
const InputGroup = Input.Group;
const Option = Select.Option;
const Search = Input.Search;
const FormItem = Form.Item;

const CollectionCreateForm = Form.create()(
    (props) => {
      const { visible, onCancel, onCreate, form } = props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Create a new collection"
          okText="Create"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <FormItem label="姓名">
              {getFieldDecorator('name', 
              {
                rules: [{ required: true, message: '不能为空' }],
              })(<Input />)}
            </FormItem>
            <FormItem label="年龄">
              {getFieldDecorator('age',
              {
                  rules: [{ required: true, message: '不能为空' }],
              })(<Input />)}
            </FormItem>
            <FormItem label="联系方式">
              {getFieldDecorator('email',
              {
                  rules: [{ required: true, message: '不能为空' }],
              })(<Input />)}
            </FormItem>
            <FormItem label="家庭住址">
              {getFieldDecorator('address',
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
class Test extends React.Component {
    constructor(props){
        super(props);
        this.columns = [
            {
                title: '姓名',
                dataIndex: 'name',
                render: (text, record) => this.renderColumns(text, record, 'name'),
            }, 
            {
                title: '年龄',
                dataIndex: 'age',
                render: (text, record) => this.renderColumns(text, record, 'age'),
            }, 
            {
                title: '联系方式',
                dataIndex: 'email',
                render: (text, record) => this.renderColumns(text, record, 'email'),
            },
            {
                title: '家庭住址',
                dataIndex: 'address',
                render: (text, record) => this.renderColumns(text, record, 'address'),
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
                            <a  onClick={() => this.edit(record.key)}><span className="editicon"></span>编辑</a>
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
            dataSource : Mock_data.people_manage,
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
    
    edit(key) {
        const newData = [...this.state.dataSource];
        //console.log(newData);
        const target = newData.filter(item => key === item.key)[0]; //将当前行数据过滤出来
        if (target) {
            target.editable = true;
            this.setState({ data: newData });   //更新编辑视图
        }
    }   //编辑

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
          target[column] = value;
          this.setState({ data: newData });
        }
    }   //行内编辑动态更新对应字段的值

    renderColumns(text, record, column) {
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
                <label htmlFor="name" className="lable namelable">姓名</label>
                <input type="text" name="name" id="name" className="table-input nameinput"/>
                <label htmlFor="age" className="lable agelable">年龄</label>
                <input type="text" name="age" id="age" className="table-input ageinput"/>
                <label htmlFor="age" className="lable agelable">联系方式</label>
                <input type="text" name="age" id="age" className="table-input ageinput"/>
                <label htmlFor="age" className="lable agelable">家庭住址</label>
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

