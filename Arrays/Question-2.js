//: What is the purpose of the array splice method

/* The splice() method is used either add/remove items to/from an array, and then returns the removed item. The first argument specifies the array position for insertion  or deletion whereas the optional second argument indicates the number of elements to be deleted. Each additional argument is added to the array. */

let num = [1, 2, 3, 4, 5, 6];

const newArr = num.splice(2, 1, "a", "b", "c");
console.log(newArr, num);
const newArr2 = num.splice(2, 0, 3, 4, 5, 6);
console.log(newArr2, num);
const newArr3 = num.splice(2);
console.log(newArr3, num);

let arrayIntegersOriginal1 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal2 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal3 = [1, 2, 3, 4, 5];

let arrayIntegers1 = arrayIntegersOriginal1.splice(0, 2); // returns [1, 2]; original array: [3, 4, 5]
let arrayIntegers2 = arrayIntegersOriginal2.splice(3); // returns [4, 5]; original array: [1, 2, 3]
let arrayIntegers3 = arrayIntegersOriginal3.splice(3, 1, "a", "b", "c"); //returns [4]; original array: [1, 2, 3, "a", "b", "c", 5]
