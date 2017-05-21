var Teacher = require('../model/teacher');
var User = require('../model/user');

exports.personInfoAdd = function (req, res) {
    var _teacher = req.body.info;
    _teacher.user = req.session.user._id;
    //  先检测user中有没有资料
    User.findOne({_id: _teacher.user}, function(err, user) {
        if (err) {
            console.log(err);
        }
        if (!user.teacher) {
            var teacher = new Teacher(_teacher);
            teacher.save(function(err, teacher){
                if (err) {
                    console.log(err);
                }
                User.update({_id: teacher.user}, {
                    $set: {teacher: teacher._id}
                }, function(err) {
                    if (err) {
                        console.log(err);
                    }
                    User.findOne({_id: user._id}, function(err, user){
                        req.session.user = user;
                        res.json({status: 'success'});
                    });
                })
            });
        } else {
            return res.json({status: 'exist'});
        }
    });
};

exports.personInfoGet = function (req, res) {
    var teacherId = req.session.user.teacher;
    Teacher
        .findOne({_id: teacherId})
        .exec(function(err, teacher){
            res.json(teacher);
        });
};

exports.personInfoAll = function (req, res) {
    Teacher
        .find({})
        .exec(function(err, teachers){
            if (err) {
                console.log(err);
            }
            res.json({info: teachers});
        })
};

exports.personInfoModify = function (req, res) {
    var _info = req.body.info;
    var teacherId = req.session.user.teacher;
    if (!teacherId) {
        return res.json({status: 'NoInfo'});
    }
    Teacher
        .findOne({_id: teacherId})
        .exec(function(err, teacher){
            var _id = teacher._id;
            delete teacher._id;
            Teacher.update({_id:_id}, _info, function(err){
                if (err) {
                    console.log(err);
                }
                res.json({status: 'Success'});
            })
        })
};

exports.getAllTeachers = function (req, res) {
    Teacher
        .find({})
        .populate({
            path: 'education',
            model: 'Education',
            populate: {
                path: 'student',
                model: 'Student'
            }
        })
        .exec(function(err, teachers){
            res.json(teachers);
        });
};
