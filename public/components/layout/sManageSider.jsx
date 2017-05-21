import {Layout, Menu, Icon} from 'antd';
import React from 'react';
import './sManageSider.scss';
import { Link } from 'react-router-dom';

const SubMenu = Menu.SubMenu;


const TManageSider = () => {
    var menuArr = location.href.split('/');
    var menuKey = menuArr[menuArr.length - 2];
    var selectKey = menuArr[menuArr.length - 1];

    return (
        <Menu
            theme="dark"
            mode="inline"
            defaultOpenKeys={[menuKey]}
            defaultSelectedKeys={[selectKey]}
            className = 'top_nav_sider'
        >
            <SubMenu key="person" title={<span><Icon type="user" />个人信息</span>}>
                <Menu.Item key="personInfo">
                    <Link to="/person/personInfo">基本信息</Link>
                </Menu.Item>
            </SubMenu>
            <SubMenu key="project" title={<span><Icon type="laptop" />项目信息</span>}>
                <Menu.Item key="projectInfo">
                    <Link to="/project/projectInfo">项目信息</Link>
                </Menu.Item>
                <Menu.Item key="projectEdit">
                    <Link to="/project/projectEdit">项目编辑</Link>
                </Menu.Item>
            </SubMenu>
            <SubMenu key="paper" title={<span><Icon type="file" />论文信息</span>}>
                <Menu.Item key="paperInfo">
                    <Link to="/paper/paperInfo">新增论文</Link>
                </Menu.Item>
                <Menu.Item key="paperEdit">
                    <Link to='/paper/paperEdit'>信息修改</Link>
                </Menu.Item>
            </SubMenu>
            <SubMenu key="job" title={<span><Icon type="smile-o" />就业信息</span>}>
                <Menu.Item key="jobAdd">
                    <Link to="/job/jobAdd">添加就业</Link>
                </Menu.Item>
                <Menu.Item key="jobEdit">
                    <Link to="/job/jobEdit">就业管理</Link>
                </Menu.Item>
            </SubMenu>
        </Menu>
    );
};

export default TManageSider;