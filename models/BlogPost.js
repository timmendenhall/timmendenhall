var mongoose = require('mongoose');

var blogPostSchema = mongoose.Schema({
    title: String,
    body: String,
    id: String,
    created: {type: Date, default: Date.now},
    lastModified: Date
});

var model = mongoose.model('BlogPost', blogPostSchema);

module.exports = model;