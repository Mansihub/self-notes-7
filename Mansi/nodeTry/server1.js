import express from 'express';
const server=express();//same as create server
//route handling is slightly different in express
server.get('/',(req,res)=>{
    res.send({message:'hello express'});
});

server.get('favicon.*',(req,res)=>{
    res.sendFile('./favicon....');
});
//express will take file from filsystem and stream it
//we can also send objects using express res
//express is wrapper around built in http framework that we get with node
server.listen(3000);

//if we use nodemon instead of node-->it will automaticaaly restart the node when we save