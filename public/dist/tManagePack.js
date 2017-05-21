webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(32);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRouterDom = __webpack_require__(178);

	var _tManage = __webpack_require__(1052);

	var _tManage2 = _interopRequireDefault(_tManage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ROOT = document.getElementById('tmanageRoot');

	_reactDom2.default.render(_react2.default.createElement(
	    _reactRouterDom.BrowserRouter,
	    { basename: '/tmanage' },
	    _react2.default.createElement(_reactRouterDom.Route, { path: '/', component: _tManage2.default })
	), ROOT);

/***/ },

/***/ 1010:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _antd = __webpack_require__(221);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(1011);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Header = _antd.Layout.Header;


	var TopNav = function TopNav(props) {
	    var selectedKey = props.selectKey;
	    var _props$data = props.data,
	        name = _props$data.name,
	        role = _props$data.role;

	    var manageHref = '';
	    if (role === 'student') {
	        manageHref = '/sManage';
	    } else {
	        manageHref = '/tManage';
	    }
	    return _react2.default.createElement(
	        Header,
	        { className: 'head_wrapper' },
	        _react2.default.createElement(
	            'div',
	            { className: 'head_logo' },
	            _react2.default.createElement(
	                'a',
	                { href: '/' },
	                'SEUStudio'
	            )
	        ),
	        _react2.default.createElement(
	            _antd.Menu,
	            {
	                theme: 'light',
	                mode: 'horizontal',
	                defaultSelectedKeys: [selectedKey],
	                className: 'head_nav_menu'
	            },
	            _react2.default.createElement(
	                _antd.Menu.Item,
	                { className: 'head_nav_item', key: 'userName' },
	                '\u6B22\u8FCE\u4F60 ',
	                name
	            ),
	            _react2.default.createElement(
	                _antd.Menu.Item,
	                { className: 'head_nav_item', key: 'manage' },
	                _react2.default.createElement(
	                    'a',
	                    { href: manageHref },
	                    '\u4FE1\u606F\u7BA1\u7406'
	                )
	            ),
	            _react2.default.createElement(
	                _antd.Menu.Item,
	                { className: 'head_nav_item', key: 'exhibition' },
	                _react2.default.createElement(
	                    'a',
	                    { href: '/exhibition' },
	                    '\u6570\u636E\u7EDF\u8BA1'
	                )
	            ),
	            _react2.default.createElement(
	                _antd.Menu.Item,
	                { className: 'head_nav_item', key: 'logout' },
	                _react2.default.createElement(
	                    'a',
	                    { href: '/user/logout' },
	                    '\u9000\u51FA\u767B\u5F55'
	                )
	            )
	        )
	    );
	};

	exports.default = TopNav;

/***/ },

/***/ 1011:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(1012);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(1014)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./topNav.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./topNav.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 1012:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1013)();
	// imports


	// module
	exports.push([module.id, "@media screen and (max-width: 640px) {\n  .head_wrapper {\n    background: #fff !important;\n    padding: 0 10px !important;\n    justify-content: flex-end;\n    overflow: hidden; }\n    .head_wrapper .head_logo {\n      display: none; }\n    .head_wrapper .head_nav_menu {\n      height: 64px;\n      display: flex;\n      justify-content: space-around; }\n      .head_wrapper .head_nav_menu .head_nav_item {\n        height: 100%;\n        font-size: 12px !important;\n        line-height: 64px;\n        padding: 0 10px !important; } }\n\n@media screen and (min-width: 640px) {\n  .head_wrapper {\n    height: 64px;\n    line-height: 64px;\n    background: #fff !important;\n    display: flex;\n    justify-content: space-between;\n    overflow: hidden; }\n    .head_wrapper .head_logo {\n      height: 64px;\n      font-size: 20px;\n      color: #404040; }\n    .head_wrapper .head_nav_menu {\n      height: 64px; }\n      .head_wrapper .head_nav_menu .head_nav_item {\n        height: 100%;\n        line-height: 64px; } }\n", ""]);

	// exports


/***/ },

/***/ 1040:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var config = {
	    province: ['北京市', '天津市', '上海市', '重庆市', '河北省', '山西省', '辽宁省', '吉林省', '黑龙江省', '江苏省', '浙江省', '安徽省', '福建省', '江西省', '山东省', '河南省', '湖北省', '湖南省', '广东省', '海南省', '四川省', '贵州省', '云南省', '陕西省', '甘肃省', '青海省', '台湾省', '内蒙古自治区', '广西壮族自治区', '西藏自治区', '宁夏回族自治区', '新疆维吾尔自治区', '香港特别行政区', '澳门特别行政区'],
	    teacherPosition: ['讲师', '副教授', '教授', '博士生导师'],
	    studentPosition: ['博士生', '硕士生', '本科生'],
	    studio: ['高性能网络', 'XML数据库技术', '网络行为学与新一代网络管理技术', '中间件', '应用软件分析与测试工具', '语义Web', '网格计算', '数据网格', '网络教育', '协同设计与网络化制造', '地理信息系统新技术', '信息安全监察技术', '影像科学与技术'],
	    paperType: ['期刊文章', '学位论文', '论文集', '报告', '报纸文章']
	};

	exports.default = config;

/***/ },

