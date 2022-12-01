//: What is the purpose of isFinite function

/* The isFinite() function is used to determine whether a number is a finite, legal number. It returns false if the value is +infinity, -infinity, or NaN(Not-a-Number), otherwise it returns true.*/

console.log(isFinite(Infinity)); // false
console.log(isFinite(NaN)); // false
console.log(isFinite(-Infinity)); // false

console.log(isFinite(100)); // true
