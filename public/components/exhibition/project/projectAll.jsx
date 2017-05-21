import React from 'react';
import { Table, Input, Icon, Button, Popconfirm, Modal, Steps, Card } from 'antd';
import { Link } from 'react-router-dom';
import ProjectInfo from '../../manage/project/projectInfo.jsx';
import axios from 'axios';

const Step = Steps.Step;

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
        var progress = ~~this.props.info.rate;
        var rate;
        if (progress === 0) {
            rate = 0;
        }else if (progress > 0 && progress < 100) {
            rate = 1;
        }else {
            rate = 2;
        }
        return (
            <div>
                <a onClick={this.showModal}>查看</a>
                <Modal title="项目信息查看"
                       visible={this.state.visible}
                       footer={<Button size="large" onClick={this.handleCancel}>取消</Button>}
                       closable={false}
                >
                    <Card style={{marginBottom:'30px'}}>
                        <Steps current={rate}>
                            <Step title="尚未开始" description="项目尚未开始进行" />
                            <Step title="进行中" description="项目正在进行中" />
                            <Step title="已完成" description="项目已经完成" />
                        </Steps>
                    </Card>
                    <ProjectInfo type="check" info={this.props.info} />
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
            title: '项目名',
            dataIndex: 'name',
        }, {
            title: '项目负责人',
            dataIndex: 'owner.name',
        }, {
            title: '项目实验室',
            dataIndex: 'studio',
        },{
            title: '查看',
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
            .get('/project/getAllInfo')
            .then((res) => {
                res.data.projects.forEach((item, index) => {
                    item.key = index;
                });
                this.setState({
                    dataSource: res.data.projects,
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