//process.stdout.write(Math.random().toString());
//console.log(Math.random());

//console.dir(process,{depth:0});

function X(){
    console.log(arguments);

}

X(1,7,9);//output: { '0': 1, '1': 7, '2': 9 }

//wrapping occurs in node so below one also runs
//IIFE:Immediately invoked function expression
console.log(arguments);
//above is considered as
// (function X(exports,require,module,__filename,__dirname){
//     console.log(arguments);

// })()
//


// require('module').wrapper
// Proxy [
//   [
//     '(function (exports, require, module, __filename, __dirname) { ',
//     '\n});'
//   ],
//   { set: [Function: set], defineProperty: [Function: defineProperty] }
// ]

//export and require to read
//Node module dependency system

//document.getElementById();-->not work here bcz we dont have dom here

//export is an object we can chnage and we can put any number of properties on exprt
exports.answer=45;
console.log(exports);///{ answer: 45 }
//export is a special object available gloabally to use
//export is alsias to module.exports
module.exports.answer1=36;//{ answer: 45, answer1: 36 }
//console.log(answer1);-->this gives error answer1 not defined
console.log(exports);
//node returns module.exports in index file as another file might require the module
console.log('in index.js')

