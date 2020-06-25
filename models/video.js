const mongoose = require('mongoose');

const videoSchema = mongoose.Schema({
    title: { type: String, required: true },
    creator: { type: String, required: true },
    duration: { type: String, required: true },
    videoPath: { type: String, require: true },
    // creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Video', videoSchema);