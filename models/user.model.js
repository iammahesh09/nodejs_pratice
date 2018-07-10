const mongoose = require('mongoose');

module.exports = mongoose.model('User', {
    username: {
        type: String,
        unique: true,
        required: [true, "Username is required"]
    },
    password: {
        type: String,
        required: true
    },
    lastUpdate: {
        type: Date,
        default: Date.now
    },
    active: {
        type: Boolean,
        default: true
    }
})