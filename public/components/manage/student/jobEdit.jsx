import React from 'react';
import { Table, Input, Icon, Button, Popconfirm,Modal } from 'antd';
import { Link } from 'react-router-dom';
import JobInfo from './jobInfo.jsx';
import axios from 'axios';
import moment from 'moment';

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
                    <JobInfo type="modify" info={this.props.info} />
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
            title: '公司名称',
            dataIndex: 'name',
        }, {
            title: '职位',
            dataIndex: 'position',
        }, {
            title: '类别',
            dataIndex: 'category',
        },{
            title: '工作起始时间',
            dataIndex: 'stringTime',
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
            loading: true,
        };
    }

    dataFormat (data) {
        data.forEach((item, index) => {
            item.stringTime = moment(item.range[0]).format('YYYY-MM-DD');
            item.key = index
        });
        return data;
    };

    getAllPaperInfo () {
        axios
            .get('/job/getInfoById')
            .then((res) => {
                this.setState({
                    dataSource: this.dataFormat(res.data.jobs),
                    loading: false
                });
            });
    };

    componentDidMount () {
        this.getAllPaperInfo();
    };

    onDelete = (index, id) => {
        const dataSource = [...this.state.dataSource];
        dataSource.splice(index, 1);
        this.setState({ dataSource });
        axios.delete(`/job/jobRemove?jobId=${id}`);
    };

    render() {
        const { dataSource } = this.state;
        const columns = this.columns;
        return (
            <Table bordered
                   dataSource={dataSource}
                   columns={columns}
                   loading={this.state.loading}/>
        );
    }
}

export default EditableTable;