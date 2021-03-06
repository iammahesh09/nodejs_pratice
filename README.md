
Welcome NodejS
--------------

Create Nodejs

    var http = require('http');

    var server = http.createServer(handellData);

    server.listen(9000, 'Hello! NodeJs')


    Note :- 9000 is Port number (user choice)



 "Angular" module and "Nodejs" Module difference

    angular module is ES6 Module

        import {Module} from 'modulePath';

    Nodejs module is Common Module

        var variable_name = require('moduleName');


nodemon
-------

    nodemon reload, automatically.

    Nodemon is a utility that will monitor for any changes in your source and automatically restart your server. Perfect for development. Install it using npm.

    Features  
    --------  
        Automatic restarting of application.
        Detects default file extension to monitor.
        Default support for node & coffeescript, but easy to run any executable (such as python, make, etc).
        Ignoring specific files or directories.
        Watch specific directories.
        Works with server applications or one time run utilities and REPLs.
        Requirable in node apps.
        Open source and available on github.

   Install ->  "npm install -g nodemon"



Express JS Install
------------------
    
    Express.js, or simply Express, is a web application framework for Node.js,
    
    ExpressJS is a web application framework that provides you with a simple API to build websites, web apps and back ends. With ExpressJS, you need not worry about low level protocols, processes, etc.

    Installing
    ----------

        Step -1 :
             Use the npm init command to create a package.json file for your application.

                $ npm init 

                Or

                $ npm init - y

        Step -2 :

            Now install Express in the "node" directory and save it in the dependencies list

            $ npm install express --save



=>  'require' is "Global Scope"

    var express = require('express');


create controllers folder


    Create Object format Example
    ----------------------------

        product.ctrl.js

            var productsCtrl= {
                get:functon(req, res){
                    var products = [
                        {id:100, brand:"Nokia", model:'8', price:799, isStock:true},
                        {id:200, brand:"Oneplus", model:'6', price:699, isStock:true}
                    ]

                    res.json(products)
                }                
            }

            module.export = productsCtrl;

        
        index.js

            var express = require('express');

            var productsCtrl = require('./controllers/products.ctrl');

            var app = express();

            app.listen(9001, callback);

            app.get('/products', productsCtrl.get)


    Create Class format and convert object Example
    ---------------------------------------------

        product.ctrl.js

            class defaultCtrl {
                get(req, res) {
                    res.send("Hello! ExpressJS");
                }
            }

            module.exports = new defaultCtrl();

        
        index.js

            var express = require('express');

            var productsCtrl = require('./controllers/products.ctrl');

            var app = express();

            app.listen(9001, callback);

            app.get('/products', productsCtrl.get)


body-parser
-----------
    Node.js body parsing middleware.

    body-parser extract the entire body portion of an incoming request stream and exposes it on req.body . The middleware was a part of Express.js earlier but now you have to install it separately. This body-parser module parses the JSON, buffer, string and URL encoded data submitted using HTTP POST request.

    Installation
    
        $ npm install body-parser









MongoDB
-------

    install MongoDb and 

        1.Start MongoDB.

            > "C:\Program Files\MongoDB\Server\4.0\bin\mongod.exe"


        2. Verify that MongoDB has started successfully

            check - [initandlisten] waiting for connections on port 27017


        3. Connect to MongoDB

            > "C:\Program Files\MongoDB\Server\4.0\bin\mongo.exe"
            
            
            Set 
            ---
                Go to Control Panel > "System & Security" > "System" > "Advanced System Settings" > "Environment Variables" > navigate to the Path variable hit "Edit" and "add" ; 
                
                C:\Program Files\MongoDB\Server\4.0\bin" to the Path (or whatever the directory name is where MongoDB is located (the semi-colon delimits each directory).

            
        After
        -----
            > net start Mongodb    -> start Admin level
            
            > mongo
            
            
            
            stop  mongodb
            --------------
                > net stop mongodb



