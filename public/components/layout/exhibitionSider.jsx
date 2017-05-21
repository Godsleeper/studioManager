import {Layout, Menu, Icon} from 'antd';
import React from 'react';

import { Link } from 'react-router-dom';

import './exhibitionSider.scss';

const SubMenu = Menu.SubMenu;

const TExhibitionSider = () => {
    var menuArr = location.href.split('/');
    var menuKey = menuArr[menuArr.length - 2];
    var selectKey = menuArr[menuArr.length - 1];

    return (
        <Menu
            mode="inline"
            defaultSelectedKeys={[selectKey]}
            defaultOpenKeys={[menuKey]}
            theme="dark"
            className="side_nav_menu"
        >
            <SubMenu key="person" title={<span><Icon type="user" />个人信息</span>}>
                <Menu.Item key="personInfo">
                    <Link to="/person/personInfo">个人资料</Link>
                </Menu.Item>
            </SubMenu>
            <SubMenu key="project" title={<span><Icon type="laptop" />项目信息</span>}>
                <Menu.Item key="projectAll">
                    <Link to="/project/projectAll">项目一览</Link>
                </Menu.Item>
            </SubMenu>
            <SubMenu key="paper" title={<span><Icon type="file" />论文信息</span>}>
                <Menu.Item key="paperAll">
                    <Link to="/paper/paperAll">论文一览</Link>
                </Menu.Item>
            </SubMenu>
            <SubMenu key="teacher" title={<span><Icon type="smile-o" />教师信息</span>}>
                <Menu.Item key="teacherAll">
                    <Link to='/teacher/teacherAll' >教师一览</Link>
                </Menu.Item>
                <Menu.Item key="teacherCal">
                    <Link to='/teacher/teacherCal' >数据统计</Link>
                </Menu.Item>
            </SubMenu>
            <SubMenu key="student" title={<span><Icon type="team" />学生信息</span>}>
                <Menu.Item key="studentAll">
                    <Link to='/student/studentAll' >学生一览</Link>
                </Menu.Item>
                <Menu.Item key="studentCal">
                    <Link to='/student/studentCal' >数据统计</Link>
                </Menu.Item>
            </SubMenu>
        </Menu>
    );
};

export default TExhibitionSider;