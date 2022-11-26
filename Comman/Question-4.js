//: What is JSON and its comman operations

/* JSON is text-based data format following JavaScript object syntax, which was popularized by Douglas Crockford. It is useful when you want to transmit data across a network and it is basically just a text file with an extension of .json and MIME type of application/json. */

//* Parsing: Converting a string to a native object

JSON.parse(text);

//* Stringification: converting a native object to a string so it can be transmitted across the network

JSON.stringify(object);
