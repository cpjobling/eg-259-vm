// arrays.js -- Arrays in JavaScript

var element = $('#result');

// Array constructor
var myList = new Array(24, "bread", true);
// Array literal
var myList2 = [24, "bread", true];
// An empty array
var myList3 = [];

// The length of an array is the highest subscript to which an element has 
// been assigned, plus 1
myList[122] = "bitsy";  
console.log(myList.length); // -> 123

// Because the length property is writeable, you can set it to make the array 
// any length you like, as in
myList.length = 150;
console.log(myList.length); // -> 150

// List functions
primes = [1, 3, 5, 7, 13];
console.log(primes);

// -- join
primeList = primes.join('; ');
element.append("<p>The first 5 prime numbers are: " + primeList + "</p>");

// -- reverse
element.append("<p>Reversed prime list: [" + primes.reverse() + "]</p>");

// sort
element.append("<p>" + ["miney", "mo", "eeney", "meeny"].sort() + "</p>");

// concat
var newList = myList.concat(47, 26);
element.append("<p> newList: " + newList + "</p>");

// slice
var letters = ['a','b','c','d','e','f','g'];
var listPart = letters.slice(2, 5);
var listPart2 = listPart.slice(2);
element.append("<p>After slicing [" + letters + "]<br />" +
                "listPart = [" + listPart + "]<br />" +
                "listPart2 = [" + listPart2 + "]</p>");

// toString - coerces elements to strings, if necessary, and concatenate them // together, separated by commas (exactly like join(”, ”))
element.append("<p>[" + letters + "].toString() gives \"" + letters.toString() + "\"</p>");

// push, pop, unshift, and shift
var newLength = letters.push('h');
element.append("<p>letters.push('h') gives [" + letters + "] and returns " + newLength + "</p>");
var letter = letters.pop();
element.append("<p>letters.pop() gives [" + letters + "] and returns " + letter + "</p>");
letter = letters.shift();
element.append("<p>letters.shift() gives [" + letters + "] and returns " + letter + "</p>");
newLength = letters.unshift('p');
element.append("<p>letters.unshift('p') gives [" + letters + "] and returns " + newLength + "</p>");