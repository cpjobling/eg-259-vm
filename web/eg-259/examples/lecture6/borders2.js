// borders2.html 
// An example of a switch statement for table border size selection

var bordersize, table, element;

element = $('#result');

bordersize = prompt("Select a table border size \n" +
    "0 (no border) \n" +
    "1 (1 pixel border) \n" +
    "4 (4 pixel border) \n" +
    "8 (8 pixel border) \n");

table = "";

switch (bordersize) {
    case "0":
        table += "<table>";
        break;
    case "1":
        table += "<table border = '1'>";
        break;
    case "4":
        table += "<table border = '4'>";
        break;
    case "8":
        table += "<table border = '8'>";
        break;
    default:
        console.error("Error - invalid choice: " + bordersize + "\n");
        table += "<table>";
}

table += "<caption> 2003 NFL Divisional Winners </caption>";
table += "<tr>" +
    "<th />" +
    "<th> American Conference </th>" +
    "<th> National Conference </th>" +
    "</tr>" +
    "<tr>" +
    "<th> East </th>" +
    "<td> New England Patriots </td>" +
    "<td> Philadelphia Eagles </td>" +
    "</tr>" +
    "<tr>" +
    "<th> North </th>" +
    "<td> Baltimore Ravens </td>" +
    "<td> Green Bay Packers </td>" +
    "</tr>" +
    "<tr>" +
    "<th> West </th>" +
    "<td> Kansas City Chiefs </td>" +
    "<td> St. Louis Rams </td>" +
    "</tr>" +
    "<tr>" +
    "<th> South </th>" +
    "<td> Indianapolis Colts </td>" +
    "<td> Carolina Panthers </td>" +
    "</tr>" +
    "</table>";

console.log(table);

element.append(table);
