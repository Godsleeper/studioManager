import { Row, Col, Collapse, Icon, Card } from 'antd';
import React from 'react';
import moment from 'moment';

const Panel = Collapse.Panel;


const TeacherInfo = (props) => {
    const info = props.info;
    const editTitle =
        <div className="edit_title">
            <span>个人基本信息</span>
            <span>
                    <Icon type="edit"></Icon>
                    <a href="/tmanage/person/personInfo">修改</a>
                </span>
        </div>;
    return (
        <Collapse bordered={false} defaultActiveKey={['basic']}>
            <Panel header={editTitle} key="basic">
                <Card>
                    <div className="person_info_wrapper">
                        <Row>
                            <Col sm={8} xs={24}>
                                <div className="person_item_wrapper">
                                    <div className="person_title">
                                        <span>
                                            <Icon type="idcard" className="person_title_icon"/>真实姓名
                                        </span>
                                    </div>
                                    <div className="person_content">{info.name}</div>
                                </div>
                                <div className="person_item_wrapper">
                                    <div className="person_title">
                                        <span>
                                            <Icon type="calendar" className="person_title_icon"/>出生日期
                                        </span>
                                    </div>
                                    <div className="person_content">{moment(info.birthday).format('YYYY-MM-DD')}</div>
                                </div>
                            </Col>
                            <Col sm={8} xs={24} >
                                <div className="person_item_wrapper">
                                    <div className="person_title">
                                        <span><Icon type="phone" className="person_title_icon"/>手机号</span>
                                    </div>
                                    <div className="person_content">{info.telphone}</div>
                                </div>
                                <div className="person_item_wrapper">
                                    <div className="person_title">
                                        <span><Icon type="mail" className="person_title_icon"/>电子邮件</span>
                                    </div>
                                    <div className="person_content">{info.email}</div>
                                </div>
                            </Col>
                            <Col sm={8} xs={24} >
                                <div className="person_item_wrapper">
                                    <div className="person_title">
                                        <span><Icon type="man" className="person_title_icon"/>性别</span>
                                    </div>
                                    <div className="person_content">{info.sex}</div>
                                </div>
                                <div className="person_item_wrapper">
                                    <div className="person_title">
                                        <span>
                                            <Icon type="environment" className="person_title_icon"/>居住地
                                        </span>
                                    </div>
                                    <div className="person_content">{info.birthplace}</div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Card>
            </Panel>
            <Panel header='学术基本信息' key="education" >
                <Card>
                    <div className="person_info_wrapper">
                        <Row>
                            <Col sm={8} xs={24}>
                                <div className="person_item_wrapper">
                                    <div className="person_title">
                                        <span><Icon type="calendar" className="person_title_icon"/>工作年限</span>
                                    </div>
                                    <div className="person_content">{info.workYear}</div>
                                </div>
                                <div className="person_item_wrapper">
                                    <div className="person_title">
                                        <span><Icon type="filter" className="person_title_icon"/>实验室</span>
                                    </div>
                                    <div className="person_content">{info.studio}</div>
                                </div>
                            </Col>
                            <Col sm={8} xs={24} >
                                <div className="person_item_wrapper">
                                    <div className="person_title">
                                        <span><Icon type="user" className="person_title_icon"/>职位</span>
                                    </div>
                                    <div className="person_content">{info.position}</div>
                                </div>
                                <div className="person_item_wrapper">
                                    <div className="person_title">
                                        <span><Icon type="environment" className="person_title_icon"/>实验室地址</span>
                                    </div>
                                    <div className="person_content">{info.address}</div>
                                </div>
                            </Col>
                            <Col sm={8} xs={24} >
                                <div className="person_item_wrapper">
                                    <div className="person_title">
                                        <span><Icon type="phone" className="person_title_icon"/>通讯地址</span>
                                    </div>
                                    <div className="person_content">{info.phone}</div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Card>
            </Panel>
        </Collapse>
    );
};

export default TeacherInfo;