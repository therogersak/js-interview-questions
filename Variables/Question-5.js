//: What is the Temporal Dead Zone

/* The Temporal Dead Zone is a behavior in JavaScript that occurs when declaring a variable with the let and const keywords, but not with var. In ECMAScript 6, accessing a let or const variable before its declaration (within in scope) causes a ReferenceError. The time span when that happens, between the creation of a variable's binding and its declaratiion, is called the temporal dead zone. */

function somemethod() {
  console.log(counter1);
  console.log(counter2);

  var counter1 = 1; // undefined
  let counter2 = 2; // ReferenceError
}
