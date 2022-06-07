const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const List = new Schema({
    title: { type: String, required: true, unique: true },
    type: { type: String },
    genre: { type: String },
    content: { type: Array },
    isDestroy: { type: Boolean, default: false },
}, {
    timestamps: true
})

module.exports = mongoose.model('Lists', List);