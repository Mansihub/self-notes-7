const posts=[
    {title:'Fruits I Like',body:'Orange,Mango,Grapes,Sapodilla(Chiku-I knew samjh ni ayega \u{1F602} ) '},
    {title:'Tasty ones',body:'Pink sauce pasta,rajma chawal,dairy milk'}

]



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


    // function createPost(post,callback){
    //     setTimeout(() => {
    //         posts.push(post);
    //         //after pushing the new post to the array we will run callback
    //         callback();
    //     }, 4000);
    // }

//the above fxn is using callback,now we are converting it to promises
//1)removed callback
//2)return a promise-->write return new promise
//3)while calling the fxn use dot operator and then ('.then') and in then('here we will write the fxn we passed in case of callback)
function createPost(post){
    //we will return a promise
        return new Promise(
            //it takes 2 parameters resolve and reject
            //then we use arrow function
            (resolve,reject) => {
            setTimeout(() => {
            posts.push(post);
            //after pushing the new post to the array we will run callback
            const error=false;
            //As soon as timeout occurs it gets resolved-->once it resolves and then getposts is called
            if(!error){
                resolve();
            }
            else{
                reject('Error:Something Went Wrong');
            }
        }, 4000);
    });
}

// createPost({title:'post no. 3',body:'body 3 and returning it inside PROMISE'}).then(getPosts2);
//once it resolves and then getposts is called
//suppose we get error then we have to catch it so we write (.catch) after (.then) and we pass err

createPost({title:'post no. 3',body:'body 3 and returning it inside PROMISE'}).then(getPosts2).catch(err=>console.log(err));

//where will we use promises?
//1)when using fetch Api or Axios or mongoose library or 

//what if we have many promises:we can do but won't do (.then ) again and again
//-->in this we can use (.all)
//let's create promises
const promise1=Promise.resolve('Hello,now can work with music...yeahhh')
const promise2=10;
const promise3=new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,'this is printed out of promise , inside promise i write settimeout and in settimeout i print it');
})
//now we have to run these prmises at once -->for that we will use Promise.all-->it takes array of promises

Promise.all([promise1,promise2,promise3]).then(values=>console.log(values));
//output of above command is an array containing output of all the promises passes inside an array in promise.all

//when we fetch from api ,they also return a promise
const promise4=fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json())
//the complete line will give us the actual data
//after fetching we apply then and map the result to res.json
//we need to write 2 dots->first is to format it (usually to json and second is to get data)

Promise.all([promise1,promise2,promise3,promise4]).then(values=>console.log(values));

//Async await -->it is a way to handle responses
//-->in this function is labelled as async
//-->awaits wait for an action to complete

// async function init(){
//     //here we wait for creaePost to be done until we call getPosts2
//     await createPost({title:'post no. 3',body:'body 3 and returning it inside PROMISE'});
//     getPosts2();
// }

// init();

//Async await with fetch
async function fetchUsers(){
    const res=await fetch('https://jsonplaceholder.typicode.com/users');

    const data= await res.json();

    console.log(data);//This will print the data for us
}
fetchUsers();
