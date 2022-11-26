//* What is the diffrence between javascript's equality operators?

// -> Javascript provides two equality operators for comparisons values

//? == and ===

// 1. the double equals (==), also known as the loose equality operator
// 2. the triple equals (===), also known as the strict equality operator

// -> the triple equals (===) operator compares both type and value

// -> the double equals (==) operator compares value

//! here are some examples to up any confusion:

const num = 0;
const str = "0";
const obj = new String(0);
const bool = false;
const undef = undefined;
const nil = null;

console.dir([
  num == str, // 0 == 0, true
  num == bool, // 0 == 0, true
  str == obj, // '0' == '0', true
  obj == num, // 0 == 0, true
  bool == str, // 0 == 0, true
  bool == obj, // 0 == 0, true
  bool == nil, // false
  undef == nil, // true
  undef == bool, // false
]);

console.dir([
  num === str, // types don't match, false
  num === bool, // types don't match, false
  str === obj, // types don't match, false
  obj === num, // types don't match, false
  bool === str, // types don't match, false
  bool === obj, // types don't match, false
  bool === nil, // types don't match, false
  undef === nil, // types don't match, false
  undef === bool, // types don't match, false
]);
