/*
If there are many condition that perform different 
action base on some certain output that is when switch statement
come in handy

How switch works

The switch expression is evaluated once.
The value of the expression is compared with the values of each case.
If there is a match, the associated block of code is executed.
If there is no match, the default code block is executed.

the break keyword break out of the loop, when a condition is met,
it prevent other condtion from running.

The default case specify which code to run if the none of
the condition is met, the default case does not have to be the 
last case in the switch statement

*/
const dayOfWeek = new Date().getDay();
console.log(dayOfWeek);
switch(dayOfWeek) {
case 1 : 
console.log("Today is Monday");
break;
case 2 : 
console.log("Today is Tuesday");
break;
case 3 : 
console.log("Today is Wednesday");
break;
case 4 : 
console.log("Today is Thursday");
break;
case 5 : 
console.log("Today is Friday");
break;
case 6 : 
console.log("Today is Saturday");
break;
default : 
console.log("Today is Sunday");
}