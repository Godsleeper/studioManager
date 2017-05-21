import React from 'react';
import {Card} from 'antd';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

class TeacherPie extends React.Component {
    constructor (props) {
        super(props);
    }

    dataForm (data,type) {
        var position = {};
        var dataArray = [];
        data.forEach((item) => {
            if (position[item[type]] === undefined){
                position[item[type]] = 0;
            };
            position[item[type]]++;
        });
        Object.keys(position).forEach((item) => {
            dataArray.push({
                value: position[item],
                name: item
            });
        });
        return dataArray;
    }

    componentDidUpdate () {
        var dataArray = this.dataForm(this.props.info, this.props.type);
        var domNode = document.getElementById('barChart'+this.props.type);
        var chart = echarts.init(domNode);
        chart.setOption({
            title: { text: 'ECharts 入门示例' },
            tooltip: {},
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
    }

    componentDidMount () {
        var dataArray = this.dataForm(this.props.info, this.props.type);
        console.log(dataArray);
        var domNode = document.getElementById('barChart'+this.props.type);
        var chart = echarts.init(domNode);
        chart.setOption({
            series : [
                {
                    type: 'pie',
                    radius: '55%',
                    data: dataArray,
                    roseType: 'angle',
                    itemStyle: {
                        normal: {
                            shadowBlur: 200,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        });
    }

    render () {
        return (
            <Card>
                <div id={"barChart"+this.props.type} style={{height:'400px'}}></div>
            </Card>
        );

    }
};

export default TeacherPie;