const Product = require('../models/products.model');


const productCtrl = {
    get: (req, res) => {

        Product.find().exec()
            .then((products) => res.status(200).json(products))
            .catch((error) => res.status(500).send("Internal Server Error"))
    },

    getId: (req, res) => {

        let id = req.params.id;

        Product.findById(id).exec()
            .then((product) => res.status(200).send(product))
            .catch((error) => res.status(404).send("Not Found"))
    },

    addProduct: (req, res) => {

        var product = new Product(req.body);

        product.save()
            .then((saveProduct) => res.status(201).json(saveProduct))
            .catch((error) => res.status(500).send(error))
    },

    deleteProduct: (req, res) => {
        let id = req.params.id;

        Product.findByIdAndRemove(id).exec()
            .then((product) => res.status(204).send(product))
            .catch((error) => res.status(500).send("Internal Server Error"))
    },

    updateProduct: (req, res) => {

        let id = req.params.id;

        Product.findByIdAndUpdate(id, {
            $set: {
                brand: req.body.brand,
                model: req.body.model,
                price: req.body.price,
                inStock: req.body.inStock
            }
        }, function (error, product) {
            if (product) {
                res.status(200);
                res.send(product)
            } else {
                res.status(204); //No Content
                res.send();
            }
        })

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