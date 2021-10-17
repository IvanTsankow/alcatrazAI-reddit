const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ThreadSchema = new Schema({
    name: { type: String, required: true },
    comments_total: { type: Number, required: true },
    likes: { type: Number, required: true },
    dislikes: { type: Number, required: true },

});

const Thread = mongoose.model('Thread', ThreadSchema)

module.exports = Thread;