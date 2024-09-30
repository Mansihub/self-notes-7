//express is a flexible nodejs web app framework
//web is used to make web apps faster and easier

//first we will include the express module
//we are saving express in express named variable
var express=require('express');
//creating an instance to handle request and response
//now we run the express variable using ()
const app=express();
//now jo work express kr skta hai same vhi work app naam ka variable bhi kr skta hai
//ssend works in express and end works in node

app.use(function(req,res,next){
    //console.log(req);-->for printing user info
    console.log('middlware working');
    next();///hme app.route m next call krna hoga jisse vo next route pr chal jaye request
    });
    //app.use runs first of all

// //first page of website ends with '/' -->facebook.com/
app.get('/',(req,res)=>{//res.send("hello mansi");
//sending json response
res.json({message:"hello kaise ho"});}
);
// //above fxn tells the server what to do when a 'get' request to given route is called)
// //req and res are objects given by express to us

// //to get output for below command,first restart your server
// app.get('/users',(req,res)=>{//res.send("hello mansi");
//     //sending json response
//     res.json({message:"get all users"});}
//     );

//Dynamic routing
//     //when we get id from req para
// app.get('/users/:id',(req,res)=>{//res.send("hello mansi");
//         //sending json response
//         res.json({message:`this is user with id ${req.params.id}`});}
//         );


// app.post('/users/',(req,res)=>{//res.send("hello mansi");
//             //sending json response
//             res.json({message:'create new user'});}
//             );

// app.put('/users/:id',(req,res)=>//res.send("hello mansi");
//                 //sending json response
//                { res.json({message:`Update the user id  ${req.params.id}`});}
//                 );

//dynamic routing--->use colon-->colon means anything can replace it
// app.delete('/users/:id',(req,res)=>{//res.send("hello mansi");
//                     //sending json response
//          res.json({message:`Delete user with id ${req.params.id}`});}
//  );

//the listen fxn starts a port and host
app.listen(5000,()=>{console.log('starting with express..listening on port 5000!')});

//what can server do?
//routing,handling rquest,handling responses
//we can write coding for server using http package without using express
//express ka code behind the scene http hi use krta hai
//express is a pkg available in npm

//Template engine
//it is used for using javascript inside html and it is also used for calculation
//html just prints 2+3 but ejs can give result as 5

//error handling
// app.get('/error',function(req,res,next){
//     throw new Error('something went wrong'); 
//     //we can also skip the new keyword above
// });
//throw erro searches for error handler in our code and error handler will show the error
// and runs the next automatically

//writing the code below of error handler after end of all routes
// function errorHandler (err, req, res, next) {
//     if (res.headersSent) {
//       return next(err)
//     }
//     res.status(500)
//     res.render('error', { error: err })
//   }