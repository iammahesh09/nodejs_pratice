var http = require('http');

var server = http.createServer(handellData);

function handellData(req, res) {

    switch (req.url) {
        case '/':
            res.write('Hello NodeJS');
            res.end();
            break;

        case '/user':
            var usersList = [
                {
                    id: 1,
                    title: "reprehenderit",
                    body: "est autem sunt rem eveniet architecto"
                },
                {
                    id: 2,
                    title: "qui est esse",
                    body: "aperiam non debitis possimus qui neque nisi nulla"
                },
                {
                    id: 3,
                    title: "ipsa sit aut",
                    body: "accusantium quis pariatur velit aut"
                }
            ];
            res.write(JSON.stringify(usersList));
            res.end();
            break;

        case '/product':
            res.write('Product List');
            res.end();
            break;

        default:
            res.write('Page Error');
            res.end();
            break;
    }


}

server.listen(9000, callback)

function callback() {
    console.log("Server is running on 9000")
}