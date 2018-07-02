//This CommonJS pattren   (Angular -> ES6 Pattren)
const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const app = express();

var defaultRouter = require('./routers/default.routes');
var productRouter = require('./routers/product.router');


app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/products", () => console.log("DB Conneted"));

app.use('/', defaultRouter);
app.use('/api/products/', productRouter);

app.listen(9001, () => console.log("Hello! ExpressJS, Server is running on port 9001"));