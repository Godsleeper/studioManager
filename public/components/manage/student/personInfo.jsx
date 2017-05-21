import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, Slider, DatePicker, Popconfirm, InputNumber, message} from 'antd';
import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import config from '../../../common/config.js';
import axios from 'axios';
const FormItem = Form.Item;
const Option = Select.Option;

class RegistrationForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            info: {}
        }
    };

    infoAdd (data) {
        axios.post('/student/personInfoAdd', {info: data})
            .then((res) => {
                if (res.data.status === 'success') {
                    message.success('成功');
                }
                else if (res.data.status === 'exist') {
                    message.error('已输入个人信息，请点击修改');
                }
            });
    };

    infoModify (data) {
        axios
            .post('/student/personInfoModify', {info: data})
            .then((res) => {
                switch (res.data.status) {
                    case 'NoInfo':
                        message.error('请直接填写个人资料');
                        break;
                    case 'Success':
                        message.success('修改成功');
                        break;
                }
            });
    };

    infoRequest () {
        axios.get('/student/personInfoGet')
            .then((res) => {
                if (res.data) {
                    this.setState({
                        info: this.standardData(res.data)
                    })
                }
            })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                var info = Object.assign({}, values, {
                    age: values.age + '',
                });
                switch (this.props.type) {
                    case 'add':
                        this.infoAdd(info);
                        break;
                    case 'modify':
                        this.infoModify(info);
                        break;
                }
            }
        });
    };

    standardData (data) {
        const dateFormat = 'YYYY-MM-DD';
        return {
            name: data.name,
            sex: data.sex,
            age: data.age,
            birthday: moment(data.birthday, dateFormat),
            telphone: data.telphone,
            email: data.email,
            degree: data.degree,
            birthplace: data.birthplace,
            studio: data.studio,
            identity: data.identity,
            wechat: data.wechat,
            qq: data.qq,
            schoolNumber: data.schoolNumber
        }
    }

    componentDidMount () {
        switch (this.props.type) {
            case 'add':
                break;
            case 'modify':
                this.infoRequest();
                break;
        }
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 }
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 10 }
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
                    offset: 8
                },
            },
        };
        const ProvinceArr = config.province;

        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem
                    {...formItemLayout}
                    label={(
                        <span>
                         姓名&nbsp;
                            <Tooltip title="输入你的全名">
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
                            message: '请输入姓名',
                            whitespace: true
                        }],
                        initialValue: this.state.info.name
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="性别"
                    hasFeedback
                >
                    {getFieldDecorator('sex', {
                        rules: [
                            { required: true, message: '请选择你的性别' },
                        ],
                        initialValue: this.state.info.sex
                    })(
                        <Select placeholder="性别">
                            <Option value="男">男</Option>
                            <Option value="女">女</Option>
                        </Select>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="年龄"
                    hasFeedback
                >
                    {getFieldDecorator('age', {
                        rules: [{
                            required: true,
                            message: '请输入年龄'
                        }],
                        initialValue: this.state.info.age
                    })(
                        <InputNumber min={1} max={100} />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="出生年月"
                    hasFeedback
                >
                    {getFieldDecorator('birthday', {
                        rules: [{
                            required: true,
                            message: '请选择出生年月'
                        }],
                        initialValue: this.state.info.birthday
                    })(
                        <DatePicker />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="手机号"
                    hasFeedback
                >
                    {getFieldDecorator('telphone', {
                        rules: [{
                            type: 'string',
                            pattern: /\d{11}/,
                            required: true,
                            message: '请输入正确的手机号'
                        }],
                        initialValue: this.state.info.telphone
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="身份证号"
                    hasFeedback
                >
                    {getFieldDecorator('identity', {
                        rules: [{
                            type: 'string',
                            required: true,
                            message: '请输入身份证号'
                        }],
                        initialValue: this.state.info.identity
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="籍贯"
                    hasFeedback
                >
                    {getFieldDecorator('birthplace', {
                        rules: [
                            { required: true, message: '请选择你的籍贯' },
                        ],
                        initialValue: this.state.info.birthplace
                    })(
                        <Select placeholder="请选择籍贯省份">
                            {ProvinceArr.map((item, index) => {
                                return (
                                    <Option key={index} value={item}>{item}</Option>
                                )
                            })}
                        </Select>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="学位"
                    hasFeedback
                >
                    {getFieldDecorator('degree', {
                        rules: [
                            { required: true, message: '请选择你的学位' },
                        ],
                        initialValue: this.state.info.degree
                    })(
                        <Select placeholder="请选择你的学位">
                            {config.studentPosition.map((item, index) => {
                                return (
                                    <Option key={index} value={item}>{item}</Option>
                                );
                            })}
                        </Select>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="学号"
                    hasFeedback
                >
                    {getFieldDecorator('schoolNumber', {
                        rules: [{
                            type: 'string',
                            pattern: /\d+/,
                            required: true,
                            message: '请输入正确的学号'
                        }],
                        initialValue: this.state.info.schoolNumber
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="所属实验室"
                    hasFeedback
                >
                    {getFieldDecorator('studio', {
                        rules: [{
                            required: true,
                            message: '请选择实验室'
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
                    label="E-mail"
                    hasFeedback
                >
                    {getFieldDecorator('email', {
                        rules: [{
                            type: 'email', message: '请输入正确的邮件格式',
                        }, {
                            required: true, message: '请输入您的邮件地址',
                        }],
                        initialValue: this.state.info.email
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="微信号"
                    hasFeedback
                >
                    {getFieldDecorator('wechat', {
                        rules: [{
                            type: 'string', message: '请输入正确的邮件格式',
                        }, {
                            required: true, message: '请输入您的邮件地址',
                        }],
                        initialValue: this.state.info.wechat
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="QQ号"
                    hasFeedback
                >
                    {getFieldDecorator('qq', {
                        rules: [{
                            type: 'string', message: '请输入正确的邮件格式',
                        }, {
                            required: true, message: '请输入您的邮件地址',
                        }],
                        initialValue: this.state.info.qq
                    })(
                        <Input />
                    )}
                </FormItem>

                <FormItem {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit" size="large">确定</Button>
                </FormItem>
            </Form>
        );
    }
};

const WrappedRegistrationForm = Form.create()(RegistrationForm);

export default WrappedRegistrationForm;

