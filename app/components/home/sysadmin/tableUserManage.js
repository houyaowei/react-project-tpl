import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import * as action from "../../../actions/systemManage/permission";

import { bindActionCreators } from "redux";
import md5 from "md5";
import "../equipment/styles/excel.css";
import "./style/sysadmin.css";
import { Icon, Table, Popconfirm, Modal, Input, Form, Select, Transfer, message } from "antd";

import editImg from "../../../assets/images/config/edit.png";
import deleteImg from "../../../assets/images/config/delete.png";
import saveImg from "../../../assets/images/config/save.png";
import roleImg from "../../../assets/images/config/role.png";

const Option = Select.Option;
const FormItem = Form.Item;

const UserForm = Form.create()(props => {
  const { visible, onCancel, onCreate, preview, form, list } = props;
  const { getFieldDecorator } = form;
  return (
    <Modal
      visible={visible}
      title="创建新用户"
      okText="创建"
      cancelText="取消"
      onCancel={onCancel}
      onOk={onCreate}
    >
      <Form layout="vertical">
        <FormItem label="姓名">
          {getFieldDecorator("username", {
            rules: [{ required: true, message: "不能为空" }]
          })(<Input />)}
        </FormItem>
        <FormItem label="密码">
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "不能为空" }]
          })(<Input type="password" />)}
        </FormItem>
        {/* <FormItem label="手机号码">
          {getFieldDecorator("mobile", {
            rules: [{ required: true, message: "不能为空" }]
          })(<Input />)}
        </FormItem> */}
        <FormItem label="用户状态">
          {getFieldDecorator("state", {
            rules: [{ required: true, message: "不能为空" }]
          })(
            <Select style={{ width: "100%" }}>
              <Option value={"2"}>被锁定</Option>
              <Option value={"1"}>已激活</Option>
              <Option value={"0"}>未激活</Option>
            </Select>
          )}
        </FormItem>
        <FormItem label="用户级别">
          {getFieldDecorator("superadmin", {
            rules: [{ required: true, message: "不能为空" }]
          })(
            <Select style={{ width: "100%" }}>
              <Option value="user">用户</Option>
              <Option value="admin">管理员</Option>
              <Option value="superadmin">超级管理员</Option>
            </Select>
          )}
        </FormItem>
        <FormItem label="账户类型">
          {getFieldDecorator("accountType", {
            rules: [{ required: true, message: "不能为空" }]
          })(
            <Select style={{ width: "100%" }}>
              <Option value={"employee"}>employee</Option>
              <Option value={"company"}>company</Option>
              <Option value={"common"}>common</Option>
            </Select>
          )}
        </FormItem>
      </Form>
    </Modal>
  );
});

