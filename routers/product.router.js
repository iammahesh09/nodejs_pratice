const express = require('express')
const multer = require('multer')
var cors = require('cors')
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
            req.body.modelImage = file_name;
            cb(null, file_name)
        }
    }
})

let upload = multer({
    storage: storage
})

routes.get('/', cors(), productsCtrl.get);
routes.get('/:id', cors(), productsCtrl.getId);
routes.post('/', cors(), upload.single('modelImage'), productsCtrl.addProduct);
routes.delete('/:id', cors(), productsCtrl.deleteProduct);
routes.put('/:id', cors(), productsCtrl.updateProduct);
routes.patch('/:id', cors(), productsCtrl.patchData);

module.exports = routes;