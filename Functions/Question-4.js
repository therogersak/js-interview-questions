//: What is a first class function

/* In JavaScript, functions are first class objet. First-class functions means when functions in that language are treated like any other variable.

For Example, in such a language, a function can be passed as an argument to other functions, can be returned by another functions and can be assinged as a value to a variable. For example, in the below example, handler functions assigned to a listener.*/

const handler = () => console.log("Hello");
document.addEventListener("click", handler);
