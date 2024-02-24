/*
The while loop run over and over again, until a certain condition is met
*/

// printing a 7 times multiplication table
let x = 1;
while(x < 13) {
console.log(`7 * ${x} = ${7 * x}`);
x++;
}

/*
The condition will keep running as long as x is less than 13
each time it run 1 is added to the previous value of x,
so when x becomes 13 it break out of the loop
*/

/*
another variance of while loop, is the do while loop
regardless of whether the condition is true or not the do, will first
run, before checking the condition
*/

// printing 5 times multiplication table

console.log(" ")
let d = 1;
do {
console.log(`5 * ${d} = ${5 * d}`);
d++
} while (d < 13)

/*
If you want to come out of the loop, even if the constion to
come out is not yet satisfied, you can use the break keyword

if your want a certain loop from running you can use the continue keyword
*/

let batteryPercent = 100;
// variable to store the current seconds
let secondCurrentSeconds = new Date().getSeconds();

while(batteryPercent > 0) {
// getting the current seconds
let currentSeconds = new Date().getSeconds();
// if the secods are the same don't run the code else run it
if(currentSeconds != secondCurrentSeconds){
// after you have run it chnage the secondCurrentSeconds to the current seconds
secondCurrentSeconds = currentSeconds;
// decrease the battery percent by 1
batteryPercent--;
// if battery percent is less tha 10 shut down and come out of the loop
if (batteryPercent == 10){
console.log("laptop will now shut down");
break;
}
// only run the code below for every 5 percent battery depletion
if ((batteryPercent % 5) > 0){
continue;
}
console.log(`Your laptop battery percent is ${batteryPercent}%`);
}
}


console.log(57 % 5);

/*
The code above make use of the continue and break keyword
the code is trying print out the battery percent of a laptop,
we only want to print out the battery perecent at every 5% depletion,
so we use the continue keyword to skip that loop from running everything
under it, we want to shut down our laptop, if the battery percent is below
10 percent, so we print laptop will now shut down and come out of the loop
using the break statement

*/