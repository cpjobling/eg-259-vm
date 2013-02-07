// medians.js
// A function and a function tester
// Illustrates array operations


var element = $('#result');

/* 
     Function median
     Parameter: An array of numbers
     Return value: The median of the array
*/

var median = function (list) {
    list.sort(function (a, b) {
        return a - b;
    });
    var list_len = list.length;

    // Use the modulus operator to determine whether
    //  the array's length is odd or even
    // Use Math.floor to truncate numbers
    // Use Math.round to round numbers

    if ((list_len % 2) == 1) {
        return list[Math.floor(list_len / 2)];
    } else {
        return Math.round((list[list_len / 2 - 1] + list[list_len / 2]) / 2);
    }
}; // end of function median -- note semicolon

var my_list_1 = [8, 3, 9, 1, 4, 7],
    my_list_2 = [10, -2, 0, 5, 3, 1, 7],
    med;

med = median(my_list_1);
element.append("<p>Median of [" + my_list_1 + "] is: " + med + "</p>");

med = median(my_list_2);
element.append("<p>Median of [" + my_list_2 + "] is: " + med + "</p>");