//* => What are truthy and falsy value In Javascript

// Javascript uses type coercion (implicit conversion of values from one data type to another) in Boolean contexts such as conditionals

// truthy evaluate true
// falsy evaluate false

//? there are 6 values that are considered falsy in Js

//  false , NaN, undefined , null , " ", (0 , -0 , 0.0 , -0.0 , 0n)

//! You can check a value's truthiness using either the Boolean() function or a double negation (!!).
console.log(!!1);

//* falsy values

Boolean(null);
Boolean(NaN);
Boolean(undefined);
Boolean(false);
Boolean("");
Boolean(0);
Boolean(-0);
Boolean(-0.0);
Boolean(0.0);
Boolean(0n);

// truthy value

Boolean(1);
Boolean(-1);
Boolean(1n);
Boolean(-1);
Boolean(true);
Boolean("hi");
Boolean([]);
Boolean([1]);
Boolean([0]);
Boolean({});
Boolean({ 0: 1 });
