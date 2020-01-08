import React from "react";
import { bindActionCreators } from "redux";
import md5 from "md5";
import { connect } from "react-redux";
import { Icon, Table, Popconfirm, Modal, Input, Form, Select, Transfer, message } from "antd";
import { trim } from "@utils";
import * as action from "../../../actions/systemManage/permission";
import "../layout/styles/excel.css";
import "./style/sysadmin.css";
import editImg from "../../../assets/images/config/edit.png";
import deleteImg from "../../../assets/images/config/delete.png";
import saveImg from "../../../assets/images/config/save.png";
import roleImg from "../../../assets/images/config/role.png";

const Option = Select.Option;
const FormItem = Form.Item;

const EditForm = Form.create()(props => {
  const { editVisible, handleEditCancel, handleEditCreate, form, checkName, list, errMsg } = props;
  const { getFieldDecorator } = form;

  const rolenameList = [];
  let stateText = "";
  if (list.length !== 0) {
    // Roles
    if (list.state === 0) {
      stateText = "未激活";
    } else if (list.state === 1) {
      stateText = "已激活";
    } else if (list.state === 2) {
      stateText = "被锁定";
    }

    if (list.Roles.length !== 0) {
      for (let i = 0, listRoles = list.Roles; i < listRoles.length; i++) {
        if (listRoles[i].available) {
          rolenameList.push(listRoles[i].role);
        } else {
          const unavailable = `${listRoles[i].role} + (无效)`;
          rolenameList.push(unavailable);
        }
      }
    }
  }

  return (
    <Modal
      visible={editVisible}
      title="修改用户"
      okText="确定"
      cancelText="取消"
      onCancel={handleEditCancel}
      onOk={handleEditCreate}
      checkName={checkName}
    >
      <Form layout="vertical">
        <FormItem label="ID名">
          {getFieldDecorator("id", {
            rules: [{ required: true, message: "ID名不能为空", maxLength: 32 }],
            initialValue: list ? `${list.id} + ''` : ""
          })(<Input disabled />)}
        </FormItem>
        <FormItem label="名称">
          {getFieldDecorator("name", {
            rules: [{ required: true, message: "公司名称不能为空", maxLength: 60 }],
            initialValue: list ? list.name : ""
          })(<Input />)}
        </FormItem>
        <FormItem label="uid">
          {getFieldDecorator("uid", {
            rules: [{ required: true, message: "uid不能为空", maxLength: 32 }],
            initialValue: list ? `${list.uid} + ''` : ""
          })(<Input disabled />)}
        </FormItem>
        <FormItem label="用户密码">
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "用户密码不能为空" }],
            initialValue: list ? list.password : ""
          })(<Input />)}
        </FormItem>
        <FormItem label="用户类型">
          {getFieldDecorator("accountType", {
            rules: [{ required: true, message: "用户类型不能为空", maxLength: 32 }],
            initialValue: list ? list.accountType : ""
          })(<Input disabled />)}
        </FormItem>
        {list ? (
          list.superadmin === false ? (
            <FormItem label="用户状态">
              {getFieldDecorator("state", {
                rules: [{ required: true, message: "用户状态不能为空", maxLength: 32 }],
                initialValue: list ? (list.length !== 0 ? stateText : "") : ""
              })(
                <Select style={{ width: "100%" }}>
                  <Option value="2">被锁定</Option>
                  <Option value="1">已激活</Option>
                  <Option value="0">未激活</Option>
                </Select>
              )}
            </FormItem>
          ) : (
            <FormItem label="用户状态">
              {getFieldDecorator("state", {
                rules: [{ required: true, message: "用户状态不能为空", maxLength: 32 }],
                initialValue: list ? (list.length !== 0 ? stateText : "") : ""
              })(<Input disabled />)}
            </FormItem>
          )
        ) : (
          ""
        )}
        <FormItem label="当前角色">
          {getFieldDecorator("Roles", {
            // rules: [{ required: true, message: "当前角色不能为空", maxLength: 32 }],
            initialValue: list ? (list.Roles ? rolenameList.join(";") : "") : ""
          })(<Input disabled />)}
        </FormItem>
        <FormItem label="是否是超级管理员">
          {getFieldDecorator("superadmin", {
            rules: [{ required: true, message: "此栏不能为空", maxLength: 32 }],
            initialValue: list ? (list.superadmin === true ? "是" : "否") : ""
          })(<Input disabled />)}
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
        notFoundContent="无数据..."
        render={render}
        onChange={change}
      />
    </Modal>
  );
});

