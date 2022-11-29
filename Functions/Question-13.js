//: What is the callback function

/* A callback function is a function passed into another function as an argument. */

function callbackFunction(name) {
  console.log("Hello " + name);
}

function outerFunction(callback) {
  let name = prompt("Please enter your name.");
  callback(name);
}

outerFunction(callbackFunction);

//* Why do we need callbacks

/* The callbacks are needed beacuse javascript is an event language. That means instead of waiting for a response will keep executing while listing for other events. Let's take an example with the first function invoking an Api call and the next function which logs the message. */

function firstFunction() {
  // Simulate a code delay
  setTimeout(function () {
    console.log("First function called");
  }, 1000);
}
function secondFunction() {
  console.log("Second function called");
}
firstFunction();
secondFunction();

Output;
// Second function called
// First function called

/* As observed from the output, javascript didn't wait for the response of the first function and the remaining code block got executed. So callbacks are used in a way to make sure that certain code doesn’t execute until the other code finishes execution. */

//* What is a callback hell

/* Callback Hell is an anti-pattern with multiple nested callbacks which makes code hard to read and debug when dealing with asynchronous logic. */

async1(function () {
  async2(function () {
    async3(function () {
      async4(function () {
        // ....
      });
    });
  });
});

//* What is callback in callback

/* You can nest one callback inside in another callback to execute the action sequentially one by one. */


loadScript("/script1.js", function (script) {
  console.log("first script is loaded");

  loadScript("/script2.js", function (script) {
    console.log("second script is loaded");

    loadScript("/script3.js", function (script) {
      console.log("third script is loaded");
      // after all scripts are loaded
    });
  });
});