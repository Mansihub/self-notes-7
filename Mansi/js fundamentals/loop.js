//The default case does not have to be the last case in a switch block:
//switch
let text;
switch (new Date().getDay()) {
    default:
      text = "Looking forward to the Weekend";
      break;
    case 6:
      text = "Today is Saturday";
      break;
    case 0:
      text = "Today is Sunday";
  }

  console.log(text);
  //If default is not the last case in the switch block, remember to end the default case with a break.
  const car=["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
  let text2=" ";
for(let i=0;i<car.length;i++){
text2+=car[i]+ "<br>" ;
}

console.log(text2);



//You can initiate many values in expression 1 (separated by comma):

//for loop:for(exp1;exp2;exp3)
// for (let i = 0, len = car.length, text = ""; i < len; i++) {
//     text += cars[i] + "<br>";
//   }

//can omit
// let i = 2;
// let len = cars.length;
// let text = "";
// for (; i < len; i++) {
//   text += cars[i] + "<br>";
// }

// Expression 2 is also optional.

// If expression 2 returns true, the loop will start over again. If it returns false, the loop will end.
// If you omit expression 2, you must provide a break inside the loop. Otherwise the loop will never end. This will crash your browser. 

// Expression 3 can also be omitted (like when you increment your values inside the loop):

// Example
// let i = 0;
// let len = cars.length;
// let text = "";
// for (; i < len; ) {
//   text += cars[i] + "<br>";
//   i++;
// }


//for/in - loops through the properties of an object
//for/of - loops through the values of an iterable object

//FOR IN LOOP

// for (key in object) {
//     // code block to be executed
//   }

//   const person = {fname:"John", lname:"Doe", age:25};

// let text = "";
// for (let x in person) {
//   text += person[x];
// }

// const numbers = [45, 4, 9, 16, 25];

// let txt = "";
// for (let x in numbers) {
//   txt += numbers[x];
// }

//It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.


// const numbers = [45, 4, 9, 16, 25];

// let txt = "";
// numbers.forEach(myFunction);

// function myFunction(value) {
//   txt += value;
// }


//FOR OF LOOP

// The JavaScript for of statement loops through the values of an iterable object.

// It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:

// Syntax
// for (variable of iterable) {
//   // code block to be executed
// }

//LOOP OVER ARRAY
// const cars = ["BMW", "Volvo", "Mini"];

// let text = "";
// for (let x of cars) {
//   text += x;
// }

//LOOP OVER STRING

// let language = "JavaScript";

// let text = "";
// for (let x of language) {
// text += x;
// }



