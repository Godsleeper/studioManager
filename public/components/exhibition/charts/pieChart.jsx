import React from 'react';
import {Card} from 'antd';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/pie';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/toolbox';
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
                name: `${item} (amount: ${position[item]})`
            });
        });
        return dataArray;
    }

    componentDidUpdate () {
        var dataArray = this.dataForm(this.props.info, this.props.type);
        var domNode = document.getElementById('pieChart'+this.props.type);
        var chart = echarts.init(domNode);
        chart.setOption({
            toolbox: {
                show : true,
                feature : {
                    dataView : {show: true, readOnly: false},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
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

    componentDidMount () {
        var dataArray = this.dataForm(this.props.info, this.props.type);
        var domNode = document.getElementById('pieChart'+this.props.type);
        var chart = echarts.init(domNode);
        chart.setOption({
            toolbox: {
                show : true,
                feature : {
                    dataView : {show: true, readOnly: false},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
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
                <div id={"pieChart"+this.props.type} style={{height:'400px'}}></div>
            </Card>
        );

    }
};

export default TeacherPie;