import { Row, Col, Collapse, Icon, Card } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import TeacherInfo from '../teacher/teacherInfo.jsx';
import StudentInfo from '../student/studentInfo.jsx';

import './personInfo.scss';

class PersonInfo extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            student: {},
            teacher: {}
        }
    };

    teacherInfoRequest () {
        axios
            .get('/teacher/personInfoGet')
            .then((res) => {
                this.setState({
                    teacher: res.data
                })
            });
    };

    studentInfoRequest () {
        axios
            .get('/student/personInfoGet')
            .then((res) => {
                this.setState({
                    student: res.data
                })
            });
    };

    componentDidMount () {
        switch (this.props.type) {
            case 'teacher':
                this.teacherInfoRequest();
                break;
            case 'student':
                this.studentInfoRequest();
                break;
        }
    }

    componentWillReceiveProps (props) {
        switch (props.type) {
            case 'teacher':
                this.teacherInfoRequest();
                break;
            case 'student':
                this.studentInfoRequest();
                break;
        }
    }

    render () {
        var type = this.props.type;
        return (
            type === 'teacher' ?
                <TeacherInfo info={this.state.teacher}/> :
                <StudentInfo info={this.state.student}/>
        );
    };
}

export default PersonInfo;