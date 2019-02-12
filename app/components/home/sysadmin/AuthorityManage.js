import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import _ from "lodash";
import { message, Icon, Table, Popconfirm, Modal, Input, Form, Select } from "antd";

import * as action from "../../../actions/systemManage/permission";
import * as actions from "../../../actions/systemManage/policmanage";
import "./style/sysadmin.css";
import editImg from "../../../assets/images/config/edit.png";
import deleteImg from "../../../assets/images/config/delete.png";
import saveImg from "../../../assets/images/config/save.png";

const Option = Select.Option;
const FormItem = Form.Item;

const UserForm = Form.create()(props => {
  const {
    visible,
    onCancel,
    onCreate,
    onSelectChange,
    onSecondChange,
    chooseType,
    form,
    chooseOption
  } = props;

  const { getFieldDecorator } = form;

  const optionChildren = [];
  if (chooseOption.length !== 0) {
    for (let i = 0; i < chooseOption.length; i++) {
      optionChildren.push(
        <Option value={chooseOption[i].pid} key={i}>
          {chooseOption[i].name}
        </Option>
      );
    }
  }
  return (
    <Modal
      visible={visible}
      title="创建新权限"
      okText="创建"
      cancelText="取消"
      onCancel={onCancel}
      onOk={onCreate}
    >
      <Form layout="vertical">
        <FormItem label="权限名称">
          {getFieldDecorator("name", {
            rules: [{ required: true, message: "不能为空" }]
          })(<Input />)}
        </FormItem>
        <FormItem label="地址">
          {getFieldDecorator("url", {
            rules: [{ required: true, message: "不能为空" }]
          })(<Input />)}
        </FormItem>

        <FormItem label="权限状态">
          {getFieldDecorator("available", {
            rules: [{ required: true, message: "不能为空" }]
          })(
            <Select style={{ width: "100%" }}>
              <Option value="true">有效</Option>
              <Option value="false">无效</Option>
            </Select>
          )}
        </FormItem>
        <FormItem label="资源类型">
          {getFieldDecorator("resourceType", {
            rules: [{ required: true, message: "不能为空" }]
          })(
            <Select
              onChange={(value, option) => {
                onSelectChange(value, option);
              }}
              style={{ width: "100%" }}
            >
              <Option value="button">button</Option>
              <Option value="menu">menu</Option>
              <Option value="nav">nav</Option>
            </Select>
          )}
        </FormItem>
        {chooseType === "button" ? (
          <FormItem label="父ID">
            {getFieldDecorator("parentId", {
              rules: [{ required: true, message: "不能为空" }]
            })(
              <Select
                onSelect={value => {
                  onSecondChange(value);
                }}
                style={{ width: "100%" }}
              >
                {optionChildren}
              </Select>
            )}
          </FormItem>
        ) : null}
        {chooseType === "menu" ? (
          <FormItem label="权重">
            {getFieldDecorator("index", {
              rules: [{ required: true, message: "不能为空" }]
            })(<Input />)}
          </FormItem>
        ) : null}
        <FormItem label="校验类型">
          {getFieldDecorator("validateType", {
            rules: [{ required: true, message: "不能为空" }]
          })(
            <Select style={{ width: "100%" }}>
              <Option value="regex">regex</Option>
              <Option value="field">field</Option>
            </Select>
          )}
        </FormItem>
      </Form>
    </Modal>
  );
});

const EditForm = Form.create()(props => {
  const { editVisible, handleEditCancel, handleEditCreate, form, checkName, list, errMsg } = props;
  const { getFieldDecorator } = form;

  let availableText = "";
  if (list.length !== 0) {
    if (list.available === true) {
      availableText = "有效";
    } else {
      availableText = "无效";
    }
  }

  return (
    <Modal
      visible={editVisible}
      title="修改权限"
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
            initialValue: list ? list.id : ""
          })(<Input disabled />)}
        </FormItem>
        <FormItem label="角色状态">
          {getFieldDecorator("available", {
            rules: [{ required: true, message: "角色状态不能为空" }],
            initialValue: list ? (list.length !== 0 ? availableText : "") : ""
          })(
            <Select style={{ width: "100%" }}>
              <Option value="true">有效</Option>
              <Option value="false">无效</Option>
            </Select>
          )}
        </FormItem>
        <FormItem label="名称">
          {getFieldDecorator("name", {
            rules: [{ required: true, message: "名称不能为空", maxLength: 60 }],
            initialValue: list ? list.name : ""
          })(<Input />)}
        </FormItem>
        <FormItem label="pid">
          {getFieldDecorator("pid", {
            rules: [{ required: true, message: "pid不能为空", maxLength: 32 }],
            initialValue: list ? list.pid : ""
          })(<Input disabled />)}
        </FormItem>
        <FormItem label="资源类型">
          {getFieldDecorator("resourceType", {
            rules: [{ required: true, message: "资源类型不能为空", maxLength: 32 }],
            initialValue: list ? list.resourceType : ""
          })(<Input disabled />)}
        </FormItem>
        <FormItem label="地址">
          {getFieldDecorator("url", {
            rules: [{ required: true, message: "地址不能为空" }],
            initialValue: list ? list.url : ""
          })(<Input />)}
        </FormItem>
        <FormItem label="校验类型">
          {getFieldDecorator("validateType", {
            rules: [{ required: true, message: "不能为空" }],
            initialValue: list ? list.validateType : ""
          })(
            <Select style={{ width: "100%" }}>
              <Option value="regex">regex</Option>
              <Option value="field">field</Option>
            </Select>
          )}
        </FormItem>
      </Form>
      {errMsg ? <span className="errorMsg">{errMsg}</span> : null}
    </Modal>
  );
});