Connecting MongoDB to Node
---------------------------

    use Mongoose 
    
        - Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.

    
    install Mongoose

        $ npm install mongoose

    
        Importing

            // Using Node.js `require()`
            const mongoose = require('mongoose');


            mongoose.connect("mongodb://localhost:27017", () => console.log("DB Conneted"));


    GET — retrieve a particular resource’s object or list all objects

    POST — create a new resource’s object

    PATCH — make a partial update to a particular resource’s object

    PUT — completely overwrite a particular resource’s object

    DELETE — remove a particular resource’s object




change callback's to promises
-----------------------------

    In real time 3rd party plagins prefer to "Promises"

    Ex:-  
    
    get: (req, res) => {
        //Callback using
        Product.find(function (error, products) {

            if (error) {
                res.status(500);
                res.send("Internal Server Error");
            } else {
                res.status(200);
                res.json(products);
            }
        });

    },


    get: (req, res) => {

        //Promises using        
        Product.find().exec()
            .then(function (products) {
                res.status(200);
                res.json(products);
            })
            .catch(function (error) {
                res.status(500);
                res.send("Internal Server Error");
            })
    },



Token Base Authentication
-------------------------

    1. First Set model

    2. Create User Service

    3. Create User Controller

    4. set middile ware in index,js


    5. create user register  method in user

        5.1 convert password encrypt(hashing) type

            Install -> npm install --save bcryptjs
            
                Fallow : https://www.npmjs.com/package/bcrypt

                
                note :  password protect encrypt and hashing
                        hashing     -> more secure
                        encryption

                        http://www.differencebetween.info/difference-between-hashing-and-encryption

                        https://www.quora.com/What-is-the-difference-between-hashing-and-encryption

    6. create user login  method in user

    7. Create web token

        install - npm i jsonwebtoken

           Fallow : https://www.npmjs.com/package/jsonwebtoken




mlab - Database
---------------
    create database and user permistions

    connect databse

        To connect using the mongo shell:
            
             => mongo ds135061.mlab.com:35061/mobile-products -u <dbuser> -p <dbpassword>
        
        To connect using a driver via the standard MongoDB URI (what's this?):

            => mongodb://<dbuser>:<dbpassword>@ds135061.mlab.com:35061/mobile-products

config Database
---------------

    change localhost database connection to mlab database



PORT Environments
-----------------
    In many environments (e.g. Heroku), and as a convention, you can set the environment variable PORT to tell your web server what port to listen on.

    So "process.env.PORT || 3000" means: whatever is in the environment variable PORT, or 3000 if there's nothing there.

    So you pass that app.listen, or to app.set('port', ...), and that makes your server be able to accept a parameter from the environment what port to listen on.

    If you pass 3000 hard-coded to app.listen(), you're always listening on port 3000, which might be just for you, or not, depending on your requirements and the requirements of the environment in which you're running your server.


    var port = process.env.port || 3000;

    app.listen(port);



Deployment Ready
----------------
    - first set PORT
    - set "node index.js" start script
    - set engines -- what is use node verstion



Files upload
------------

    Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files. 
    
        $ npm install --save multer

            Follow - https://www.npmjs.com/package/multer




express.static()
----------------
    http://www.tutorialsteacher.com/nodejs/serving-static-files-in-nodejs



True Log - An Http Request Logger
---------------------------------
    
    npm install true-log --save

        Follow : https://www.npmjs.com/package/true-log


    //register it as a middleware
        
        app.use(trueLog());


    Log Level
    ---------
        Tiny
        ----
            var trueLog = require('true-log');
            app.use(trueLog({level:'tiny'}));
            
            #Logs: Client IP, Date, Method, Url, UserAgent

        Full
        ----
            app.use(trueLog({level:'full'}));
            
            #Logs: Client IP, Date, Method, Url, UserAgent, Response Time and Status code


        ## Logging to File By default logs would be written to console but you can redirect logs to a file by passing a writeable stream
                var fs = require('fs')
                var ws = fs.createWriteStream(path.join(__dirname, "log.txt"), { flags: 'a' });
                app.use(trueLog({level:'full',stream:ws}));




Review Avg Calculation - (Aggregation - MongoDB)
------------------------------------------------

    https://docs.mongodb.com/manual/aggregation/