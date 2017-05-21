import {
    Form,
    Input,
    Tooltip,
    Icon,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    Slider,
    DatePicker,
    Popconfirm,
    Rate,
    InputNumber,
    Upload,
    Tag,
    message} from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';
import config from '../../../common/config';
const FormItem = Form.Item;

class KeywordSelect extends React.Component {

    constructor (props) {
        super(props);
        const value = this.props.value || [];
        this.state = {
            tags: value,
            inputVisible: false,
            inputValue: ''
        };
        this.color = ['red', 'orange', 'green', 'cyan', 'blue', 'purple'];

    }

    componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
            const value = nextProps.value || [];
            this.setState({tags: value});
        }
    }

    handleClose = (removedTag) => {
        const tags = this.state.tags.filter(tag => tag !== removedTag);
        this.setState({ tags });
        this.triggerChange(tags);
    };

    showInput = () => {
        this.setState({ inputVisible: true }, () => this.input.focus());
    };

    handleInputChange = (e) => {
        this.setState({ inputValue: e.target.value });
    };

    handleInputConfirm = () => {
        const state = this.state;
        const inputValue = state.inputValue;
        let tags = state.tags;
        if (inputValue && tags.indexOf(inputValue) === -1) {
            tags = [...tags, inputValue];
        }
        this.setState({
            tags,
            inputVisible: false,
            inputValue: '',
        });
        this.triggerChange(tags);
    };

    triggerChange = (changedValue) => {
        const onChange = this.props.onChange;
        if (onChange) {
            onChange(changedValue);
        }
    };

    saveInputRef = input => this.input = input;

    render() {
        const { tags, inputVisible, inputValue } = this.state;
        return (
            <div>
                {tags.map((tag, index) => {
                    const isLongTag = tag.length > 10;
                    const tagElem = (
                        <Tag key={tag}
                             closable
                             afterClose={() => this.handleClose(tag)}
                             color={this.color[index % this.color.length]}>
                            {isLongTag ? `${tag.slice(0, 10)}...` : tag}
                        </Tag>
                    );
                    return isLongTag ? <Tooltip title={tag}>{tagElem}</Tooltip> : tagElem;
                })}
                {inputVisible && (
                    <Input
                        ref={this.saveInputRef}
                        type="text"
                        size="small"
                        style={{ width: 78 }}
                        value={inputValue}
                        onChange={this.handleInputChange}
                        onBlur={this.handleInputConfirm}
                        onPressEnter={this.handleInputConfirm}
                    />
                )}
                {!inputVisible && <Button size="small" type="dashed" onClick={this.showInput}>创建关键字</Button>}
            </div>
        );
    }
};




class RegistrationForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            info: {}
        }
    };

    componentDidMount () {
        switch (this.props.type) {
            case 'add':
                break;
            case 'modify':
            case 'check':
                this.setState({
                    info: this.standardData(this.props.info)
                });
                break;
            default:
                break;
        }
    }

    paperInfoAdd (data) {
        axios
            .post('/paper/addInfo', { info: data })
            .then(() => {
                message.success('上传成功');
            });
    };

    paperInfoModify (data) {
        data.paperId = this.props.info._id;
        axios
            .post('/paper/modifyInfo', {info: data})
            .then(() => {
                message.success('修改成功');
            });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                switch (this.props.type) {
                    case 'add':
                        this.paperInfoAdd(values);
                        break;
                    case 'modify':
                        this.paperInfoModify(values);
                        break;
                }
            }
        });
    };

    standardData (data) {
        return {
            name: data.name,
            author: data.author,
            summary: data.summary,
            time: moment(data.time ,'YYYY-MM-DD'),
            content: data.content,
            keywords: data.keywords,
            type: data.type,
            reference: data.reference
        }
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 12 },
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
                    offset: 6,
                },
            },
        };
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem
                {...formItemLayout}
                label={(
                    <span>
                         论文题目&nbsp;
                        <Tooltip title="论文全名是什么">
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
                        message: '请输入论文全名',
                        whitespace: true
                    }],
                    initialValue: this.state.info.name
                })(
                    <Input />
                )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label='论文作者'
                    hasFeedback
                >
                    {getFieldDecorator('author', {
                        rules: [{
                            type: 'string',
                            message: '只能包含中文和英文字符',
                        }, {
                            required: true,
                            message: '请输入论文作者',
                            whitespace: true
                        }],
                        initialValue: this.state.info.author
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="论文摘要"
                    hasFeedback
                >
                    {getFieldDecorator('summary',{
                        rules: [{
                            required: true,
                            message: '请输入项目简介'
                        }],
                        initialValue: this.state.info.summary
                    })(
                        <Input type="textarea" placeholder="请输入项目简介" autosize={{ minRows: 2, maxRows: 6 }} />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="论文关键字"
                >
                    {getFieldDecorator('keywords', {
                        rules: [{
                            required: true,
                            message: '请选择论文关键字'
                        }],
                        initialValue: this.state.info.keywords
                    })(
                        <KeywordSelect />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="论文发行时间"
                    hasFeedback
                >
                    {getFieldDecorator('time', {
                        rules: [{
                            required: true,
                            message: '请选择论文发行时间'
                        }],
                        initialValue: this.state.info.time
                    })(
                        <DatePicker />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="论文类别"
                    hasFeedback
                >
                    {getFieldDecorator('type', {
                        rules: [{
                            required: true,
                            message: '请选择论文类别'
                        }],
                        initialValue: this.state.info.type
                    })(
                        <Select placeholder="请选择论文类别">
                            {config.paperType.map((item, index) => {
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
                    label="论文正文"
                    hasFeedback
                >
                    {getFieldDecorator('content',{
                        rules: [{
                            required: true,
                            message: '请输入论文正文'
                        }],
                        initialValue: this.state.info.content
                    })(
                        <Input type="textarea" placeholder="请输入论文正文" autosize={{ minRows: 10, maxRows: 20 }} />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="参考文献"
                    hasFeedback
                >
                    {getFieldDecorator('reference',{
                        rules: [{
                            required: true,
                            message: '请输入论文参考文献'
                        }],
                        initialValue: this.state.info.reference
                    })(
                        <Input type="textarea" placeholder="请输入参考文献" autosize={{ minRows: 2, maxRows: 6 }} />
                    )}
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                    {this.props.type === 'check' ? null : (<Button type="primary" htmlType="submit" size="large">
                        {this.props.type == 'add' ? '新增' : '修改'}
                    </Button>)}
                </FormItem>
            </Form>
        );
    }
};

const ProjectInfo = Form.create()(RegistrationForm);

export default ProjectInfo;