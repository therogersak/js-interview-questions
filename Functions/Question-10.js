//: What if IIFE(Immediately invoked Function Expression)

/* IFFE is a Javascript function that runs as soon as it is defined. The signature of it would be as below. */

(function () {
  // logic here
})();

/* The primary reason to use an IIFE is to obtain data privacy becasuse any variables declared within the IIFE cannot be accessed by the outside world. If you try to access variables with IIFE then it throws an error as below, */

(function () {
  var message = "IIFE";
  console.log(message);
})();
console.log(message); //Error: message is not defined