/***/ 1041:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _antd = __webpack_require__(221);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouterDom = __webpack_require__(178);

	var _moment = __webpack_require__(414);

	var _moment2 = _interopRequireDefault(_moment);

	var _axios = __webpack_require__(981);

	var _axios2 = _interopRequireDefault(_axios);

	var _rateCircle = __webpack_require__(1042);

	var _rateCircle2 = _interopRequireDefault(_rateCircle);

	var _config = __webpack_require__(1040);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FormItem = _antd.Form.Item;
	var Option = _antd.Select.Option;
	var RangePicker = _antd.DatePicker.RangePicker;

	var RegistrationForm = function (_React$Component) {
	    _inherits(RegistrationForm, _React$Component);

	    function RegistrationForm(props) {
	        _classCallCheck(this, RegistrationForm);

	        var _this = _possibleConstructorReturn(this, (RegistrationForm.__proto__ || Object.getPrototypeOf(RegistrationForm)).call(this, props));

	        _this.handleSubmit = function (e) {
	            e.preventDefault();
	            _this.props.form.validateFieldsAndScroll(function (err, values) {
	                if (!err) {
	                    switch (_this.props.type) {
	                        case 'add':
	                            _this.addProjectInfo(values);
	                            break;
	                        case 'modify':
	                            _this.modifyProjectInfo(values);
	                            break;
	                    }
	                }
	            });
	        };

	        _this.state = {
	            info: {},
	            teachers: [],
	            students: []
	        };
	        return _this;
	    }

	    _createClass(RegistrationForm, [{
	        key: 'addProjectInfo',
	        value: function addProjectInfo(data) {
	            var info = Object.assign({}, data, {
	                rate: data.rate + '',
	                comment: data.comment + '',
	                level: data.level + ''
	            });
	            _axios2.default.post('/project/addInfo', { info: info }).then(function () {
	                _antd.message.success('项目新增成功');
	            });
	        }
	    }, {
	        key: 'modifyProjectInfo',
	        value: function modifyProjectInfo(data) {
	            var info = Object.assign({}, data, {
	                rate: data.rate + '',
	                comment: data.comment + '',
	                level: data.level + '',
	                projectId: this.props.info._id
	            });
	            _axios2.default.post('/project/modifyInfo', { info: info }).then(function () {
	                _antd.message.success('修改成功');
	            });
	        }
	    }, {
	        key: 'personInfoRequest',
	        value: function personInfoRequest() {
	            var _this2 = this;

	            _axios2.default.get('/teacher/personInfoAll').then(function (res) {
	                _this2.setState({
	                    teachers: res.data.info
	                });
	            });
	            _axios2.default.get('/student/personInfoAll').then(function (res) {
	                _this2.setState({
	                    students: res.data.info
	                });
	            });
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.personInfoRequest();
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
	    }, {
	        key: 'standardData',
	        value: function standardData(data) {
	            var time = [];
	            data.time.forEach(function (item) {
	                time.push((0, _moment2.default)(item, 'YYYY-MM-DD'));
	            });
	            return {
	                name: data.name,
	                owner: data.owner._id,
	                summary: data.summary,
	                time: time,
	                studio: data.studio,
	                rate: ~~data.rate,
	                level: ~~data.level,
	                comment: ~~data.comment,
	                amount: ~~data.amount,
	                staff: data.staff
	            };
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var getFieldDecorator = this.props.form.getFieldDecorator;

	            var formItemLayout = {
	                labelCol: {
	                    xs: { span: 24 },
	                    sm: { span: 6 }
	                },
	                wrapperCol: {
	                    xs: { span: 24 },
	                    sm: { span: 10 }
	                }
	            };
	            var tailFormItemLayout = {
	                wrapperCol: {
	                    xs: {
	                        span: 24,
	                        offset: 0
	                    },
	                    sm: {
	                        span: 14,
	                        offset: 6
	                    }
	                }
	            };
	            return _react2.default.createElement(
	                _antd.Form,
	                { onSubmit: this.handleSubmit },
	                _react2.default.createElement(
	                    FormItem,
	                    _extends({}, formItemLayout, {
	                        label: _react2.default.createElement(
	                            'span',
	                            null,
	                            '\u9879\u76EE\u540D\u79F0\xA0',
	                            _react2.default.createElement(
	                                _antd.Tooltip,
	                                { title: '\u8981\u505A\u4EC0\u4E48\u9879\u76EE' },
	                                _react2.default.createElement(_antd.Icon, { type: 'question-circle-o' })
	                            )
	                        ),
	                        hasFeedback: true
	                    }),
	                    getFieldDecorator('name', {
	                        rules: [{
	                            type: 'string',
	                            message: '只能包含中文和英文字符'
	                        }, {
	                            required: true,
	                            message: '请输入项目名称',
	                            whitespace: true
	                        }],
	                        initialValue: this.state.info.name
	                    })(_react2.default.createElement(_antd.Input, null))
	                ),
	                _react2.default.createElement(
	                    FormItem,
	                    _extends({}, formItemLayout, {
	                        label: '\u9879\u76EE\u7B80\u4ECB',
	                        hasFeedback: true
	                    }),
	                    getFieldDecorator('summary', {
	                        rules: [{
	                            required: true,
	                            message: '请输入项目简介'
	                        }],
	                        initialValue: this.state.info.summary
	                    })(_react2.default.createElement(_antd.Input, { type: 'textarea', placeholder: '\u8BF7\u8F93\u5165\u9879\u76EE\u7B80\u4ECB', autosize: { minRows: 2, maxRows: 6 } }))
	                ),
	                _react2.default.createElement(
	                    FormItem,
	                    _extends({}, formItemLayout, {
	                        label: '\u9879\u76EE\u8D1F\u8D23\u6559\u5E08',
	                        hasFeedback: true
	                    }),
	                    getFieldDecorator('owner', {
	                        rules: [{
	                            required: true,
	                            message: '请输入该项目负责老师'
	                        }],
	                        initialValue: this.state.info.owner
	                    })(_react2.default.createElement(
	                        _antd.Select,
	                        {
	                            searchPlaceholder: '\u6807\u7B7E\u6A21\u5F0F'
	                        },
	                        this.state.teachers.map(function (item, index) {
	                            return _react2.default.createElement(
	                                Option,
	                                {
	                                    value: item._id,
	                                    key: index },
	                                '\u3010',
	                                item.position,
	                                '\u3011 ',
	                                item.name
	                            );
	                        })
	                    ))
	                ),
	                _react2.default.createElement(
	                    FormItem,
	                    _extends({}, formItemLayout, {
	                        label: '\u9879\u76EE\u8D77\u59CB\u65F6\u95F4',
	                        hasFeedback: true
	                    }),
	                    getFieldDecorator('time', {
	                        rules: [{
	                            required: true,
	                            message: '请选择项目起始时间'
	                        }],
	                        initialValue: this.state.info.time
	                    })(_react2.default.createElement(RangePicker, null))
	                ),
	                _react2.default.createElement(
	                    FormItem,
	                    _extends({}, formItemLayout, {
	                        label: '\u9879\u76EE\u5B9E\u9A8C\u5BA4',
	                        hasFeedback: true
	                    }),
	                    getFieldDecorator('studio', {
	                        rules: [{
	                            required: true,
	                            message: '请选择项目实验室'
	                        }],
	                        initialValue: this.state.info.studio
	                    })(_react2.default.createElement(
	                        _antd.Select,
	                        { placeholder: '\u8BF7\u9009\u62E9\u9879\u76EE\u6240\u5C5E\u5B9E\u9A8C\u5BA4' },
	                        _config2.default.studio.map(function (item, index) {
	                            return _react2.default.createElement(
	                                Option,
	                                { value: item, key: index },
	                                item
	                            );
	                        })
	                    ))
	                ),
	                _react2.default.createElement(
	                    FormItem,
	                    _extends({}, formItemLayout, {
	                        label: '\u9879\u76EE\u8FDB\u5EA6'
	                    }),
	                    getFieldDecorator('rate', {
	                        rules: [{
	                            required: true,
	                            message: '滑动选择项目进度'
	                        }],
	                        initialValue: this.state.info.rate,
	                        valuePropName: 'circle'
	                    })(_react2.default.createElement(_rateCircle2.default, null))
	                ),
	                _react2.default.createElement(
	                    FormItem,
	                    _extends({}, formItemLayout, {
	                        label: '\u9879\u76EE\u8BC4\u4EF7',
	                        hasFeedback: true
	                    }),
	                    getFieldDecorator('comment', {
	                        rules: [{
	                            required: true,
	                            message: '请对项目进行评估'
	                        }],
	                        initialValue: this.state.info.comment
	                    })(_react2.default.createElement(_antd.Rate, { character: _react2.default.createElement(_antd.Icon, { type: 'folder-open' }) }))
	                ),
	                _react2.default.createElement(
	                    FormItem,
	                    _extends({}, formItemLayout, {
	                        label: '\u9879\u76EE\u7EA7\u522B'
	                    }),
	                    getFieldDecorator('level', {
	                        rules: [{
	                            required: true,
	                            message: '请对项目进行评估'
	                        }],
	                        initialValue: this.state.info.level
	                    })(_react2.default.createElement(_antd.Slider, { marks: { 10: '普通', 30: '院级', 50: '校级', 70: '省级', 90: '国家级' },
	                        min: 0,
	                        max: 100,
	                        step: null,
	                        tipFormatter: null }))
	                ),
	                _react2.default.createElement(
	                    FormItem,
	                    _extends({}, formItemLayout, {
	                        label: '\u9879\u76EE\u4EBA\u6570',
	                        hasFeedback: true
	                    }),
	                    getFieldDecorator('amount', {
	                        rules: [{
	                            required: true,
	                            message: '请输入该项目参与人数'
	                        }],
	                        initialValue: this.state.info.amount
	                    })(_react2.default.createElement(_antd.InputNumber, { min: 1, max: 20 }))
	                ),
	                _react2.default.createElement(
	                    FormItem,
	                    _extends({}, formItemLayout, {
	                        label: '\u53C2\u4E0E\u9879\u76EE\u5B66\u751F',
	                        hasFeedback: true
	                    }),
	                    getFieldDecorator('staff', {
	                        rules: [{
	                            required: true,
	                            message: '请输入该项目参与学生'
	                        }],
	                        initialValue: this.state.info.staff
	                    })(_react2.default.createElement(
	                        _antd.Select,
	                        {
	                            mode: 'tags',
	                            searchPlaceholder: '\u6807\u7B7E\u6A21\u5F0F'
	                        },
	                        this.state.students.map(function (item, index) {
	                            return _react2.default.createElement(
	                                Option,
	                                {
	                                    value: item._id,
	                                    key: index },
	                                '\u3010',
	                                item.degree,
	                                '\u3011 ',
	                                item.name
	                            );
	                        })
	                    ))
	                ),
	                _react2.default.createElement(
	                    FormItem,
	                    tailFormItemLayout,
	                    this.props.type == 'check' ? null : _react2.default.createElement(
	                        _antd.Button,
	                        { type: 'primary', htmlType: 'submit', size: 'large' },
	                        this.props.type == 'add' ? '新增' : '修改'
	                    )
	                )
	            );
	        }
	    }]);

	    return RegistrationForm;
	}(_react2.default.Component);

	;

	var ProjectInfo = _antd.Form.create()(RegistrationForm);

	exports.default = ProjectInfo;

/***/ },

/***/ 1042:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _antd = __webpack_require__(221);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(1043);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ButtonGroup = _antd.Button.Group;

	var Promption = function Promption(rate) {
	    if (rate <= 20) {
	        return _react2.default.createElement(
	            'span',
	            { style: { color: '#f04134', marginLeft: '5px' } },
	            '\u8D77\u6B65\u9636\u6BB5'
	        );
	    } else if (rate <= 90) {
	        return _react2.default.createElement(
	            'span',
	            { style: { color: '#49a9ee', marginLeft: '5px' } },
	            '\u6B63\u5728\u8FDB\u884C'
	        );
	    } else {
	        return _react2.default.createElement(
	            'span',
	            { style: { color: '#00a854', marginLeft: '5px' } },
	            '\u5DF2\u5B8C\u6210'
	        );
	    }
	};

	var RateCircle = function (_React$Component) {
	    _inherits(RateCircle, _React$Component);

	    function RateCircle(props) {
	        _classCallCheck(this, RateCircle);

	        var _this = _possibleConstructorReturn(this, (RateCircle.__proto__ || Object.getPrototypeOf(RateCircle)).call(this, props));

	        _initialiseProps.call(_this);

	        var percent = _this.props.circle || 0;
	        _this.state = {
	            percent: percent
	        };
	        return _this;
	    }

	    _createClass(RateCircle, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if ('circle' in nextProps) {
	                var percent = nextProps.circle || 0;
	                this.setState({ percent: percent });
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var promption = Promption(this.state.percent);
	            return _react2.default.createElement(
	                'div',
	                { className: 'rate_wrapper' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'circle_wrapper' },
	                    _react2.default.createElement(_antd.Progress, { type: 'circle', percent: this.state.percent }),
	                    _react2.default.createElement(
	                        'div',
	                        null,
	                        promption
	                    )
	                ),
	                _react2.default.createElement(
	                    ButtonGroup,
	                    { className: 'btn_wrapper' },
	                    _react2.default.createElement(_antd.Button, { onClick: this.decline, icon: 'minus' }),
	                    _react2.default.createElement(_antd.Button, { onClick: this.increase, icon: 'plus' })
	                )
	            );
	        }
	    }]);

	    return RateCircle;
	}(_react2.default.Component);

	var _initialiseProps = function _initialiseProps() {
	    var _this2 = this;

	    this.increase = function () {
	        var percent = _this2.state.percent + 10;
	        if (percent > 100) {
	            percent = 100;
	        }
	        _this2.setState({ percent: percent });
	        _this2.triggerChange(percent);
	    };

	    this.decline = function () {
	        var percent = _this2.state.percent - 10;
	        if (percent < 0) {
	            percent = 0;
	        }
	        _this2.setState({ percent: percent });
	        _this2.triggerChange(percent);
	    };

	    this.triggerChange = function (changedValue) {
	        var onChange = _this2.props.onChange;
	        if (onChange) {
	            onChange(changedValue);
	        }
	    };
	};

	exports.default = RateCircle;

