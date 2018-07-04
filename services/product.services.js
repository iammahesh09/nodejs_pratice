const Product = require('../models/products.model');

class ProductServices{

    getProduct(){
        return Product.find().exec()
    }

    getProductId(id){
        return Product.findById(id).exec()
    }

    createProduct(data){
        return Product.create(data)
    }

    removeProduct(id){
        return Product.findByIdAndRemove(id).exec()
    }

    updateProduct(id, data){
        return Product.findByIdAndUpdate(id, data)
    }   



}

module.exports = new ProductServices();