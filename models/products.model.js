const mongoose = require('mongoose');

module.exports = mongoose.model("products", {
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    isStock: {
        type: Boolean,
        default:false
    },
    lastUpdated: {
        type: Date,
        default: Date.now
    }
})