/***/ },

/***/ 1043:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(1044);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(1014)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./rateCircle.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./rateCircle.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 1044:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1013)();
	// imports


	// module
	exports.push([module.id, ".rate_wrapper {\n  display: flex;\n  justify-content: flex-start; }\n  .rate_wrapper .btn_wrapper {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    margin-left: 10px; }\n  .rate_wrapper .circle_wrapper {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center; }\n", ""]);

	// exports


/***/ },

/***/ 1045:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _antd = __webpack_require__(221);

	var _reactRouterDom = __webpack_require__(178);

	var _projectInfo = __webpack_require__(1041);

	var _projectInfo2 = _interopRequireDefault(_projectInfo);

	var _axios = __webpack_require__(981);

	var _axios2 = _interopRequireDefault(_axios);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var EditButton = function (_React$Component) {
	    _inherits(EditButton, _React$Component);

	    function EditButton(props) {
	        _classCallCheck(this, EditButton);

	        var _this = _possibleConstructorReturn(this, (EditButton.__proto__ || Object.getPrototypeOf(EditButton)).call(this, props));

	        _this.showModal = function () {
	            _this.setState({
	                visible: true
	            });
	        };

	        _this.handleCancel = function () {
	            _this.setState({
	                visible: false
	            });
	        };

	        _this.state = {
	            visible: false
	        };
	        return _this;
	    }

	    _createClass(EditButton, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'a',
	                    { onClick: this.showModal },
	                    '\u67E5\u770B/\u7F16\u8F91'
	                ),
	                _react2.default.createElement(
	                    _antd.Modal,
	                    { title: '\u9879\u76EE\u4FE1\u606F\u7F16\u8F91',
	                        visible: this.state.visible,
	                        footer: _react2.default.createElement(
	                            _antd.Button,
	                            { size: 'large', onClick: this.handleCancel },
	                            '\u53D6\u6D88'
	                        ),
	                        closable: false
	                    },
	                    _react2.default.createElement(_projectInfo2.default, { type: 'modify', info: this.props.info })
	                )
	            );
	        }
	    }]);

	    return EditButton;
	}(_react2.default.Component);

	var EditableTable = function (_React$Component2) {
	    _inherits(EditableTable, _React$Component2);

	    function EditableTable(props) {
	        _classCallCheck(this, EditableTable);

	        // 表格的构建
	        var _this2 = _possibleConstructorReturn(this, (EditableTable.__proto__ || Object.getPrototypeOf(EditableTable)).call(this, props));

	        _this2.onDelete = function (index, id) {
	            var dataSource = [].concat(_toConsumableArray(_this2.state.dataSource));
	            dataSource.splice(index, 1);
	            _this2.setState({ dataSource: dataSource });
	            _axios2.default.delete('/project/projectRemove?projectId=' + id);
	        };

	        _this2.columns = [{
	            title: '项目名',
	            dataIndex: 'name'
	        }, {
	            title: '项目负责人',
	            dataIndex: 'owner.name'
	        }, {
	            title: '项目实验室',
	            dataIndex: 'studio'
	        }, {
	            title: '编辑',
	            dataIndex: 'edit',
	            render: function render(text, record) {
	                return _react2.default.createElement(EditButton, { info: record });
	            }
	        }, {
	            title: '删除',
	            dataIndex: 'operation',
	            render: function render(text, record, index) {
	                return _react2.default.createElement(
	                    _antd.Popconfirm,
	                    {
	                        title: '\u786E\u8BA4\u8981\u5220\u9664\u5417',
	                        onConfirm: function onConfirm() {
	                            return _this2.onDelete(index, record._id);
	                        } },
	                    _react2.default.createElement(
	                        'a',
	                        { href: '#' },
	                        '\u5220\u9664'
	                    )
	                );
	            }
	        }];

	        _this2.state = {
	            dataSource: [],
	            loading: true
	        };
	        return _this2;
	    }

	    _createClass(EditableTable, [{
	        key: 'projectInfoRequest',
	        value: function projectInfoRequest() {
	            var _this3 = this;

	            _axios2.default.get('/project/getAllInfo').then(function (res) {
	                res.data.projects.forEach(function (item, index) {
	                    item.key = index;
	                });
	                _this3.setState({
	                    dataSource: res.data.projects,
	                    loading: false
	                });
	            });
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.projectInfoRequest();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var dataSource = this.state.dataSource;

	            var columns = this.columns;
	            return _react2.default.createElement(_antd.Table, { bordered: true,
	                dataSource: dataSource,
	                columns: columns,
	                loading: this.state.loading
	            });
	        }
	    }]);

	    return EditableTable;
	}(_react2.default.Component);

	exports.default = EditableTable;

/***/ },

