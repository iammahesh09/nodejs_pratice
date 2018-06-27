//This CommonJS pattren   (Angular -> ES6 Pattren)
var express = require('express');

var productsCtrl = require('./controllers/products.ctrl');

var app = express();

function callback() {
    console.log("Hello! ExpressJS, Server is running on port 9001")
}

app.listen(9001, callback);

app.get('/', function(req, res){
    res.send("Hello! ExpressJS");
})

app.get('/users', function(req, res){
    res.send('Show Users List');
})

app.get('/products', productsCtrl.get)