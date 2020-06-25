const mongoose = require('mongoose');

const songSchema = mongoose.Schema({
    title: { type: String, required: true },
    artist: { type: String, required: true },
    songPath: { type: String, require: true },
    // creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Song', songSchema);