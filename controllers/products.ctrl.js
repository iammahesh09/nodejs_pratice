const Product = require('../models/products.model');
const Review = require('../models/review.model');
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

            Review.find({productId:id},{ __v:0, productId:0, _id:0 }).exec()
                .then(function(reviews){
                    //immutable
                    let jsonProduct = product.toJSON();

                    jsonProduct.reviews=reviews;

                    res.status(200).json(jsonProduct)
                })
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

    patchData:async (req, res) => {

        let id = req.params.id;
        delete req.params._id;
        await productSvc.patch(id, req.body);
        res.status(204).send();
    }

}


module.exports = productCtrl;