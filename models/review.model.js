const mongoose = require('mongoose');

module.exports = mongoose.model('reviews', {

    subject: {
        type: String,
        required: true
    },
    message: {
        type: String
    },
    rating: {
        type: Number
    },
    lastUpload: {
        type: Date,
        defalut: Date.now
    }



})