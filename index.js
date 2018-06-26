var http = require('http');


function handleRequest(req, res) {

    switch (req.url) {
        case '/':
            res.write("Hello NodeJS Web");
            res.end();
            break;

        case '/users':

            var usersList = [
                {
                    id: 1,
                    name: "reprehenderit",
                    desc: "est autem sunt rem eveniet architecto"
                },
                {
                    id: 2,
                    name: "quiee est",
                    desc: "aperiam non debitis possimus qui neque nisi nulla"
                },
                {
                    id: 3,
                    name: "ipsaa sit",
                    desc: "accusantium quis pariatur velit aut"
                }
            ];

            res.write(JSON.stringify(usersList));
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