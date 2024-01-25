/*
A varibale in javascript is represented using the following keyword

var, const, let

When to Use var, let, or const?
1. Always declare variables
2. Always use const if the value should not be changed
3. Always use const if the type should not be changed (Arrays and Objects)
4. Only use let if you can't use const
5. Only use var if you MUST support old browsers.
*/

var a = 24;
let b  = 40;
const c = 12;

// you can also use undeclare variable
x = 10;
y = 12;

var x; 
var y;

var z = x + y;
console.log(z);

/*
The general rules for constructing names for variables (unique identifiers) are:

Names can contain letters, digits, underscores, and dollar signs.
Names must begin with a letter.
Names can also begin with $ and _ (but we will not use it in this tutorial).
Names are case sensitive (y and Y are different variables).
Reserved words (like JavaScript keywords) cannot be used as names.
*/
// variable example

const $student_name_34 = "Frank Edward";

console.log($student_name_34);

// You can declare many variable in one statement

let g = 5; h = 7; price = 10;

console.log(g);
console.log(h);
console.log(price);

/*
The let keyword

the let varibale has block scope
let variable has be be declare before use
let variable cannot be redcared inside same block
*/ 

/*
The const variable
- They cannot be redeclared
-  they cannot be reassigned
- they have  block scope

When to use JavaScript const?
Always declare a variable with const when you know that the value should not be changed.

Use const when you declare:

A new Array
A new Object
A new Function
A new RegExp

Note const as in constant does not necessarily mean the value cannot chnage, it means, constant
reference to a value.

- You can chnage the element of a constant array
- You can change the properties of a constant object

eg.
*/

const carName = ["Toyota", "KIA", "Mercedes"];
carName.push("BMW");
carName[2] = "Mercedez Benz"

console.log(carName);

// so you can chnage but you cannot reassign eg.const carName = ["Frank", "Dopesi"]
