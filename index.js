//This CommonJS pattren   (Angular -> ES6 Pattren)
var express = require('express');
var bodyParser = require('body-parser')

var app = express();

var defaultRouter = require('./routers/default.routes');
var productRouter = require('./routers/product.router');

function callback() {
    console.log("Hello! ExpressJS, Server is running on port 9001")
}

app.use(bodyParser.json());

app.use('/', defaultRouter);
app.use('/', productRouter);
app.listen(9001, callback);