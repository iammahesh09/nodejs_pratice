//This CommonJS pattren   (Angular -> ES6 Pattren)
const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const multer = require('multer')


const app = express();
const config = require('./config')

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

mongoose.connect(config.connectUrl, () => console.log("DB Conneted"));

//server static resources directly by specifying the folder name where you have stored your static resources.
app.use(express.static("FilesDrive/"));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // this is files location path
        cb(null, 'FilesDrive')
    },
    filename: function (req, file, cb) {
        // this is upload file name change fieldname and date
        //cb(null, file.fieldname + '-' + Date.now())

       // this is upload file original name
       let file_name = Date.now()+'-'+file.originalname
        cb(null, file_name)
    }
})

let upload = multer({
    storage: storage
})

//Ex Syntax
//app.get('/route', middleware, handlar)

// "model_image" is model key and FilesDrive is Files upload path
app.post('/upload', upload.single('model_image'), function (req, res) {
    res.status(201).send("File Uploaed")
})


//Public
app.use('/', defaultRouter);

//this is Token middleware
app.use('/api/users', userRouter)

//this is Basic middleware 
//app.use(middleware.basicAuthentication) // secure page 'productRouter'  only. if in case you have using 'defaultRouter' page upper, apply secure defaultRouter 

//use call middleware
//app.use(middleware.tokenAuth)

//Private
app.use('/api/products', productRouter);

//Private
app.use('/api/reviews', reviewRouter)


let PORT = process.env.PORT || 9001

app.listen(PORT, () => console.log(`Hello! ExpressJS, Server is running on port ${PORT}`));