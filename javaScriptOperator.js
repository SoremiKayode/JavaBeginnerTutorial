/*
Javascript Operators can be grouped into the following :

- Arithemetic OPerator
- Assigment Operator
- Comparison Operator
- Logical Operator
- Javascript Type Operators
- Bitwise Operator


Following are Javacsript Arithemetic Opertor

+               :        Addition
-               :        subtraction
*               :        multiplication
/               :        division
**              :        exponent
%               :        Modulus
++              :        Increment
--              :        decrement
*/

let a = 70;
console.log("This the addition", 5 + 6);
console.log("This the subtraction", 5 - 6);
console.log("This the division", 120 / 6);
console.log("This the multiplication", 5 + 6);
console.log("This the exponent", 5 ** 6);
console.log("This the modulus", 120 % 21);
console.log("This the increment " +  a++);

/*
Javascript Assigment Operator
The assigment operator assign value to variable in Javascript
=	x = y	x = y
+=	x += y	x = x + y
-=	x -= y	x = x - y
*=	x *= y	x = x * y
/=	x /= y	x = x / y
%=	x %= y	x = x % y
**=	x **= y	x = x ** y
 */

var f = 10;

console.log(f+= 5); // change the value of to x to what the value of x before and add 5
console.log(f-= 1); // change the value of to x to what the value of x is before and subtract 5
console.log(f*= 5); // change the value of x to what the value of x is before and multiply it 5
console.log(f/= 5); // ........
console.log(f%= 5); // ........
console.log(f**= 5);  // ........

/*
Javascript Logical Operator
|| - logical or
&& - logical and
! - logical not
*/

let priceOfFish = 200;
let priceOfPork = 400;
let priceOfMeat = 300;

if(priceOfFish < priceOfPork && priceOfFish < priceOfMeat){
console.log("Go ahead and buy some fish");
} else if (priceOfMeat < priceOfPork || priceOfMeat < priceOfFish){
    console.log("Go ahead and buy some meat");
}

if (priceOfMeat != 200){
    console.log("Meat are expensive this days");
}

/*
Javscript Comparison Operators

== : greater than
=== : equal type and equal value
!= : not equal to
!== : not equal value or equal type
> : greter than
< : less than
>= : greater than or equal to
<= : less than or equal to
? : ternary operator

*/

console.log("30" == 30); // this will return true althoght they are same value but they are of different data type
console.log("31" === 31); // this will return false, same value but different data type
console.log("50" != 50); // this will return false
console.log("50" !== 50); // this will return true
console.log(40 > 30) // Greater than
console.log(40 < 30) // less than
console.log(50 >= 50) // Greater than or equal to
console.log(40 <= 40) // less than or equal to

/*
Javascript Type Operator

The type operator is use to check if a variable or value is
an instance of an object
*/
const personName = "Frank";
const personAge = new Number(66);
console.log(typeof(personName));
console.log(personAge instanceof Number);

function myDevice(make, model){
    make = make;
    model = model
    }
    
var myDeviceObject = new myDevice("laptop", "Dell");
console.log(myDeviceObject instanceof myDevice);

/*
Javascript bitwise operator

The Bitwise operator convert numeric values to 32 bits and 
do pair by pair comparism, then convert the result back into a number
*/
// & bitwise
var andBitOperator = 5 & 3;
console.log(andBitOperator);
/*
number 5 converted to 3 binary 0101
number 3 converted to binary is 001

To get binary of a number divide the number by 2, and record the remainder
eg. 5
5 / 2 = 2 remainder 1
2/ 2 = 1 remainder 0
1 / 2 = 0 remainder 1

taking the remainder from the bottom : 0101

3/ 2 = 1 remainder 1
1 / 2 = 0 remainder 1
taking it from the bottom is = 0001

To get a number from a binary representation
3210
0001 = 0*2^3(0) + 0*2^2(0) + 0*2^1(0) + 1*2^0(1)
0 1 0 1
0 0 0 1
________
0 0 0 1  = 1 

both bit have to be 1 to get a 1 since we are dealing with & and operator
0001 is number 1
*/

let orBitOperator = 4 | 8;
console.log(orBitOperator);
/*
number 8 converted to binary is 0100
number 4 converted to binary is 1000
0 1 0 0
0 1 0 0
________
0 1 0 0  = 12

*/

/* 
Not bitwise operator
for the not bitwise operator, you need to flip the bit
changing 0 to 1 and 1 - 0, it's a unary operator
*/
let notBitOperator = ~7; // 0111 = 1000 = -8
console.log(notBitOperator);

/*
~ XOR Bitwise operator

for this the result is 1 if one of the corresponding number is 1

*/

let xorBitOperator = 4 ^ 7; // 0100 ^ 0110 = 0010 = 3
console.log(xorBitOperator);

/*
<< left shift
Shifts the bits to the left by a specified number of positions, filling the vacant
positions with zeros.

The right shif does the opposite
*/

let shiftLeftBitOperator = 4 << 2;
console.log(shiftLeftBitOperator);