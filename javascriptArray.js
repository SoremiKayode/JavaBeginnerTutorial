/*
An array is a collection of items, it is a variable 
that can hold more than one value

Why Use Arrays?
If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:

let car1 = "Saab";
let car2 = "Volvo";
let car3 = "BMW";
However, what if you want to loop through the cars and find a specific one? And what if you had not 3 cars, but 300?

The solution is an array!

we create an array like this:
const array_name = [item1, item2, ...]; 

*/
// An array
const houseAppliances = ["Televisions", "Washing Machines", "Gas Cooker", "Water Dispenser"];
console.log(houseAppliances);

// spaces and lines are not important
const listOfFruits = [
"Mango",
"Strawberry",
"Pineapple",
"Apple",
"Orange",
"Watermelon"
];
console.log(listOfFruits);

// You can also create an array and provide the item later
const car = [];
car[0] = "Tesla";
car[1] = "Toyota";
car[2] = "Bentley";

console.log(car);

// You can create an array using the new keyword
const city = new Array("California", "Texas", "Ohio", "Oklahoma", "Oregon", "Pennsylvania");
console.log(city);

//Accessing array element
console.log(listOfFruits[1]);

// changing an array element
listOfFruits[0] = "Guava";
console.log(listOfFruits);

// You can convert array to string
console.log(listOfFruits.toString());

// The data type of an array is object
console.log(typeof listOfFruits);

// an array can contain any data type
const newArray = ["apple", 45, 6.7, BigInt("345678904775"), [45, 56, 78]];

/*
Array properties and methods
*/
console.log(newArray.length); // getting the number of item in the array
console.log(newArray.sort()); //

// Accessing the last array element
console.log(newArray[newArray.length - 1]); //

// looping through an array, the first way
console.log("first method");
for(let x=0; x<newArray.length; x++) {
console.log(newArray[x]);
}

console.log("\nsecond method");
// looping throuh an array, the second way
newArray.forEach((e)=>{
console.log(e);
});

// Adding array element
newArray.push("Carrot");
console.log(newArray);

// alternatively we can do
newArray[newArray.length] = "Carrot";
console.log(newArray);

// typeof return an object, but to check if it an array one can use
console.log(Array.isArray(newArray));
// Or
console.log(newArray instanceof Array);

/*
Following are other array methods we have

Array at()
Array join()
Array pop()
Array push()
See Also:
Search Methods
Sort Methods
Iteration Methods	Array shift()
Array unshift()
Array delete()
Array concat()
Array copyWithin()
Array flat()
Array splice()
Array toSpliced()
Array slice()
*/

// accessing using at at()
console.log(newArray.at(4));
// negative index is also allowed
console.log(newArray.at(-1));
// join convert an array to a string and add the specified text in between these joins
console.log(city.join(" = "));
// pop removes the last item in an array, it returned the item that was removed
city.pop()
console.log(city);
// push add item to the end of the array
city.push("Louisiana")
console.log(city);
// shift remove the first array element and adjust the index of other element
city.shift();
console.log(city);
// unshift adds new item to the beginning of the array and adjust the index appropriately
city.unshift("New York");
console.log(city);
// you can delete an array item using delete, this will leave a hole in the array, it is not recommended to use
// delete city[0];
// console.log(city);
// merging or concatenating multiple arrays
let citySpain = ["Madrid", "Barcelona", "Getafe", "Athletico",];
let countryInUk= ["England", "Scotland", "Wales", "Iceland", "Ireland"];
console.log(city.concat(citySpain));
console.log(city.concat(countryInUk, citySpain));
// copying an item to another position in the array, 
// parameters : position to copy to, poition of item to copy
citySpain.copyWithin(0,3);
console.log(citySpain);
countryInUk.copyWithin(0, 5, 1);
console.log(countryInUk);
// flattening an array is useful, when you want to convert a multi dimensional
// array into a single array
const temp = [[45, 67, 78], [56, 78, 90], [43, 56, 90]];
console.log(temp.flat());
/*
splce add new element to the array, it takes three parameter, the
position where the item should be added, how many element should be
removed, and the element that should be removed

you can also use splice to remove element, don't just specify the item to include
*/
citySpain.splice(0, 0, "Athletico", "Bernabau");
console.log(citySpain);
// slicing an array, does not include the last item specified
console.log(citySpain.slice(2, citySpain.length));

