//This CommonJS pattren   (Angular -> ES6 Pattren)
const express = require('express');
const bodyParser = require('body-parser')

const app = express();

var defaultRouter = require('./routers/default.routes');
var productRouter = require('./routers/product.router');


app.use(bodyParser.json());

app.use('/', defaultRouter);
app.use('/api/products/', productRouter);

app.listen(9001, () => console.log("Hello! ExpressJS, Server is running on port 9001"));