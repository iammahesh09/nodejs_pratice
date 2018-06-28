var express = require('express')

var routes = express.Router();

var productsCtrl = require('../controllers/products.ctrl');

routes.get('/', productsCtrl.get);
routes.get('/:id', productsCtrl.getId);
routes.post('/', productsCtrl.addProduct);
routes.delete('/:id', productsCtrl.deleteProduct);

module.exports = routes;