/***/ 1046:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _antd = __webpack_require__(221);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouterDom = __webpack_require__(178);

	var _moment = __webpack_require__(414);

	var _moment2 = _interopRequireDefault(_moment);

	var _axios = __webpack_require__(981);

	var _axios2 = _interopRequireDefault(_axios);

	var _config = __webpack_require__(1040);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FormItem = _antd.Form.Item;

	var KeywordSelect = function (_React$Component) {
	    _inherits(KeywordSelect, _React$Component);

	    function KeywordSelect(props) {
	        _classCallCheck(this, KeywordSelect);

	        var _this = _possibleConstructorReturn(this, (KeywordSelect.__proto__ || Object.getPrototypeOf(KeywordSelect)).call(this, props));

	        _this.handleClose = function (removedTag) {
	            var tags = _this.state.tags.filter(function (tag) {
	                return tag !== removedTag;
	            });
	            _this.setState({ tags: tags });
	            _this.triggerChange(tags);
	        };

	        _this.showInput = function () {
	            _this.setState({ inputVisible: true }, function () {
	                return _this.input.focus();
	            });
	        };

	        _this.handleInputChange = function (e) {
	            _this.setState({ inputValue: e.target.value });
	        };

	        _this.handleInputConfirm = function () {
	            var state = _this.state;
	            var inputValue = state.inputValue;
	            var tags = state.tags;
	            if (inputValue && tags.indexOf(inputValue) === -1) {
	                tags = [].concat(_toConsumableArray(tags), [inputValue]);
	            }
	            _this.setState({
	                tags: tags,
	                inputVisible: false,
	                inputValue: ''
	            });
	            _this.triggerChange(tags);
	        };

	        _this.triggerChange = function (changedValue) {
	            var onChange = _this.props.onChange;
	            if (onChange) {
	                onChange(changedValue);
	            }
	        };

	        _this.saveInputRef = function (input) {
	            return _this.input = input;
	        };

	        var value = _this.props.value || [];
	        _this.state = {
	            tags: value,
	            inputVisible: false,
	            inputValue: ''
	        };
	        _this.color = ['red', 'orange', 'green', 'cyan', 'blue', 'purple'];

	        return _this;
	    }

	    _createClass(KeywordSelect, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if ('value' in nextProps) {
	                var value = nextProps.value || [];
	                this.setState({ tags: value });
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var _state = this.state,
	                tags = _state.tags,
	                inputVisible = _state.inputVisible,
	                inputValue = _state.inputValue;

	            return _react2.default.createElement(
	                'div',
	                null,
	                tags.map(function (tag, index) {
	                    var isLongTag = tag.length > 10;
	                    var tagElem = _react2.default.createElement(
	                        _antd.Tag,
	                        { key: tag,
	                            closable: true,
	                            afterClose: function afterClose() {
	                                return _this2.handleClose(tag);
	                            },
	                            color: _this2.color[index % _this2.color.length] },
	                        isLongTag ? tag.slice(0, 10) + '...' : tag
	                    );
	                    return isLongTag ? _react2.default.createElement(
	                        _antd.Tooltip,
	                        { title: tag },
	                        tagElem
	                    ) : tagElem;
	                }),
	                inputVisible && _react2.default.createElement(_antd.Input, {
	                    ref: this.saveInputRef,
	                    type: 'text',
	                    size: 'small',
	                    style: { width: 78 },
	                    value: inputValue,
	                    onChange: this.handleInputChange,
	                    onBlur: this.handleInputConfirm,
	                    onPressEnter: this.handleInputConfirm
	                }),
	                !inputVisible && _react2.default.createElement(
	                    _antd.Button,
	                    { size: 'small', type: 'dashed', onClick: this.showInput },
	                    '\u521B\u5EFA\u5173\u952E\u5B57'
	                )
	            );
	        }
	    }]);

	    return KeywordSelect;
	}(_react2.default.Component);

	;

	var RegistrationForm = function (_React$Component2) {
	    _inherits(RegistrationForm, _React$Component2);

	    function RegistrationForm(props) {
	        _classCallCheck(this, RegistrationForm);

	        var _this3 = _possibleConstructorReturn(this, (RegistrationForm.__proto__ || Object.getPrototypeOf(RegistrationForm)).call(this, props));

	        _this3.handleSubmit = function (e) {
	            e.preventDefault();
	            _this3.props.form.validateFieldsAndScroll(function (err, values) {
	                if (!err) {
	                    switch (_this3.props.type) {
	                        case 'add':
	                            _this3.paperInfoAdd(values);
	                            break;
	                        case 'modify':
	                            _this3.paperInfoModify(values);
	                            break;
	                    }
	                }
	            });
	        };

	        _this3.state = {
	            info: {}
	        };
	        return _this3;
	    }

	    _createClass(RegistrationForm, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
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
	    }, {
	        key: 'paperInfoAdd',
	        value: function paperInfoAdd(data) {
	            _axios2.default.post('/paper/addInfo', { info: data }).then(function () {
	                _antd.message.success('上传成功');
	            });
	        }
	    }, {
	        key: 'paperInfoModify',
	        value: function paperInfoModify(data) {
	            data.paperId = this.props.info._id;
	            _axios2.default.post('/paper/modifyInfo', { info: data }).then(function () {
	                _antd.message.success('修改成功');
	            });
	        }
	    }, {
	        key: 'standardData',
	        value: function standardData(data) {
	            return {
	                name: data.name,
	                author: data.author,
	                summary: data.summary,
	                time: (0, _moment2.default)(data.time, 'YYYY-MM-DD'),
	                content: data.content,
	                keywords: data.keywords,
	                type: data.type,
	                reference: data.reference
	            };
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var getFieldDecorator = this.props.form.getFieldDecorator;

	            var formItemLayout = {
	                labelCol: {
	                    xs: { span: 24 },
	                    sm: { span: 6 }
	                },
	                wrapperCol: {
	                    xs: { span: 24 },
	                    sm: { span: 12 }
	                }
	            };
	            var tailFormItemLayout = {
	                wrapperCol: {
	                    xs: {
	                        span: 24,
	                        offset: 0
	                    },
	                    sm: {
	                        span: 14,
	                        offset: 6
	                    }
	                }
	            };
	            return _react2.default.createElement(
	                _antd.Form,
	                { onSubmit: this.handleSubmit },
	                _react2.default.createElement(
	                    FormItem,
	                    _extends({}, formItemLayout, {
	                        label: _react2.default.createElement(
	                            'span',
	                            null,
	                            '\u8BBA\u6587\u9898\u76EE\xA0',
	                            _react2.default.createElement(
	                                _antd.Tooltip,
	                                { title: '\u8BBA\u6587\u5168\u540D\u662F\u4EC0\u4E48' },
	                                _react2.default.createElement(_antd.Icon, { type: 'question-circle-o' })
	                            )
	                        ),
	                        hasFeedback: true
	                    }),
	                    getFieldDecorator('name', {
	                        rules: [{
	                            type: 'string',
	                            message: '只能包含中文和英文字符'
	                        }, {
	                            required: true,
	                            message: '请输入论文全名',
	                            whitespace: true
	                        }],
	                        initialValue: this.state.info.name
	                    })(_react2.default.createElement(_antd.Input, null))
	                ),
	                _react2.default.createElement(
	                    FormItem,
	                    _extends({}, formItemLayout, {
	                        label: '\u8BBA\u6587\u4F5C\u8005',
	                        hasFeedback: true
	                    }),
	                    getFieldDecorator('author', {
	                        rules: [{
	                            type: 'string',
	                            message: '只能包含中文和英文字符'
	                        }, {
	                            required: true,
	                            message: '请输入论文作者',
	                            whitespace: true
	                        }],
	                        initialValue: this.state.info.author
	                    })(_react2.default.createElement(_antd.Input, null))
	                ),
	                _react2.default.createElement(
	                    FormItem,
	                    _extends({}, formItemLayout, {
	                        label: '\u8BBA\u6587\u6458\u8981',
	                        hasFeedback: true
	                    }),
	                    getFieldDecorator('summary', {
	                        rules: [{
	                            required: true,
	                            message: '请输入项目简介'
	                        }],
	                        initialValue: this.state.info.summary
	                    })(_react2.default.createElement(_antd.Input, { type: 'textarea', placeholder: '\u8BF7\u8F93\u5165\u9879\u76EE\u7B80\u4ECB', autosize: { minRows: 2, maxRows: 6 } }))
	                ),
	                _react2.default.createElement(
	                    FormItem,
	                    _extends({}, formItemLayout, {
	                        label: '\u8BBA\u6587\u5173\u952E\u5B57'
	                    }),
	                    getFieldDecorator('keywords', {
	                        rules: [{
	                            required: true,
	                            message: '请选择论文关键字'
	                        }],
	                        initialValue: this.state.info.keywords
	                    })(_react2.default.createElement(KeywordSelect, null))
	                ),
	                _react2.default.createElement(
	                    FormItem,
	                    _extends({}, formItemLayout, {
	                        label: '\u8BBA\u6587\u53D1\u884C\u65F6\u95F4',
	                        hasFeedback: true
	                    }),
	                    getFieldDecorator('time', {
	                        rules: [{
	                            required: true,
	                            message: '请选择论文发行时间'
	                        }],
	                        initialValue: this.state.info.time
	                    })(_react2.default.createElement(_antd.DatePicker, null))
	                ),
	                _react2.default.createElement(
	                    FormItem,
	                    _extends({}, formItemLayout, {
	                        label: '\u8BBA\u6587\u7C7B\u522B',
	                        hasFeedback: true
	                    }),
	                    getFieldDecorator('type', {
	                        rules: [{
	                            required: true,
	                            message: '请选择论文类别'
	                        }],
	                        initialValue: this.state.info.type
	                    })(_react2.default.createElement(
	                        _antd.Select,
	                        { placeholder: '\u8BF7\u9009\u62E9\u8BBA\u6587\u7C7B\u522B' },
	                        _config2.default.paperType.map(function (item, index) {
	                            return _react2.default.createElement(
	                                Option,
	                                { value: item, key: index },
	                                item
	                            );
	                        })
	                    ))
	                ),
	                _react2.default.createElement(
	                    FormItem,
	                    _extends({}, formItemLayout, {
	                        label: '\u8BBA\u6587\u6B63\u6587',
	                        hasFeedback: true
	                    }),
	                    getFieldDecorator('content', {
	                        rules: [{
	                            required: true,
	                            message: '请输入论文正文'
	                        }],
	                        initialValue: this.state.info.content
	                    })(_react2.default.createElement(_antd.Input, { type: 'textarea', placeholder: '\u8BF7\u8F93\u5165\u8BBA\u6587\u6B63\u6587', autosize: { minRows: 10, maxRows: 20 } }))
	                ),
	                _react2.default.createElement(
	                    FormItem,
	                    _extends({}, formItemLayout, {
	                        label: '\u53C2\u8003\u6587\u732E',
	                        hasFeedback: true
	                    }),
	                    getFieldDecorator('reference', {
	                        rules: [{
	                            required: true,
	                            message: '请输入论文参考文献'
	                        }],
	                        initialValue: this.state.info.reference
	                    })(_react2.default.createElement(_antd.Input, { type: 'textarea', placeholder: '\u8BF7\u8F93\u5165\u53C2\u8003\u6587\u732E', autosize: { minRows: 2, maxRows: 6 } }))
	                ),
	                _react2.default.createElement(
	                    FormItem,
	                    tailFormItemLayout,
	                    this.props.type === 'check' ? null : _react2.default.createElement(
	                        _antd.Button,
	                        { type: 'primary', htmlType: 'submit', size: 'large' },
	                        this.props.type == 'add' ? '新增' : '修改'
	                    )
	                )
	            );
	        }
	    }]);

	    return RegistrationForm;
	}(_react2.default.Component);

	;

	var ProjectInfo = _antd.Form.create()(RegistrationForm);

	exports.default = ProjectInfo;

/***/ },

/***/ 1047:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _antd = __webpack_require__(221);

	var _reactRouterDom = __webpack_require__(178);

	var _paperInfo = __webpack_require__(1046);

	var _paperInfo2 = _interopRequireDefault(_paperInfo);

	var _axios = __webpack_require__(981);

	var _axios2 = _interopRequireDefault(_axios);

	var _moment = __webpack_require__(414);

	var _moment2 = _interopRequireDefault(_moment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var EditButton = function (_React$Component) {
	    _inherits(EditButton, _React$Component);

	    function EditButton(props) {
	        _classCallCheck(this, EditButton);

	        var _this = _possibleConstructorReturn(this, (EditButton.__proto__ || Object.getPrototypeOf(EditButton)).call(this, props));

	        _this.showModal = function () {
	            _this.setState({
	                visible: true
	            });
	        };

	        _this.handleCancel = function () {
	            _this.setState({
	                visible: false
	            });
	        };

	        _this.state = {
	            visible: false
	        };
	        return _this;
	    }

	    _createClass(EditButton, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'a',
	                    { onClick: this.showModal },
	                    '\u67E5\u770B/\u7F16\u8F91'
	                ),
	                _react2.default.createElement(
	                    _antd.Modal,
	                    { title: '\u9879\u76EE\u4FE1\u606F\u7F16\u8F91',
	                        visible: this.state.visible,
	                        footer: _react2.default.createElement(
	                            _antd.Button,
	                            { size: 'large', onClick: this.handleCancel },
	                            '\u53D6\u6D88'
	                        ),
	                        closable: false
	                    },
	                    _react2.default.createElement(_paperInfo2.default, { type: 'modify', info: this.props.info })
	                )
	            );
	        }
	    }]);

	    return EditButton;
	}(_react2.default.Component);

	var EditableTable = function (_React$Component2) {
	    _inherits(EditableTable, _React$Component2);

	    function EditableTable(props) {
	        _classCallCheck(this, EditableTable);

	        // 表格的构建
	        var _this2 = _possibleConstructorReturn(this, (EditableTable.__proto__ || Object.getPrototypeOf(EditableTable)).call(this, props));

	        _this2.onDelete = function (index, id) {
	            var dataSource = [].concat(_toConsumableArray(_this2.state.dataSource));
	            dataSource.splice(index, 1);
	            _this2.setState({ dataSource: dataSource });
	            _axios2.default.delete('/paper/paperRemove?paperId=' + id);
	        };

	        _this2.columns = [{
	            title: '论文名称',
	            dataIndex: 'name'
	        }, {
	            title: '论文作者',
	            dataIndex: 'author'
	        }, {
	            title: '发行时间',
	            dataIndex: 'stringTime'
	        }, {
	            title: '编辑',
	            dataIndex: 'edit',
	            render: function render(text, record) {
	                return _react2.default.createElement(EditButton, { info: record });
	            }
	        }, {
	            title: '删除',
	            dataIndex: 'operation',
	            render: function render(text, record, index) {
	                return _react2.default.createElement(
	                    _antd.Popconfirm,
	                    {
	                        title: '\u786E\u8BA4\u8981\u5220\u9664\u5417',
	                        onConfirm: function onConfirm() {
	                            return _this2.onDelete(index, record._id);
	                        } },
	                    _react2.default.createElement(
	                        'a',
	                        { href: '#' },
	                        '\u5220\u9664'
	                    )
	                );
	            }
	        }];
	        _this2.state = {
	            dataSource: [],
	            loading: true
	        };
	        return _this2;
	    }

	    _createClass(EditableTable, [{
	        key: 'dataFormat',
	        value: function dataFormat(data) {
	            for (var i = 0; i < data.length; i++) {
	                data[i].stringTime = (0, _moment2.default)(data[i].time).format('YYYY-MM-DD');
	                data[i].key = i;
	            }
	            return data;
	        }
	    }, {
	        key: 'getAllPaperInfo',
	        value: function getAllPaperInfo() {
	            var _this3 = this;

	            _axios2.default.get('/paper/getAllInfo').then(function (res) {
	                _this3.setState({
	                    dataSource: _this3.dataFormat(res.data.papers),
	                    loading: false
	                });
	            });
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.getAllPaperInfo();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var dataSource = this.state.dataSource;

	            var columns = this.columns;
	            return _react2.default.createElement(_antd.Table, { bordered: true,
	                dataSource: dataSource,
	                columns: columns,
	                loading: this.state.loading });
	        }
	    }]);

	    return EditableTable;
	}(_react2.default.Component);

	exports.default = EditableTable;

