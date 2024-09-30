// //automatic
// x=5;
// z=4;
// y=x+z;
// console.log(y);

// //var-->for older browsers
// var p=5;
// var q=4;
// var r=p+q;
// console.log(r);

// //let

// let a=5;
// let b=4;
// let c=a+b;
// console.log(c);

// //const
// const price1=1;
// const price2=2;
// let total=price1+price2;
// console.log(total);

// // Names must begin with a letter.
// // Names can also begin with $ and _

// //A variable declared without a value will have the value undefined.

// //You cannot re-declare a variable declared with let or const.but can redeclare a variable with var.
// //Redeclaring a variable inside a block will also redeclare the variable outside the block: for var.

// //let x = "5" + 2 + 3;-->output:523

// //let x = 2 + 3 + "5";--->output :55

// //In jQuery $("p"); means "select all p elements".

// //let:block scope

// //var:global scope

// //let and const must be declared before use.

// //let and const does not bind to this.

// //let and const are not hoisted.
// //With let, redeclaring a variable in the same block is NOT allowed

// //Variables defined with let are also hoisted to the top of the block, but not initialized.

// ///Using a letor const variable before it is declared will result in a ReferenceError


// //const can not be reassigned

// const prev=5;
// // const prev2;
// // old=5; gives error-->const to be assigned when declared

// //const can be used when declaring a new array,new function,new object,new RegExp
// //It does not define a constant value. It defines a constant reference to a value.
// //we can still change elemnts of constant array,properties of constant object

// // const cars = ["Saab", "Volvo", "BMW"];

// // cars = ["Toyota", "Volvo", "Audi"];    // ERROR

// //we can reassign the const object same as in array


// //Redeclaring an existing var or let variable to const, in the same scope, is not allowed

// //operators
// ///comparison operator can also be used on string

// string1='hello';
// string2='world';
// let ans=(string1<string2);
// console.log(ans);
// //If you add a number and a string, the result will be a string!
// console.log(typeof(string1));
// //The instanceof operator tests the presence of constructor.
// // let ans3=string1 instanceof String;
// // console.log(ans3);-->instanceof operator is for objects
// //let ans1=objName instanceof objType;
// let A=[2,3,4,5];
// let ans2=A instanceof Array;
// console.log(ans2);//true indicates that this object is an instance of a particular class
// //x ** y produces the same result as Math.pow(x,y)

// console.log(Math.pow(5,3));

// //logical and assignment operator
// let m=10;
// m&&=5;
// console.log(m);
// //If the first value is true, the second value is assigned.

// let e=12;
// e&&=0;
// console.log(e);

// let f=1;
// f||=4;
// console.log(f);//if first is true then that value is assigned


// let t=0;
// t||=4;
// console.log(t);//if first is false then second  value is assigned

// //let x;
// //x ??= 5;If the first value is undefined or null, the second value is assigned.

// //const date = new Date("2022-03-25");
// const date=new Date();
// console.log(date);
// //let y = 123e5;    // 12300000
// let z = 123e-5;   // 0.00123

// //Javascript numbers are always one type:
// //double (64-bit floating point).

// //Any variable can be emptied, by setting the value to undefined. The type will also be undefined.
// //An empty value has nothing to do with undefined.

// //An empty string has both a legal value and a type.