const EditForm = Form.create()(props => {
  const { visible, onCancel, onCreate, form, checkName, onCascaderChange, list, errMsg } = props;
  const { getFieldDecorator } = form;
  return (
    <Modal
      visible={visible}
      title="修改"
      okText="确定"
      cancelText="取消"
      onCancel={onCancel}
      onOk={onCreate}
      checkName={checkName}
    >
      <Form layout="vertical">
        <FormItem label="公司ID">
          {getFieldDecorator("companyId", {
            rules: [{ required: true, message: "公司ID不能为空", maxLength: 32 }],
            initialValue: list ? list.companyId + "" : ""
          })(<Input disabled />)}
        </FormItem>
        <FormItem label="公司名称">
          {getFieldDecorator("companyName", {
            rules: [{ required: true, message: "公司名称不能为空", maxLength: 32 }],
            initialValue: list ? list.companyName : ""
          })(<Input disabled />)}
        </FormItem>
        <FormItem label="国家">
          {getFieldDecorator("country", {
            rules: [{ required: true, message: "国家不能为空", maxLength: 32 }],
            initialValue: list ? list.country : ""
          })(
            <Select>
              <Option value="中国">中国</Option>
            </Select>
          )}
        </FormItem>
        <FormItem label="城市">
          {getFieldDecorator("city", {
            rules: [{ required: true, message: "城市不能为空" }],
            initialValue: list ? (list.city ? list.city.split(",") : "") : ""
            // initialValue: ['福建', '厦门'],
          })(<Cascader options={residences} onChange={onCascaderChange} />)}
        </FormItem>
        <FormItem label="邮箱">
          {getFieldDecorator("mail", {
            rules: [{ required: true, message: "邮箱不能为空" }],
            initialValue: list ? list.mail : ""
          })(<Input />)}
        </FormItem>
        <FormItem label="联系人">
          {getFieldDecorator("contacts", {
            rules: [{ required: true, message: "联系人不能为空", maxLength: 32 }],
            initialValue: list ? list.contacts : ""
          })(<Input />)}
        </FormItem>
        <FormItem label="地址">
          {getFieldDecorator("address", {
            rules: [{ required: true, message: "地址不能为空", maxLength: 32 }],
            initialValue: list ? list.address : ""
          })(<Input />)}
        </FormItem>
        <FormItem label="行业">
          {getFieldDecorator("industry", {
            rules: [{ required: true, message: "行业不能为空", maxLength: 32 }],
            initialValue: list ? list.industry : ""
          })(<Input />)}
        </FormItem>
        <FormItem label="人数">
          {getFieldDecorator("pnumber", {
            rules: [{ required: true, message: "应用名称不能为空", maxLength: 32 }],
            initialValue: list ? list.pnumber : ""
          })(<Input />)}
        </FormItem>
        <FormItem label="电话">
          {getFieldDecorator("phone", {
            rules: [{ required: true, message: "电话不能为空", maxLength: 32 }],
            initialValue: list ? list.phone : ""
          })(<Input />)}
        </FormItem>
        <FormItem label="移动电话">
          {getFieldDecorator("mobile", {
            rules: [{ required: true, message: "移动电话不能为空", maxLength: 32 }],
            initialValue: list ? list.mobile : ""
          })(<Input />)}
        </FormItem>
      </Form>
      {errMsg ? <span className="errorMsg">{errMsg}</span> : null}
    </Modal>
  );
});

const Setrole = Form.create()(props => {
  const { visible, onCancel, onCreate, form, data, targetkey, render, change } = props;
  const { getFieldDecorator } = form;
  return (
    <Modal
      width="850px"
      visible={visible}
      title="选择角色"
      okText="保存"
      cancelText="取消"
      onCancel={onCancel}
      onOk={onCreate}
    >
      <Transfer
        dataSource={data}
        listStyle={{ width: "45%", height: 360 }}
        operations={["添加", "移除"]}
        targetKeys={targetkey}
        titles={["角色列表", "当前角色"]}
        notFoundContent={"无数据..."}
        render={render}
        onChange={change}
      />
    </Modal>
  );
});

let isAdmin = [
  {
    key: "0",
    value: "否"
  },
  {
    key: "1",
    value: "是"
  }
];
let isState = [
  {
    key: "0",
    value: "未激活"
  },
  {
    key: "1",
    value: "已激活"
  },
  {
    key: "2",
    value: "被锁定"
  }
];
const EditAdmin = ({ editable, value, onChange, defaultValue }) => (
  <div>
    {editable ? (
      <Select
        style={{ margin: "-5px 0" }}
        defaultValue={defaultValue}
        onSelect={e => {
          onChange(e);
        }}
      >
        <Option value={"1"}>是</Option>
        <Option value={"0"}>否</Option>
      </Select>
    ) : (
      value
    )}
  </div>
);
const EditType = ({ editable, value, onChange, defaultValue }) => (
  <div>
    {editable ? (
      <Select
        style={{ margin: "-5px 0" }}
        defaultValue={defaultValue}
        onSelect={e => {
          onChange(e);
        }}
      >
        <Option value={"company"}>employee</Option>
        <Option value={"company"}>company</Option>
        <Option value={"common"}>common</Option>
      </Select>
    ) : (
      value
    )}
  </div>
);
const EditState = ({ editable, value, onChange, defaultValue }) => (
  <div>
    {editable ? (
      <Select
        style={{ margin: "-5px 0" }}
        defaultValue={defaultValue}
        onSelect={e => {
          onChange(e);
        }}
      >
        <Option value={"2"}>被锁定</Option>
        <Option value={"1"}>已激活</Option>
        <Option value={"0"}>未激活</Option>
      </Select>
    ) : (
      value
    )}
  </div>
);
const EditableCell = ({ editable, value, onChange }) => (
  <div>
    {editable ? (
      <Input style={{ margin: "-5px 0" }} value={value} onChange={e => onChange(e.target.value)} />
    ) : (
      value
    )}
  </div>
);

