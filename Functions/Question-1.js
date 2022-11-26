//: What Anonymous Function in Javascript

//* Anonymous functions are functions that do not have a name.

setTimeout(function () {
  console.log("Jai Shree Ram");
}, 1000);

// In Anonymous functions, we only use the keyword function which is then assigned to a variable.

// An anonymous function cannot be accessed after it is created.
// It can only be retrieved by a variable in which it is stored as a function value.

//# Some common use cases of anonymous functions are:

// 1. Anonymous functions are usually arguments being passed to higher-order functions. ==> OR
// 2. Used for constructing the result of a higher-order function that needs to return a function

// The can also be used as an immediately invoked function Exprection (IIFE).