/***/ },

/***/ 1052:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _antd = __webpack_require__(221);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouterDom = __webpack_require__(178);

	var _axios = __webpack_require__(981);

	var _axios2 = _interopRequireDefault(_axios);

	var _tManageSider = __webpack_require__(1053);

	var _tManageSider2 = _interopRequireDefault(_tManageSider);

	var _topNav = __webpack_require__(1010);

	var _topNav2 = _interopRequireDefault(_topNav);

	var _personInfo = __webpack_require__(1056);

	var _personInfo2 = _interopRequireDefault(_personInfo);

	var _projectInfo = __webpack_require__(1041);

	var _projectInfo2 = _interopRequireDefault(_projectInfo);

	var _projectEditPage = __webpack_require__(1045);

	var _projectEditPage2 = _interopRequireDefault(_projectEditPage);

	var _paperInfo = __webpack_require__(1046);

	var _paperInfo2 = _interopRequireDefault(_paperInfo);

	var _paperEditPage = __webpack_require__(1047);

	var _paperEditPage2 = _interopRequireDefault(_paperEditPage);

	var _studentAdd = __webpack_require__(1059);

	var _studentAdd2 = _interopRequireDefault(_studentAdd);

	var _studentEdit = __webpack_require__(1060);

	var _studentEdit2 = _interopRequireDefault(_studentEdit);

	__webpack_require__(1024);

	__webpack_require__(1061);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Content = _antd.Layout.Content,
	    Footer = _antd.Layout.Footer,
	    Sider = _antd.Layout.Sider;

	var TabPane = _antd.Tabs.TabPane;

	//  个人信息页
	var PersonInfoPage = function PersonInfoPage() {
	    return _react2.default.createElement(
	        _antd.Card,
	        null,
	        _react2.default.createElement(
	            _antd.Tabs,
	            {
	                type: 'card',
	                defaultActiveKey: 'add',
	                tabPosition: 'top' },
	            _react2.default.createElement(
	                TabPane,
	                { tab: _react2.default.createElement(
	                        'span',
	                        null,
	                        _react2.default.createElement(_antd.Icon, { type: 'plus' }),
	                        '\u6DFB\u52A0\u4E2A\u4EBA\u4FE1\u606F'
	                    ),
	                    key: 'add' },
	                _react2.default.createElement(_personInfo2.default, { type: 'add' })
	            ),
	            _react2.default.createElement(
	                TabPane,
	                { tab: _react2.default.createElement(
	                        'span',
	                        null,
	                        _react2.default.createElement(_antd.Icon, { type: 'edit' }),
	                        '\u4E2A\u4EBA\u4FE1\u606F\u4FEE\u6539'
	                    ),
	                    key: 'modify' },
	                _react2.default.createElement(_personInfo2.default, { type: 'modify' })
	            )
	        )
	    );
	};

	var ManagePage = function (_React$Component) {
	    _inherits(ManagePage, _React$Component);

	    function ManagePage(props) {
	        _classCallCheck(this, ManagePage);

	        var _this = _possibleConstructorReturn(this, (ManagePage.__proto__ || Object.getPrototypeOf(ManagePage)).call(this, props));

	        _this.state = {
	            user: {}
	        };
	        return _this;
	    }

	    _createClass(ManagePage, [{
	        key: 'apiRequest',


	        //  发送数据请求
	        value: function apiRequest() {
	            var _this2 = this;

	            _axios2.default.get('/user/islog').then(function (res) {
	                _this2.setState({
	                    user: {
	                        name: res.data.user.userName,
	                        role: res.data.user.role
	                    }
	                });
	            });
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.apiRequest();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                _antd.Layout,
	                { className: 'man_wrapper' },
	                _react2.default.createElement(_topNav2.default, { selectKey: 'manage', data: this.state.user }),
	                _react2.default.createElement(
	                    _antd.Layout,
	                    null,
	                    _react2.default.createElement(
	                        Sider,
	                        { breakpoint: 'lg',
	                            collapsedWidth: '0' },
	                        _react2.default.createElement(_tManageSider2.default, null)
	                    ),
	                    _react2.default.createElement(
	                        Content,
	                        { className: 'man_content_wrapper' },
	                        _react2.default.createElement(_reactRouterDom.Route, { path: '/person/personInfo', component: PersonInfoPage }),
	                        _react2.default.createElement(_reactRouterDom.Route, { path: '/project/projectInfo', render: function render() {
	                                return _react2.default.createElement(
	                                    _antd.Card,
	                                    null,
	                                    _react2.default.createElement(_projectInfo2.default, { type: 'add' })
	                                );
	                            } }),
	                        _react2.default.createElement(_reactRouterDom.Route, { path: '/project/projectEdit', render: function render() {
	                                return _react2.default.createElement(
	                                    _antd.Card,
	                                    null,
	                                    _react2.default.createElement(_projectEditPage2.default, null)
	                                );
	                            } }),
	                        _react2.default.createElement(_reactRouterDom.Route, { path: '/paper/paperInfo', render: function render() {
	                                return _react2.default.createElement(
	                                    _antd.Card,
	                                    null,
	                                    _react2.default.createElement(_paperInfo2.default, { type: 'add' })
	                                );
	                            } }),
	                        _react2.default.createElement(_reactRouterDom.Route, { path: '/paper/paperEdit', render: function render() {
	                                return _react2.default.createElement(
	                                    _antd.Card,
	                                    null,
	                                    _react2.default.createElement(_paperEditPage2.default, null)
	                                );
	                            } }),
	                        _react2.default.createElement(_reactRouterDom.Route, { path: '/student/studentAdd', render: function render() {
	                                return _react2.default.createElement(
	                                    _antd.Card,
	                                    null,
	                                    _react2.default.createElement(_studentAdd2.default, { type: 'add' })
	                                );
	                            } }),
	                        _react2.default.createElement(_reactRouterDom.Route, { path: '/student/studentEdit', render: function render() {
	                                return _react2.default.createElement(
	                                    _antd.Card,
	                                    null,
	                                    _react2.default.createElement(_studentEdit2.default, null)
	                                );
	                            } })
	                    )
	                ),
	                _react2.default.createElement(
	                    Footer,
	                    { className: 'man_foot_wrapper' },
	                    'SEUStudio \u6559\u804C\u4EBA\u5458\u7BA1\u7406\u7CFB\u7EDF \xA92017 Created by SEU'
	                )
	            );
	        }
	    }]);

	    return ManagePage;
	}(_react2.default.Component);

	;

	exports.default = ManagePage;

/***/ },

