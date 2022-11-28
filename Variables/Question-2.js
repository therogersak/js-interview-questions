//: What is the difference between let and var

//* Var

/* => It is been available from the beginning of JavaScript.
   => It has function scope.
   => Variables will be hoisted. */

//* Let

/* => Introduced as part of ES6.
   => It has block scope.
   => Hoisted but not initialized. */

function userDetails(username) {
  if (username) {
    console.log(salary); // undefined due to hoisting
    console.log(age); // ReferenceError: Cannot access 'age' before initialization
    let age = 30;
    var salary = 10000;
  }
  console.log(salary); //10000 (accessible to due function scope)
  console.log(age); //error: age is not defined(due to block scope)
}
userDetails("John");