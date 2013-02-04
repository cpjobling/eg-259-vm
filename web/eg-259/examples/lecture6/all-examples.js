// #Programming in JavaScript
//
//  ##Control Statements
//
//  * Similar to C, Java, and C++ 
//  * Compound statements are delimited by braces, but compound statements are **//not//** blocks 



/* 
  The usual if-then-else - 
   clauses can be either single statements or compound statements
*/

var a = 1, b = 1;
if (a > b)
  console.log(a + " is greater than " + b);
else {
  console.log(a + " is not greater than " + b);
  a = b;
}
console.log("Now a === b is " + (a === b));

// CH7: Examples

/* 
  The usual if-then-else - 
   clauses can be either single statements or compound statements
*/

var a = 1, b = 1;
if (a > b)
  console.log(a + " is greater than " + b);
else {
  console.log(a + " is not greater than " + b);
  a = b;
}
console.log("Now a === b is " + (a === b));

/*
 Example of a Case Statement
*/
var desire = prompt("What class of degree would you like? [1st; 2.1; 2.2; 3rd; pass]");
console.info("To get a " + desire + " degree ");
switch(desire) {
  case "1st": 
    console.info("you need a cascade average >= 70%");
    break;
  case "2.1": 
    console.info("you need a cascade average between 60% and 69.99%");
    break;
  case "2.2": 
    console.info("you need a cascade average between 50% and 59.99%");
    break;
  case "3rd": 
    console.info("you need a cascade average between 40% and 49.99%");
    break;
  case "pass": 
    console.info("you need a cascade average between 30% and 39.99%");
    break;
  default:
    console.error("I don't understand that classification");
}

/*
  Illustrates the use of the Date object by
  displaying the parts of a current date and
  using two Date objects to time a calculation
*/

// Get the current date

var today = new Date();

// Fetch the various parts of the date

var dateString = today.toLocaleString();
var day = today.getDay();
var month = today.getMonth();
var year = today.getFullYear();
var timeMilliseconds = today.getTime();
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var millisecond = today.getMilliseconds();

// Display the parts

console.log("Date: " + dateString + "\n" +
  "Day: " + day + "\n" + 
  "Month: " + month + "\n" +
  "Year: " + year + "\n" +
  "Time in milliseconds: " + timeMilliseconds + "\n" +
  "Hour: " + hour + "\n" +
  "Minute: " + minute + "\n" +
  "Second: " + second + "\n" +
  "Millisecond: " + millisecond + "\n");

// Time a loop

var dum1 = 1.00149265, product = 1;
var start = new Date();

for(var count = 0; count < 10000; count++) {
  product = product + 1.000002 * dum1 / 1.00001;
}
var end = new Date();
var diff = end.getTime() - start.getTime();
console.info("The loop took " + diff + " milliseconds");

/* Objects */
var myAirplane = new Object();
myAirplane.make = "Cessna";
myAirplane.model = "Centurian";
// Properties can be added as required
myAirplane.temp = "Temporary property";
console.log(myAirplane.temp);
// Properties are accessible using array notation
myAirplane['temp'] = "New value";
console.log(myAirplane['temp']);
// Properties can be removed
delete myAirplane.temp;
console.log(myAirplane.temp);
// You can find out if a property is defined.
console.log(myAirplane.hasOwnProperty('temp'));
// You can list all properties using for..in loop
for (prop in myAirplane) {
  console.log("property: " + prop +  " has value " + myAirplane[prop]);
}
// ... we can't use dot notation as an accessor in for..in loops.
//     why not?

/* Object literals */
var myAirplane = {
   make: "Cessna",
   model: "Centurion"
};
// Note the syntax ...

/* Arrays */
// Using array constructor ... elements passed as arguments
var myList = new Array(24, "bread", true);
// Array literal
var myList2 = [24, "bread", true];
console.log(myList.length);
myList[122] = "bitsy";  // length is 123
console.log(myList.length);
myList.length = 150; // length is now 150
console.log(myList.length);

/* Insert Names */
// The original list of names
var name_list = new Array("Al", "Betty", "Kasper", "Michael", "Roberto", "Zimbo");
var new_name, index, last;

// Loop to get a new name and insert it

while( new_name = prompt("Please type a new name", "")) {

  // Loop to find the place for the new name

  last = name_list.length - 1;

  while(last >= 0 && name_list[last] > new_name) {
    name_list[last + 1] = name_list[last];
    last--;
  }

  // Insert the new name into its spot in the array

  name_list[last + 1] = new_name;

  // Display the new array

  console.log("The new name list is: \n");
  for( index = 0; index < name_list.length; index++) {
    console.log(name_list[index]);
  }
} //** end of the outer while loop

/* Nested arrays */
// Create an array object with three arrays as its elements

var nested_array = [[2, 4, 6], [1, 3, 5], [10, 20, 30]];

// Display the elements of nested_list
for(var row = 0; row <= 2; row++) {
  console.log("Row ", row, ":  ");

  for(var col = 0; col <= 2; col++) {
    console.log(nested_array[row][col], " ");
  }
  console.log("\n");
}


// Function params
// Parameters: two named parameters and one unnamed
//             parameter, all numbers
// Returns: nothing

function params(a, b) {
  console.log("Function params was passed " + arguments.length + " parameter(s) \n");
  console.log("Parameter values are: \n");

  for(var arg = 0; arg < arguments.length; arg++) {
    console.log(arguments[arg] + "\n");
  }
  console.log("\n");
}

// A text driver for params

params("Mozart");
params("Mozart", "Beethoven");
params("Mozart", "Beethoven", "Tchaikowsky");


/* Function median
 Parameter: An array of numbers
 Result: The median of the array
 Return value: none
 Alternative function definition format
 */

var median = function(list) {
  list.sort(function(a, b) {
    return a - b;
  });
  var list_len = list.length;

  // Use the modulus operator to determine whether
  //  the array's length is odd or even
  // Use Math.floor to truncate numbers
  // Use Math.round to round numbers

  if((list_len % 2) == 1) {
    return list[Math.floor(list_len / 2)];
  }
  else {
    return Math.round((list[list_len / 2 - 1] + list[list_len / 2]) / 2);
  }
};  // end of function median ... note semicolon

var my_list_1 = [8, 3, 9, 1, 4, 7];
var my_list_2 = [10, -2, 0, 5, 3, 1, 7];
var med = median(my_list_1);
console.log("Median of [", my_list_1, "] is: " + med);
med = median(my_list_2);
console.log("Median of [", my_list_2, "] is: " + med);


// Constructors
function Plane(newMake, newModel, newYear) {
  this.make = newMake;
  this.model = newModel;
  this.year = newYear;
}

myPlane = new Plane("Cessna", "Centurian", "1970");

var displayPlane = function () {
  console.log("Make: " +  this.make);
  console.log("Model: " + this.model);
  console.log("Year: " +  this.year);
}

// add a method to plane
myPlane.display = displayPlane
myPlane.display();

// method not added to prototype!
myOtherPlane = Plane("Cessna","Caravan","1987");
myPlane.display(); // fails with "TypeError: myOtherPlane.display is not a function"
/* Comment out previous line to execute following */

// Add method to prototype for Plane ... becomes available to all planes
Plane.prototype.display = displayPlane;
myPlane.display();
myOtherPlane = Plane("Cessna","Caravan","1987");
myOtherPlane.display();

// Even ones created in the future
yetAnotherPlane = new Plane("Cessna","Model 120","1950");
yetAnotherPlane.display();