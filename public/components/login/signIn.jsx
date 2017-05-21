import {Form, Icon, Input, Button, Checkbox, Select, message} from 'antd';
import React from 'react';
import axios from 'axios';
import './signIn.scss';

class NormalSignInForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.signIn(values);
            }
        });
    };

    signIn (values) {
        let user = {
            userName: values.userName,
            password: values.password,
        };
        axios.post('/user/signIn', { user: user })
            .then((res) => {
                switch (res.data.status) {
                    case 'NotFound':
                        message.error('没有找到该用户，请先注册');
                        break;
                    case 'Success':
                        message.success('欢迎你');
                        if (res.data.role === 'teacher') {
                            setTimeout(() => {
                                window.location.pathname = '/tmanage';
                            }, 1000);
                        } else {
                            setTimeout(() => {
                                window.location.pathname = '/smanage';
                            }, 1000);
                        }
                        break;
                    case 'Fail':
                        message.error('密码错误，请重新输入');
                        break;
                }
            });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const FormItem = Form.Item;
        return (
            <Form onSubmit={this.handleSubmit} className="login_form">
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{
                            required: true,
                            message: '请输入正确的用户名',
                            whitespace: true,
                            pattern: /\w{6,14}/ }],
                    })(
                        <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{
                            required: true,
                            message: '请输入正确的密码',
                            whitespace: true,
                            pattern: /\w{6,14}/ }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <Button type="primary" htmlType="submit" className="login_form_button">
                        登录
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

const WrappedNormalSignInForm = Form.create()(NormalSignInForm);
export default WrappedNormalSignInForm;
