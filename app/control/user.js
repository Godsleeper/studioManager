var User = require('../model/user');

//  注册
exports.signUp = function (req, res) {
    var _user = req.body.user;
    User.find({ userName: _user.userName }, function(err, users){
        if(err){
            console.log(err);
        }
        if (users.length > 0) {
            return res.json({ status:'0' });
        }
        else {
            var user = new User(_user);
            user.save(function(err){
                if (err) {
                    console.log(err);
                }
                _user.status = '1';
                res.json(_user);
            });
        }
    })
};

//  登录
exports.signIn = function (req, res) {
    var _user = req.body.user;
    User.findOne({ userName: _user.userName}, function(err, user){
        if (err) {
           console.log(err);
        }
        if (!user) {
            return res.json({status: 'NotFound'});
        }
        user.comparePassword(_user.password, function(err, isMatch){
            if (err) {
                console.log(err);
            }
            if (isMatch) {
                req.session.user = user;
                return res.json({role: user.role, status: 'Success'});
            } else {
                return res.json({status: 'Fail'});
            }
        });
    });
};

//  登出
exports.logOut = function (req, res) {
    delete req.session.user;
    res.redirect('/');
};

//  会话持久
exports.isLog = function (req, res) {
    var user = req.session.user;
    if (!user) {
        res.json({ signState: false });
    } else {
        res.json({ user });
    }
};

//  登录权限控制
exports.signInRequire = function (req, res , next) {
    var user = req.session.user;
    if (!user) {
        return res.redirect('/');
    }
    next();
};

//  教师资格
exports.teacherRequire = function (req, res, next) {
    var role =req.session.user.role;
    if (role !== 'teacher') {
        return res.redirect('/');
    }
    next();
};
//  学生资格
exports.studentRequire = function (req, res, next) {
    var role =req.session.user.role;
    if (role !== 'student') {
        return res.redirect('/');
    }
    next();
};