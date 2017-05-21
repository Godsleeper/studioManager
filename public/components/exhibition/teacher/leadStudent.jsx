import React from 'react';
import { Carousel, Icon, Card, Timeline, Tabs } from 'antd';
import moment from 'moment';
const TabPane = Tabs.TabPane;
const TimeItem = Timeline.Item;
import './leadStudent.scss';
import StudentRemark from './studentRemark.jsx';

const LeadStudent = (props) => {
    var educations = props.educations;
    return (
        <Tabs defaultActiveKey="0">
            {educations.map((edu, index) => {
                return (
                    <TabPane key={index} tab={`${edu.student.degree} · ${edu.student.name}`}>
                        <Timeline>
                            <TimeItem>姓名 · {edu.student.name}</TimeItem>
                            <TimeItem>性别 · {edu.student.sex}</TimeItem>
                            <TimeItem>学位 · {edu.student.degree}</TimeItem>
                            <TimeItem>实验室 · {edu.student.studio}</TimeItem>
                            <TimeItem>出生年月 · {moment(edu.student.birthday).format('YYYY-MM-DD')}</TimeItem>
                        </Timeline>
                        <StudentRemark index={index} remark={edu}/>
                    </TabPane>
                );
            })}
        </Tabs>
    );
};

export default LeadStudent;