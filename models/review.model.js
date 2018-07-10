const mongoose = require('mongoose');

module.exports = mongoose.model('reviews', {
    productId: {
        type: String,
        required: true
    },
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