const mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var StudentSchema = new mongoose.Schema({
    name: String,
    sex: String,
    age: String,
    birthday: String,
    telphone: String,
    email: String,
    birthplace: String,
    degree: String,
    studio: String,
    qq: String,
    identity: String,
    wechat: String,
    schoolNumber: String,
    range: [],
    user: {
        type: ObjectId,
        ref: 'User'
    },
    job: [{
        type: ObjectId,
        ref: 'Job'
    }]
});


module.exports = StudentSchema;