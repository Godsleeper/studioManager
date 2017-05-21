const mongoose = require('mongoose');

var PaperSchema = new mongoose.Schema({
    name: String,
    author: String,
    summary: String,
    keywords: [],
    time: String,
    content: String,
    reference: String,
    type: String
});


module.exports = PaperSchema;