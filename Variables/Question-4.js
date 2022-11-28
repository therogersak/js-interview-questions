//: How do you redeclare variables in switch block without an error

/* If you try to redeclare variables in a swich block then it will cause errors because there is only one block. For Example, the below code block throws a syntax error as below. */

let counter = 1;

switch (x) {
  case 0:
    let name;
    break;

  case 1:
    let name; // syntaxError for redeclaration
    break;
}

/* To avoid this error, you can create a nested block inside a case clause and create a new block scoped lexical environment. */

let num = 1;

switch (x) {
  case 0: {
    let name;
    break;
  }

  case 1: {
    let name;
    break;
  }
}
