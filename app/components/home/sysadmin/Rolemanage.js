import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { trim } from "@utils";
import { Table, Popconfirm, message, Modal, Input, Form, Icon, Select, Tabs, Tree } from "antd";
import "../layout/styles/excel.css";
import * as action from "../../../actions/systemManage/permission";
import editImg from "../../../assets/images/config/edit.png";
import deleteImg from "../../../assets/images/config/delete.png";
import saveImg from "../../../assets/images/config/save.png";
import permissionImg from "../../../assets/images/config/permission.png";

const TreeNode = Tree.TreeNode;
const Option = Select.Option;
const FormItem = Form.Item;
const { TabPane } = Tabs;

const UserForm = Form.create()(props => {
  const { visible, onCancel, onCreate, form } = props;
  const { getFieldDecorator } = form;
  const { TextArea } = Input;
  return (
    <Modal
      visible={visible}
      title="创建新角色"
      okText="创建"
      cancelText="取消"
      onCancel={onCancel}
      onOk={onCreate}
    >
      <Form layout="vertical">
        <FormItem label="角色名">
          {getFieldDecorator("role", {
            rules: [{ required: true, message: "不能为空" }]
          })(<Input />)}
        </FormItem>
        <FormItem label="角色类型">
          {getFieldDecorator("roletype", {
            rules: [{ required: true, message: "不能为空" }]
          })(
            <Select style={{ width: "100%" }}>
              <Option value="system">system</Option>
              <Option value="user">user</Option>
            </Select>
          )}
        </FormItem>
        <FormItem label="角色状态">
          {getFieldDecorator("available", {
            rules: [{ required: true, message: "不能为空" }]
          })(
            <Select style={{ width: "100%" }}>
              <Option value={1}>有效</Option>
              <Option value={0}>无效</Option>
            </Select>
          )}
        </FormItem>
        <FormItem label="角色描述">
          {getFieldDecorator("description", {
            rules: [{ required: true, message: "不能为空" }]
          })(<TextArea rows={4} />)}
        </FormItem>
      </Form>
    </Modal>
  );
});

const EditForm = Form.create()(props => {
  const { editVisible, handleEditCancel, handleEditCreate, form, checkName, list, errMsg } = props;
  const { getFieldDecorator } = form;
  const { TextArea } = Input;

  // console.log("list", editVisible, list);
  let availableText = "";
  if (list.length !== 0) {
    if (list.available === true) {
      availableText = "有效";
    } else {
      availableText = "无效";
    }
  }
  // console.log("list.length", availableText);

  return (
    <Modal
      visible={editVisible}
      title="修改角色"
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
        <FormItem label="角色名称">
          {getFieldDecorator("role", {
            rules: [{ required: true, message: "角色名称不能为空", maxLength: 60 }],
            initialValue: list ? list.role : ""
          })(<Input />)}
        </FormItem>
        <FormItem label="rid">
          {getFieldDecorator("rid", {
            rules: [{ required: true, message: "rid不能为空", maxLength: 32 }],
            initialValue: list ? list.rid : ""
          })(<Input disabled />)}
        </FormItem>
        <FormItem label="角色类型">
          {getFieldDecorator("roleType", {
            rules: [{ required: true, message: "角色类型不能为空", maxLength: 32 }],
            initialValue: list ? list.roleType : ""
          })(<Input disabled />)}
        </FormItem>
        <FormItem label="角色状态">
          {getFieldDecorator("available", {
            rules: [{ required: true, message: "不能为空" }],
            initialValue: list ? (list.length !== 0 ? availableText : "") : ""
          })(
            <Select style={{ width: "100%" }}>
              <Option value={1}>有效</Option>
              <Option value={0}>无效</Option>
            </Select>
          )}
        </FormItem>
        <FormItem label="角色描述">
          {getFieldDecorator("description", {
            rules: [{ required: true, message: "角色描述不能为空" }],
            initialValue: list ? list.description : ""
          })(<TextArea rows={4} />)}
        </FormItem>
      </Form>
      {errMsg ? <span className="errorMsg">{errMsg}</span> : null}
    </Modal>
  );
});

