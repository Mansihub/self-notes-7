// // //JavaScript has 8 Datatypes
// // 1. String
// // 2. Number
// // 3. Bigint
// // 4. Boolean
// // 5. Undefined
// // 6. Null
// // 7. Symbol
// // 8. Object

// // The Object Datatype
// // The object data type can contain:

// // 1. An object
// // 2. An array
// // 3. A date

// // In JavaScript, almost "everything" is an object.

// // Booleans can be objects (if defined with the new keyword)
// // Numbers can be objects (if defined with the new keyword)
// // Strings can be objects (if defined with the new keyword)
// // Dates are always objects
// // Maths are always objects
// // Regular expressions are always objects
// // Arrays are always objects
// // Functions are always objects
// // Objects are always objects
// // All JavaScript values, except primitives, are objects.

// //A primitive value is a value that has no properties or methods.
// //string
// // number
// // boolean
// // null
// // undefined
// // symbol
// // bigint

// //creating js object
// //1)using literal
// const obj1={name:"mansi",id:"23"};
// // 2)using new keyword
// // const obj2=new Object();

// // //const x = person;  // Will not create a copy of person.
// // The object x is not a copy of person. It is person. Both x and person are the same object.

// // Any changes to x will also change person, because x and person are the same object.

// let k=obj1;
// k.name="vashistha";
// console.log(obj1.name);//prints vashistha

// //looping through the propertiesif an object->we use for in loop
// for(let x in obj1){
// //console.log(obj1.x);//this will look for property named x so this notation will not worrk
// console.log(obj1[x]);
// }

//The delete operator is designed to be used on object properties. It has no effect on variables or functions.



let person1={
    fname:'mansi',
    lname:'vashistha',
    fullname:function(){
        return this.fname + " " + this.lname;
    }
};

let txt=person1.fullname();
console.log(txt);

//adding method to object

person1.name=function(){
    return this.fname + " " + this.lname;
};

let txt2=person1.name();
console.log(txt2);

//displaying object in an array form
const person2={
    name:"mansi",
    age:"22"
};
const myArray=Object.values(person2);
console.log(myArray);

//display object as it is by convertint it to string
let myString=JSON.stringify(person2);
console.log(myString);

//json.strigify not do with fucntion but it can if we convert fxn to string before applying stringify
// const person = {
//     name: "John",
//     age: function () {return 30;}
//   };
//   person.age = person.age.toString();
  
//   let myString = JSON.stringify(person);
//   document.getElementById("demo").innerHTML = myString;

//we can also stringify arrAY

