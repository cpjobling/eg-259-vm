// constructors.js An illustration of object constructors

var element = $('#result');

function Plane(newMake, newModel, newYear) {
    this.make = newMake;
    this.model = newModel;
    this.year = newYear;

    // functions can also be properties
    this.display = function () {
        return "Make: " + this.make +
            "; Model: " + this.model +
            "; Year: " + this.year;
    };
}

var myPlane = new Plane("Cessna", "Centurian", "1970");
element.append("<p>" + myPlane.display() + "</p>");

// We can also access the constructed object's attributes
element.append("<p>My plane is a " + myPlane.year +
    " " + myPlane.make +
    " " + myPlane.model + ".</p>");