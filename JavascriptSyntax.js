/*
Syntax are the set of rules on how a program is constructed
it is the set of rules that determine how to write code in a specific language
*/

/*
1. every statement ends with a semicolon - a statement is any line or 
group of code that instruct the computer to perform an action

the statement below instruc the browser to write hello world to the console
*/

console.log("Hello world");

/* Javascript ignore white space you can add white space to your
code to make it readable */

let a=10; // not enough whitespace so not readable
let b = 20; // enough whitespace so readable

/*
multiple statement are usually group together inside curly bracket
known as block
*/

function addNumber(){
console.log(2 + 3);
}

/*
Javascript statement usually start with a key word, this are some of the
keyword in javascript

Keyword	      Description

var	          Declares a variable
let	          Declares a block variable
const	      Declares a block constant
if	          Marks a block of statements to be executed on a condition
switch	      Marks a block of statements to be executed in different cases
for	          Marks a block of statements to be executed in a loop
function	  Declares a function
return	      Exits a function
try	          Implements error handling to a block of statements
*/

let d = 45; // using the let keyword
var isItRaining = true; // using the var keyword
const idNumber = 456789; // using the const keyword

if(a > b){
console.log("Yes a is greater than b");
} else {
console.log("b is greater than a");
} // using the if, else keyword

const dayOfWEEK = "Monday";
switch(dayOfWEEK) {
    case "Monday" : 
        console.log("Today is Monday");
        break;
    case "Tuesday" : 
        console.log("Today is Tuesday");
        break;
    case "Wednesday" : 
        console.log("Today is Wednesday");
        break;
    case "Thursday" : 
        console.log("Today is Thursday");
        break;
    case "Friday" : 
        console.log("Today is Friday");
        break;
    case "Saturday" : 
        console.log("Today is Saturday");
        break;
    default: 
        console.log("Tuesday is sunday");
} // using the switch keyword

// print out the 5 times multiplication table using the for loop (for keyword)
for (var i = 1; i < 13; i++) {
console.log(`5 * ${i} = ${5 * i}`);
}

// using the function and return keyword 

function weekOfMonth(){
    return 23;
}

// using the try keyword

try {
console.log("This is the try block");
} catch (e) {
console.log(`if there is any error it will return this ${e}`);
}

/* 
fixed value are call literals eg. Number, which can be decimal or
non decimal, and strings which must be in a quotation mark

variable value which are represented by a var keyword
*/
100; // interger
2.5; // integer
"Hello world"; // string
var x = 100; // variable

// javascript uses arithemetic operator to compute value
(10 * 5) + x;

// Javascript uses the // as single line comment and /* */ as multi line comment

// Javscript are case sensitibe
let lastname = "Ben";
let lastName = "Gurion";
