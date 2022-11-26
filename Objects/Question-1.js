//: What are the possible ways to create objects in JavaScript

//* Object Constructor:

/* The Simplest way to create an empty object is using the Object constructor. Currently this approach is not recommended. */

var object = new Object();

//* Object's create method:

/* The create method of object creates a new object by passing the prototype object as a parameter. */

var object2 = Object.create(null);

//* Object Literal Syntax:

/* The object literal syntax (or object initialize), is a comman-separated set of name-value pairs wrapped in curly braces. */

var object3 = {
  name: "Ankit",
  age: 18,
};

//? Object literal property values can be of any data type, including array, function, and nested object.

//* Function Constructor:

/* Create any function and apply the new operator to create object instances, */

function Person() {
  this.name = "Ankit";
  this.age = 18;
}

var object4 = new Person();

//* Function Constructor with prototype:

/* This is similar to function constructor but it uses prototype for their properties and methods, */

function User() {
  User.prototype.name = "Ankit";
}
var object6 = new User();

/* This is equivalent to an instance created with an object methods with a function prototype and then call that function with an instance and parameter as arguments. */
function func() {}

new func(x, y, z);

//? Or

// Create a new instance using function prototype.
var newInstance = Object.create(func.prototype);

// Call the function
var result = func.call(newInstance, x, y, z);

// If the result is a non-null object then use it otherwise just use the new instance.
console.log(result && typeof result === "object" ? result : newInstance);

//* ES6 Class syntax

/* ES6 introduces class feature to create the objects. */

class About {
  constructor(name) {
    this.name = name;
  }
}

const object7 = new About("Manish");

//* Singleton pattern:

/* A singleton is an object which can only be instaniated one time. Repeated calls to its constructor return the same instance and this way one can ensure that they don't accidentally create multiple instances. */

var object8 = new (function () {
  this.name = "Ankit";
})();
