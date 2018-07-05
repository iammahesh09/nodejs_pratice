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
        return Product.findByIdAndUpdate(id, {$set: {
            brand: data.brand,
            model: data.model,
            price: data.price,
            inStock: data.inStock
        }}).exec()
    }   

    patchProduct(id, data) {
        Product.findById(id, function (err, product) {
          if (product) {
            for (var key in data) {
              product[key] = data[key];
            }
            return Product.findByIdAndUpdate(id, product).exec();
          }
        });
      }


}

module.exports = new ProductServices();