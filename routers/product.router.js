var express = require('express')

var routes = express.Router();

var productsCtrl = require('../controllers/products.ctrl');

routes.get('/products', productsCtrl.get);
routes.get('/products/:id', productsCtrl.getId);
routes.post('/products', productsCtrl.addProduct);

module.exports = routes;