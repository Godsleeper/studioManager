const mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var JobSchema = new mongoose.Schema({
    name: String,
    address: String,
    category: String,
    range: [],
    position: String,
    content: String,
    student: {
        type: ObjectId,
        ref: 'Student'
    }
});


module.exports = JobSchema;