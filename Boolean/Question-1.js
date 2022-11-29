//: What is purpose of double exclamation

/* The double exclamation or negation(!!) ensures the resulting type is a boolean. If it was falsey (e.g. 0, null, undefined, etc). It will be false, otherwise, true. */

const x = 1;
const y = 0;

console.log(!!x);
console.log(!!y);


//* NOTE: The Expression !! is not an operator, but it is just twice of ! operator



