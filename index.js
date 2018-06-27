//This CommonJS pattren   (Angular -> ES6 Pattren)
var express = require('express');

var productsCtrl = require('./controllers/products.ctrl');

var defaultCtrl = require('./controllers/default.ctrl');

var app = express();

function callback() {
    console.log("Hello! ExpressJS, Server is running on port 9001")
}

app.listen(9001, callback);

app.get('/', defaultCtrl.get)

app.get('/users', function (req, res) {
    res.send('Show Users List');
})

app.get('/products', productsCtrl.get)