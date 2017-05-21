import {Tabs, Form, Icon, Input, Button, Checkbox, Select } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom';
import WrappedNormalSignInForm from '../components/login/signIn.jsx';
import WrappedNormalSignUpForm from '../components/login/signUp.jsx';
import 'antd/dist/antd.css';
import './login.scss';

const LoginTabs = () => {
    const TabPane = Tabs.TabPane;
    return (
        <Tabs defaultActiveKey="signIn"
              className='login_tabs'
              tabPosition="top">
            <TabPane tab={<span><Icon type="user" />账号密码登录</span>}
                     key="signIn">
                <div className="login_panel">
                    <WrappedNormalSignInForm />
                </div>
            </TabPane>
            <TabPane tab={<span><Icon type="user" />注册新账号</span>} key="signUp">
                <div className="login_panel login_panel_signup">
                    <WrappedNormalSignUpForm />
                </div>
            </TabPane>
        </Tabs>
    );
};

const LoginPage = () => {
    return (
        <div className="login_wrapper">
            <div className="login_head">
                <div className="login_head_logo"><a href="/">SEUStudio</a></div>
            </div>
            <div className="login_content_wrapper">
                <LoginTabs />
            </div>
        </div>
    );
};

const ROOT = document.getElementById('loginRoot');
ReactDOM.render(<LoginPage />, ROOT);



