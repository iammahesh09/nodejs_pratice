var express = require('express')

var routes = express.Router();

var productsCtrl = require('../controllers/products.ctrl');

routes.get('/products', productsCtrl.get)

module.exports = routes;