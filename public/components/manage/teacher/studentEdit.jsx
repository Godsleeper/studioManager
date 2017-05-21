import React from 'react';
import { Table, Input, Icon, Button, Popconfirm,Modal } from 'antd';
import { Link } from 'react-router-dom';
import StudentInfo from './studentAdd.jsx';
import axios from 'axios';

class EditButton extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            visible: false
        };
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    handleCancel = () => {
        this.setState({
            visible: false,
        });
    };
    render() {
        return (
            <div>
                <a onClick={this.showModal}>编辑</a>
                <Modal title="项目信息编辑"
                       visible={this.state.visible}
                       footer={<Button size="large" onClick={this.handleCancel}>取消</Button>}
                       closable={false}
                >
                    <StudentInfo type="modify" info={this.props.info} />
                </Modal>
            </div>
        );
    }
}



class EditableTable extends React.Component {
    constructor(props) {
        super(props);
        // 表格的构建
        this.columns = [{
            title: '学生姓名',
            dataIndex: 'student.name',
        }, {
            title: '学生学位',
            dataIndex: 'student.degree',
        }, {
            title: '学生学号',
            dataIndex: 'student.telphone',
        },{
            title: '编辑',
            dataIndex: 'edit',
            render: (text, record) => {
                return (
                    <EditButton info={record} />
                )
            }
        }, {
            title: '删除',
            dataIndex: 'operation',
            render: (text, record, index) => {
                return (
                    <Popconfirm
                        title="确认要删除吗"
                        onConfirm={() => this.onDelete(index, record._id)}>
                        <a href="#">删除</a>
                    </Popconfirm>
                );
            },
        }];

        this.state = {
            dataSource: [],
            loading: true
        };
    };

    projectInfoRequest () {
        axios
            .get('/education/getStudentById')
            .then((res) => {
                res.data.students.forEach((item, index) => {
                    item.key = index;
                });
                this.setState({
                    dataSource: res.data.students,
                    loading: false
                });
            });
    };

    componentDidMount () {
        this.projectInfoRequest();
    };

    onDelete = (index, id) => {
        const dataSource = [...this.state.dataSource];
        dataSource.splice(index, 1);
        this.setState({ dataSource });
        // axios.delete(`/project/projectRemove?projectId=${id}`);

    };

    render () {
        const { dataSource } = this.state;
        const columns = this.columns;
        return (
            <Table bordered
                   dataSource={dataSource}
                   columns={columns}
                   loading={this.state.loading}
            />
        );
    };
}

export default EditableTable;