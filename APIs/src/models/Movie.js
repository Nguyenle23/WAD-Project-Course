const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Movie = new Schema({
    title: { type: String, required: true, unique: true },
    duration: { type: String },
    description: { type: String },
    img: { type: String },
    imgTitle: { type: String },
    thumbnail: { type: String },
    trailer: { type: String },
    video: { type: String },
    year: { type: String },
    limit: { type: String },
    genre: { type: String },
    isSeries: { type: Boolean, default: false },
    isDestroy: { type: Boolean, default: false },
    subtitle: {
        type: Object,
        default: {
            en: { type: String, default: '' },
            vi: { type: String, default: '' },
            indo: { type: String, default: '' },
        }
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Movies', Movie);