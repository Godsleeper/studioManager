import {Form, Icon, Input, Button, Select, message } from 'antd';
import React from 'react';
import './signUp.scss';
import axios from 'axios';

class NormalSignUpForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            confirmDirty: false
        };
    }
    //  发送用户名密码
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.signUp(values);
            }
        });
    };
    signUp (values) {
        let user = {
            userName: values.userName,
            password: values.password,
            role: values.role
        };
        axios.post('/user/signUp', { user: user })
            .then((res) => {
                switch (res.data.status) {
                    case '0':
                        message.error('您输入的用户名已被注册');
                        break;
                    case '1':
                        message.success('注册成功');
                        setTimeout(() => {
                            window.location.pathname = '/login';
                        }, 1000);
                        break;
                }
            });
    };
    //  确认密码的失焦事件
    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    //  确认密码的逻辑
    checkConfirm = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('两次输入的密码不一致！');
        } else {
            callback();
        }
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const Option = Select.Option;
        const FormItem = Form.Item;
        return (
            <Form onSubmit={this.handleSubmit} className="login_form">
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{
                            required: true,
                            message: '请输入正确的用户名',
                            whitespace: true,
                            pattern: /\w{6,14}/}],
                    })(
                        <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />}
                               placeholder="用户名" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{
                            required: true,
                            message: '请输入正确的密码',
                            whitespace: true,
                            pattern: /\w{6,14}/}],
                    })(
                        <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
                               type="password"
                               placeholder="密码" />
                    )}
                </FormItem>
                <FormItem>
                    {
                        getFieldDecorator('confirm', {
                            rules: [{
                                required: true,
                                message: '请确认密码' },
                                {
                                    validator: this.checkConfirm
                                }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
                                   type="password"
                                   placeholder="确认密码"
                                   onBlur={this.handleConfirmBlur}
                            />
                        )}
                </FormItem>
                <FormItem
                    label="身份"
                    labelCol={{ lg: 4, xs: 6}}
                    wrapperCol={{ lg: 20, xs: 18}}
                >
                    {getFieldDecorator('role', {
                        rules: [{ required: true, message: '请选择你的身份' }],
                    })(
                        <Select placeholder="身份">
                            <Option value="teacher">教职人员</Option>
                            <Option value="student">在校学生</Option>
                        </Select>
                    )}
                </FormItem>
                <FormItem>
                    <Button type="primary"
                            htmlType="submit"
                            className="login_form_button">
                        注册
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

const WrappedNormalSignUpForm = Form.create()(NormalSignUpForm);
export default WrappedNormalSignUpForm;
