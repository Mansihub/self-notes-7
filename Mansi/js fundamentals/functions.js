let x= myfunction(4,3);

let p=myfunction;
function myfunction(a,b){
    return a+b;
}

console.log(x);
console.log(p);//this returns the function itself 

//so myfunction refers to a fucntion while myfunction() refers to an object

//Local variables are created when a function starts, and deleted when the function is completed.

//object are variables which can contain many values

//The name:values pairs in JavaScript objects are called properties

//A method is a function stored as a property.

const person = {
    firstName: "mansi",
    lastName : "vashistha",
    id       : 5566,
    fullname:function(){
        return this.firstName+" "+this.lastName;
    }
  };
  //In JavaScript, the this keyword refers to an object.

  //In an object method, this refers to the object.
  //In an event, this refers to the element that received the event.

//Methods like call(), apply(), and bind() can refer this to any object.

//If you access a method without the () parentheses, it will return the function definition
console.log(person.fullname);//op:fxn definition
console.log(person.fullname());//op:mansi vashistha

//Avoid String, Number, and Boolean objects. They complicate your code and slow down execution speed.

x=new String();
y=new Boolean();
z=new Number();

//avoid above as it slows down execution speed

//The ?? operator returns the first argument if it is not nullish (null or undefined).
//The ?. operator returns undefined if an object is undefined or null (instead of throwing an error).



  