const EditableCell = ({ editable, value, onChange }) => (
  <div>
    {editable ? (
      <Input style={{ margin: "-5px 0" }} value={value} onChange={e => onChange(e.target.value)} />
    ) : (
      value
    )}
  </div>
);
const isAdmin = [
  {
    key: "1",
    value: "有效"
  },
  {
    key: "0",
    value: "无效"
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
        <Option value="1">有效</Option>
        <Option value="0">无效</Option>
      </Select>
    ) : (
      value
    )}
  </div>
);
const EditType = ({ editable, value, onChange, defaultValue, columnName }) => (
  <div>
    {editable ? (
      columnName === "resourceType" ? (
        <Select
          style={{ margin: "-5px 0" }}
          defaultValue={defaultValue}
          onSelect={e => {
            onChange(e);
          }}
        >
          <Option value="button">button</Option>
          {/* <Option value="globa">globa</Option> */}
          <Option value="menu">menu</Option>
          <Option value="nav">nav</Option>
          {/* <Option value="restapi">restapi</Option>
        <Option value="service">service</Option>
        <Option value="other">other</Option> */}
        </Select>
      ) : (
        <Select
          style={{ margin: "-5px 0" }}
          defaultValue={defaultValue}
          onSelect={e => {
            onChange(e);
          }}
        >
          <Option value="regex">regex</Option>
          <Option value="field">field</Option>
        </Select>
      )
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
class AuthorityManage extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: "ID名",
        dataIndex: "id",
        render: (text, record) => this.renderColumns(text, record, "id")
      },
      {
        title: "权限状态",
        dataIndex: "available",
        render: (text, record) => this.renderColumns(text, record, "available")
      },
      {
        title: "名称",
        dataIndex: "name",
        render: (text, record) => this.renderColumns(text, record, "name")
      },
      {
        title: "父ID",
        dataIndex: "pid",
        render: (text, record) => this.renderColumns(text, record, "pid")
      },
      {
        title: "资源类型",
        dataIndex: "resourceType",
        render: (text, record) => this.renderColumns(text, record, "resourceType")
      },
      {
        title: "地址",
        dataIndex: "url",
        render: (text, record) => this.renderColumns(text, record, "url")
      },
      {
        title: "校验类型",
        dataIndex: "validateType",
        render: (text, record) => this.renderColumns(text, record, "validateType")
      },
      {
        title: "操作",
        width: 160,
        dataIndex: "operation",
        render: (text, record) => {
          const { editable } = record; // 当前行数据
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
                </span>
              )}
            </div>
          );
        }
      }
    ];
    this.state = {
      dataSource: [],
      pagination: {},
      loading: true,
      visible: false,
      rolevisible: false,
      confirmLoading: false,
      update: false,
      nowrole: null,
      roleId: [],
      selectValue: "",
      chooseType: "",
      secondType: "",
      checkName: "不能为空",
      editVisible: false,
      errMsg: "",
      name: ""
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

    this.onSelectChange = this.onSelectChange.bind(this);
    this.onSecondChange = this.onSecondChange.bind(this);

    this.searchGet = this.searchGet.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);

    this.showEditModal = this.showEditModal.bind(this);
    this.handleEditCancel = this.handleEditCancel.bind(this);
    this.handleEditCreate = this.handleEditCreate.bind(this);
    this.saveEditFormRef = this.saveEditFormRef.bind(this);
  }

  nochange(key) {
    const { AuthorityManage: manager } = this.props;
    const newData = manager.list;
    const target = newData.filter(item => key === item.id)[0];
    if (target) {
      target.editable = false;
      this.setState({ data: target });
    }
  }

  edit(key) {
    const { AuthorityManage: manager } = this.props;
    const newData = manager.list;
    const target = newData.filter(item => key === item.id)[0];
    if (target) {
      target.editable = true;
      this.setState({ data: target });
    }
  }

  save(key) {
    const { AuthorityManage: manager, actions: operations } = this.props;
    const { pagination } = this.state;
    const newData = manager.list;
    const target = newData.filter(item => key === item.id)[0];

    if (target.name === "") {
      message.warning("名称不能为空");
      return;
    }
    if (target.url === "") {
      message.warning("地址不能为空");
      return;
    }

    if (target) {
      delete target.editable;
      delete target.key;
      operations.update(target, "authorityManage");
      setTimeout(() => {
        operations.get(pagination.current, "authorityManage");
        this.setState({ loading: false });
      }, 1000);
    }
  }

  handleChange(value, key, column) {
    const { AuthorityManage: manager } = this.props;
    const newData = manager.list;
    const target = newData.filter(item => key === item.id)[0];

    if (target) {
      if (column === "available") {
        target[column] = Boolean(parseInt(value, 10));
      } else {
        target[column] = value;
      }
      this.setState({ dataSource: newData });
    }
  }

  onDelete(key) {
    const { actions: operations } = this.props;
    const { pagination } = this.state;
    operations.del(key, "authorityManage");
    this.setState({ loading: true });
    setTimeout(() => {
      operations.get(pagination.current, "authorityManage");
      this.setState({ loading: false });
    }, 1000);
  }

  showModal() {
    this.setState({ visible: true }); // 显示模态框
  }

  handleCancel() {
    this.setState({ visible: false });
    this.form.resetFields();
  }

  onSelectChange(value, option) {
    this.setState({
      chooseType: value
    });
  }

  onSecondChange(value, option) {}

  handleCreate() {
    const { actions: operations } = this.props;
    const { pagination } = this.state;

    const form = this.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      if (values.available === 1) {
        values.available = true;
      } else if (values.available === 0) {
        values.available = false;
      }
      if (values.resourceType === "button") {
        values.index = 0;
      }

      operations.add(values, "authorityManage");

      this.setState({ visible: false });
      form.resetFields();
      setTimeout(() => {
        operations.get(pagination.current, "authorityManage");
        operations.get(1, "syspermissionTree");
      }, 500);
    });
  }

  saveFormRef(form) {
    this.form = form;
  }

  showroleModal(data) {
    const { actions: operations } = this.props;
    operations.get(1, "roleManage");
    const dat = [];
    if (data.roles) {
      for (let i = 0; i < data.roles.length; i++) {
        dat.push(data.roles[i].id);
      }
    }
    this.setState({ rolevisible: true, nowrole: data.id, roleId: dat });
  }

  roleOk() {
    const { actions: operations } = this.props;
    const { roleId, nowrole } = this.state;

    const setdata = `?userId=${nowrole}&roleIds=${roleId.join()}`;
    operations.add(setdata, "authorityManage");
    this.setState({ rolevisible: false });
    setTimeout(() => {
      operations.get(1, "authorityManage");
    }, 300);
  }

  roleCancel() {
    this.setState({ rolevisible: false });
    this.setState({ targetKeys: [] });
  }

  changerole(targetKeys, direction, moveKeys) {
    this.setState({ roleId: targetKeys });
  }

  renderRoleItem(item) {
    const customLabel = (
      <span className="custom-item">
        {item.role} - {item.description}
      </span>
    );
    return { label: customLabel, value: item.role };
  }

  renderColumns(text, record, column) {
    if (column === "available") {
      // console.log("available", text, record, record.editable, column);
      return (
        <EditAdmin
          editable={record.editable}
          value={isAdmin.find(item => text === Boolean(parseInt(item.key, 10))).value}
          onChange={value => this.handleChange(value, record.id, column)}
          defaultValue={Number(text)}
        />
      );
    } else if (column === "state") {
      return (
        <EditState
          editable={record.editable}
          onChange={value => this.handleChange(value, record.id, column)}
          defaultValue={Number(text)}
        />
      );
    } else if (column === "validateType" || column === "resourceType") {
      return (
        <EditType
          columnName={column}
          editable={column === "resourceType" ? false : record.editable}
          value={text}
          onChange={value => this.handleChange(value, record.id, column)}
          defaultValue={text}
        />
      );
    } else if (column === "id" || column === "pid") {
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

  updateName(e) {
    this.setState({
      name: e.target.name
    });
  }

  searchGet() {
    const { selectValue } = this.state;
    const { actions: operations, name } = this.props;

    const inputName = name;
    const params = {
      inputName,
      inputType: selectValue
    };
    operations.search(1, params, "authorityManage");
  }

  handleTableChange(pagination, filters, sorter) {
    const { selectValue, name } = this.state;
    const { actions: operations } = this.props;

    this.setState({ loading: true });
    const inputName = name;
    if (selectValue || inputName) {
      const params = {
        inputName,
        inputType: selectValue
      };

      operations.search(pagination.current, params, "authorityManage");
    } else {
      operations.get(pagination.current, "authorityManage");
    }
  }

  handleSelectChange(value) {
    this.setState({
      selectValue: value
    });
  }

  showEditModal(userId) {
    const { actions: operations } = this.props;
    operations.get(userId, "syspermissionFind");
    this.form.resetFields();
    this.setState({
      editVisible: true
    });
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
    const { actions: operations } = this.props;
    const { pagination } = this.state;
    const form = this.forms;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      const available = _.trim(values.available);
      if (available === "无效") {
        values.available = "0";
      } else if (available === "有效") {
        values.available = "1";
      }

      operations.update(values, "authorityManage");

      this.setState({
        editVisible: false,
        errMsg: ""
      });
      form.resetFields();
      setTimeout(() => {
        operations.get(pagination.current, "authorityManage");
        this.setState({ loading: false });
      }, 1000);
    });
  }

  saveEditFormRef(form) {
    this.forms = form;
  }

  componentDidMount() {
    const { actions: operations } = this.props;
    operations.get(1, "syspermissionTree");
    operations.get(1, "authorityManage");
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.AuthorityManage.pageBean) {
      this.setState({
        pagination: {
          total: nextProps.AuthorityManage.pageBean.total,
          current: nextProps.AuthorityManage.pageBean.page,
          pageSize: nextProps.AuthorityManage.pageBean.size
        },
        loading: false
      });
    }
  }

  componentWillUnmount() {
    const { AuthorityManage: managers } = this.props;
    managers.list = [];
  }

  render() {
    const { AuthorityManage: managers, SyspermissionTree, SyspermissionFind } = this.props;
    const { chooseType, visible, loading, editVisible, errMsg, pagination } = this.state;
    if (managers.list) {
      managers.list.forEach(item => {
        item.key = item.id;
      });
    }
    return (
      <div>
        <div className="meddie">
          <span className="meddie-font">控制台</span>
          <Icon type="right" className="meddie-icon" />
          <span className="meddie-update">权限管理</span>
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
                资源类型
              </label>

              <Select style={{ width: 120 }} onChange={this.handleSelectChange}>
                <Option value="button">button</Option>
                <Option value="menu">menu</Option>
                <Option value="nav">nav</Option>
              </Select>
              <a href="#" className="abutton" onClick={this.searchGet}>
                <span className="searchicon" />
                搜索
              </a>
              <a className="addpeople" onClick={this.showModal}>
                添加+
              </a>
            </form>
          </div>
          <Table
            bordered
            size="small"
            columns={this.columns}
            locale={{ emptyText: "暂无数据..." }}
            pagination={pagination}
            dataSource={managers.length !== 0 ? managers.list : managers}
            loading={{ spinning: loading, tip: "加载中..." }}
            onChange={this.handleTableChange}
          />
          <UserForm
            that={this}
            chooseType={chooseType}
            ref={this.saveFormRef}
            visible={visible}
            onCancel={this.handleCancel}
            onCreate={this.handleCreate}
            onSelectChange={this.onSelectChange}
            onSecondChange={this.onSecondChange}
            chooseOption={SyspermissionTree ? SyspermissionTree.list : []}
            preview={e => {
              // console.log(e);
            }}
          />

          <EditForm
            ref={this.saveEditFormRef}
            editVisible={editVisible}
            handleEditCancel={this.handleEditCancel}
            handleEditCreate={this.handleEditCreate}
            list={SyspermissionFind.length !== 0 ? SyspermissionFind.data : SyspermissionFind}
            errMsg={errMsg}
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    UserManage: state.permissionManage.get("userManageData"),
    RoleManage: state.permissionManage.get("roleManageData"),
    AuthorityManage: state.permissionManage.get("authorityManageData"),
    SyspermissionTree: state.permissionManage.get("syspermissionTreeData"),
    SyspermissionFind: state.permissionManage.get("SyspermissionFindData")
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(Object.assign({}, action, actions), dispatch)
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthorityManage);
