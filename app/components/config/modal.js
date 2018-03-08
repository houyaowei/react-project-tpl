import React from  "react";
import { Button, Modal, Form, Input, Radio } from 'antd';
import 'antd/dist/antd.css'; 
const FormItem = Form.Item;

const CollectionCreateForm = Form.create()(
  (props) => {
    const { visible, onCancel, onCreate, form, nowdata} = props;
    const { getFieldDecorator } = form;
    return (
      <Modal
        visible={visible}
        title="人员基本信息编辑"
        okText="确定"
        cancelText="取消"
        onCancel={onCancel}
        onOk={onCreate}
      >
        <Form layout="vertical">
          <FormItem label="姓名">
            {getFieldDecorator('name', {
                rules: [{ required: true, message: '请输入姓名!' }],
                
            })(<Input placeholder={nowdata.name} />)}
          </FormItem>
          <FormItem label="年龄">
            {getFieldDecorator('age', {
              rules: [{ required: true, message: '请输入年龄!'}],
             
            })(<Input placeholder={nowdata.age} />)}
          </FormItem>
        </Form>
      </Modal>
    );
  }
);

class modalwin extends React.Component {
    constructor(props){
        super(props);
        this. state = {
            visible: false,
          };
          this.showModal = this.showModal.bind(this);
          this.handleCancel = this.handleCancel.bind(this);
          this.handleCreate = this.handleCreate.bind(this);
          this.saveFormRef = this.saveFormRef.bind(this);
    }
  showModal(){
    this.setState({ visible: true });
    console.log(this.props.nowdata); //父组建的值
  }
  handleCancel(){
    this.setState({ visible: false });
  }
  handleCreate(){
    const form = this.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      console.log('Received values of form: ', values);
      form.resetFields();
      this.setState({ visible: false });
    });
  }
  saveFormRef(form){
    this.form = form;
  }
  render() {
    return (
      <span>
        <Button type="primary" size="small" onClick={this.showModal}>编辑</Button>
        <CollectionCreateForm
          ref={this.saveFormRef}
          nowdata={this.props.nowdata}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </span>
    );
  }
}
export default modalwin;
