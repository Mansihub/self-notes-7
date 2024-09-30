import http from 'http'
//create server is a fcuntion that api exposes

const server=http.createServer()
server.listen(3000);//on port 3000-->this will make server running forever bcz it has a reason as it has to listen sio it can't stop running

///if we run any one process and error occurs then our server will stop and system will crash
//so we should have more than one process -->so one end then other automaticLLY STARTED SO SERVER WILL KEEP ON RUNNING

//node will keep on running only if it has reasion to
//suppose we set setimeout for 5 secc then node will stop running after  5 sec bcz it will have nothing to do
//setTimeout(()=>{},5000)

//making handles-->WHAT TO DO AFTER SETTING A CONNECTION
//HTTP WILL RECEIVE REQUEST-->FOR THIS WE USE EVENT TO HANDLE REQUEST

//when we hit localhost 3000 then server object is going to emit an event -->it received connection what to do?
//everytime we hit localhost that is a request

//for reading image form an os we need different library
//it may be required if browser request an image
//all basic needs met by express
//Node has limited mechanis, to handle asynchronous call which is callback

//now handling the request event
//handling routes also
server.on('request',(req,res)=>{
    console.log('REQUEST!!!',req.url);
    if(req.url=='/favicon.ico'){
        res.write('');
    }
    else{
        res.write('Hello Mansi');
    }
    res.end();
});
