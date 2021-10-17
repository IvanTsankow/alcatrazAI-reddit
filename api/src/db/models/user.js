const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { hashPassword } = require('./../helpers/hash-password');

const UserSchema = new Schema({
    username: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true }
});

UserSchema.pre('save', async function (next) {
    try {
        const user = this;

        if (!user.isModified('password')) return next();

        user.password = await hashPassword(user.password);
        next();
    } catch (error) {
        next(err);
    }
});


const User = mongoose.model('User', UserSchema)

module.exports = User;