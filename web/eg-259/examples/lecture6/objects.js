// objects.js -- Objects in JavaScript

var element = $('#result');

// Using object constructor
var myAirplane = new Object(); // Literal version preferred ... see line 9
myAirplane.make = "Cessna";
myAirplane.model = "Centurian";

// Creating objects using "object literal" syntax
var myCar = { 
    make: "Volkswagen",
    model: "Passat" 
};

// Property access ... dot form preferred!
element.append("<p>My car is a " + myCar['make'] + " " + myCar.model + ".</p>");

// getting properties
var make = myAirplane.make;
var model = myAirplane["model"];
element.append("<p>I like to fly " + make  + " " + model + "s.</p>");

// setting (updating) properties
myAirplane.make = "Boeing";
myAirplane["model"] = "767";
element.append("<p>Now I can fly a " + myAirplane.make  + " " + 
               myAirplane.model + ".</p>");

// Deleting properties
delete myCar.model;
element.append("<p>My " + myCar.make  + " is " + 
               myCar.model + ".</p>");