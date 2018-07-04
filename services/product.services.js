const Product = require('../models/products.model');

class ProductServices{

    getProduct(){
        return Product.find().exec()
    }

    getProductId(id){
        return Product.findById(id).exec()
    }

}

module.exports = new ProductServices();