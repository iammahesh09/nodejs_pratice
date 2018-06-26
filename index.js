var http = require('http');


function handleRequest(req, res) {

    switch (req.url) {
        case '/':
            res.write("Hello NodeJS Web");
            res.end();
            break;

        case '/users':
            res.write("Users List");
            res.end();
            break;

        case '/products':
            res.write("Show Products");
            res.end();
            break;

        default:
            res.write("Page Error");
            res.end();
            break;
    }
}

var server = http.createServer(handleRequest);

server.listen(9000, callback)


function callback() {
    console.log("Hello NodeJS")
}