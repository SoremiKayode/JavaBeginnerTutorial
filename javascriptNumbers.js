/*
Javascript have two type of number, number can be written with
or without decimal

Javscript number are stored using 64 bit floating point
Integers (numbers without a period or exponent notation
are accurate up to 15 digits.

The maximum number of decimals is 17
*/

// number without decimal can store up to 15 digits
let numberWhole = 456789123476896;
console.log(numberWhole);

// floating point arithemetic is not always 100% accurate
let floatNumber = 0.2 + 0.1;
console.log(floatNumber);
let x = (0.2 * 10 + 0.1 * 10) / 10;
console.log(x);

// when you add number and string, it become a string concatenation
let numString = "34" + 40;
console.log(numString);

// evaluation are done from the left to the right, below will be 12040
let evalLeft = 50 + 70 + "40";
console.log(evalLeft);

// when you try to use other arithemetic operator on number and string
// you cent NaN, NaN is also a number
console.log(30 / "all");
console.log(typeof NaN); // will return number

/* Infinity (or -Infinity) is the value JavaScript will return
if you calculate a number outside the largest possible number. */
console.log(123456789 ** 3455678);

// infinity is a number
console.log(typeof Infinity); // will return number

// Dividing by zero also generate Infinity
console.log(12 / 0);

// You can also create number as an object
let numberObject = new Number(45);
console.log(numberObject);

/*
Note : 
DO not create number as an object, it is not the same as a number
*/

// To store a large number larger than 15 value append the number with BigInt
let bigInteger = BigInt(7449028384847420928477);
console.log(bigInteger);

/*
Note

Bigint cannot have a floating point number
let x = 5n;
let y = x / 2; this will throw an error

BigInt can also be written in hexadecimal, octal, or binary notation:
*/
let hex = 0x20000000000003n;
let oct = 0o400000000000000003n;
let bin = 0b100000000000000000000000000000000000000000000000000011n;

console.log(hex);
console.log(oct);
console.log(bin);

// You can get minimum or maximum safe interger
let maxSafeInterger = Number.MAX_SAFE_INTEGER;
let minSafeInterger = Number.MIN_SAFE_INTEGER;
console.log("maximum safe interger : " +  maxSafeInterger);
console.log("minimum safe interger : " +  minSafeInterger);

/*
es6 introduce two method 
isSafeInterger : a safe interger is a number that can exactly represent as 
a double precision number
isInterger
*/

console.log(Number.isInteger(10.3));

/*
Number Method
*/
// converting number to string
let numTOString = 200;
let floatingNumber = 5.45678;
console.log(numTOString.toString());
// rewriting a number using exponential notation
console.log(numTOString.toExponential(3));
// returning flating number with a number of fixed decimal
console.log(floatingNumber.toFixed(2));
// return a number string chunk to certain length
console.log(floatingNumber.toPrecision(2));

/*
Converting variable to number
There are three ways to convert variable string or boolean to number
- Number()
- parseInt()
- parseFloat()
*/

let varToNumber = "456";
let varToNumber2 = true;
let varToNumber3 = false;
let varToNumber4 = "4.5";
let varToNumber5 = "John";

// The number method can be use to conver string and boolean to number
console.log(Number(varToNumber));
console.log(Number(varToNumber2)); // return 1
console.log(Number(varToNumber3)); // false return 0
console.log(Number(varToNumber4));
console.log(Number(varToNumber5)); // john return NaN
// You can also use the number method to convert data to number