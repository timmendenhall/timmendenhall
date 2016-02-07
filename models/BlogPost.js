import mongoose from 'mongoose';

let blogPostSchema = mongoose.Schema({
    title: String,
    description: String,
    body: String,
    id: String,
    created: {type: Date, default: Date.now},
    lastModified: Date,
    tags: { type: [String], index: true } // field level
});

let model = mongoose.model('BlogPost', blogPostSchema);

export default model;