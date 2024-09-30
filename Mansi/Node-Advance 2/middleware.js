//middleware:it is a fn which gets run before every route
//it is written before the route of even first page

const { application } = require("express");

app.use(function(req,res,next){
console.log('middleware 1 working');
});

//req contains the user data means data of someone who is visiting the route
//res-->server se jo dta bheja jata hai
///we can run as many middleware as we want

app.use(function(req,res,next){
    console.log('middleware 2 working');
    });