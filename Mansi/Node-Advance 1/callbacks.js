//In asynchronous-->we don't wait for something to finish , rsther we continue doing our work while its happening.
//in synchronous,we wait for it to get complete.
//we can request server for data but till it fetches the data ,we don't want to wait rather we do continue running our code (doing something else).

//callback were used for this
//after ES6 is introduced,promises are now used for it.
//ES7-->dealing with promises but in different way-->deal with response in a way that it looks synchronous.
//we don't use dot in async await as we used to do in promises

//changing callback to promise

//we can resolve multiple promises at same time-->can call them all at same time

const posts=[
    {title:'Fruits I Like',body:'Orange,Mango,Grapes,Sapodilla(Chiku-I knew samjh ni ayega \u{1F602} ) '},
    {title:'Tasty ones',body:'Pink sauce pasta,rajma chawal,dairy milk'}

]

//suppose the above posts are fetched by us from the server
//now we will dislay them

//method 1:document.write -->this method is generally not recommended as it can overwrite our existing content and is also difficult to debug
// posts.forEach(function(post){
//     document.write(`${post.title} ${post.body}`);//use backticks
// });

//can wrtie above also in arraow function
// posts.forEach(post=>{
//         document.write(`${post.title} ${post.body}`);//use backticks
//     });

//now using method2:using function and inside it document.body.innerHTML

// function getPosts(){
 //we want post to be displayed after delay of 1 sec so use setTimeOut
// //setTimeout takes a callback fxn so we will pass a fxn as argument to display post
// setTimeout(function(){
//     let output=' ';
//     posts.forEach((post)=>{
//         //want the post to be in list format so use li
//         output+=`<li>${post.title} : ${post.body}</li>`;
// document.body.innerHTML=output;
//     })
// },7000)
// //document.body.innerHTML=output;--->here output will not be shown on screen if we write time s 1 sec
// //reason is the following:
// //the function is being executed before the setTimeout delay completes, 
// //the content may not be generated when document.body.innerHTML = output; is called.
// }

// getPosts();

//same as arrow function

function getPosts2(){
    //we want post to be displayed after delay of 1 sec so use setTimeOut
    //setTimeout takes a callback fxn so we will pass a fxn to display post
    setTimeout(()=>{
        let output=' ';
        //inside forEach argument has to be passed even if we write in arrao fxn form 
        posts.forEach((post)=>{
        //want the post to be in list format so use li
        output+=`<li>${post.title} : ${post.body} : this content is dipalyed after 3 sec</li>`;
        document.body.innerHTML=output;
    })
       
    },3000);
    
    }
    

// getPosts();
// getPosts2();
//if i write both code at 1 sec then only last onw will give the ouput and output of first one will be overwritten


//Now lwt's try to add new post and display it

// function createPost(post){
//     setTimeout(() => {
//         posts.push(post);
//     }, 4000);
// }

// createPost({
//     'post no. 3':'body 3'
// })

// getPosts2()//we created a post and ran getPost -->still we are getting the two post added before-->i am not getting the new one displayed on screen

// why this?
// this is happening bcz createPost is running after 4 sec so new post is pushed after 4 sec and getpost show us output in 3 sec
// so new post not added and it ran and we not got new post as output


//To handle above case-->we will use callback function

// we will make getpost as callback fxn means it has to be run after new post has been added .
// So, we will pass the getpost fxn as parameter to createpost


//CHANGE:
function createPost(post,callback){
    setTimeout(() => {
        posts.push(post);
        //after pushing the new post to the array we will run callback
        callback();
    }, 4000);
}

createPost({
    title:'post no. 3',body:'body 3 and this  is pushed later and then all post displayed'
},getPosts2)//we will not use () while passing it as parameter

//now we will not call getPosts2 directly