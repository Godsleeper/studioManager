import {
    Form,
    Input,
    Tooltip,
    Icon,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    Slider,
    DatePicker,
    Popconfirm,
    Rate,
    InputNumber,
    Upload,
    Progress,
    message
    } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';
import RateCircle from './rateCircle.jsx';
import config from '../../../common/config.js';

const FormItem = Form.Item;
const Option = Select.Option;
const RangePicker = DatePicker.RangePicker;

class RegistrationForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            info: {},
            teachers: [],
            students: []
        }
    };

    addProjectInfo (data) {
        var info = Object.assign({}, data, {
            rate: data.rate + '',
            comment: data.comment + '',
            level: data.level + ''
        });
        axios
            .post('/project/addInfo', { info })
            .then(() => {
                message.success('项目新增成功');
            });
    };
    modifyProjectInfo (data) {
        var info = Object.assign({}, data, {
            rate: data.rate + '',
            comment: data.comment + '',
            level: data.level + '',
            projectId: this.props.info._id
        });
        axios
            .post('/project/modifyInfo', { info })
            .then(() => {
                message.success('修改成功');
            });
    };
    personInfoRequest () {
        axios.get('/teacher/personInfoAll')
            .then((res) => {
                this.setState({
                    teachers: res.data.info
                });
            });
        axios.get('/student/personInfoAll')
            .then((res) => {
                this.setState({
                    students: res.data.info
                });
            });
    };



    componentDidMount () {
        this.personInfoRequest();
        switch (this.props.type) {
            case 'add':
                break;
            case 'modify':
            case 'check':
                this.setState({
                    info: this.standardData(this.props.info)
                });
                break;
            default:
                break;
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                switch (this.props.type) {
                    case 'add':
                        this.addProjectInfo(values);
                        break;
                    case 'modify':
                        this.modifyProjectInfo(values);
                        break;
                }
            }
        });
    };

    standardData (data) {
        var time = [];
        data.time.forEach((item) => {
            time.push(moment(item, 'YYYY-MM-DD'));
        });
        return {
            name: data.name,
            owner: data.owner._id,
            summary: data.summary,
            time: time,
            studio: data.studio,
            rate: ~~data.rate,
            level: ~~data.level,
            comment: ~~data.comment,
            amount: ~~data.amount,
            staff: data.staff
        }
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 10 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 14,
                    offset: 6,
                },
            },
        };
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem
                    {...formItemLayout}
                    label={(
                        <span>
                         项目名称&nbsp;
                            <Tooltip title="要做什么项目">
                                <Icon type="question-circle-o" />
                            </Tooltip>
                            </span>
                    )}
                    hasFeedback
                >
                    {getFieldDecorator('name', {
                        rules: [{
                            type: 'string',
                            message: '只能包含中文和英文字符',
                        }, {
                            required: true,
                            message: '请输入项目名称',
                            whitespace: true
                        }],
                        initialValue: this.state.info.name
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="项目简介"
                    hasFeedback
                >
                    {getFieldDecorator('summary',{
                        rules: [{
                            required: true,
                            message: '请输入项目简介'
                        }],
                        initialValue: this.state.info.summary
                    })(
                        <Input type="textarea" placeholder="请输入项目简介" autosize={{ minRows: 2, maxRows: 6 }} />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="项目负责教师"
                    hasFeedback
                >
                    {getFieldDecorator('owner', {
                        rules: [{
                            required: true,
                            message: '请输入该项目负责老师'
                        }],
                        initialValue: this.state.info.owner
                    })(
                        <Select
                            searchPlaceholder="标签模式"
                        >
                            {this.state.teachers.map((item, index) => {
                                return (
                                    <Option
                                        value={item._id}
                                        key={index}>
                                        【{item.position}】 {item.name}
                                    </Option>
                                );
                            })}
                        </Select>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="项目起始时间"
                    hasFeedback
                >
                    {getFieldDecorator('time', {
                        rules: [{
                            required: true,
                            message: '请选择项目起始时间'
                        }],
                        initialValue: this.state.info.time
                    })(
                        <RangePicker />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="项目实验室"
                    hasFeedback
                >
                    {getFieldDecorator('studio', {
                        rules: [{
                            required: true,
                            message: '请选择项目实验室'
                        }],
                        initialValue: this.state.info.studio
                    })(
                        <Select placeholder="请选择项目所属实验室">
                            {config.studio.map((item, index) => {
                                return (
                                    <Option value={item} key={index}>
                                        {item}
                                    </Option>)
                            })}
                        </Select>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="项目进度"
                >
                    {getFieldDecorator('rate', {
                        rules: [{
                            required: true,
                            message: '滑动选择项目进度'
                        }],
                        initialValue: this.state.info.rate,
                        valuePropName: 'circle'
                    })(
                        <RateCircle />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="项目评价"
                    hasFeedback
                >
                    {getFieldDecorator('comment', {
                        rules: [{
                            required: true,
                            message: '请对项目进行评估'
                        }],
                        initialValue: this.state.info.comment
                    })(
                        <Rate character={<Icon type="folder-open" />}/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="项目级别"
                >
                    {getFieldDecorator('level', {
                        rules: [{
                            required: true,
                            message: '请对项目进行评估'
                        }],
                        initialValue: this.state.info.level
                    })(
                        <Slider marks={{ 10: '普通', 30: '院级', 50: '校级', 70: '省级', 90: '国家级' }}
                                min={0}
                                max={100}
                                step={null}
                                tipFormatter={null}/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="项目人数"
                    hasFeedback
                >
                    {getFieldDecorator('amount', {
                        rules: [{
                            required: true,
                            message: '请输入该项目参与人数'
                        }],
                        initialValue: this.state.info.amount
                    })(
                        <InputNumber min={1} max={20} />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="参与项目学生"
                    hasFeedback
                >
                    {getFieldDecorator('staff', {
                        rules: [{
                            required: true,
                            message: '请输入该项目参与学生'
                        }],
                        initialValue: this.state.info.staff
                    })(
                        <Select
                            mode="tags"
                            searchPlaceholder="标签模式"
                        >
                            {this.state.students.map((item, index) => {
                                return (
                                    <Option
                                        value={item._id}
                                        key={index}>
                                        【{item.degree}】 {item.name}
                                    </Option>
                                );
                            })}
                        </Select>
                    )}
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                    {
                        this.props.type == 'check' ? null : (<Button type="primary" htmlType="submit" size="large">
                            {this.props.type == 'add' ? '新增' : '修改'}
                        </Button>)
                    }

                </FormItem>
            </Form>
        );
    }
};

const ProjectInfo = Form.create()(RegistrationForm);

export default ProjectInfo;