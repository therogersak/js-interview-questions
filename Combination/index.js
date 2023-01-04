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



function randomNumberGeneratorInRange(min, max) {
  return Math.floor(Math.random() * max - min + 1) + min;
}
console.log(randomNumberGeneratorInRange(10, 20))


//: Can i use reserved words as identifiers

var class = "hello"

//: How do you make synchronous HTTP request

function httpGet(theUrl) {
    var xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.open("GET", theUrl, false)  // false for synchronous request
    xmlHttpReq.send(null);
    return xmlHttpReq.responseText;
}

//: How do you make asynchronous HTTP request

function httpGetAsync(theUrl, callback) {
  var xmlHttpReq = new XMLHttpRequest();
  xmlHttpReq.onreadystatechange = function () {
    if (xmlHttpReq.readyState == 4 && xmlHttpReq.status == 200)
      callback(xmlHttpReq.responseText);
  };
  xmlHttp.open("GET", theUrl, true); // true for asynchronous
  xmlHttp.send(null);
}


//: How do you convert date to another timezome in javascript

console.log(new Date().toLocaleString("en-GB", { timeZone: 'UTC' }));

//: What are the properties used to get size of windows

var WIDHT = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth

var HEIGHT = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight


//: What are the ways to execute javascript after page load

window.onload || document.onload || "BODY ONLOAD"

//: How do you detect a browser language preference

var language = (navigator.language && navigator.language[0]) || navigator.language || navigator.userLanguage;

console.log(language)

//: How to convert string to title case with javascript

var titleCase = function (str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}


//: How do you detect javascript disabled in the page
{/* <noscript></noscript */ }

//: How do you determine two values same or not using object

Object.is("hello", "hello");  // true
Object.is(window, window);  // true
Object.is([], []);  // true

//: How do you copy properties from one object to other

// Object.assign(target, ...source)

const target = { a: 1, b: 2 }
const source = { b: 3, c: 4 };

const returnedTarget = Object(target, source);
console.log(target) //  {a:1, b:3, c:4}

console.log(returnedTarget) // {a:1, b:3, c:4}


//: What is a proxy object

var handler = {
  get: function (obj, prop) {
    return prop in obj ? obj[prop] : 100
  }
}

var p = new Proxy({}, handler);
p.a = 10;
p.b = null;

console.log(p.a, p.b); // 10, null
console.log("c" in p, p.c) // false , 100


//: How do you get enumerable key and value pairs

const object = {
  a: 1,
  b: 2,
  c: 3,
}

for (let [key, value] of object.entries(object)) {
  console.log(`${key}:${value}`)
}


//: How do you create an object with prototype

const person = {
  name: "John",
  age: 30,
}

const admin = Object.create(person);

admin.name = "Admin"; // Remember that "name" is a property set on "admin" but not on "user" object

admin.age // 30

//: What is an Unary operator

var x = "100";
var y = +x;
console.log(typeof x, typeof y); // string, number

var a = "Hello";
var b = +a;
console.log(typeof a, typeof b); // => string, number => NaN

//: How do you sort elements in an array

var months = ["Jan", "May", "Feb", "Mar", "Apr"];
months.sort();
console.log(months);

//: How do you find min and max value in an array

var marks = [100, 40, 20, 40, 80, 70, 55];

function findMax(...marks) {
  return Math.max(...marks);
}

function findMin(...marks) {
  return Math.min(...marks);
}

console.log(findMax(...marks));
console.log(findMin(...marks));

//: How do find min/max values without Math functions

var num = [1, 20, 50, 100, 5680, 48435, 895438];

var marks = [50, 20, 70, 60, 45, 30];
function findMin(arr) {
  var length = arr.length;
  var min = Infinity;
  while (length--) {
    if (arr[length] < min) {
      min = arr[len];
    }
  }
  return min;
}

function findMax(arr) {
  var length = arr.length;
  var max = -Infinity;
  while (len--) {
    if (arr[length] > max) {
      max = arr[length];
    }
  }
  return max;
}

console.log(findMin(num));
console.log(findMax(num));

//: What is comma operator

var x = 1;
x = (x++, x);
console.log(x); // 2


//: What is a constructor method

class Employee{
  constructor () {
    this.name = "Ankit";
  }
}


const employee1 = new Employee();

console.log(employee1.name) // Ankit

//: How do you call the constructor of a parent class

class Square extends Rectangle {
  constructor(length) {
    super(length, length);
    this.name = "Square";
  }

  get area() {
    return this.width * this.height;
  }

  set area(value) {
    this.area = value;
  }
}


