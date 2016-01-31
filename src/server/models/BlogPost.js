import mongoose from 'mongoose';

let blogPostSchema = mongoose.Schema({
    username: String,
    password: String,
    level: {type: Number, default: 1},
    experience: {type: Number, default: 0},
    nextLevelExperience: {type: Number, default: 100},
    wins: {type: Number, default: 0},
    loses: {type: Number, default: 0},
    levels: [{type: mongoose.Schema.Types.ObjectId, ref: 'Level'}]
});

blogPostSchema.methods.validPassword = function(password) {
    return this.password === password;
};

let model = mongoose.model('BlogPost', blogPostSchema);

export default model;