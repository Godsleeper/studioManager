import React from 'react';
import { Timeline, Icon } from 'antd';
import moment from 'moment';
const TimeItem = Timeline.Item;

const JobSort = function (jobOne,jobTwo) {
    if (moment(jobOne.range[0]).isBefore(moment(jobTwo.range[0]))){
        return -1;
    }
    else {
        return 1;
    }
};

const JobLine = (props) => {
    var jobs = props.jobs.sort(JobSort);
    return (
        <Timeline>
            {jobs.map((job, index) => {
                var date = moment(job.range[0]).format('YYYY-MM-DD') + ' - ' +
                    moment(job.range[1]).format('YYYY-MM-DD');
                if (index == jobs.length-1) {
                    return (<TimeItem
                                color="blue"
                                key={index}
                                dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }}/>}>
                        【{job.name}】  {job.category} · {job.position}<span style={{color:'#00a854',marginLeft:'20px'}}>{date}</span>
                    </TimeItem>);
                }
                return (
                    <TimeItem
                        key={index}
                        color="green">
                        【{job.name}】  {job.category} · {job.position}<span style={{color:'#00a854',marginLeft:'20px'}}>{date}</span>
                    </TimeItem>);
            })}
        </Timeline>);
};

export default JobLine;