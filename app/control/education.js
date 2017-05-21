var Education = require('../model/education');
var Teacher = require('../model/teacher');

exports.studentAdd = function (req, res) {
    var teacherId = req.session.user.teacher;
    if (!teacherId) {
        return res.json({status: 'NoInfo'});
    }
    var _eduInfo = req.body.data;
    _eduInfo.teacher = teacherId;
    var education = new Education(_eduInfo);
    education.save(function(err, education){
        var educationId = education._id;
        // 教师数据库
        Teacher.findOne({_id: teacherId}, function(err,teacher){
            teacher.education.push(educationId);
            Teacher.update({_id: teacherId}, {
                $set: {education: teacher.education}},
                function(err){
                    if (err) {
                        console.log(err);
                        return;
                    }
                    res.json({status:'Success'});
                });
        });
    });
};

exports.getStudentById = function (req, res) {
    var teacherId = req.session.user.teacher;
    Teacher
        .findOne({_id: teacherId})
        .populate({
            path: 'education',
            model: 'Education',
            populate: {
                path: 'student',
                model: 'Student'
            }
        })
        .exec(function(err, teacher){
            res.json({students: teacher.education});
        });
};

exports.modifyStudent = function (req) {
    var _student = req.body.data;
    var studentId = _student.studentId;
    Education
        .findOne({_id: studentId})
        .exec(function(err, education){
            var _id = education._id;
            delete education._id;
            Education.update({_id: _id}, _student, function(err){
                if (err) {
                    return;
                }
            });
        })
};