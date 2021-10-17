const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    author: { type: String, required: true },
    body: { type: String, required: true },
    likes: { type: Number, required: true },
    dislikes: { type: Number, required: true },
    thread_id: { type: String, required: true },

});

const Comment = mongoose.model('Comment', CommentSchema)

module.exports = Comment;