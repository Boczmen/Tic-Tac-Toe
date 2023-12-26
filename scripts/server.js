function handleRequest(request, response) {
    response.statusCode = 200; //200 - serwer działa || 404 - client error url not found || 401 - client error not authorized || 500 - server error valid request
    response.end(index.html);
  }
  
  const http = require("http");
  
  const server = http.createServer(handleRequest);
  
  server.listen(2000);