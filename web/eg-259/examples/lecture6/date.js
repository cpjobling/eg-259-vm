// date.js 
//   Illustrates the use of the Date object by 
//   displaying the parts of a current date and
//   using two Date objects to time a calculation

var element = $('#result');

// Get the current date
var today = new Date();


// Fetch the various parts of the date
var dateString = today.toLocaleString(),
    day = today.getDay(),
    month = today.getMonth(),
    year = today.getFullYear(),
    timeMilliseconds = today.getTime(),
    hour = today.getHours(),
    minute = today.getMinutes(),
    second = today.getSeconds(),
    millisecond = today.getMilliseconds();

// Display the parts of the date
element.append("<p>Date: " + dateString + "<br />" +
    "Day: " + day + "<br />" +
    "Month: " + month + "<br />" +
    "Year: " + year + "<br />" +
    "Time in milliseconds: " + timeMilliseconds + "<br />" +
    "Hour: " + hour + "<br />" +
    "Minute: " + minute + "<br />" +
    "Second: " + second + "<br />" +
    "Millisecond: " + millisecond + "</p>");

// Time a loop

var dum1 = 1.00149265,
    product = 1;

var start = new Date();

for (var count = 0; count < 10000; count++) {
    product = product + 1.000002 * dum1 / 1.00001;
}

var end = new Date();
var diff = end.getTime() - start.getTime();
element.append("<p>The loop took " + diff + " milliseconds</p>");