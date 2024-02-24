/*
The javascript Math object allow you to perform mathematical operations on Math
*/

// return eulers number
console.log(Math.E);

// round to the nearest interger
console.log(Math.round(4.5));
// round to the nerest interger
console.log(Math.ceil(6.49));
// round down to the nearest interger
console.log(Math.floor(7.6));
// round down to the nearest integer
console.log(Math.trunc(8.7));
// knowing if a number is negative null or positive
console.log(Math.sign(-3)); //  return -1 negative
console.log(Math.sign(3)); //  return 1 positive
console.log(Math.sign(0)); //  return 0

// exponent
console.log(Math.pow(5, 3));
// square root
console.log(Math.sqrt(64));
// return absolute value
console.log(Math.abs(-56));
// random number - return random number between 0 - 1
console.log(Math.random());

/*
Javscript random interger, javascript does not have a random interger
but you can always work around it using the floor method

Math.floor give us a random number between 0 and 1
we multiply the number by ten
we round it down to the nearest integer
then we add 1 should incase the nuber is 0

*/

console.log(Math.floor(Math.random() * 10) + 1);

// creating a function that generate random number
const randNumberGenerator = (min, max) => Math.floor(Math.random() * (max - min)) + min

console.log(randNumberGenerator(1, 3))