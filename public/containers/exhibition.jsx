import React from 'react';
import { Layout, Menu, Icon, Card} from 'antd';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';

import TopNav from '../components/layout/topNav.jsx';
import SiderMenu from '../components/layout/exhibitionSider.jsx';
import PersonInfo from '../components/exhibition/personInfo/personInfo.jsx';
import ProjectAll from '../components/exhibition/project/projectAll.jsx';
import PaperAll from '../components/exhibition/paper/paperAll.jsx';
import StudentAll from '../components/exhibition/student/studentAll.jsx';
import TeacherAll from '../components/exhibition/teacher/teacherAll.jsx';
import TeacherData from '../components/exhibition/teacher/dataShow.jsx';
import StudentData from '../components/exhibition/student/dataShow.jsx';



import './exhibition.scss';
import 'antd/dist/antd.css';

const { Content, Footer, Sider } = Layout;


class ExhibitionPage extends React.Component {
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
            <Layout className="tex_wrapper">
                <TopNav selectKey="exhibition" data={this.state.user}/>
                <Layout className="tex_main_wrapper">
                    <Sider
                        breakpoint="lg"
                        collapsedWidth="0">
                        <SiderMenu />
                    </Sider>
                    <Content className="tex_content_wrapper">
                        <Route path="/person/personInfo" render={()=>(
                            <PersonInfo type={this.state.user.role}/>
                        )} />
                        <Route path="/project/projectAll" render={()=>(<Card><ProjectAll/></Card>)} />
                        <Route path="/paper/paperAll" render={()=>(<Card><PaperAll/></Card>)} />
                        <Route path="/student/studentAll" render={()=>(<Card><StudentAll/></Card>)} />
                        <Route path="/teacher/teacherAll" render={()=>(<Card><TeacherAll/></Card>)} />
                        <Route path="/teacher/teacherCal" render={()=>(<Card><TeacherData/></Card>)} />
                        <Route path="/student/studentCal" render={()=>(<Card><StudentData/></Card>)} />
                    </Content>
                </Layout>
                <Footer style={{ textAlign: 'center' }}>
                    SEUStudio 教职人员管理系统 ©2017 Created by SEU
                </Footer>
            </Layout>
        );
    }
};

export default ExhibitionPage;



