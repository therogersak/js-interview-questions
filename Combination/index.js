//: How do you check wheter a string contain a substring

var mainStr = "Hello";
var subStr = "Hell";
console.log(mainStr.includes(subStr));

console.log(mainStr.indexOf(subStr) !== -1);

console.log(/hell/gi.test(mainStr));

//: How do you get the current url with Javascript

// console.log(window.location.href);

//: How do you check if a key exists in

const obj = {
  name: "therogersak",
};

"name" in obj;
obj.hasOwnProperty("name"); // true

console.log(obj.name !== undefined); // true

//: How do you loop through or enumerate javascript object

const Person = {
  name: "Ankit",
  age: 18,
};

for (let key in Person) {
  if (obj.hasOwnProperty(key)) {
    console.log(`${key} : ${Person[key]}`);
  }
}

//: How do you test for an empty object

const objj = {};

Object.keys(objj).length === 0 && obj.constructor === Object;

Object.entries(objj).length === 0 && obj.constructor === Object;

function isEmpty(obj) {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      return false;
    }
  }

  return JSON.stringify(obj) === JSON.stringify({});
}

//: What is an arguments object

function sum() {
  var total = 0;
  for (var i = 0, len = arguments.length; i < len; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(sum(1, 2, 3)); // 6

//: How do you make first letter of the string in an uppercase

let simpleStr = "hello";

function makeFirstLatterUpper(str) {
  return str.substr(0, 1).toUpperCase() + str.slice(1);
}

console.log(makeFirstLatterUpper(simpleStr));

//: How do you display the current data in Javascript

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0");
var hh = String(today.getFullYear());

var date = `${mm}/${dd}/${hh}`;
console.log(date);

//: How do you compare two date objects

var date1 = new Date();
var date2 = new Date(date1);

console.log(date1.getTime() === date2.getTime());
console.log(date1 === date2);

//: How do you check if a string start with another string

var str1 = "Hello";
var str2 = "Hello";
console.log(str1.startsWith(str2));

//:  How do you trim a string in Javascript

console.log("  Hello World   ".trim()); // "Hello World"

//? If your browser(<IE9) doesn't support this method then you can use below polyfill.

if (!String.prototype.trim) {
  (function () {
    // Make sure we trim BOM and NBSP
    var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    String.prototype.trim = function () {
      return this.replace(rtrim, "");
    };
  })();
}

//: How do you add a key value pair in javascript

let codes = {
  code1: "Code 1",
  code2: "Code 2",
};

codes.code3 = "code3";

codes["code4"] = "code4";

//: How do you assign default value to variables

var b = null;
var c = 10;

var a = b || b;

//: How do you define multiline strings

var myStr =
  "This is a \
multiline string \
WOw this is \
awosome";
