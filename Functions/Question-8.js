//: What is the currying function

/* Currying is the process of taking a function with multiple arguments and turning it into a sequence of function each with only a single argument. Currying is named after a mathematician Haskell Curry. By applying currying a n-ary function turns it into a unary function. */

const multiArgumentFun = (a, b, c) => a + b + c;
console.log(multiArgumentFun(2, 5, 6));

const curryUnaryFunction = (a) => (b) => (c) => a + b + c;
curryUnaryFunction(2);
curryUnaryFunction(2)(5);
curryUnaryFunction(2)(5)(6);
