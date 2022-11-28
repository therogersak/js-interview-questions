//: What is a pure function

/* A Pure function is a function where the return value is only determined by its arguments without any side effects. i.e, If you call a function with the same arguments 'n' number of times and 'n' number of places in the application then it will always return the same value.*/

//* Impure
let numArray = [];
const impureAddNumber = (number) => numArray.push(number);

//* Pure
const pureAddNumber = (number) => (arrNumberArray) =>
  arrNumberArray.concat([number]);

//Display the results
console.log(impureAddNumber(6)); // returns 1
console.log(numArray); // returns [6]
console.log(pureAddNumber(7)(numArray)); // returns [6, 7]
console.log(numArray); // returns [6]

/* As per the above code snippets, the Push function is impure itself by altering the array and returning a push number index independent of the parameter value. . Whereas Concat on the other hand takes the array and concatenates it with the other array producing a whole new array without side effects. Also, the return value is a concatenation of the previous array.


Remember that Pure functions are important as they simplify unit testing without any side effects and no need for dependency injection. They also avoid tight coupling and make it harder to break your application by not having any side effects. These principles are coming together with Immutability concept of ES6 by giving preference to const over let usage.*/


