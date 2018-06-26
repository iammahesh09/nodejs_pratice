var http = require('http');


function handleRequest(req, res){
    console.log(req.url);
    res.write("Hello NodeJS Web");
    res.end();
}

var server = http.createServer(handleRequest);
 
server.listen(9000, callback)
 

function callback(){
    console.log("Hello NodeJS")
}

