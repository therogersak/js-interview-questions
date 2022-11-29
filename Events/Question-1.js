//: How are server-sent events

/* Server-Sent Event(SSE) is a server push technology enabling a browser to receive automatic updates from a server via HTTP connection without resorting to polling. These are a one way communication channel - events flow from server to client only. This has been used in Facebook/Twitter updates, stock price updates, news feed etc. */

//* How do you recive server-sent events notification

if (typeof EventSource !== "undefined") {
  var source = new EventSource("ss_generator.js");
  source.onmessage = function (event) {
    document.getElementById("output").innerHTML = event.data + "<br>";
  };
}


//* How do you check browser support for server-sent events

if (typeof EventSource !== "undefined") {
  // Server-sent events supported. Let's have some code here!
} else {
  // No server-sent events supported
}

//: What are the events available for server sent events
/* Event = Description
=>onopen - It is used when a connection to the server is opened
=> onmessage - This event is used when a message is received
=> onerror	- It happens when an error occurs */
