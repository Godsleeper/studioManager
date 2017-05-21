import React from 'react';
import { Card } from 'antd';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/radar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';


class StudentRemark extends React.Component {
    constructor (props) {
        super(props);

    };

    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        var domNode = document.getElementById(`studentChart${this.props.index}`);
        var chart = echarts.init(domNode);
        // 绘制图表
        chart.setOption({
            title: {
                text: '学生评价'
            },
            radar: {
                indicator: [
                    { name: '成绩(Grade)', max: 10},
                    { name: '项目（Project）', max: 10},
                    { name: '论文（Paper）', max: 10},
                    { name: '社会及学校活动（Social）', max: 10},
                    { name: '体育（Exercise）', max: 10},
                ]
            },
            series: [{
                type: 'radar',
                data : [
                    {
                        value : [
                            this.props.remark.grade,
                            this.props.remark.project,
                            this.props.remark.paper,
                            this.props.remark.social,
                            this.props.remark.exercise
                        ].map((item)=>{
                            return item * 2;
                        })
                    }
                ]
            }]
        });
    }

    render () {
        return (
            <div id={`studentChart${this.props.index}`} style={{height:'300px',width:'100%'}}></div>
        );
    };

}

export default StudentRemark