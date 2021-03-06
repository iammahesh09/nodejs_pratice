const mongoose = require('mongoose');

function priceValidator() {
   // return value >= 100;
}

module.exports = mongoose.model("products", {
    brand: {
        type: String,
        required: [true, "Brand is required"],
        min: 2,
        max:20
    },
    model: {
        type: String,
        required: [true, "Model is required"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        // validate: {
        //     validator: priceValidator
        // }
    },
    inStock: {
        type: Boolean,
        default: true
    },
    lastUpdated: {
        type: Date,
        default: Date.now
    },
    modelImage:{
        type: String
    }
})