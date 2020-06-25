const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
    title: { type: String, required: true },
    imagePath: { type: String, require: true },
    // creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Image', imageSchema);