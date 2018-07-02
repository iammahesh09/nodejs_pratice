const mongoose = require('mongoose');

module.exports = mongoose.model("products", {
    brand: String,
    model: String,
    price: Number,
    isStock: Boolean
})