//: What is a higher order function

/* Higher-order function is a function that accepts another functions as an argument or return a function as a return value or both. */

const firstOrderFunc = () => console.log("Hello, I am a First order function");

const higherOrder = (returnFirstOrderFunc) => returnFirstOrderFunc();

higherOrder(firstOrderFunc);
