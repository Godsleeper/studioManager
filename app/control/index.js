//  渲染首页
exports.index = function(req, res) {
    res.render('entry');
};

exports.login = function (req, res) {
    res.render('login');
};

exports.tManage = function (req, res) {
    res.render('tManage');
};

exports.exhibition = function (req, res) {
    res.render('exhibition');
};

exports.sManage = function (req, res) {
    res.render('sManage');
};

exports.entry = function (req, res) {
    var role = req.session.user.role;
    if (role === 'teacher') {
        res.render('tManage');
    }
    else if (role === 'student') {
        res.render('sManage');
    }
};
