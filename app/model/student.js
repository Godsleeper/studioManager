var mongoose = require('mongoose');
var StudentSchema = require('../schema/student');
var Student = mongoose.model('Student', StudentSchema);

module.exports = Student;