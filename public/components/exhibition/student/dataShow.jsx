import React from 'react';
import { Card, Tabs } from 'antd';
import StudentPie from '../charts/pieChart.jsx';
import axios from 'axios';
const TabPane = Tabs.TabPane;

class teacherDataShow extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            students: []
        }
    }

    getAllTeacherInfo () {
        axios
            .get('/student/getAllStudents')
            .then((res) => {
                this.setState({
                    students: res.data,
                });
            });
    };

    componentDidMount () {
        this.getAllTeacherInfo();
    };

    render () {
        return (
            <Tabs defaultActiveKey="0">
                <TabPane key='0' tab="学生学位分布">
                    <StudentPie info={this.state.students} type="degree"/>
                </TabPane>
                <TabPane key='1' tab="学生验室分布">
                    <StudentPie info={this.state.students} type="studio"/>
                </TabPane>
                <TabPane key='2' tab="生源地分布">
                    <StudentPie info={this.state.students} type="birthplace"/>
                </TabPane>
            </Tabs>
        );
    };

};



export default teacherDataShow;