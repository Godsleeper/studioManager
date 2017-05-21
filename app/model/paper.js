var mongoose = require('mongoose');
var PaperSchema = require('../schema/paper');
var Paper = mongoose.model('Paper', PaperSchema);

module.exports = Paper;