var mongoose = require('mongoose');
var TeacherSchema = require('../schema/teacher');
var Teacher = mongoose.model('Teacher',TeacherSchema);

module.exports = Teacher;