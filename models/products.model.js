const mongoose = require('mongoose');

module.exports = mongoose.model("products", {
    brand: {
        type: String,
        required: [true, "Brand is required"]
    },
    model: {
        type: String,
        required: [true, "Model is required"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"]
    },
    isStock: {
        type: Boolean,
        default: false
    },
    lastUpdated: {
        type: Date,
        default: Date.now
    }
})