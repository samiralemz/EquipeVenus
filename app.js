var http = require("http");

const port = process.env.PORT || 3000

http.createServer(function(request,response){
    response.end("<h1>Ola mundo aaaaaa</h1>");
}).listen(port);
console.log("servidor no ar...");