//working with event emitter
//tried using import but did not work as not compatible with latest version
//import EventEmitter from events module
//for this command to work first i did npm i events 
//and then in package.json i added "type": "module" under dependencies 
//creating an eventEmitter

const EventEmitter = require('events');

const MyeventEmitter=new EventEmitter();

//Emiting an event
// MyeventEmitter.emit('change');
// MyeventEmitter.emit('change');
// MyeventEmitter.emit('change');
//if we emit event before listening then it will not print anything on screen as here they work synchronously
//first we have to give what to do when a event is emitted  using the on keyword and after that we use emit keyword
//listen to event-->reacting to change something

//if we start listening after it has been emitted-->this will not work at all 
//as it works synchronously

MyeventEmitter.on('change color',()=>{
    console.log('on your order,i changed color');
});

MyeventEmitter.emit('change color');
MyeventEmitter.emit('change color');
MyeventEmitter.emit('change color');

// setTimeout(() => {
//     console.log('hellooooo');
// }, 1000);


//Let's do the same thinng asynchronously using setTiemInterval
setInterval(()=>{
    MyeventEmitter.emit('change color');
},1000);
//now it will be emiited every second 
//we are handling the event by logging it
//so if we have multiple events going on,we wil use eventemitter

//when we do server.get('/',(req,res)=>{

//})-->here server is an event emitter,get is event emitter-->they all have events and we can listen to them,we can make them emit events,
//
//consume new event emitter object in node through the generator
