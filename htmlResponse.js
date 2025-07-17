const http = require('http');

const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type' , 'text/html');
    res.end('<h1>Welcome to Node.js backend dev!</h1>');

});
server.listen(4000);