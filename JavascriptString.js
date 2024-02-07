/*
strings are storing text, string are wriiten in
quotation marks
*/

// You can use a single or double quote
let studentName = "Frank";
let studentName2 = 'Frank';

console.log("string with double quote : " + studentName)
console.log("string with single quote : " + studentName2)

// You can use quote inside a string, as long as they don't match
// the quote that is use to enclose the string

let quote = "The English says 'Tick say the time tick tick, what you have to do do quick' ";
let quotes = 'There is a popular saying "not all that glitter is gold" ';

console.log("single quote inside a double quote : " + quote);
console.log("double quote inside a single quote : " + quotes);

/* 
template string was introduced in ES6 (Javascript 2016)
It introduce the backtick, inside the backtick you can use both 
single and double quote as well as use a variable
*/

let message = `There is a popular saying that "Use what you have to get what you can't have" `;
let message2 = `I am currently reading the Book 'Think and Grow rich' The Autheor name is "Napoleon Hill" `;

let priceOfChocolate = 30;
let priceOfCandy  = 20;

let whatToBuy = `Buy $${priceOfChocolate} chocolate and $${priceOfCandy} Candy`;

console.log(whatToBuy);

/*
String Methods

Javascript strings are primitive and immutable:
All string methods produces a new string without altering
the original string.

String length
String charAt()
String charCodeAt()
String at()
String [ ]
String slice()
String substring()
String substr()
See Also:

String Search Methods
String Templates
String toUpperCase()
String toLowerCase()
String concat()
String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String repeat()
String replace()
String replaceAll()
String split()
*/

let regularSay = "Tody is awesome";
console.log(regularSay.length);

/*
There are 4 methods for extracting string characters:

The at(position) Method
The charAt(position) Method
The charCodeAt(position) Method
Using property access [] like in arrays
*/

// to extract character at a specified position
let textToExtract = "Today is great and awesome";
let extractedChar = textToExtract.charAt(0);

console.log(extractedChar);

// using charCodeAt, return utf-16 code representation of that character
let extractCharCodeAt = textToExtract.charCodeAt(4);
console.log(extractCharCodeAt);

// using at
let extractAt = textToExtract.at(0);
let extractAt2 = textToExtract.at(-5);
console.log(extractAt);
console.log(extractAt2);

/*
Note : at is newly added to javascript, it allow for negative indexing,
while charAt do not
*/

// propert access
let extractProp = textToExtract[10]
console.log(extractProp);

/*
Extracting String Parts
There are 3 methods for extracting a part of a string:

slice(start, end)
substring(start, end)
substr(start, length)
*/

/* 
extract using slice, if you do not specify end,
it extract it to the end, it also allow negative indexing

*/
let extractSlice = textToExtract.slice(0, -1);
let extractSlice2 = textToExtract.slice(0);
// negative slicing start counting from the back
let extractSlice3 = textToExtract.slice(-10, -1);
console.log("extract using slice : " + extractSlice);
console.log("extract using slice not specifying the end: " + extractSlice2);
console.log("extract using negative sliing: " + extractSlice3);

/*
Using substring

subString doest not allow for negative sliing unline slice
*/
let extractSubString = textToExtract.substring(0, 10);
// if you pmit the right part, substring will slice out the rest of the string
let extractSubString2 = textToExtract.substring(0);
console.log("extract using substring : " + extractSubString);
console.log("extract using substring not specifying the end : " + extractSubString2);