/***/ 1053:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _antd = __webpack_require__(221);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(1054);

	var _reactRouterDom = __webpack_require__(178);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SubMenu = _antd.Menu.SubMenu;

	var TManageSider = function TManageSider() {
	    var menuArr = location.href.split('/');
	    var menuKey = menuArr[menuArr.length - 2];
	    var selectKey = menuArr[menuArr.length - 1];

	    return _react2.default.createElement(
	        _antd.Menu,
	        {
	            theme: 'dark',
	            mode: 'inline',
	            defaultOpenKeys: [menuKey],
	            defaultSelectedKeys: [selectKey],
	            className: 'top_nav_sider'
	        },
	        _react2.default.createElement(
	            SubMenu,
	            { key: 'person', title: _react2.default.createElement(
	                    'span',
	                    null,
	                    _react2.default.createElement(_antd.Icon, { type: 'user' }),
	                    '\u4E2A\u4EBA\u4FE1\u606F'
	                ) },
	            _react2.default.createElement(
	                _antd.Menu.Item,
	                { key: 'personInfo' },
	                _react2.default.createElement(
	                    _reactRouterDom.Link,
	                    { to: '/person/personInfo' },
	                    '\u57FA\u672C\u4FE1\u606F'
	                )
	            )
	        ),
	        _react2.default.createElement(
	            SubMenu,
	            { key: 'project', title: _react2.default.createElement(
	                    'span',
	                    null,
	                    _react2.default.createElement(_antd.Icon, { type: 'laptop' }),
	                    '\u9879\u76EE\u4FE1\u606F'
	                ) },
	            _react2.default.createElement(
	                _antd.Menu.Item,
	                { key: 'projectInfo' },
	                _react2.default.createElement(
	                    _reactRouterDom.Link,
	                    { to: '/project/projectInfo' },
	                    '\u9879\u76EE\u4FE1\u606F'
	                )
	            ),
	            _react2.default.createElement(
	                _antd.Menu.Item,
	                { key: 'projectEdit' },
	                _react2.default.createElement(
	                    _reactRouterDom.Link,
	                    { to: '/project/projectEdit' },
	                    '\u9879\u76EE\u7F16\u8F91'
	                )
	            )
	        ),
	        _react2.default.createElement(
	            SubMenu,
	            { key: 'paper', title: _react2.default.createElement(
	                    'span',
	                    null,
	                    _react2.default.createElement(_antd.Icon, { type: 'file' }),
	                    '\u8BBA\u6587\u4FE1\u606F'
	                ) },
	            _react2.default.createElement(
	                _antd.Menu.Item,
	                { key: 'paperInfo' },
	                _react2.default.createElement(
	                    _reactRouterDom.Link,
	                    { to: '/paper/paperInfo' },
	                    '\u65B0\u589E\u8BBA\u6587'
	                )
	            ),
	            _react2.default.createElement(
	                _antd.Menu.Item,
	                { key: 'paperEdit' },
	                _react2.default.createElement(
	                    _reactRouterDom.Link,
	                    { to: '/paper/paperEdit' },
	                    '\u4FE1\u606F\u4FEE\u6539'
	                )
	            )
	        ),
	        _react2.default.createElement(
	            SubMenu,
	            { key: 'student', title: _react2.default.createElement(
	                    'span',
	                    null,
	                    _react2.default.createElement(_antd.Icon, { type: 'smile-o' }),
	                    '\u5B66\u751F\u57F9\u517B'
	                ) },
	            _react2.default.createElement(
	                _antd.Menu.Item,
	                { key: 'studentAdd' },
	                _react2.default.createElement(
	                    _reactRouterDom.Link,
	                    { to: '/student/studentAdd' },
	                    '\u5B66\u751F\u6DFB\u52A0'
	                )
	            ),
	            _react2.default.createElement(
	                _antd.Menu.Item,
	                { key: 'studentEdit' },
	                _react2.default.createElement(
	                    _reactRouterDom.Link,
	                    { to: '/student/studentEdit' },
	                    '\u5B66\u751F\u7BA1\u7406'
	                )
	            )
	        )
	    );
	};

	exports.default = TManageSider;

/***/ },

/***/ 1054:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(1055);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(1014)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./tManageSider.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./tManageSider.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 1055:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1013)();
	// imports


	// module
	exports.push([module.id, ".top_nav_sider {\n  height: 100%; }\n", ""]);

	// exports


/***/ },

/***/ 1056:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _antd = __webpack_require__(221);

	var _axios = __webpack_require__(981);

	var _axios2 = _interopRequireDefault(_axios);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _moment = __webpack_require__(414);

	var _moment2 = _interopRequireDefault(_moment);

	var _reactRouterDom = __webpack_require__(178);

	var _config = __webpack_require__(1040);

	var _config2 = _interopRequireDefault(_config);

	__webpack_require__(1057);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FormItem = _antd.Form.Item;
	var Option = _antd.Select.Option;

	var RegistrationForm = function (_React$Component) {
	    _inherits(RegistrationForm, _React$Component);

	    function RegistrationForm(props) {
	        _classCallCheck(this, RegistrationForm);

	        var _this = _possibleConstructorReturn(this, (RegistrationForm.__proto__ || Object.getPrototypeOf(RegistrationForm)).call(this, props));

	        _this.handleSubmit = function (e) {
	            e.preventDefault();
	            _this.props.form.validateFieldsAndScroll(function (err, values) {
	                if (!err) {
	                    var info = Object.assign({}, values, {
	                        age: values.age + '',
	                        workYear: values.workYear + ''
	                    });
	                    switch (_this.props.type) {
	                        case 'add':
	                            _this.infoAdd(info);
	                            break;
	                        case 'modify':
	                            _this.infoModify(info);
	                            break;
	                    }
	                }
	            });
	        };

	        _this.state = {
	            info: {}
	        };
	        return _this;
	    }

	    _createClass(RegistrationForm, [{
	        key: 'infoAdd',
	        value: function infoAdd(data) {
	            _axios2.default.post('/teacher/personInfoAdd', { info: data }).then(function (res) {
	                if (res.data.status === 'success') {
	                    _antd.message.success('成功');
	                } else if (res.data.status === 'exist') {
	                    _antd.message.error('已输入个人信息，请点击修改');
	                }
	            });
	        }
	    }, {
	        key: 'infoModify',
	        value: function infoModify(data) {
	            _axios2.default.post('/teacher/personInfoModify', { info: data }).then(function (res) {
	                var status = res.data.status;

	                switch (status) {
	                    case 'NoInfo':
	                        _antd.message.error('请直接添加个人信息');
	                        break;
	                    case 'Success':
	                        _antd.message.success('修改成功');
	                        break;
	                }
	            });
	        }
	    }, {
	        key: 'infoRequest',
	        value: function infoRequest() {
	            var _this2 = this;

	            _axios2.default.get('/teacher/personInfoGet').then(function (res) {
	                if (res.data) {
	                    _this2.setState({
	                        info: _this2.standardData(res.data)
	                    });
	                }
	            });
	        }
	    }, {
	        key: 'standardData',
	        value: function standardData(data) {
	            var dateFormat = 'YYYY-MM-DD';
	            return {
	                name: data.name,
	                sex: data.sex,
	                age: data.age,
	                birthday: (0, _moment2.default)(data.birthday, dateFormat),
	                telphone: data.telphone,
	                email: data.email,
	                birthplace: data.birthplace,
	                position: data.position,
	                workYear: data.workYear,
	                studio: data.studio,
	                phone: data.phone,
	                address: data.address
	            };
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            switch (this.props.type) {
	                case 'add':
	                    this.setState({
	                        info: {}
	                    });
	                    break;
	                case 'modify':
	                    this.infoRequest();
	                    break;
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var getFieldDecorator = this.props.form.getFieldDecorator;

	            var formItemLayout = {
	                labelCol: {
	                    xs: { span: 24 },
	                    sm: { span: 8 }
	                },
	                wrapperCol: {
	                    xs: { span: 24 },
	                    sm: { span: 10 }
	                }
	            };
	            var tailFormItemLayout = {
	                wrapperCol: {
	                    xs: {
	                        span: 24,
	                        offset: 0
	                    },
	                    sm: {
	                        span: 14,
	                        offset: 8
	                    }
	                }
	            };
	            var ProvinceArr = _config2.default.province;

	            var initialInfo = {};
	            if (this.props.info) {
	                initialInfo = this.standardData(this.props.info);
	            }

	            return _react2.default.createElement(
	                _antd.Form,
	                { onSubmit: this.handleSubmit },
	                _react2.default.createElement(
	                    FormItem,
	                    _extends({}, formItemLayout, {
	                        label: _react2.default.createElement(
	                            'span',
	                            null,
	                            '\u59D3\u540D\xA0',
	                            _react2.default.createElement(
	                                _antd.Tooltip,
	                                { title: '\u8F93\u5165\u4F60\u7684\u5168\u540D' },
	                                _react2.default.createElement(_antd.Icon, { type: 'question-circle-o' })
	                            )
	                        ),
	                        hasFeedback: true
	                    }),
	                    getFieldDecorator('name', {
	                        rules: [{
	                            type: 'string',
	                            message: '只能包含中文和英文字符'
	                        }, {
	                            required: true,
	                            message: '请输入姓名',
	                            whitespace: true
	                        }],
	                        initialValue: this.state.info.name
	                    })(_react2.default.createElement(_antd.Input, null))
	                ),
	                _react2.default.createElement(
	                    FormItem,
	                    _extends({}, formItemLayout, {
	                        label: '\u6027\u522B',
	                        hasFeedback: true
	                    }),
	                    getFieldDecorator('sex', {
	                        rules: [{ required: true, message: '请选择你的性别' }],
	                        initialValue: this.state.info.sex
	                    })(_react2.default.createElement(
	                        _antd.Select,
	                        { placeholder: '\u6027\u522B' },
	                        _react2.default.createElement(
	                            Option,
	                            { value: '\u7537' },
	                            '\u7537'
	                        ),
	                        _react2.default.createElement(
	                            Option,
	                            { value: '\u5973' },
	                            '\u5973'
	                        )
	                    ))
	                ),
	                _react2.default.createElement(
	                    FormItem,
	                    _extends({}, formItemLayout, {
	                        label: '\u5E74\u9F84',
	                        hasFeedback: true
	                    }),
	                    getFieldDecorator('age', {
	                        rules: [{
	                            required: true,
	                            message: '请输入年龄'
	                        }],
	                        initialValue: this.state.info.age
	                    })(_react2.default.createElement(_antd.InputNumber, { min: 1, max: 100 }))
	                ),
	                _react2.default.createElement(
	                    FormItem,
	                    _extends({}, formItemLayout, {
	                        label: '\u51FA\u751F\u5E74\u6708',
	                        hasFeedback: true
	                    }),
	                    getFieldDecorator('birthday', {
	                        rules: [{
	                            required: true,
	                            message: '请选择出生年月'
	                        }],
	                        initialValue: this.state.info.birthday
	                    })(_react2.default.createElement(_antd.DatePicker, null))
	                ),
	                _react2.default.createElement(
	                    FormItem,
	                    _extends({}, formItemLayout, {
	                        label: '\u624B\u673A\u53F7',
	                        hasFeedback: true
	                    }),
	                    getFieldDecorator('telphone', {
	                        rules: [{
	                            type: 'string',
	                            pattern: /\d{11}/,
	                            required: true,
	                            message: '请输入正确的手机号'
	                        }],
	                        initialValue: this.state.info.telphone
	                    })(_react2.default.createElement(_antd.Input, null))
	                ),
	                _react2.default.createElement(
	                    FormItem,
	                    _extends({}, formItemLayout, {
	                        label: 'E-mail',
	                        hasFeedback: true
	                    }),
	                    getFieldDecorator('email', {
	                        rules: [{
	                            type: 'email', message: '请输入正确的邮件格式'
	                        }, {
	                            required: true, message: '请输入您的邮件地址'
	                        }],
	                        initialValue: this.state.info.email
	                    })(_react2.default.createElement(_antd.Input, null))
	                ),
	                _react2.default.createElement(
	                    FormItem,
	                    _extends({}, formItemLayout, {
	                        label: '\u7C4D\u8D2F',
	                        hasFeedback: true
	                    }),
	                    getFieldDecorator('birthplace', {
	                        rules: [{ required: true, message: '请选择你的籍贯' }],
	                        initialValue: this.state.info.birthplace
	                    })(_react2.default.createElement(
	                        _antd.Select,
	                        { placeholder: '\u8BF7\u9009\u62E9\u7C4D\u8D2F\u7701\u4EFD' },
	                        ProvinceArr.map(function (item, index) {
	                            return _react2.default.createElement(
	                                Option,
	                                { key: index, value: item },
	                                item
	                            );
	                        })
	                    ))
	                ),
	                _react2.default.createElement(
	                    FormItem,
	                    _extends({}, formItemLayout, {
	                        label: '\u804C\u79F0',
	                        hasFeedback: true
	                    }),
	                    getFieldDecorator('position', {
	                        rules: [{ required: true, message: '请选择你的职称' }],
	                        initialValue: this.state.info.position
	                    })(_react2.default.createElement(
	                        _antd.Select,
	                        { placeholder: '\u8BF7\u9009\u62E9\u4F60\u7684\u804C\u79F0' },
	                        _config2.default.teacherPosition.map(function (item, index) {
	                            return _react2.default.createElement(
	                                Option,
	                                { value: item, key: index },
	                                item
	                            );
	                        })
	                    ))
	                ),
	                _react2.default.createElement(
	                    FormItem,
	                    _extends({}, formItemLayout, {
	                        label: '\u5DE5\u4F5C\u5E74\u9650',
	                        hasFeedback: true
	                    }),
	                    getFieldDecorator('workYear', {
	                        rules: [{
	                            required: true,
	                            message: '请输入参加工作的年限'
	                        }],
	                        initialValue: this.state.info.workYear
	                    })(_react2.default.createElement(_antd.InputNumber, { min: 1, max: 40 }))
	                ),
	                _react2.default.createElement(
	                    FormItem,
	                    _extends({}, formItemLayout, {
	                        label: '\u9879\u76EE\u5B9E\u9A8C\u5BA4',
	                        hasFeedback: true
	                    }),
	                    getFieldDecorator('studio', {
	                        rules: [{
	                            required: true,
	                            message: '请选择项目实验室'
	                        }],
	                        initialValue: this.state.info.studio
	                    })(_react2.default.createElement(
	                        _antd.Select,
	                        { placeholder: '\u8BF7\u9009\u62E9\u9879\u76EE\u6240\u5C5E\u5B9E\u9A8C\u5BA4' },
	                        _config2.default.studio.map(function (item, index) {
	                            return _react2.default.createElement(
	                                Option,
	                                { value: item, key: index },
	                                item
	                            );
	                        })
	                    ))
	                ),
	                _react2.default.createElement(
	                    FormItem,
	                    _extends({}, formItemLayout, {
	                        label: '\u5B9E\u9A8C\u5BA4\u901A\u8BAF\u5730\u5740',
	                        hasFeedback: true
	                    }),
	                    getFieldDecorator('phone', {
	                        rules: [{
	                            type: 'string',
	                            pattern: /\d+/,
	                            required: true,
	                            message: '请输入正确的电话号码'
	                        }],
	                        initialValue: this.state.info.phone
	                    })(_react2.default.createElement(_antd.Input, { placeholder: '\u8BF7\u8F93\u5165\u5B9E\u9A8C\u5BA4\u7684\u7535\u8BDD\u53F7\u7801' }))
	                ),
	                _react2.default.createElement(
	                    FormItem,
	                    _extends({}, formItemLayout, {
	                        label: '\u5B9E\u9A8C\u5BA4\u8BE6\u7EC6\u5730\u5740',
	                        hasFeedback: true
	                    }),
	                    getFieldDecorator('address', {
	                        rules: [{
	                            required: true,
	                            message: '请输入实验室详细地址'
	                        }],
	                        initialValue: this.state.info.address
	                    })(_react2.default.createElement(_antd.Input, { type: 'textarea', placeholder: '\u5B9E\u9A8C\u5BA4\u8BE6\u7EC6\u5730\u5740', autosize: { minRows: 2, maxRows: 6 } }))
	                ),
	                _react2.default.createElement(
	                    FormItem,
	                    tailFormItemLayout,
	                    _react2.default.createElement(
	                        _antd.Button,
	                        { type: 'primary', htmlType: 'submit', size: 'large' },
	                        '\u786E\u5B9A'
	                    )
	                )
	            );
	        }
	    }]);

	    return RegistrationForm;
	}(_react2.default.Component);

	;

	var WrappedRegistrationForm = _antd.Form.create()(RegistrationForm);

	exports.default = WrappedRegistrationForm;

/***/ },

