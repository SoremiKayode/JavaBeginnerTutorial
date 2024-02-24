/*
for loop is use when you need to repeat a specific action for multiple time
Loops are handy, if you want to run the same code over and over again, each time with a different value.

The for statement creates a loop with 3 optional expressions:

for (expression 1; expression 2; expression 3) {
  // code block to be executed
}

From the example above, you can read:

Expression 1 sets a variable before the loop starts (let i = 0).
Expression 2 defines the condition for the loop to run (i must be less than 5).
Expression 3 increases a value (i++) each time the code block in the loop has been executed.

*/

// printing the multiplication table using for loop
for(let x = 1; x < 13; x++){
console.log(`5 * ${x} = ${5 * x}`);
}

let emptyText = "";
const listOfCars = ["Corolla", "Toyota", "Honda", "Tesla", "Mitsubishi"];

// You can initailize many value in expression 1
for(let x = 0, len = listOfCars.length, text = ""; x < len; x++ ){
    emptyText += listOfCars[x] + "\n";
}

console.log(emptyText)
let newEmptyText = ""
let c = 0;
// You can also omit expression 1
for(; c < listOfCars.length; c++){
    newEmptyText += listOfCars[c] + "\n";
}
console.log(" ")
console.log(newEmptyText)

/*
Expression 3
Often expression 3 increments the value of the initial variable.

This is not always the case. JavaScript doesn't care. 
Expression 3 is optional.

Expression 3 can do anything like negative increment (i--), 
positive increment (i = i + 15), or anything else.

Expression 3 can also be omitted (like when you increment your 
values inside the loop):
*/

let d = 1;

for(; d < 13; ){
console.log(`15 * ${d} = ${15 * d}`);
d++;
}

/*
for in loop
This is use to iterate over the key of an object or an array

The for in loop iterates over a person object
Each iteration returns a key (x)
The key is used to access the value of the key
The value of the key is person[x]
*/

const studentDetails = {
name : "Frank Ribery",
age : 24,
height : 5.5,
}

console.log(" ")
for(x in studentDetails) {
    console.log(studentDetails[x]);
}

console.log(" ")
const studentScore = [77, 67, 55, 45, 34, 58];
// for in using array, it iterate over the array, the x return the index and 
// you can use the index to access the element of the array.
for(x in studentScore) {
    console.log(`student ${x} score : ${studentScore[x]}`);
}

/*
Using foreach loop

The foreach loop is specifically use with an array,
i takes a function, in the function you have to pass an argument
that represent each item in the array
*/
console.log(" ")
const productDetails = [
["Carrot", 100],
["Apple", 30],
["Plantain", 20],
["Tomatoes", 10]
];

productDetails.forEach((e) => console.log(`product : ${e[0]} | price : ${e[1]}`))

/*
the for of loops through iterables like : string, array, 
as assign each value to the variable provided
*/
console.log(" ");
const studentName = ["Wole Camey", "Sam Okpa", "Loled Moaulan"];

for(let x of studentName){
    console.log(x);
}
console.log(" ");

// looping through a string using for of
const carName = "Buggati";
for(let letter of carName){
console.log(letter);
}