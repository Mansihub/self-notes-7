//http module is basically used to create networking application
//we can ceate web server and listen to http request on a given port
//some classes of http module->http.agent,http.clientRequest
//each class has its method,prperties and events

//server is an event emittor
//on,addlistener,emit-->methods of server
//everytime there is new conncection,new request,we hit server-->server raises an event
//we can use on method to handle that event
//Let's create a server
const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Hello Mansi');
    }
})

server.listen(3000);

console.log("listening on port 3000");
