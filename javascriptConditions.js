/*
in the course of coding, you will want to perform different 
actions for different decision, that's where condition come handy

In JavaScript we have the following conditional statements:

Use if to specify a block of code to be executed, if a specified condition is true
Use else to specify a block of code to be executed, if the same condition is false
Use else if to specify a new condition to test, if the first condition is false
Use switch to specify many alternative blocks of code to be executed
*/

// Get the current hour of the day
const timeOfDay = new Date().getHours();
/** we want to say good morning when the hour is below 12
else good afternoon, oh no! but what if it's not afternoon or morning,
it should be evening, we can use the else if to handle that
  
**/
if (timeOfDay > 1 && timeOfDay <= 12) {
console.log("Good morning!");
} else if (timeOfDay >= 12 && timeOfDay <= 17) {
console.log("Good afternoon!");
}else {
console.log("Good evening!");
}