/***/ 1057:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(1058);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(1014)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./personInfo.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./personInfo.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 1058:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1013)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },

/***/ 1059:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _antd = __webpack_require__(221);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouterDom = __webpack_require__(178);

	var _axios = __webpack_require__(981);

	var _axios2 = _interopRequireDefault(_axios);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FormItem = _antd.Form.Item;
	var Option = _antd.Select.Option;

	var RegistrationForm = function (_React$Component) {
	    _inherits(RegistrationForm, _React$Component);

	    function RegistrationForm(props) {
	        _classCallCheck(this, RegistrationForm);

	        var _this = _possibleConstructorReturn(this, (RegistrationForm.__proto__ || Object.getPrototypeOf(RegistrationForm)).call(this, props));

	        _this.handleSubmit = function (e) {
	            e.preventDefault();
	            _this.props.form.validateFieldsAndScroll(function (err, values) {
	                if (!err) {
	                    switch (_this.props.type) {
	                        case 'add':
	                            _this.addStudentInfo(values);
	                            break;
	                        case 'modify':
	                            _this.modifyProjectInfo(values);
	                            break;
	                    }
	                }
	            });
	        };

	        _this.state = {
	            info: {},
	            students: []
	        };
	        return _this;
	    }

	    _createClass(RegistrationForm, [{
	        key: 'addStudentInfo',
	        value: function addStudentInfo(data) {
	            _axios2.default.post('/education/studentAdd', { data: data }).then(function (res) {
	                switch (res.data.status) {
	                    case 'NoInfo':
	                        _antd.message.error('请先去完善个人资料');
	                        break;
	                    case 'Success':
	                        _antd.message.success('添加成功');
	                        break;
	                }
	            });
	        }
	    }, {
	        key: 'modifyProjectInfo',
	        value: function modifyProjectInfo(data) {
	            data.studentId = this.props.info._id;
	            _axios2.default.post('/education/modifyStudent', { data: data }).then(function () {
	                _antd.message.success('修改成功');
	            });
	        }
	    }, {
	        key: 'personInfoRequest',
	        value: function personInfoRequest() {
	            var _this2 = this;

	            _axios2.default.get('/student/personInfoAll').then(function (res) {
	                _this2.setState({
	                    students: res.data.info
	                });
	            });
	        }
	    }, {
	        key: 'dataFormat',
	        value: function dataFormat(data) {
	            return {
	                student: data.student._id,
	                comment: ~~data.comment,
	                project: ~~data.project,
	                paper: ~~data.paper,
	                exercise: ~~data.exercise,
	                social: ~~data.social,
	                grade: ~~data.grade,
	                remark: data.remark
	            };
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.personInfoRequest();
	            switch (this.props.type) {
	                case 'add':
	                    break;
	                case 'modify':
	                    this.setState({
	                        info: this.dataFormat(this.props.info)
	                    });
	                    break;
	                default:
	                    break;
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var getFieldDecorator = this.props.form.getFieldDecorator;

	            var formItemLayout = {
	                labelCol: {
	                    xs: { span: 24 },
	                    sm: { span: 6 }
	                },
	                wrapperCol: {
	                    xs: { span: 24 },
	                    sm: { span: 10 }
	                }
	            };
	            var tailFormItemLayout = {
	                wrapperCol: {
	                    xs: {
	                        span: 24,
	                        offset: 0
	                    },
	                    sm: {
	                        span: 14,
	                        offset: 6
	                    }
	                }
	            };
	            return _react2.default.createElement(
	                _antd.Form,
	                { onSubmit: this.handleSubmit },
	                _react2.default.createElement(
	                    FormItem,
	                    _extends({}, formItemLayout, {
	                        label: '\u5B66\u751F\u9009\u62E9',
	                        hasFeedback: true
	                    }),
	                    getFieldDecorator('student', {
	                        rules: [{
	                            required: true,
	                            message: '请输入该项目参与学生'
	                        }],
	                        initialValue: this.state.info.student
	                    })(_react2.default.createElement(
	                        _antd.Select,
	                        null,
	                        this.state.students.map(function (item, index) {
	                            return _react2.default.createElement(
	                                Option,
	                                {
	                                    value: item._id,
	                                    key: index },
	                                '\u3010',
	                                item.degree,
	                                '\u3011 ',
	                                item.name
	                            );
	                        })
	                    ))
	                ),
	                _react2.default.createElement(
	                    FormItem,
	                    _extends({}, formItemLayout, {
	                        label: '\u6559\u5E08\u8BC4\u4EF7'
	                    }),
	                    getFieldDecorator('comment', {
	                        rules: [{
	                            required: true,
	                            message: '请对项目进行评估'
	                        }],
	                        initialValue: this.state.info.comment
	                    })(_react2.default.createElement(_antd.Slider, { marks: { 10: '普通', 30: '良好', 50: '优秀' },
	                        min: 0,
	                        max: 60,
	                        step: null,
	                        tipFormatter: null }))
	                ),
	                _react2.default.createElement(
	                    FormItem,
	                    _extends({}, formItemLayout, {
	                        label: '\u6210\u7EE9',
	                        hasFeedback: true
	                    }),
	                    getFieldDecorator('grade', {
	                        rules: [{
	                            required: true,
	                            message: '请对学生的成绩进行评价'
	                        }],
	                        initialValue: this.state.info.grade
	                    })(_react2.default.createElement(_antd.Rate, null))
	                ),
	                _react2.default.createElement(
	                    FormItem,
	                    _extends({}, formItemLayout, {
	                        label: '\u9879\u76EE',
	                        hasFeedback: true
	                    }),
	                    getFieldDecorator('project', {
	                        rules: [{
	                            required: true,
	                            message: '请对学生的项目进行评价'
	                        }],
	                        initialValue: this.state.info.project
	                    })(_react2.default.createElement(_antd.Rate, null))
	                ),
	                _react2.default.createElement(
	                    FormItem,
	                    _extends({}, formItemLayout, {
	                        label: '\u8BBA\u6587',
	                        hasFeedback: true
	                    }),
	                    getFieldDecorator('paper', {
	                        rules: [{
	                            required: true,
	                            message: '请对学生的论文进行评价'
	                        }],
	                        initialValue: this.state.info.paper
	                    })(_react2.default.createElement(_antd.Rate, null))
	                ),
	                _react2.default.createElement(
	                    FormItem,
	                    _extends({}, formItemLayout, {
	                        label: '\u5B66\u6821\u53CA\u793E\u4F1A\u6D3B\u52A8',
	                        hasFeedback: true
	                    }),
	                    getFieldDecorator('social', {
	                        rules: [{
	                            required: true,
	                            message: '请对学生的活动进行评价'
	                        }],
	                        initialValue: this.state.info.social
	                    })(_react2.default.createElement(_antd.Rate, null))
	                ),
	                _react2.default.createElement(
	                    FormItem,
	                    _extends({}, formItemLayout, {
	                        label: '\u4F53\u80B2',
	                        hasFeedback: true
	                    }),
	                    getFieldDecorator('exercise', {
	                        rules: [{
	                            required: true,
	                            message: '请对学生的体育进行评价'
	                        }],
	                        initialValue: this.state.info.exercise
	                    })(_react2.default.createElement(_antd.Rate, null))
	                ),
	                _react2.default.createElement(
	                    FormItem,
	                    _extends({}, formItemLayout, {
	                        label: '\u6559\u5E08\u8BC4\u8BED',
	                        hasFeedback: true
	                    }),
	                    getFieldDecorator('remark', {
	                        rules: [{
	                            required: true,
	                            message: '请输入您对学生的评价'
	                        }],
	                        initialValue: this.state.info.remark
	                    })(_react2.default.createElement(_antd.Input, { type: 'textarea', placeholder: '\u8BF7\u8F93\u5165\u60A8\u5BF9\u5B66\u751F\u7684\u8BC4\u4EF7', autosize: { minRows: 8, maxRows: 10 } }))
	                ),
	                _react2.default.createElement(
	                    FormItem,
	                    tailFormItemLayout,
	                    _react2.default.createElement(
	                        _antd.Button,
	                        { type: 'primary', htmlType: 'submit', size: 'large' },
	                        this.props.type == 'add' ? '新增' : '修改'
	                    )
	                )
	            );
	        }
	    }]);

	    return RegistrationForm;
	}(_react2.default.Component);

	;

	var ProjectInfo = _antd.Form.create()(RegistrationForm);

	exports.default = ProjectInfo;

/***/ },

