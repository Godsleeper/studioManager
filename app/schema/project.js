const mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var ProjectSchema = new mongoose.Schema({
    name: String,
    summary: String,
    owner: {
        type: ObjectId,
        ref: 'Teacher'
    },
    time: [],
    studio: String,
    rate: String,
    comment: String,
    level: String,
    amount: String,
    staff: [{
        type: ObjectId,
        ref: 'Student'
    }]
});


module.exports = ProjectSchema;