class UserManage extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: "ID名",
        width: 50,
        dataIndex: "id",
        render: (text, record) => this.renderColumns(text, record, "id")
      },
      {
        title: "名称",
        dataIndex: "name",
        render: (text, record) => this.renderColumns(text, record, "name")
      },
      {
        title: "uid",
        width: 50,
        dataIndex: "uid",
        render: (text, record) => this.renderColumns(text, record, "uid")
      },
      {
        title: "用户密码",
        dataIndex: "password",
        render: (text, record) => this.renderColumns(text, record, "password")
      },
      {
        title: "用户类型",
        dataIndex: "accountType",
        render: (text, record) => this.renderColumns(text, record, "accountType")
      },
      {
        title: "用户状态",
        dataIndex: "state",
        render: (text, record) => this.renderColumns(text, record, "state")
      },
      {
        title: "当前角色",
        dataIndex: "Roles",
        render: (text, record) => this.renderColumns(text, record, "Roles")
      },
      {
        title: "是否是超级管理员",
        width: 130,
        dataIndex: "superadmin",
        render: (text, record) => this.renderColumns(text, record, "superadmin")
      },
      {
        title: "操作",
        width: 260,
        dataIndex: "operation",
        render: (text, record) => {
          const { editable } = record;
          return (
            <div className="editable-row-operations">
              {editable ? (
                <span>
                  <a onClick={() => this.save(record.id)}>
                    <img className="iconImg" src={saveImg} alt="" />
                    <span className="usaveicon">保存</span>
                  </a>
                  <Popconfirm
                    title="确定取消更改吗？"
                    onConfirm={() => this.nochange(record.id)}
                    okText="确定"
                    cancelText="取消"
                  >
                    <a className="udeletebtn">
                      <img className="iconImg" src={saveImg} alt="" />
                      <span className="udeleteicon">取消</span>
                    </a>
                  </Popconfirm>
                </span>
              ) : (
                <span>
                  <a onClick={() => this.edit(record.id)}>
                    <img className="iconImg" src={editImg} alt="" />
                    <span className="uediticon">编辑</span>
                  </a>
                  {record.superadmin === true ? null : (
                    <Popconfirm
                      title="确定删除吗？"
                      onConfirm={() => this.onDelete(record.id)}
                      okText="确定"
                      cancelText="取消"
                    >
                      <a className="udeletebtn">
                        <img className="iconImg" src={deleteImg} alt="" />
                        <span className="udeleteicon">删除</span>
                      </a>
                    </Popconfirm>
                  )}
                  {record.superadmin === true ? null : (
                    <a onClick={() => this.showroleModal(record)}>
                      <img className="iconImg" src={roleImg} alt="" />
                      <span className="uroleicon">配置角色</span>
                    </a>
                  )}
                </span>
              )}
            </div>
          );
        }
      }
    ];
    this.state = {
      dataSource: this.props.rowdata,
      pagination: {},
      loading: true,
      visible: false,
      rolevisible: false,
      confirmLoading: false,
      update: false,
      nowrole: null,
      roleId: [],
      selectValue: "",
      oldPassword: "",
      originList: [],
      editingKey: ""
    };
    this.cacheData = {};
    this.onDelete = this.onDelete.bind(this);
    this.showModal = this.showModal.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleCreate = this.handleCreate.bind(this);

    this.saveFormRef = this.saveFormRef.bind(this);
    this.handleTableChange = this.handleTableChange.bind(this);
    this.showroleModal = this.showroleModal.bind(this);
    this.roleOk = this.roleOk.bind(this);
    this.roleCancel = this.roleCancel.bind(this);
    this.renderRoleItem = this.renderRoleItem.bind(this);
    this.changerole = this.changerole.bind(this);
    this.nochange = this.nochange.bind(this);

    this.searchGet = this.searchGet.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }
  nochange(key) {
    let newData = this.props.UserManage.list;
    // originList
    // console.log("UserManagenewData", this.props.UserManage.list);
    // console.log(
    //   "newData",
    //   this.state.editingKey,
    //   this.state.originList,
    //   newData,
    //   this.props.UserManage.list
    // );
    const target = newData.filter(item => key === item.id)[0];

    // console.log("nochange", key, target, this);

    if (target) {
      target.editable = false;
      this.setState({ data: [] }); //更新编辑视图
    }
    // this.setState({ data: "" }); //
  }
  //userform data edit
  edit(key) {
    this.setState(
      {
        originList:
          this.props.UserManage.length !== 0 ? this.props.UserManage.list : this.props.UserManage
      },
      () => {
        // console.log("originList", this.state.originList);
      }
    );

    let newData = this.props.UserManage.list;
    const target = newData.filter(item => key === item.id)[0]; //filter this row data, for update the action;

    // console.log("edit", key, target, this);

    if (target) {
      target.editable = true;
      this.setState({
        oldPassword: target.password
        // data: target
      }); //更新编辑视图
    }
    // console.log("edittarget", target);
  }

  //userform data save
  save(key) {
    const newData = this.props.UserManage.list;
    // console.log("savekey", key);
    const target = newData.filter(item => key === item.id)[0];
    // console.log("target", target);
    if (target.name === "") {
      message.warning("名称不能为空");
      return;
    }
    if (target.password === "") {
      message.warning("密码不能为空");
      return;
    }
    if (this.state.oldPassword !== target.password) {
      let regex = /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?![,\.#%'\+@!\$&\*\-:;^_`]+$)[,\.#%@!'\+\$&\*\-:;^_`0-9A-Za-z]{6,16}$/gm;
      // console.log("word", target.password);
      if (!regex.test(target.password)) {
        message.warning("密码应6到16位，至少包含字母、数字、符号两种");
        return;
      }
      target.password = md5(target.password);
    }

    target.accounttype = target.accountType;
    if (target) {
      delete target.editable;
      delete target.accountType;
      delete target.key;

      this.props.actions.update(target, "userManage");

      setTimeout(() => {
        this.props.actions.get(this.state.pagination.current, "userManage");
        this.setState({ loading: false });
      }, 2000);
    }
  } //保存

  handleChange(value, key, column) {
    const newData = this.props.UserManage.list;
    const target = newData.filter(item => key === item.id)[0];

    if (target) {
      if (column == "superadmin") {
        target[column] = Boolean(parseInt(value));
      } else {
        target[column] = value;
      }
      this.setState({ originList: newData, dataSource: newData });
    }
    // console.log("handleChangetarget", newData, target);
  }
  renderColumns(text, record, column) {
    // console.log("record", record);
    if (column == "id" || column == "uid" || column == "accountType" || column == "Roles") {
      if (column == "Roles") {
        let roleList = [];
        for (let i = 0; i < text.length; i++) {
          if (text[i].available) {
            roleList.push(text[i].role);
          } else {
            let unavailable = text[i].role + "(无效)";
            roleList.push(unavailable);
          }
        }
        text = roleList.join(",");
      }
      return text;
    } else if (column == "state") {
      if (record.superadmin === true) {
        if (text == 0) {
          text = "未激活";
        } else if (text == 1) {
          text = "已激活";
        } else if (text == 2) {
          text = "被锁定";
        }
        return text;
      } else {
        return (
          <EditState
            editable={record.editable}
            value={isState.find(item => text == parseInt(item.key)).value}
            onChange={value => this.handleChange(value, record.id, column)}
            defaultValue={isState[text].value}
          />
        );
      }
    } else if (column == "superadmin") {
      if (text == 0) {
        text = "否";
      } else if (text == 1) {
        text = "是";
      }
      return text;
    } else {
      return (
        <EditableCell
          editable={record.editable}
          value={text}
          onChange={value => this.handleChange(value, record.id, column)}
        />
      );
    }
  }

  //Deletes the specified row of data
  onDelete(key) {
    this.props.actions.del(key, "userManage");

    this.setState({ loading: true });
    setTimeout(() => {
      this.props.actions.get(this.state.pagination.current, "userManage");
      this.setState({ loading: false });
    }, 1000);
  }

  showModal() {
    this.setState({ visible: true }); //显示模态框

    // this.props.actions.getPolic(1);
  }

  handleCancel() {
    this.setState({ visible: false });
  }
  //add User
  handleCreate() {
    //模态框提交事件
    const form = this.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      values.name = values.username;
      delete values.username;
      if (values.superadmin === "superadmin") {
        values.superadmin = "true";
      } else if (values.superadmin === "admin" || values.superadmin === "user") {
        values.superadmin = "false";
      }
      this.props.actions.add(values, "userManage");

      this.setState({ visible: false });
      form.resetFields();
      setTimeout(() => {
        this.props.actions.get(this.state.pagination.current, "userManage");
      }, 500);
    });
  }

  saveFormRef(form) {
    this.form = form;
  }

  showroleModal(data) {
    this.props.actions.get(null, "roleManage");

    // console.log("showroleModaldata", data);

    let dat = [];
    let dataRole = data.Roles;
    if (dataRole) {
      for (let i = 0; i < dataRole.length; i++) {
        dat.push(dataRole[i].id);
      }
    }

    setTimeout(() => {
      this.setState({ rolevisible: true, nowrole: data.id, roleId: dat }, () =>
        console.log("roleId", this.state.roleId)
      );
    }, 200);
  }

  roleOk() {
    let setdata = `?userId=${this.state.nowrole}&roleIds=${this.state.roleId.join()}`;

    this.props.actions.add(setdata, "addrole");
    this.setState({ rolevisible: false });
    setTimeout(() => {
      this.props.actions.get(1, "userManage");
    }, 300);
  }
  roleCancel() {
    this.setState({ rolevisible: false });
    this.setState({ targetKeys: [] });
  }
  changerole(targetKeys, direction, moveKeys) {
    if (targetKeys.length === 0) {
      message.info("用户角色不能为空");
      return;
    }
    this.setState({ roleId: targetKeys }, () =>
      console.log("changerole", direction, targetKeys, moveKeys)
    ); //将当前拥有角色id存入状态
  }

  renderRoleItem(item) {
    // console.log("item", item);
    const customLabel = (
      <span className="custom-item">
        {item.available === true ? item.role : item.role + "(无效)"} - {item.description}
      </span>
    );
    return { label: customLabel, value: item.role };
  }
  handleTableChange(pagination, filters, sorter) {
    this.setState({ loading: true });
    this.props.actions.get(pagination.current, "userManage");
  }

  // search segment
  searchGet() {
    let inputName = ReactDOM.findDOMNode(this.refs.inputName).value;
    // let inputType = ReactDOM.findDOMNode(this.refs.inputType).value;
    // console.log("searchGetinputType", ReactDOM.findDOMNode(this.refs.inputType));
    // console.log("inputType", this.state.selectValue);

    let params = {
      inputName: inputName,
      inputType: this.state.selectValue
    };
    this.props.actions.search(1, params, "userManage");
  }
  handleSelectChange(value) {
    this.setState({
      selectValue: value
    });
    // console.log(`selected ${value}`);
  }

  componentDidMount() {
    // console.log("componentDidMount", this.props);

    this.props.actions.get(1, "userManage");
    setTimeout(() => {
      this.props.actions.get(null, "roleManage");
    }, 300);
  }
  componentWillReceiveProps(nextProps) {
    // console.log("componentWillReceiveProps", nextProps);

    if (nextProps.UserManage.pageBean) {
      this.setState({
        pagination: {
          total: nextProps.UserManage.pageBean.total,
          current: nextProps.UserManage.pageBean.page,
          pageSize: nextProps.UserManage.pageBean.size
        },
        loading: false
      });
    }
  }
  componentWillUnmount() {
    this.props.UserManage.list = [];
  }
  render() {
    // console.log("renderloading",this.state.loading);
    // console.log("UserManageprops",this.props);
    // console.log("UserManage",this.props.UserManage);
    // console.log("UserManagelist",this.props.UserManage.list);
    // console.log("RoleManagelist",this.props.RoleManage.list);

    if (this.props.UserManage.list) {
      this.props.UserManage.list.map(item => {
        item.key = item.id;
      });
    }
    if (this.props.RoleManage.list) {
      this.props.RoleManage.list.map(item => {
        item.key = item.id;
      });
    }
    return (
      <div>
        <div className="meddie">
          <span className="meddie-font">控制台</span>
          <Icon type="right" className="meddie-icon" />
          <span className="meddie-update">用户管理</span>
        </div>
        <div className="out_container">
          <div className="searchbar">
            <form action="#">
              <label htmlFor="name" className="lable namelable">
                名称
              </label>
              <input
                ref="inputName"
                type="text"
                name="name"
                id="name"
                className="table-input nameinput"
              />
              <label htmlFor="age" className="lable agelable">
                用户类型
              </label>
              {/* <input
              ref="inputType"
              type="text"
              name="age"
              id="age"
              className="table-input ageinput"
            /> */}
              <Select ref="inputType" style={{ width: 120 }} onChange={this.handleSelectChange}>
                <Option value={"employee"}>employee</Option>
                <Option value={"company"}>company</Option>
                <Option value={"common"}>common</Option>
              </Select>
              <a href="#" className="abutton" onClick={this.searchGet}>
                <span className="searchicon" />
                搜索
              </a>
              {/* <a className="addpeople" onClick={this.showModal}>
              添加+
            </a> */}
            </form>
          </div>
          <Table
            bordered
            size="small"
            columns={this.columns}
            locale={{ emptyText: "暂无数据..." }}
            pagination={this.state.pagination}
            dataSource={
              this.props.UserManage.length !== 0
                ? this.props.UserManage.list
                : this.props.UserManage
            }
            loading={{ spinning: this.state.loading, tip: "加载中..." }}
            onChange={this.handleTableChange}
          />
          <UserForm
            ref={this.saveFormRef}
            visible={this.state.visible}
            onCancel={this.handleCancel}
            onCreate={this.handleCreate}
            preview={e => {
              console.log(e);
            }}
          />
          {/* <EditForm
            ref={this.saveFormRef}
            visible={this.state.visible}
            onCancel={this.handleCancel}
            onCreate={this.handleCreate}
            onCascaderChange={this.onCascaderChange}
            list={this.props.companyDetail}
            errMsg={this.state.errMsg}
          /> */}
          <Setrole
            visible={this.state.rolevisible}
            onCancel={this.roleCancel}
            onCreate={this.roleOk}
            data={this.props.RoleManage.list} // getDATA self
            targetkey={this.state.roleId}
            render={this.renderRoleItem}
            change={this.changerole}
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    UserManage: state.permissionManage.get("userManageData"),
    RoleManage: state.permissionManage.get("roleManageData")
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(action, dispatch)
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserManage);
