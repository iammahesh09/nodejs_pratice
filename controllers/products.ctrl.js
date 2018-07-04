const Product = require('../models/products.model');
const productService = require('../services/product.services')

const productCtrl = {
    get: async (req, res) => {

        try{
            let product = await productService.getProduct()
            res.status(200).json(product)
        }
        catch(err){
            res.status(500).send("Internal Server Error")
        }
    },

    getId: async (req, res) => {

        try{
            let id = req.params.id;
            let product = await productService.getProductId(id)
            res.status(200).send(product)
        }
        catch(error){
            res.status(404).send("Not Found")
        }

    },

    addProduct: async (req, res) => {

        try{
            let saveProduct =await productService.createProduct(req.body)
            res.status(201).json(saveProduct)
        }
        catch(error){
            res.status(500).send("Internal Server Error")
        }
    },

    deleteProduct: async (req, res) => {
        try{
            let id = req.params.id;

            let rmProduct =await productService.removeProduct(id)
            res.status(204).send(rmProduct)
        }
        catch(error){
            res.status(500).send("Internal Server Error")
        }
    },

    updateProduct:async (req, res) => {

        try{
            let id = req.params.id;

            let product = await productService.updateProduct(id, req.body)
            res.status(200);
            res.send(product)
        }
        catch(error){
            res.status(204); //No Content
            res.send(error);
        }

    },

    patchData: (req, res) => {

        let id = req.params.id;
        delete req.params._id;

        Product.findById(id, function (error, product) {
            if (product) {
                for (var key in req.body) {
                    product[key] = req.body[key];
                }

                Product.findByIdAndUpdate(id, product, function (err) {
                    res.status(204);
                    res.send()
                });
            } else {
                res.status(404);
                res.send("Not Found")
            }
        })
    }

}


module.exports = productCtrl;