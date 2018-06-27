//This CommonJS pattren   (Angular -> ES6 Pattren)
var express = require('express');

var app = express();

function callback() {
    console.log("Hello! ExpressJS, Server is running on port 9001")
}

app.listen(9001, callback);