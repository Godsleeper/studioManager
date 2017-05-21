const mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var TeacherSchema = new mongoose.Schema({
    name: String,
    sex: String,
    age: String,
    birthday: String,
    telphone: String,
    email: String,
    birthplace: String,
    position: String,
    workYear: String,
    studio: String,
    phone: String,
    address: String,
    user: {
        type: ObjectId,
        ref: 'User'
    },
    education: [{
        type: ObjectId,
        ref: 'Education'
    }]

});



module.exports = TeacherSchema;