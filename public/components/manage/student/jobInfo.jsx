import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, Slider, DatePicker, Popconfirm, InputNumber, Radio, message} from 'antd';
import React from 'react';
import moment from 'moment';
import axios from 'axios';
import { Link } from 'react-router-dom';
import config from '../../../common/config.js';
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;

class RegistrationForm extends React.Component {
    constructor (props) {
        super(props);
        switch (this.props.type) {
            case 'add':
                this.state = {
                    info: {}
                };
                break;
            case 'modify':
                this.state = {
                    info: this.standardData(this.props.info)
                };
                break;
        }
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                switch(this.props.type) {
                    case 'add':
                        this.jobInfoAdd(values);
                        break;
                    case 'modify':
                        this.jobInfoModify(values);
                        break;
                }
            }
        });
    };

    standardData (data) {
        var dataArr = [];
        data.range.forEach((item) => {
            dataArr.push(moment(item, 'YYYY-MM-DD'));
        });
        return {
            name: data.name,
            address: data.address,
            category: data.category,
            range: dataArr,
            position: data.position,
            content: data.content
        }
    };

    jobInfoAdd (data) {
        axios
            .post('/job/addInfo', {job: data})
            .then((res) => {
                var { status } = res.data;
                switch (status) {
                    case 'NotStudent':
                        message.error('不是学生用户');
                        break;
                    case 'NoInfo':
                        message.error('请先去完善个人资料');
                        break;
                    case 'Success':
                        message.success('添加成功');
                        break;
                }
            });
    };

    jobInfoModify (data) {
        data.paperId = this.props.info._id;
        axios
            .post('/job/addInfo', {job: data})
            .then(() => {
                message.success('success');
            });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 6 }
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
                    offset: 6
                },
            },
        };
        let { info } = this.state;
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem
                    {...formItemLayout}
                    label='公司名称'
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
                        initialValue: info.name
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label='公司地址'
                    hasFeedback
                >
                    {getFieldDecorator('address', {
                        rules: [{
                            type: 'string',
                            message: '只能包含中文和英文字符',
                        }, {
                            required: true,
                            message: '请输入姓名',
                            whitespace: true
                        }],
                        initialValue: info.address
                    })(
                        <Input type="textarea" placeholder="公司详细地址" autosize={{ minRows: 2, maxRows: 6 }}/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="工作性质"
                >
                    {getFieldDecorator('category',{
                        initialValue: info.category
                    })(
                        <RadioGroup>
                            <RadioButton value="实习">实习</RadioButton>
                            <RadioButton value="全职">全职</RadioButton>
                        </RadioGroup>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="工作时间"
                    hasFeedback
                >
                    {getFieldDecorator('range', {
                        rules: [{
                            required: true,
                            message: '请选择出生年月'
                        }],
                        initialValue: info.range
                    })(
                        <DatePicker.RangePicker />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="职位"
                    hasFeedback
                >
                    {getFieldDecorator('position', {
                        rules: [{
                            type: 'string',
                            required: true,
                            message: '请输入工作职位'
                        }],
                        initialValue: info.position
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label={(
                        <span>
                         工作内容&nbsp;
                            <Tooltip title="工作时负责了什么内容">
                                <Icon type="question-circle-o" />
                            </Tooltip>
                            </span>
                    )}
                    hasFeedback
                >
                    {getFieldDecorator('content', {
                        rules: [{
                            type: 'string',
                            message: '只能包含中文和英文字符',
                        }, {
                            required: true,
                            message: '请输入姓名',
                            whitespace: true
                        }],
                        initialValue: info.content
                    })(
                        <Input type="textarea" placeholder="工作具体内容" autosize={{ minRows: 2, maxRows: 6 }}/>
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

