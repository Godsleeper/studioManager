import {Layout, Menu, Form, Icon, Input, Button, Checkbox, Select ,Card, Tabs} from 'antd';
import React from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';

import SiderMenu from '../components/layout/sManageSider.jsx';
import TopNav from '../components/layout/topNav.jsx';

import PersonInfo from '../components/manage/student/personInfo.jsx';

import ProjectInfo from '../components/manage/project/projectInfo.jsx'
import ProjectEdit from '../components/manage/project/projectEditPage.jsx';

import PaperInfo from '../components/manage/paper/paperInfo.jsx'
import PaperEdit from '../components/manage/paper/paperEditPage.jsx';

import JobInfo from '../components/manage/student/jobInfo.jsx';
import JobEdit from '../components/manage/student/jobEdit.jsx';

import 'antd/dist/antd.css';
import './sManage.scss';

const { Content, Footer, Sider } = Layout;
const TabPane = Tabs.TabPane;


//  个人信息页
const PersonInfoPage = () => {
    return (
        <Card>
            <Tabs
                type="card"
                defaultActiveKey="add"
                tabPosition="top">
                <TabPane tab={<span><Icon type="plus" />添加个人信息</span>}
                         key="add">
                    <PersonInfo type="add"/>
                </TabPane>
                <TabPane tab={<span><Icon type="edit" />个人信息修改</span>}
                         key="modify">
                    <PersonInfo type="modify"/>
                </TabPane>
            </Tabs>
        </Card>
    );
};

class ManagePage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            user: {}
        }
    };

    //  发送数据请求
    apiRequest () {
        axios.get('/user/islog')
            .then((res) => {
                this.setState({
                    user: {
                        name: res.data.user.userName,
                        role: res.data.user.role
                    }
                });
            });
    };

    componentDidMount () {
        this.apiRequest();
    }

    render () {
        return (
            <Layout className="man_wrapper">
                <TopNav selectKey='manage' data={this.state.user}/>
                <Layout>
                    <Sider breakpoint="lg"
                           collapsedWidth="0">
                        <SiderMenu />
                    </Sider>
                    <Content className="man_content_wrapper">
                        <Route path="/person/personInfo" component={PersonInfoPage} />
                        <Route path="/project/projectInfo" render={()=>(
                            <Card>
                                <ProjectInfo type="add"/>
                            </Card>)} />
                        <Route path="/project/projectEdit" render={()=>(<Card><ProjectEdit /></Card>)} />
                        <Route path="/paper/paperInfo" render={()=>(
                            <Card>
                                <PaperInfo type="add"/>
                            </Card>)} />
                        <Route path="/paper/paperEdit" render={()=>(<Card><PaperEdit /></Card>)} />
                        <Route path="/job/jobAdd" render={()=>(
                            <Card>
                                <JobInfo type="add"/>
                            </Card>)} />
                        <Route path="/job/jobEdit" render={()=>(<Card><JobEdit /></Card>)} />
                    </Content>
                </Layout>
                <Footer className="man_foot_wrapper">SEUStudio 教职人员管理系统 ©2017 Created by SEU</Footer>
            </Layout>
        );
    };
};

export default ManagePage;





