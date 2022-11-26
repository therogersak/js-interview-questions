//: What is the purpose of the array slice method

/* The slice() method return the selected elements in an array as a new array object. It selects the elements starting at the given start argument, and ends at the given optional end argument without including the last element. If you omit the second argument then it selects till the end. */

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let numSlice = num.slice(0, 2); // [1,2]
let numSlice2 = num.slice(2, 4); // [3,4]
let numSlice3 = num.slice(5); // [5,6,7,8,9,0]
