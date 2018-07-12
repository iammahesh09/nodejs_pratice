const express = require('express')
const multer = require('multer')

const routes = express.Router();

var productsCtrl = require('../controllers/products.ctrl');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'FilesDrive')
    },
    filename: function (req, file, cb) {
        if (file.originalname.endsWith([".svg"])) {
            cb("Svg file not allowed")
        } else {
            let file_name = Date.now() + '-' + file.originalname
            req.body.model_image = file_name;
            cb(null, file_name)
        }
    }
})

let upload = multer({
    storage: storage
})

routes.get('/', productsCtrl.get);
routes.get('/:id', productsCtrl.getId);
routes.post('/', upload.single('model_image'), productsCtrl.addProduct);
routes.delete('/:id', productsCtrl.deleteProduct);
routes.put('/:id', productsCtrl.updateProduct);
routes.patch('/:id', productsCtrl.patchData);

module.exports = routes;