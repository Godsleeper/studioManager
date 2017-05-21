var User = require('../model/user');
var Job = require('../model/job');
var Student = require('../model/student');

exports.addInfo = function (req, res) {
    var { role, _id } = req.session.user;
    if (role === 'student') {
        User.findOne({_id: _id})
            .exec(function(err, user){
                if (!user.student) {
                    res.json({status: 'NoInfo'});
                }
                else {
                    var _job = req.body.job;
                    _job.student = user.student;
                    var job = new Job(_job);
                    job.save(function(err, job){
                        if (err) {
                            console.log(err);
                        }
                        Student
                            .findOne({_id: job.student})
                            .exec(function(err, student){
                                if (err) {
                                    console.log(err);
                                    return;
                                }
                                student.job.push(job._id);
                                Student.update({_id: student._id}, {
                                    $set: {job: student.job}
                                }, function(err){
                                    if (err) {
                                        console.log(err);
                                        return;
                                    }
                                    res.json({status: 'Success'});
                                });
                            });
                    })
                }
        });
    }
    else {
        res.json({status: 'NotStudent'});
    }
};

exports.getInfoById = function (req, res) {
    var studentId = req.session.user.student;
    Student
        .findOne({_id: studentId})
        .populate('job')
        .exec(function(err, student){
            if (err) {
                console.log(err);
                return;
            }
            res.json({jobs: student.job});
        });
};

exports.modifyInfo = function (req) {
    var _info = req.body.info;
    Job
        .findOne({_id: _info.jobId})
        .exec(function(err, job){
            var _id = job._id;
            delete job._id;
            Job.update({_id: _id}, _info, function(err){
                if (err) {
                    console.log(err);
                }
            });
        });
};

// exports.jobRemove = function (req) {
//     var jobId = req.query.jobId;
//     var studentId = req.session.user.student;
//     Job
//         .remove({_id: jobId})
//         .then(function(err, job){
//             if (err) {
//                 console.log(err);
//                 return;
//             }
//             Student
//                 .findOneAndUpdate({_id: studentId},{
//                     pull: {job: jobId}
//                 }, function(err){
//
//                 });
//
//
//         });
// };

exports.jobRemove = function (req) {
    var studentId = req.session.user.student;
    Student.update({_id: studentId}, {$set:{job: []}},function(err){});
};