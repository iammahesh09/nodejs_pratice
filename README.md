
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


