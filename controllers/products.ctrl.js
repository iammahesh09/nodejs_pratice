const Product = require('../models/products.model');


const productCtrl = {
    get: (req, res) => {

        Product.find(function (error, products) {

            if (error) {
                res.status(500);
                res.send("Internal Server Error");
            } else {
                res.status(200);
                res.json(products);
            }
        });

    },

    getId: (req, res) => {

        //let id=parseInt(req.params.id);        
        let id = req.params.id;

        //Product.findById(id, function (error, product) {   // this is one option
        Product.findOne({
            _id: id
        }, function (error, product) {
            if (product) {
                res.status(200);
                res.send(product)
            } else {
                res.status(404);
                res.send("Not Found")
            }
        })


    },

    addProduct: (req, res) => {

        let products = new Product(req.body);

        products.save(function (error, saveProduct) {
            if (error) {
                res.status(500);
                res.send("Internal Server Error");
            } else {
                res.status(200);
                res.json(products);
            }
        })

    },

    deleteProduct: (req, res) => {
        let id = req.params.id;

        Product.findByIdAndRemove(id, function (error) {
            if (error) {
                res.status(500);
                res.send("Internal Server Error")
            } else {
                res.status(204); //No Content
                res.send();
            }
        });

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
                res.status(404);
                res.send("Updated")
            }
        })


        res.status(204); //No Content
        res.send();
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