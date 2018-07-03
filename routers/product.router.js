const express = require('express')

const routes = express.Router();

var productsCtrl = require('../controllers/products.ctrl');

routes.get('/', productsCtrl.get);
routes.get('/:id', productsCtrl.getId);
routes.post('/', productsCtrl.addProduct);
routes.delete('/:id', productsCtrl.deleteProduct);
routes.put('/:id', productsCtrl.updateProduct);
routes.patch('/:id', productsCtrl.patchData);

module.exports = routes;