var Index = require('../app/control/index');
var Teacher = require('../app/control/teacher');
var User = require('../app/control/user');
var Student = require('../app/control/student');
var Project = require('../app/control/project');
var Paper = require('../app/control/paper');
var Job = require('../app/control/job');
var Education = require('../app/control/education');

module.exports = function (app) {
// 首页
        // 渲染首页
        app.get('/', Index.index);
        // 渲染进入页
        app.get('/entry', User.signInRequire, Index.entry);

// 登录注册页
        // 渲染注册页
        app.get('/login', Index.login);
        // 用户注册
        app.post('/user/signUp', User.signUp);
        // 用户登录
        app.post('/user/signIn', User.signIn);
        // 用户登出
        app.get('/user/logout', User.logOut);
        // 会话持久
        app.get('/user/islog', User.isLog);

// 教师相关路由
        // 渲染教师管理页
        app.get('/tmanage', User.signInRequire, User.teacherRequire, Index.tManage);
        // spa分页路由
        app.get('/tmanage/*', User.signInRequire, User.teacherRequire, Index.tManage);
        // 教师个人资料上传
        app.post('/teacher/personInfoAdd', Teacher.personInfoAdd);
        // 教师个人资料获取
        app.get('/teacher/personInfoGet', Teacher.personInfoGet);
        //  教师个人资料修改
        app.post('/teacher/personInfoModify', Teacher.personInfoModify);
        // 获取教师姓名
        app.get('/teacher/personInfoAll', Teacher.personInfoAll);
        // 获取教师全部信息
        app.get('/teacher/getAllTeachers', Teacher.getAllTeachers);


//学生相关路由
        // 渲染学生管理页
        app.get('/smanage', User.signInRequire, User.studentRequire, Index.sManage);
        // spa分页路由
        app.get('/smanage/*', User.signInRequire, User.studentRequire, Index.sManage);
        // 学生个人资料上传
        app.post('/student/personInfoAdd', Student.personInfoAdd);
        // 学生个人资料获取
        app.get('/student/personInfoGet', Student.personInfoGet);
        // 学生个人资料修改
        app.post('/student/personInfoModify', Student.personInfoModify);
        // 获取学生姓名
        app.get('/student/personInfoAll', Student.personInfoAll);
        // 获取全部学生信息
        app.get('/student/getAllStudents', Student.getAllStudents);



//项目相关路由
        // 项目增加
        app.post('/project/addInfo', Project.addInfo);
        // 获取项目全部信息
        app.get('/project/getAllInfo', Project.getAllInfo);
        // 修改项目信息
        app.post('/project/modifyInfo', Project.modifyInfo);
        // 删除项目
        app.delete('/project/projectRemove', Project.projectRemove);

//论文相关路由
        // 论文增加
        app.post('/paper/addInfo', Paper.addInfo);
        // 获取论文全部信息
        app.get('/paper/getAllInfo', Paper.getAllInfo);
        // 修改论文信息
        app.post('/paper/modifyInfo', Paper.modifyInfo);
        // 删除论文
        app.delete('/paper/paperRemove', Paper.paperRemove);

//工作相关路由
        // 添加工作经历
        app.post('/job/addInfo', Job.addInfo);
        // 获取工作经历
        app.get('/job/getInfoById', Job.getInfoById);
        // 修改工作经历
        app.post('/job/modifyInfo', Job.modifyInfo);
        // 删除工作经历
        app.delete('/job/jobRemove', Job.jobRemove);

//学生管理相关路由
        // 学生培养添加
        app.post('/education/studentAdd', Education.studentAdd);
        // 获取学生培养信息
        app.get('/education/getStudentById', Education.getStudentById);
        // 修改学生培养信息
        app.post('/education/modifyStudent', Education.modifyStudent);
        // 删除学生培养信息

//展示页面
        // 渲染教师展示页
        app.get('/exhibition', User.signInRequire, Index.exhibition);
        // spa分页路由
        app.get('/exhibition/*', User.signInRequire, Index.exhibition);
};