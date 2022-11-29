//: What is a promise

/* A promise is an object that may produce a single value time in the future with either a resolved value or reason that if's not resolved. It will be in one of the 3 possible states: fulfulled, rejected, or pending. */

const promise = new Promise(function (resolve, reject) {
  // promise description
});

// the usage of a promise would be as below

const promise2 = new Promise(
  (resolve) => {
    setTimeout(() => {
      resolve("I am a Promise!");
    }, 2000);
  },
  (reject) => {}
);

promise2.then((value) => console.log(value));

//* Why do you need a promise

/* Promise are used to handle asynchronous operations. They provide an alternative approach for callbacks by reducing the callback hell and writing the cleaner mode. */

//* What are the three states of promise

/* 1.Pending => This is an inital of the promise before an operation begins.
   2.Fulfilled => This state indicates that the specified oepration was completed.
   3.Rejected => This state indicates that the operation did not complete. In this case as error value will be thrown. */

//* What are the main rules of promise

/* 1.A promise is an object that supplies s standard-compliant .then() method
  2.A pending promise may transition into either fulfilled or rejected state.
  3.Once a promise is settled, the value most not change. */

//* What is promise chaining

/* The process of executing a sequence of asynchronous tasks one after another using promises is known as Promise chaining. */

new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);

})
  .then(function (result) {
    console.log(result); // 1
    return result * 2;
  })
  .then(function (result) {
    console.log(result); // 2
    return result * 3;
  })
  .then(function (result) {
    console.log(result); // 6
    return result * 4;
  });



  //* What is promise.all

/* Promise.all is a promise that takes an array of promises as an input (an iterable), and it gets resolved when all the promise get resolved or any one of them gets rejected. */
  

Promise.all([Promise1, Promise2, Promise3]).then(result) => { console.log(result) }).catch (error => console.log(`Error in promises ${error}`))


//* What is the purpose of the race method in promise

/* Promise.race() method will return the promise instance which is firstly resolved or rejected. */

var promise1 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 500, "one");
});
var promise3 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 100, "two");
});

Promise.race([promise1, promise3]).then(function (value) {
  console.log(value); // "two" // Both promises will resolve, but promise2 is faster
});