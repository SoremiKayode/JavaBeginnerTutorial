/*
Every pbject have properties like weight, color 
and can perform specific function like move, that's the idea behind object on 
programming, object have properties and method.

Assuming a car object for instance, the object can have properties
like model, color, weight, and the car can perform action (Mthod) like :
move forward, move backward, move left, move right, move forward
*/

const car = {
// object properties
name : "Tesla",
model : "TWERF678",
color : "White",
price : 400000,
// object method
moveForward : () => console.log(this.name + " Move forward"),
moveBackward : () => console.log(this.name + " Move forward"),
moveRight : () => console.log(this.name + " Move Right"),
moveLeft : () => console.log(this.name + " Move Left"),
}

/*
You can access an object the same way you access an array, or using the .
*/

// accessing the car name
console.log("Car name : " + car["name"]);
// acessing the model 
console.log("Model name : " + car.model);
// accessing an object method
console.log("Model method : ");
car.moveForward()

/*
What is this?
In JavaScript, the this keyword refers to an object.

Which object depends on how this is being invoked (used or called).

The this keyword refers to different objects depending on how it is used:

In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object.
*/