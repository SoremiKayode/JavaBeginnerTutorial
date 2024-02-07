/*
Javascript data type can be categorised into 
String
Number
BigInt
Boolean
Object
Undefined
null
symbol

The object data type can contain:

1. An object
2. An array
3. A date
*/

// To be able to operate on a variable you should be able to know something about
// the data type
// Numbers:
let length = 16;
let weight = 7.5;
console.log("Javascript non decimal number : " + length);
console.log("Javascript decimal number : " + weight);
// Strings:
let color = "Yellow";
let lastName = "Johnson";
console.log("Javascript string : " + color);
console.log("Javascript string : " + lastName);
// Booleans
let x = true;
let y = false;
let z = 6;
console.log("Javascript Boolean : " + (x == y));      // Returns true
console.log("Javascript Boolean : " + (x == z)); // Returns false 

// Object:
const person = {firstName:"John", lastName:"Doe"};
console.log("This is an object : " + person.firstName + " " + person.lastName);
// Array object:
const cars = ["Saab", "Volvo", "BMW"];
console.log("This is an array object : " + cars);

// Date object:
const date = new Date("2022-03-25");
console.log("This is a date object : " + date);

// Javascript Bigint
let bigInteger = BigInt("123456789012345678901234567890");
console.log("This is a big interger : " + bigInteger);

// undefine
let undefineVariable;
console.log(undefineVariable);

/*
when trying to access a key that does not exist in an object you
also get undefined
*/
var studentDetails = {name : "Korah", age : 20}
console.log("We're trying to access an object key taht does not exist hence we will get undefined" + studentDetails.class);


/* 
empty value, a variable can be emptied by setting it to undefine
the output will also be undefined
*/
undefineVariable = undefined;
console.log("empty varibale : " + undefineVariable);