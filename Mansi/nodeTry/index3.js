console.log('hello');//this will be printed only once (when node index4.js done)even if we write require 3 times in index4 file

// module.exports=()=>{
//     console.log('we want it to repeat so writing in a fxn so other file which require it and execute any no. of time this will be printed');
// };
//above will help in delayed execution as fxn is exported
module.exports={
    f1:()=>{console.log('fxn is exported as an object')},
    //other fxn can be written as an object
};