/***/ 1060:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _antd = __webpack_require__(221);

	var _reactRouterDom = __webpack_require__(178);

	var _studentAdd = __webpack_require__(1059);

	var _studentAdd2 = _interopRequireDefault(_studentAdd);

	var _axios = __webpack_require__(981);

	var _axios2 = _interopRequireDefault(_axios);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var EditButton = function (_React$Component) {
	    _inherits(EditButton, _React$Component);

	    function EditButton(props) {
	        _classCallCheck(this, EditButton);

	        var _this = _possibleConstructorReturn(this, (EditButton.__proto__ || Object.getPrototypeOf(EditButton)).call(this, props));

	        _this.showModal = function () {
	            _this.setState({
	                visible: true
	            });
	        };

	        _this.handleCancel = function () {
	            _this.setState({
	                visible: false
	            });
	        };

	        _this.state = {
	            visible: false
	        };
	        return _this;
	    }

	    _createClass(EditButton, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'a',
	                    { onClick: this.showModal },
	                    '\u7F16\u8F91'
	                ),
	                _react2.default.createElement(
	                    _antd.Modal,
	                    { title: '\u9879\u76EE\u4FE1\u606F\u7F16\u8F91',
	                        visible: this.state.visible,
	                        footer: _react2.default.createElement(
	                            _antd.Button,
	                            { size: 'large', onClick: this.handleCancel },
	                            '\u53D6\u6D88'
	                        ),
	                        closable: false
	                    },
	                    _react2.default.createElement(_studentAdd2.default, { type: 'modify', info: this.props.info })
	                )
	            );
	        }
	    }]);

	    return EditButton;
	}(_react2.default.Component);

	var EditableTable = function (_React$Component2) {
	    _inherits(EditableTable, _React$Component2);

	    function EditableTable(props) {
	        _classCallCheck(this, EditableTable);

	        // 表格的构建
	        var _this2 = _possibleConstructorReturn(this, (EditableTable.__proto__ || Object.getPrototypeOf(EditableTable)).call(this, props));

	        _this2.onDelete = function (index, id) {
	            var dataSource = [].concat(_toConsumableArray(_this2.state.dataSource));
	            dataSource.splice(index, 1);
	            _this2.setState({ dataSource: dataSource });
	            // axios.delete(`/project/projectRemove?projectId=${id}`);
	        };

	        _this2.columns = [{
	            title: '学生姓名',
	            dataIndex: 'student.name'
	        }, {
	            title: '学生学位',
	            dataIndex: 'student.degree'
	        }, {
	            title: '学生学号',
	            dataIndex: 'student.telphone'
	        }, {
	            title: '编辑',
	            dataIndex: 'edit',
	            render: function render(text, record) {
	                return _react2.default.createElement(EditButton, { info: record });
	            }
	        }, {
	            title: '删除',
	            dataIndex: 'operation',
	            render: function render(text, record, index) {
	                return _react2.default.createElement(
	                    _antd.Popconfirm,
	                    {
	                        title: '\u786E\u8BA4\u8981\u5220\u9664\u5417',
	                        onConfirm: function onConfirm() {
	                            return _this2.onDelete(index, record._id);
	                        } },
	                    _react2.default.createElement(
	                        'a',
	                        { href: '#' },
	                        '\u5220\u9664'
	                    )
	                );
	            }
	        }];

	        _this2.state = {
	            dataSource: [],
	            loading: true
	        };
	        return _this2;
	    }

	    _createClass(EditableTable, [{
	        key: 'projectInfoRequest',
	        value: function projectInfoRequest() {
	            var _this3 = this;

	            _axios2.default.get('/education/getStudentById').then(function (res) {
	                res.data.students.forEach(function (item, index) {
	                    item.key = index;
	                });
	                _this3.setState({
	                    dataSource: res.data.students,
	                    loading: false
	                });
	            });
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.projectInfoRequest();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var dataSource = this.state.dataSource;

	            var columns = this.columns;
	            return _react2.default.createElement(_antd.Table, { bordered: true,
	                dataSource: dataSource,
	                columns: columns,
	                loading: this.state.loading
	            });
	        }
	    }]);

	    return EditableTable;
	}(_react2.default.Component);

	exports.default = EditableTable;

/***/ },

/***/ 1061:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(1062);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(1014)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./tManage.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./tManage.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 1062:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1013)();
	// imports


	// module
	exports.push([module.id, ".man_wrapper {\n  min-height: 100vh; }\n  .man_wrapper .man_content_wrapper {\n    padding: 24px;\n    background: #ececec; }\n\n.man_foot_wrapper {\n  text-align: center; }\n", ""]);

	// exports


/***/ }

});