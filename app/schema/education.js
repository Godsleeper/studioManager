const mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var EducationSchema = new mongoose.Schema({
    student: {
        type: ObjectId,
        ref: 'Student'
    },
    teacher: {
        type: ObjectId,
        ref: 'Teacher'
    },
    grade: String,
    project: String,
    paper: String,
    social: String,
    exercise: String,
    comment: String,
    remark: String
});


module.exports = EducationSchema;