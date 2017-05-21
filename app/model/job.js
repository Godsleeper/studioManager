var mongoose = require('mongoose');
var JobSchema = require('../schema/job');
var Job = mongoose.model('Job', JobSchema);

module.exports = Job;