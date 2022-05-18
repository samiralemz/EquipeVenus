var http = require("http");

http.createServer(function(request,response){
    response.end("<h1>Ola mundo aaaaaa</h1>");
}).listen(8181);
console.log("servidor no ar TESTE 1.2...");