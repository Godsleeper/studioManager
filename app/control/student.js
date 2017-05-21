var User = require('../model/user');
var Student = require('../model/student');

exports.personInfoAdd = function (req, res) {
    var _student = req.body.info;
    _student.user = req.session.user._id;
    User.findOne({_id: _student.user}, function(err, user){
        if (err) {
            console.log(err);
            return;
        }
        if (!user.student) {
            var student = new Student(_student);
            student.save(function(err, student){
                if (err) {
                    console.log(err);
                }
                User.update({_id: student.user}, {
                    $set: {student: student._id}
                }, function(err){
                    if (err) {
                        console.log(err);
                    }
                    User.findOne({_id: user._id}, function(err, user){
                        req.session.user = user;
                        res.json({status: 'success'});
                    });
                });
            });
        } else {
            res.json({status: 'exist'});
        }
    });
};


exports.personInfoGet = function (req, res) {
    var id = req.session.user._id;
    User.findOne({_id: id})
        .populate('student')
        .exec(function(err, user){
            if (err) {
                console.log(err);
            }
            user.student && res.json(user.student);
        });
};

exports.personInfoAll = function (req, res) {
    Student.find({})
        .exec(function(err, students){
            if (err) {
                console.log(err);
            }
            res.json({info: students});
        })
};

exports.personInfoModify = function (req, res) {
    var _info = req.body.info;
    var studentId = req.session.user.student;
    if (!studentId) {
        return res.json({status: 'NoInfo'});
    }
    Student
        .findOne({_id: studentId})
        .exec(function(err, student){
            var _id = student._id;
            delete student._id;
            Student.update({_id:_id}, _info, function(err){
                if (err) {
                    console.log(err);
                }
                res.json({status: 'Success'});
            })
        })
};

exports.getAllStudents = function (req, res) {
    Student
        .find({})
        .populate('job')
        .exec(function(err, students){
            res.json(students);
        });
};