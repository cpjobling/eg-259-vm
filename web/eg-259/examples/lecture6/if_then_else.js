// if_then_else.js
// Simple example of conditionals in JavaScript

var a = 2,
    b = 4,
    element = $('#result'),
    message;

if (a > b) {
    message = a + " is greater than " + b;
    console.log(message);
    element.append("<p>" + message + "</p>");
}
else {
    message = a + " is not greater than " + b;
    console.log(message);
    element.append("<p>" + message + "</p>");
    a = b;
}

message = "Now a === b is " + (a === b);

console.log(message);
element.append("<p>" + message + "</p>");