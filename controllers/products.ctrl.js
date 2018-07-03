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
        let id = +req.params.id;
        let product;

        for (let i = 0; i < products.length; i++) {
            if (products[i].id === id) {
                product = products[i];
            }
        }

        if (product) {
            res.status(200);
            res.json(product);
        } else {
            res.status(500);
            res.send("Not Found")
        }

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

        let id = +req.params.id;
        let product;

        for (let i = 0; i < products.length; i++) {
            if (products[i].id === id) {
                products[i].model = product.model;
                products[i].brand = product.brand;
                products[i].price = product.price;
                products[i].isStock = product.isStock;
            }
        }

        res.status(204); //No Content
        res.send();
    }
}


module.exports = productCtrl;