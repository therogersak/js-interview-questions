//: What is the difference between Call, Apply and Bind

//* Call: The Call method invokes a function with  a given this value and arguments provided one by one.

var employee1 = { firstName: "Ankit", lastName: "Yadav" };
var employee2 = { firstName: "Manish", lastName: "Yadav" };

function invite(greeting1, greeting2) {
  console.log(`${greeting1} ${this.firstName} ${this.lastName} ${greeting2}`);
}

invite.call(employee1, "Hello", "How are you"); // Hello Ankit Yadav How are you
invite.call(employee2, "Hello", "How Are You"); // Hello Manish Yadav How Are You

//* Apply: invokes the function with a given this value and allows you to pass in arguments as an array.

var person1 = { firstName: "Ankit", lastName: "Yadav" };
var person2 = { firstName: "Manish", lastName: "Yadav" };

function greeting(message1, message2) {
  console.log(`${this.firstName} ${this.lastName} ${message1} ${message2}`);
}

greeting.apply(person1, ["Hello", "Ram Ram Ji"]); // Ankit Yadav Hello Ram Ram Ji
greeting.apply(person2, ["Hello", "Jai Shree Shayam"]); // Manish Yadav Hello Jai Shree Shayam

//* bind: returns a new function, allowing you to pass any number of arguments

var User1 = { firstName: "Ankit", lastName: "Yadav" };
var User2 = { firstName: "Manish", lastName: "Yadav" };

function display(message1, message2) {
  console.log(`${message1} ${this.firstName} ${this.lastName} ${message2}`);
}

const display1 = display.bind(User1);
const display2 = display.bind(User2);

display1("Hello", "Jai Hind"); // Hello Ankit Yadav Jai Hind
display2("Hello", "Jai Shree Ram"); // Hello Manish Yadav Jai Shree Ram
