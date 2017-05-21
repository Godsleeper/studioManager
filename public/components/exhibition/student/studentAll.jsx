import React from 'react';
import { Table, Input, Icon, Button, Popconfirm, Modal, Card, Collapse } from 'antd';
import { Link } from 'react-router-dom';
import StudentInfo from './studentInfo.jsx';
import JobLine from './jobAll.jsx';
import axios from 'axios';

const Panel = Collapse.Panel;

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
                <a onClick={this.showModal}>查看</a>
                <Modal
                    title="项目信息查看"
                    visible={this.state.visible}
                    footer={<Button size="large" onClick={this.handleCancel}>取消</Button>}
                    closable={false}
                >
                    <StudentInfo info={this.props.info} />
                    <Collapse bordered={false}>
                        <Panel header="学生就业信息">
                            <Card>
                                <JobLine jobs={this.props.info.job}/>
                            </Card>
                        </Panel>
                    </Collapse>
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
            dataIndex: 'name',
        }, {
            title: '年龄',
            dataIndex: 'age',
        }, {
            title: '学位',
            dataIndex: 'degree',
        },{
            title: '查看具体信息',
            dataIndex: 'check',
            render: (text, record) => {
                return (
                    <EditButton info={record} />
                )
            }
        }];

        this.state = {
            dataSource: [],
            loading: true
        };
    };

    projectInfoRequest () {
        axios
            .get('/student/getAllStudents')
            .then((res) => {
                res.data.forEach((item, index) => {
                    item.key = index;
                });
                this.setState({
                    dataSource: res.data,
                    loading: false
                });
            });
    };

    componentDidMount () {
        this.projectInfoRequest();
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