import { Row, Col, Collapse, Icon, Card } from 'antd';
import React from 'react';
import moment from 'moment';

const Panel = Collapse.Panel;



const StudentInfo = (props) => {
    var info = props.info;
    const editTitle =
        <div className="edit_title">
            <span>个人基本信息</span>
            <span>
                    <Icon type="edit"></Icon>
                    <a href="/smanage/person/personInfo">修改</a>
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
                                            <Icon type="user" className="person_title_icon"/>学历
                                        </span>
                                    </div>
                                    <div className="person_content">{info.degree}</div>
                                </div>
                                <div className="person_item_wrapper">
                                    <div className="person_title">
                                        <span>
                                            <Icon type="calendar" className="person_title_icon"/>出生年月
                                        </span>
                                    </div>
                                    <div className="person_content">{moment(info.birthday).format('YYYY-MM-DD')}</div>
                                </div>
                                <div className="person_item_wrapper">
                                    <div className="person_title">
                                        <span>
                                            <Icon type="smile-o" className="person_title_icon"/>微信
                                        </span>
                                    </div>
                                    <div className="person_content">{info.wechat}</div>
                                </div>
                            </Col>
                            <Col sm={8} xs={24} >
                                <div className="person_item_wrapper">
                                    <div className="person_title">
                                        <span><Icon type="phone" className="person_title_icon"/>年龄</span>
                                    </div>
                                    <div className="person_content">{info.age}</div>
                                </div>
                                <div className="person_item_wrapper">
                                    <div className="person_title">
                                        <span><Icon type="mail" className="person_title_icon"/>身份证号</span>
                                    </div>
                                    <div className="person_content">{info.identity}</div>
                                </div>
                                <div className="person_item_wrapper">
                                    <div className="person_title">
                                        <span><Icon type="mobile" className="person_title_icon"/>手机号</span>
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
                                <div className="person_item_wrapper">
                                    <div className="person_title">
                                        <span>
                                            <Icon type="smile-o" className="person_title_icon"/>qq
                                        </span>
                                    </div>
                                    <div className="person_content">{info.qq}</div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Card>
            </Panel>
        </Collapse>
    );
};

export default StudentInfo;