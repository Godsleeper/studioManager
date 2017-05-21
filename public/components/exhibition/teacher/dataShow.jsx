import React from 'react';
import { Card, Tabs } from 'antd';
import TeacherPie from '../charts/pieChart.jsx';
import axios from 'axios';
const TabPane = Tabs.TabPane;

class teacherDataShow extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            teachers: []
        }
    }

    getAllTeacherInfo () {
        axios
            .get('/teacher/getAllTeachers')
            .then((res) => {
                this.setState({
                    teachers: res.data,
                });
            });
    };

    componentDidMount () {
        this.getAllTeacherInfo();
    };

    render () {
        return (
            <Tabs defaultActiveKey="0">
                <TabPane key='0' tab="教师职称分布">
                    <TeacherPie info={this.state.teachers} type="position"/>
                </TabPane>
                <TabPane key='1' tab="教师实验室分布">
                    <TeacherPie info={this.state.teachers} type="studio"/>
                </TabPane>
                <TabPane key='2' tab="教师地区分布">
                    <TeacherPie info={this.state.teachers} type="birthplace"/>
                </TabPane>
            </Tabs>
        );
    };

};



export default teacherDataShow;