/*
Array Find and Search Methods

Array indexOf()
Array lastIndexOf()
Array includes()

See Also:

Basic Methods
Sort Methods
Iteration Methods
*/

// indexof searches an array for an item and retirn the position (index)
const laptopProducts = ["Dell", "Hp", "Toshiba", "Macbook", "Hp"];
console.log(laptopProducts.indexOf("Dell"));
// optionally you can provide the position it should start searching from
console.log(laptopProducts.indexOf("Toshiba", 2));
// the lastIndexOf do the same thing as the indexOf, but this time return the last found position
console.log(laptopProducts.lastIndexOf("Hp"));
// also support where to start searching from
console.log(laptopProducts.lastIndexOf("Hp", -1));
// includes allow us to searc if an element is present in the array
// return true or false
console.log(laptopProducts.includes("Hp", -1));
/*
Javascript find() return the first element that passes a test function
the function requires three parameter, value, index and array
*/
const listOfNumber = [10, 34, 56, 78, 90];
let findResult = listOfNumber.find(findFunction);
function findFunction(value, index, array) {
return value > 2;
}

console.log(findResult);

/*
findLast will start searching from the end of the array and return the 
first element it finds.
*/
console.log(listOfNumber.findLast(x => x > 10));
// findLastIndex finds the element that satisfy a condition
console.log("Finding the last index of : ")
console.log(listOfNumber.findLastIndex(d => d > 30));

/*
Sorting Array

Alpabetic Sort
Array sort()
Array reverse()
Array toSorted()
Array toReversed()


Numeric Sort
Random Sort
Math.min()
Math.max()
Home made Min()
Home made Max()
*/

// array reverse
const arrayReverse = [5, 6, 7, 8, 9];
console.log("reversing an array")
console.log(arrayReverse.reverse());

// using toSorted() thios method does not alter the original array
const sortedArray = arrayReverse.toSorted();
console.log("Sorting using the toSorted() method");
console.log(sortedArray);

// toReversed method does not alter te original array
const toReversedArray = [7, 4, 6, 4, 6, 7, 8];
const reversedArray = toReversedArray.toReversed();
console.log(" reversing using the toReverse method");
console.log(reversedArray);

/*
Sorting number by default the sort method is use for sorting strings
to accurately sort number using the sort method you have to pass in a function
like below:

if the result of the a and b return negative number the second is sorted before
the first, if it return positive number first is sorted first, else if it return
zero nothing happened
*/
const sortNumber = [7, 4, 6, 4, 6, 7, 8];
sortNumber.sort(function (a, b) {
return a - b;
});
console.log("print numeric sort");
console.log(sortNumber);

// random sorting
const randSortNum = [56, 79, 87, 45, 34, 90];
randSortNum.sort(()=> 0.5 * Math.random());
console.log("Randomly sorted number")
console.log(randSortNum);

/*
The random sort number above will favor some number over other to get a truly random sort
we can use the yates method
*/
const points = [45, 67, 89, 67, 34, 56, 67, 89]

// we loop through the array
for(let i = points.length - 1; i > 0;  i--){
// we generate a random number between the range of the lenght of the list
let randNum = Math.floor(Math.random() * (i));
// we get the current item in the the iteration
let presentNum = points[i];
// we replace the current item with the randomly picked item
points[i] = points[randNum];
// while we put the randomly picked item back to the list in the position of the item we picked
points[randNum] = presentNum;
}

console.log(points);

/*
Finding the minimum and maximum item in array
*/