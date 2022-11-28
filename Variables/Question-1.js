//: What is the purpose of the let keyword

/* The let statement declares a block scope local variable. Hence the variable defined with let keyword are limited in scope to the block, statement or expression on which it is used. Whereas variables declared with the var keyword used to define a variable globally, or locally to an entrie function regardless of block scope. */

let counter = 30;

if (counter === 30) {
  let counter = 50;
  console.log(counter);
}

console.log(counter);
