import {Layout, Menu, Icon} from 'antd';
import React from 'react';
import './topNav.scss';

const { Header } = Layout;

const TopNav = (props) => {
    var selectedKey =  props.selectKey;
    var {name, role} = props.data;
    var manageHref = '';
    if (role === 'student') {
        manageHref = '/sManage';
    }else {
        manageHref = '/tManage';
    }
    return(
        <Header className='head_wrapper'>
            <div className="head_logo" ><a href="/">SEUStudio</a></div>
            <Menu
              theme='light'
              mode="horizontal"
              defaultSelectedKeys={[selectedKey]}
              className="head_nav_menu"
            >
                <Menu.Item className='head_nav_item' key="userName">欢迎你 {name}</Menu.Item>
                <Menu.Item className='head_nav_item' key="manage">
                    <a href={manageHref}>信息管理</a>
                </Menu.Item>
                <Menu.Item className='head_nav_item' key="exhibition">
                    <a href='/exhibition'>数据统计</a>
                </Menu.Item>
                <Menu.Item className='head_nav_item' key="logout">
                    <a href="/user/logout">退出登录</a>
                </Menu.Item>
            </Menu>
        </Header>
    );
};

export default TopNav;