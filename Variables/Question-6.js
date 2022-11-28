//: What is Hoisting

/* Hoisting is a JavaScript mechanism where variables, function declarations and classes are moved to the top of their scope before code execution. Remember that JavaScript only hoists declarations, not initialisation. */

console.log(message); // undefined
var message = "The variable Has Been Hoisted";

// The above code looks like as below to the interpreter,

var message2;
console.log(message2);
message2 = "The variable has been hoisted";

// In the same fashion, function declarations are hoisted too

message3("Good Morning");

function message3(greeting) {
  console.log(greeting);
}
