//This CommonJS pattren   (Angular -> ES6 Pattren)
const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const app = express();

var defaultRouter = require('./routers/default.routes');
var productRouter = require('./routers/product.router');


app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/products", () => console.log("DB Conneted"));


//Public
app.use('/', defaultRouter);

function basicAuthentication(req, res, next) {

    let base64String = req.headers["authorization"].replace("Basic ", "");

    console.log(base64String);

    let decodeString = new Buffer.from(base64String, 'base64').toString();

    console.log(decodeString);

    let tokens = decodeString.split(":")

    let username = tokens[0];
    let password = tokens[1];

    if (username === "admin" && password === "password") {
        next()
    } else {
        res.status('404');
        res.send("Unauthorization")
    }
}

//this middleware 
app.use(basicAuthentication) // secure page 'productRouter'  only. if in case you have using 'defaultRouter' page upper, apply secure defaultRouter 

//Private
app.use('/api/products/', productRouter);

app.listen(9001, () => console.log("Hello! ExpressJS, Server is running on port 9001"));