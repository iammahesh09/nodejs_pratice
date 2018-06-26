
Welcome NodejS


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
        Automatic restarting of application.
        Detects default file extension to monitor.
        Default support for node & coffeescript, but easy to run any executable (such as python, make, etc).
        Ignoring specific files or directories.
        Watch specific directories.
        Works with server applications or one time run utilities and REPLs.
        Requirable in node apps.
        Open source and available on github.

   Install ->  "npm install -g nodemon"
