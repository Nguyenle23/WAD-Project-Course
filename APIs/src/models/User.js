const Joi = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: { type: String },
    password: { type: String },
    gender: { type: String, default: '' },
    location: { type: String, default: '' },
    fullname: { type: String, default: '' },
    phonenumber: { type: String },
    avatar: { type: String, default: '' },
    isAdmin: { type: Boolean, default: false },
    isDestroy: { type: Boolean, default: false },
    joinDate: { type: String, default: new Date().toLocaleString() },
    beginDate: { type: String },
    expiredDate: { type: String },
    isActive: { type: Boolean, default: false },
    price: { type: String },
}, {
    timestamps: true
});
// module.exports = mongoose.model('Users', User);

const User = mongoose.model('User', userSchema);

const validateUser = (user) => {
    const schema = Joi.object({
        email: Joi.string().email(),
        password: Joi.string().min(8).max(30),
        gender: Joi.string().default(''),
        location: Joi.string().default(''),
        fullname: Joi.string().default(''),
        phonenumber: Joi.string().default(''),
        avatar: Joi.string().default(''),
        isAdmin: Joi.boolean().default(false),
        isDestroy: Joi.boolean().default(false),
        joinDate: Joi.string().default(new Date().toLocaleString()),
        beginDate: Joi.string(),
        expiredDate: Joi.string(),
        isActive: Joi.boolean().default(false),
        price: Joi.string(),
    })
    return schema.validate(user)
}

module.exports = { validateUser, User };