const Setrole = Form.create()(props => {
  const {
    visible,
    onCancel,
    onCreate,
    treecheck,
    reslist,
    onSelectTree,
    onExpand,
    expandedKeys,
    autoExpandParent,
    checkedKeys,
    selectedKeys
  } = props;

  const renderMethod = data => {
    if (data && data.length !== 0) {
      return data.map((item, key) => {
        // console.log("test", item, key);
        if (item.children && item.children.length !== 0) {
          return (
            <TreeNode value={item.id} title={item.name} key={item.id}>
              {renderMethod(item.children)}
            </TreeNode>
          );
        } else {
          // console.log("nochild", item)
          return <TreeNode value={item.id} title={item.name} key={item.id} />;
        }
      });
    }
  };

  return (
    <Modal
      width="650px"
      height="600px"
      visible={visible}
      title="选择资源"
      okText="保存"
      cancelText="取消"
      onCancel={onCancel}
      onOk={onCreate}
    >
      <Tabs type="card">
        {reslist ? (
          <TabPane tab="menu目录" key="key">
            <div>
              <Tree
                checkable
                expandedKeys={expandedKeys}
                autoExpandParent={autoExpandParent}
                checkedKeys={checkedKeys}
                selectedKeys={selectedKeys}
                onExpand={onExpand}
                onCheck={treecheck}
                onSelect={onSelectTree}
              >
                {renderMethod(reslist)}
              </Tree>
            </div>
          </TabPane>
        ) : (
          <TabPane tab="无数据" key={1}>
            无数据
          </TabPane>
        )}
      </Tabs>
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

class RoleManage extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: "ID名",
        dataIndex: "id",
        render: (text, record) => this.renderColumns(text, record, "id")
      },
      {
        title: "角色名称",
        dataIndex: "role",
        render: (text, record) => this.renderColumns(text, record, "role")
      },
      {
        title: "rid",
        dataIndex: "rid",
        render: (text, record) => this.renderColumns(text, record, "rid")
      },
      {
        title: "角色类型",
        dataIndex: "roleType",
        render: (text, record) => this.renderColumns(text, record, "roleType")
      },
      {
        title: "角色状态",
        dataIndex: "available",
        render: (text, record) => this.renderColumns(text, record, "available")
      },
      {
        title: "角色描述",
        dataIndex: "description",
        render: (text, record) => this.renderColumns(text, record, "description")
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
                    title="确定取消吗？"
                    onConfirm={() => this.nochange(record.id)}
                    okText="确定"
                    cancelText="取消"
                  >
                    <a className="deletebtn">
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
                  {record.roleType === "system" ? null : (
                    <Popconfirm
                      title="确定删除吗？"
                      onConfirm={() => this.onDelete(record.id)}
                      okText="确定"
                      cancelText="取消"
                    >
                      <a className="deletebtn">
                        <img className="iconImg" src={deleteImg} alt="" />
                        <span className="udeleteicon">删除</span>
                      </a>
                    </Popconfirm>
                  )}
                  <a onClick={() => this.showroleModal(record)}>
                    <img className="iconImg" src={permissionImg} alt="" />
                    <span className="uroleicon">配置权限</span>
                  </a>
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
      confirmLoading: false,
      update: false,
      ArrayData: [],

      treeSelectValue: [],
      selectValue: "",

      expandedKeys: [],
      autoExpandParent: true,
      checkedKeys: [],
      selectedKeys: [],
      isActive: false,
      checkName: "不能为空",
      editVisible: false,
      errMsg: "",
      name: ""
    };
    this.cacheData = [];
    this.onDelete = this.onDelete.bind(this);
    this.showModal = this.showModal.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.saveFormRef = this.saveFormRef.bind(this);
    this.handleTableChange = this.handleTableChange.bind(this);
    this.showroleModal = this.showroleModal.bind(this);
    this.roleOk = this.roleOk.bind(this);
    this.roleCancel = this.roleCancel.bind(this);
    this.Treecheck = this.Treecheck.bind(this);

    this.onExpand = this.onExpand.bind(this);

    this.onSelectTree = this.onSelectTree.bind(this);

    this.onTreeSelectChange = this.onTreeSelectChange.bind(this);
    this.getCheckedId = this.getCheckedId.bind(this);

    this.searchGet = this.searchGet.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);

    this.showEditModal = this.showEditModal.bind(this);
    this.handleEditCancel = this.handleEditCancel.bind(this);
    this.handleEditCreate = this.handleEditCreate.bind(this);
    this.saveEditFormRef = this.saveEditFormRef.bind(this);
  }

  nochange(key) {
    const { RoleManage: manager } = this.props;
    const newData = manager.list;
    const target = newData.filter(item => key === item.id)[0];
    if (target) {
      target.editable = false;
      this.setState({ data: target });
    }
  }

  edit(key) {
    const { RoleManage: manager } = this.props;
    const newData = manager.list;
    const target = newData.filter(item => key === item.id)[0];
    if (target) {
      target.editable = true;
      this.setState({ data: newData });
    }
  }

  save(key) {
    const { pagination } = this.props;
    const { RoleManage: manager, actions } = this.props;

    const newData = manager.list;
    const target = newData.filter(item => key === item.id)[0];

    if (target.role === "") {
      message.warning("角色名称不能为空");
      return;
    }
    if (target.description === "") {
      message.warning("角色描述不能为空");
      return;
    }
    if (target) {
      delete target.editable;
      delete target.roletype;
      actions.update(target, "roleManage");

      setTimeout(() => {
        actions.get(pagination.current, "roleManage");
      }, 500);
    }
  }

  handleChange(value, key, column) {
    const { RoleManage: manager } = this.props;

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

  onTreeSelectChange(value, label, extra) {
    this.setState({ treeSelectValue: value });
  }

  renderColumns(text, record, column) {
    if (column === "available") {
      return (
        <EditAdmin
          editable={record.editable}
          value={isAdmin.find(item => text === Boolean(parseInt(item.key, 10))).value}
          onChange={value => this.handleChange(value, record.id, column)}
          defaultValue={Number(text)}
        />
      );
    } else if (column === "id" || column === "rid" || column === "roleType") {
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

    actions.del(key, "roleManage");
    this.setState({ loading: true });
    setTimeout(() => {
      actions.get(pagination.current, "roleManage");
      this.setState({ loading: false });
    }, 500);
  }

  showModal() {
    this.setState({ visible: true });
  }

  handleCancel() {
    this.setState({ visible: false });
    this.form.resetFields();
  }

  handleCreate() {
    const { actions } = this.props;
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
      actions.add(values, "roleManage");

      this.setState({ visible: false });
      form.resetFields();
      setTimeout(() => {
        actions.get(pagination.current, "roleManage");
      }, 300);
    });
  }

  saveFormRef(form) {
    this.form = form;
  }

  getCheckedId(checkedList, resultList) {
    for (let i = 0; i < checkedList.length; i++) {
      if (checkedList[i].children.length === 0) {
        resultList.push(checkedList[i].id);
      }
      if (checkedList[i].children.length > 0) {
        this.getCheckedId(checkedList[i], resultList);
      }
    }
  }

  showroleModal(data) {
    const { actions, SyspermissionTree, SysroleFind } = this.props;

    actions.get(data.id, "sysroleFind");
    actions.get(1, "syspermissionTree");

    setTimeout((showParentList, showList, originList, originParentList) => {
      originList = SyspermissionTree.list;
      showList = SysroleFind.data.list;
      showParentList = showList.filter(item => item.children.length !== 0);
      originParentList = originList.filter(item => {
        if (item.children) {
          return item.children.length !== 0;
        }
      });

      const diffOrigin = [];
      const diffShow = [];
      for (const i of originParentList) {
        for (const j of showParentList) {
          if (i.id === j.id && i.children.length !== j.children.length) {
            diffOrigin.push(i);
            diffShow.push(j);
          }
        }
      }
      const halfShowList = [];
      const childShowList = [];
      const parentShowList = [];
      const childShowList1 = [];

      for (const m of diffShow) {
        halfShowList.push(m.id);
        for (let n = 0; n < m.children.length; n++) {
          childShowList.push(m.children[n].id);
        }
      }

      for (const h of showList) {
        parentShowList.push(h.id);
        for (let l = 0; l < h.children.length; l++) {
          childShowList1.push(h.children[l].id);
        }
      }

      const showAllList = parentShowList.concat(childShowList1).concat(halfShowList);

      const showLastList = showAllList.filter(item => halfShowList.indexOf(item) === -1);

      this.setState({
        checkedKeys: { checked: showLastList, halfChecked: halfShowList }
      });
    }, 200);

    const dat = [];
    if (data.roles) {
      for (let i = 0; i < data.roles.length; i++) {
        dat.push(data.roles[i].id);
      }
    }
    this.setState({ rolevisible: true, nowRes: data.id, resourseId: dat });
  }

  roleOk() {
    const { isActive, treeSelectValue, nowRes } = this.state;
    const { actions } = this.props;
    this.setState({ rolevisible: false });
    if (isActive) {
      const data = `?roleId=${nowRes}&permissionIds=${treeSelectValue.join()}`;
      actions.add(data, "addResource");
    } else {
      message.info("修改成功");
    }
  }

  roleCancel() {
    this.setState({ rolevisible: false });
    this.setState({ targetKeys: [], checkedKeys: [] });
  }

  onExpand(expandedKeys) {
    this.setState({
      expandedKeys,
      autoExpandParent: false
    });
  }

  Treecheck(checkedKeys, { halfCheckedKeys, checkedNodes, node, event }) {
    this.setState({ checkedKeys });
    const checkList = checkedKeys.concat(halfCheckedKeys);

    // console.log("checkList", checkList);
    this.setState({
      treeSelectValue: checkList,
      isActive: true
    });
  }

  onSelectTree(selectedKeys, info) {
    this.setState({ selectedKeys });
  }

  handleTableChange(pagination, filters, sorter) {
    const { selectValue, name } = this.state;
    const { actions } = this.props;
    this.setState({ loading: true });
    const inputName = name;
    if (selectValue || inputName) {
      const params = {
        inputName,
        inputType: selectValue
      };
      actions.search(pagination.current, params, "roleManage");
    } else {
      actions.get(pagination.current, "roleManage");
    }
  }

  updateName(e) {
    this.setState({
      name: e.target.value
    });
  }

  // search segment
  searchGet() {
    const { actions } = this.props;
    const { selectValue, name } = this.state;
    const inputName = name;
    const params = {
      inputName,
      inputType: selectValue
    };
    actions.search(1, params, "roleManage");
  }

  handleSelectChange(value) {
    this.setState({
      selectValue: value
    });
    // console.log(`selected ${value}`);
  }

  showEditModal(userId) {
    const { actions } = this.props;
    actions.get(userId, "sysroleFind");
    this.form.resetFields();
    this.setState({
      editVisible: true
    });
  }

  handleEditCancel() {
    const form = this.forms;
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
    const { pagination } = this.state;
    const form = this.forms;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      const available = trim(values.available);
      delete values.rid;

      if (available === "无效") {
        values.available = "0";
      } else if (available === "有效") {
        values.available = "1";
      }

      actions.update(values, "roleManage");
      this.setState({
        editVisible: false,
        errMsg: ""
      });
      form.resetFields();
      setTimeout(() => {
        actions.get(pagination.current, "roleManage");
        this.setState({ loading: false });
      }, 1000);
    });
  }

  saveEditFormRef(form) {
    this.forms = form;
  }

  componentDidMount() {
    const { actions } = this.props;
    actions.get(1, "roleManage");

    setTimeout(() => {
      actions.get(1, "syspermissionTree");
    }, 800);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.RoleManage.pageBean) {
      this.setState({
        pagination: {
          total: nextProps.RoleManage.pageBean.total,
          current: nextProps.RoleManage.pageBean.page,
          pageSize: nextProps.RoleManage.pageBean.size
        },
        loading: false
      });
    }
  }

  componentWillUnmount() {
    const { RoleManage: manager } = this.props;
    manager.list = [];
  }

  render() {
    const { RoleManage: manager, SysroleFind, SyspermissionTree } = this.props;
    const {
      pagination,
      loading,
      visible,
      editVisible,
      errMsg,
      treeSelectValue,
      selectedKeys,
      checkedKeys,
      expandedKeys,
      rolevisible,
      autoExpandParent
    } = this.state;
    if (manager.list) {
      manager.list.map(item => {
        item.key = item.id;
      });
    }
    return (
      <div>
        <div className="meddie">
          <span className="meddie-font">控制台</span>
          <Icon type="right" className="meddie-icon" />
          <span className="meddie-update">角色管理</span>
        </div>
        <div className="out_container">
          <div className="searchbar">
            <form action="#">
              <label htmlFor="name" className="lable namelable">
                角色名称
              </label>
              <input
                onChange={e => this.updateName(e)}
                type="text"
                name="name"
                id="name"
                className="table-input nameinput"
              />
              <label htmlFor="age" className="lable agelable">
                角色类型
              </label>

              <Select style={{ width: 120 }} onChange={this.handleSelectChange}>
                <Option value="system">system</Option>
                <Option value="user">user</Option>
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
            locale={{ emptyText: "暂无数据..." }}
            columns={this.columns}
            dataSource={manager.list}
            pagination={pagination}
            loading={loading}
            onChange={this.handleTableChange}
          />
          <UserForm
            ref={this.saveFormRef}
            visible={visible}
            onCancel={this.handleCancel}
            onCreate={this.handleCreate}
          />

          <EditForm
            ref={this.saveEditFormRef}
            editVisible={editVisible}
            handleEditCancel={this.handleEditCancel}
            handleEditCreate={this.handleEditCreate}
            list={SysroleFind.length !== 0 ? SysroleFind.data : SysroleFind}
            errMsg={errMsg}
          />

          <Setrole
            treeSelectValue={treeSelectValue}
            onTreeSelectChange={this.onTreeSelectChange}
            visible={rolevisible}
            onCancel={this.roleCancel}
            onCreate={this.roleOk}
            reslist={SyspermissionTree ? SyspermissionTree.list : []}
            treecheck={this.Treecheck}
            // onChangeSearch={this.onChangeSearch}
            expandedKeys={expandedKeys}
            autoExpandParent={autoExpandParent}
            checkedKeys={checkedKeys}
            selectedKeys={selectedKeys}
            onExpand={this.onExpand}
            onSelectTree={this.onSelectTree}
          />
        </div>
      </div>
    );
  }
}
const StateToProps = state => {
  return {
    RoleManage: state.permissionManage.get("roleManageData"),
    SysroleFind: state.permissionManage.get("sysroleFindData"),
    AuthorityManage: state.permissionManage.get("authorityManageData"),
    SyspermissionTree: state.permissionManage.get("syspermissionTreeData")
  };
};

const DispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(action, dispatch)
  };
};
export default connect(
  StateToProps,
  DispatchToProps
)(RoleManage);