const isAdmin = [
  {
    key: "0",
    value: "否"
  },
  {
    key: "1",
    value: "是"
  }
];
const isState = [
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
        <Option value="1">是</Option>
        <Option value="0">否</Option>
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
        <Option value="company">employee</Option>
        <Option value="company">company</Option>
        <Option value="common">common</Option>
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
        <Option value="2">被锁定</Option>
        <Option value="1">已激活</Option>
        <Option value="0">未激活</Option>
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
                  <a onClick={() => this.showEditModal(record.id)}>
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
      dataSource: {},
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
      editingKey: "",

      checkName: "不能为空",
      editVisible: false,
      errMsg: ""
    };
    this.USELESS = "(无效)";
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

    this.showEditModal = this.showEditModal.bind(this);
    this.handleEditCancel = this.handleEditCancel.bind(this);
    this.handleEditCreate = this.handleEditCreate.bind(this);
    this.saveEditFormRef = this.saveEditFormRef.bind(this);
  }

  nochange(key) {
    const { UserManage: managerData } = this.props;
    const newData = managerData.list;
    const target = newData.filter(item => key === item.id)[0];

    if (target) {
      target.editable = false;
      this.setState({ data: [] });
    }
  }

  edit(key) {
    const { UserManage: managerData } = this.props;
    this.setState({
      originList: managerData.length !== 0 ? managerData.list : managerData
    });

    const newData = managerData.list;
    const target = newData.filter(item => key === item.id)[0];

    if (target) {
      target.editable = true;
      this.setState({
        oldPassword: target.password
      });
    }
  }

  save(key) {
    const { UserManage: userManageData, actions, pagination } = this.props;
    const { oldPassword } = this.state;
    const newData = userManageData.list;
    const target = newData.filter(item => key === item.id)[0];

    if (target.name === "") {
      message.warning("名称不能为空");
      return;
    }
    if (target.password === "") {
      message.warning("密码不能为空");
      return;
    }
    if (oldPassword !== target.password) {
      const regex = new RegExp(
        "^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?![,.#%'+@!$&*-:;^_`]+$)" +
          "[,.#%@!'+$&*-:;^_`0-9A-Za-z]{6,16}$/gm"
      );
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

      actions.update(target, "userManage");

      setTimeout(() => {
        actions.get(pagination.current, "userManage");
        this.setState({ loading: false });
      }, 2000);
    }
  }

  handleChange(value, key, column) {
    const { UserManage: um } = this.props;
    const newData = um.list;
    const target = newData.filter(item => key === item.id)[0];

    if (target) {
      if (column === "superadmin") {
        target[column] = Boolean(parseInt(value, 10));
      } else {
        target[column] = value;
      }
      this.setState({
        originList: newData,
        dataSource: newData
      });
    }
  }

  renderColumns(text, record, column) {
    if (column === "id" || column === "uid" || column === "accountType" || column === "Roles") {
      if (column === "Roles") {
        const roleList = [];
        for (let i = 0; i < text.length; i++) {
          if (text[i].available) {
            roleList.push(text[i].role);
          } else {
            const unavailable = `${text[i].role} + `;
            roleList.push(unavailable);
          }
        }
        text = roleList.join(",");
      }

      return text;
    } else if (column === "state") {
      if (record.superadmin === true) {
        if (text === 0) {
          text = "未激活";
        } else if (text === 1) {
          text = "已激活";
        } else if (text === 2) {
          text = "被锁定";
        }
        return text;
      } else {
        return (
          <EditState
            editable={record.editable}
            value={isState.find(item => text === item.key).value}
            onChange={value => this.handleChange(value, record.id, column)}
            defaultValue={isState[text].value}
          />
        );
      }
    } else if (column === "superadmin") {
      if (text === 0) {
        text = "否";
      } else if (text === 1) {
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

  onDelete(key) {
    const { actions } = this.props;
    const { pagination } = this.state;
    actions.del(key, "userManage");

    this.setState({ loading: true });
    setTimeout(() => {
      actions.get(pagination.current, "userManage");
      this.setState({ loading: false });
    }, 1000);
  }

  showModal() {
    this.setState({ visible: true });
  }

  handleCancel() {
    this.setState({ visible: false });
  }

  handleCreate() {
    const { actions } = this.props;
    const { pagination } = this.state;
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
      actions.add(values, "userManage");

      this.setState({ visible: false });
      form.resetFields();
      setTimeout(() => {
        actions.get(pagination.current, "userManage");
      }, 500);
    });
  }

  saveFormRef(form) {
    this.form = form;
  }

  showroleModal(data) {
    const { actions } = this.props;
    actions.get(null, "roleManage");
    const dat = [];
    const dataRole = data.Roles;
    if (dataRole) {
      for (let i = 0; i < dataRole.length; i++) {
        dat.push(dataRole[i].id);
      }
    }

    setTimeout(() => {
      this.setState({ rolevisible: true, nowrole: data.id, roleId: dat });
    }, 200);
  }

  roleOk() {
    const { nowrole, roleId } = this.state;
    const { actions } = this.props;

    const setdata = `?userId=${nowrole}&roleIds=${roleId.join()}`;

    actions.add(setdata, "addrole");
    this.setState({ rolevisible: false });
    setTimeout(() => {
      actions.get(1, "userManage");
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
    this.setState({ roleId: targetKeys }, () => {});
  }

  renderRoleItem(item) {
    // console.log("item", item);
    const customLabel = (
      <span className="custom-item">
        {item.available === true ? item.role : `${item.role} + ${this.USELESS}`}
        {item.description}
      </span>
    );
    return { label: customLabel, value: item.role };
  }

  handleTableChange(pagination, filters, sorter) {
    const { selectValue, inputName } = this.state;
    const { actions } = this.props;
    this.setState({ loading: true });

    if (selectValue || inputName) {
      const params = {
        inputName,
        inputType: selectValue
      };

      actions.search(pagination.current, params, "userManage");
    } else {
      actions.get(pagination.current, "userManage");
    }
  }

  updateName(e) {
    this.setState({
      inputName: e.target.value
    });
  }

  searchGet() {
    const { selectValue, inputName } = this.state;
    const { actions } = this.props;
    const params = {
      inputName,
      inputType: selectValue
    };
    actions.search(1, params, "userManage");
  }

  handleSelectChange(value) {
    this.setState({
      selectValue: value
    });
  }

  showEditModal(userId) {
    const { actions, UserFindone } = this.props;
    actions.get(userId, "userFindone");
    this.form.resetFields();
    this.setState({
      editVisible: true
    });

    setTimeout(() => {
      this.setState({
        oldPassword: UserFindone.data.password
      });
    }, 800);
  }

  handleEditCancel() {
    const form = this.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
    });
    form.resetFields();
    this.setState({ editVisible: false });
  }

  handleEditCreate() {
    const { actions } = this.props;
    const { oldPassword, pagination } = this.state;
    const form = this.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      const id = trim(values.id);
      const uid = trim(values.uid);
      const state = trim(values.state);
      const superadmin = trim(values.superadmin);
      values.accounttype = values.accountType;

      if (state === "被锁定") {
        values.state = "2";
      } else if (state === "已激活") {
        values.state = "1";
      } else if (state === "未激活") {
        values.state = "0";
      }

      if (superadmin === "否") {
        values.superadmin = "0";
      } else if (superadmin === "是") {
        values.superadmin = "1";
      }

      delete values.Roles;
      delete values.accountType;

      if (oldPassword !== values.password) {
        const regex = new RegExp(
          "^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?![,.#%+@!$&*-:;^_`]+$)" +
            "[,.#%@!+$&*-:;^_0-9A-Za-z]{6,16}$/gm"
        );
        if (!regex.test(values.password)) {
          this.setState({
            errMsg: "密码应6到16位，至少包含字母、数字、符号两种"
          });
          return;
        }
        values.password = md5(values.password);
      }

      actions.update(values, "userManage");
      this.setState({
        editVisible: false,
        errMsg: ""
      });
      form.resetFields();
      setTimeout(() => {
        actions.get(pagination.current, "userManage");
        this.setState({ loading: false });
      }, 1000);
    });
  }

  saveEditFormRef(form) {
    this.form = form;
  }

  componentDidMount() {
    const { actions } = this.props;
    actions.get(1, "userManage");
    setTimeout(() => {
      actions.get(null, "roleManage");
    }, 300);
  }

  componentWillReceiveProps(nextProps) {
    const { UserManage: manage } = nextProps;
    if (manage.pageBean) {
      this.setState({
        pagination: {
          total: manage.pageBean.total,
          current: manage.pageBean.page,
          pageSize: manage.pageBean.size
        },
        loading: false
      });
    }
  }

  componentWillUnmount() {
    const { UserManage: um } = this.props;
    um.list = [];
  }

  render() {
    const { UserManage: managerData, RoleManage, UserFindone } = this.props;
    const { pagination, loading, editVisible, errMsg, rolevisible, roleId } = this.state;
    if (managerData.list) {
      managerData.list.forEach(item => {
        item.key = item.id;
      });
    }
    if (RoleManage.list) {
      RoleManage.list.forEach(item => {
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
                onChange={e => this.updateName(e)}
                type="text"
                name="name"
                id="name"
                className="table-input nameinput"
              />
              <label htmlFor="age" className="lable agelable">
                用户类型
              </label>
              <Select style={{ width: 120 }} onChange={this.handleSelectChange}>
                <Option value="employee">employee</Option>
                <Option value="company">company</Option>
                <Option value="common">common</Option>
              </Select>
              <a href="#" className="abutton" onClick={this.searchGet}>
                <span className="searchicon" />
                <span>搜索</span>
              </a>
            </form>
          </div>
          <Table
            bordered
            size="small"
            columns={this.columns}
            locale={{ emptyText: "暂无数据..." }}
            pagination={pagination}
            dataSource={managerData.length !== 0 ? managerData.list : managerData}
            loading={{ spinning: loading, tip: "加载中..." }}
            onChange={this.handleTableChange}
          />

          <EditForm
            ref={this.saveEditFormRef}
            editVisible={editVisible}
            handleEditCancel={this.handleEditCancel}
            handleEditCreate={this.handleEditCreate}
            list={UserFindone.length !== 0 ? UserFindone.data : UserFindone}
            errMsg={errMsg}
          />
          <Setrole
            visible={rolevisible}
            onCancel={this.roleCancel}
            onCreate={this.roleOk}
            data={RoleManage.list} // getDATA self
            targetkey={roleId}
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
    UserFindone: state.permissionManage.get("userFindoneData"),
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
