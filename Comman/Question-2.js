// What is the differnce between an expression and a statement in Javascript

//** ==> An Expression is any valid unit of code that resolves to a value.

//** ==> A Statement is a unit of code that perform an action.

//! Below the Examples

//? Statements

let x = 0;
function add(a, b) {
  return a + b;
}
if (true) console.log("HI");
//? Expressions
x; // Resolves to 0
3 + x; // Resolves to 3
add(1, 2); // Resolves 3

// Anywhere Javascript expects a statement, you can also write an Expression. the kind of statement is called an Expression statement. Conversely, you cannot write a statement where Javascript expects an Expression