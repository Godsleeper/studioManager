import React from 'react';
import { Table, Input, Icon, Button, Popconfirm,Modal } from 'antd';
import { Link } from 'react-router-dom';
import ProjectInfo from '../../manage/paper/paperInfo.jsx';
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
                <a onClick={this.showModal}>查看</a>
                <Modal title="项目信息编辑"
                       visible={this.state.visible}
                       footer={<Button size="large" onClick={this.handleCancel}>取消</Button>}
                       closable={false}
                >
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
            title: '论文名称',
            dataIndex: 'name',
        }, {
            title: '论文作者',
            dataIndex: 'author',
        }, {
            title: '发行时间',
            dataIndex: 'stringTime',
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
    }

    dataFormat (data) {
        for (let i = 0; i < data.length; i++){
            data[i].stringTime = moment(data[i].time).format('YYYY-MM-DD');
            data[i].key = i;
        }
        return data;
    };

    getAllPaperInfo () {
        axios
            .get('/paper/getAllInfo')
            .then((res) => {
                this.setState({
                    dataSource: this.dataFormat(res.data.papers),
                    loading: false
                });
            });
    };

    componentDidMount () {
        this.getAllPaperInfo();
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