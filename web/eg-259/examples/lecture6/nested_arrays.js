// nested_arrays.html An example to illustrate an
// array of arrays

var element = $('#result'), result_text;

// Create an array object with three arrays as its 
// elements

var nested_array = [
    [2, 4, 6],
    [1, 3, 5],
    [10, 20, 30]
];

// Display the elements of nested_list
result_text = "<p>";
for (var row = 0; row <= 2; row++) {
    result_text += "Row " + row + ":  ";

    for (var col = 0; col <= 2; col++) {
        result_text += nested_array[row][col] + " ";
    }
    result_text += "<br />";
}
element.append(result_text + "</p>");