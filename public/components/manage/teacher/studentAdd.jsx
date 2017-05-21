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
    Card,
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
import axios from 'axios';

const FormItem = Form.Item;
const Option = Select.Option;

class RegistrationForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            info: {},
            students: []
        }
    };

    addStudentInfo (data) {
        axios
            .post('/education/studentAdd', { data })
            .then((res) => {
                switch (res.data.status) {
                    case 'NoInfo':
                        message.error('请先去完善个人资料');
                        break;
                    case 'Success':
                        message.success('添加成功');
                        break;
                }
            });
    };

    modifyProjectInfo (data) {
        data.studentId = this.props.info._id;
        axios
            .post('/education/modifyStudent', { data })
            .then(() => {
                message.success('修改成功');
            });
    };

    personInfoRequest () {
        axios.get('/student/personInfoAll')
            .then((res) => {
                this.setState({
                    students: res.data.info
                });
            });
    };

    dataFormat (data) {
        return {
            student: data.student._id,
            comment: ~~data.comment,
            project: ~~data.project,
            paper: ~~data.paper,
            exercise: ~~data.exercise,
            social: ~~data.social,
            grade: ~~data.grade,
            remark: data.remark
        };
    }

    componentDidMount () {
        this.personInfoRequest();
        switch (this.props.type) {
            case 'add':
                break;
            case 'modify':
                this.setState({
                    info: this.dataFormat(this.props.info)
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
                        this.addStudentInfo(values);
                        break;
                    case 'modify':
                        this.modifyProjectInfo(values);
                        break;
                }
            }
        });
    };

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
                    label="学生选择"
                    hasFeedback
                >
                    {getFieldDecorator('student', {
                        rules: [{
                            required: true,
                            message: '请输入该项目参与学生'
                        }],
                        initialValue: this.state.info.student
                    })(
                        <Select
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
                <FormItem
                    {...formItemLayout}
                    label="教师评价"
                >
                    {getFieldDecorator('comment', {
                        rules: [{
                            required: true,
                            message: '请对项目进行评估'
                        }],
                        initialValue: this.state.info.comment
                    })(
                        <Slider marks={{ 10: '普通', 30: '良好', 50: '优秀' }}
                                min={0}
                                max={60}
                                step={null}
                                tipFormatter={null}/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="成绩"
                    hasFeedback
                >
                    {getFieldDecorator('grade', {
                        rules: [{
                            required: true,
                            message: '请对学生的成绩进行评价'
                        }],
                        initialValue: this.state.info.grade
                    })(
                        <Rate />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="项目"
                    hasFeedback
                >
                    {getFieldDecorator('project', {
                        rules: [{
                            required: true,
                            message: '请对学生的项目进行评价'
                        }],
                        initialValue: this.state.info.project
                    })(
                        <Rate />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="论文"
                    hasFeedback
                >
                    {getFieldDecorator('paper', {
                        rules: [{
                            required: true,
                            message: '请对学生的论文进行评价'
                        }],
                        initialValue: this.state.info.paper
                    })(
                        <Rate />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="学校及社会活动"
                    hasFeedback
                >
                    {getFieldDecorator('social', {
                        rules: [{
                            required: true,
                            message: '请对学生的活动进行评价'
                        }],
                        initialValue: this.state.info.social
                    })(
                        <Rate />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="体育"
                    hasFeedback
                >
                    {getFieldDecorator('exercise', {
                        rules: [{
                            required: true,
                            message: '请对学生的体育进行评价'
                        }],
                        initialValue: this.state.info.exercise
                    })(
                        <Rate />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="教师评语"
                    hasFeedback
                >
                    {getFieldDecorator('remark',{
                        rules: [{
                            required: true,
                            message: '请输入您对学生的评价'
                        }],
                        initialValue: this.state.info.remark
                    })(
                        <Input type="textarea" placeholder="请输入您对学生的评价" autosize={{ minRows: 8, maxRows: 10 }} />
                    )}
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit" size="large">
                        {this.props.type == 'add' ? '新增' : '修改'}
                    </Button>
                </FormItem>
            </Form>
        );
    }
};

const ProjectInfo = Form.create()(RegistrationForm);

export default ProjectInfo;