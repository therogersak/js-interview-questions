//: What is isNaN

/* The isNaN() function is used to determine whether a value is an illegal number (Not-a-Number) or not. This function returns true if the value equates to NaN. Otherwise it returns false.*/

isNaN("Hello"); // true
isNaN("100"); // false

//: What is NaN property

/* The NaN property is a global property that represents "Not-a-Number" value. It indicates that a value is not a legal number. It is very rare to use NaN in a program but it can be used as retrun value for few cases. */

Math.sqrt(-1); // NaN
parseInt("Hello"); // NaN
