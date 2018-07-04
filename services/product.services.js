const Product = require('../models/products.model');

class ProductServices{

    getProduct(id){
        return Product.find().exec()
    }

}

module.exports = new ProductServices();