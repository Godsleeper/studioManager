var mongoose = require('mongoose');
var EducationSchema = require('../schema/education');
var Education = mongoose.model('Education', EducationSchema);

module.exports = Education;