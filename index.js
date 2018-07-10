//This CommonJS pattren   (Angular -> ES6 Pattren)
const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const app = express();

var defaultRouter = require('./routers/default.routes');
var productRouter = require('./routers/product.router');

//Basic authorization
//const middleware = require('./authorization/basicAuth')

//Token authorization
const middleware = require('./authorization/tokenAuth')

//user router
const userRouter = require('./routers/user.routes');

//Review Router
const reviewRouter = require('./routers/review.router');

app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/products", () => console.log("DB Conneted"));


//Public
app.use('/', defaultRouter);

//this is Token middleware
app.use('/api/users', userRouter)

//this is Basic middleware 
//app.use(middleware.basicAuthentication) // secure page 'productRouter'  only. if in case you have using 'defaultRouter' page upper, apply secure defaultRouter 

//use call middleware
app.use(middleware.tokenAuth)

//Private
app.use('/api/products', productRouter);

//Private
app.use('/api/reviews', reviewRouter)

app.listen(9001, () => console.log("Hello! ExpressJS, Server is running on port 9001"));