// parameters.html The params function and a test 
// driver for it. This example illustrates
// function parameters

var element = $('#result');

// Function describe_params
// Parameters: two named parameters and one unnamed
//             parameter, all numbers
// Returns: nothing

function describe_params(a, b) {
    var text = "Function <em>describe_params</em> was passed " + arguments.length + " parameter(s) <br />" +
        "Parameter values are: <br />";

    for (var arg = 0; arg < arguments.length; arg++) {
        text += arguments[arg] + "<br />";
    }
    text += "In addition named-parameter <em>a</em> was " + a +
            " and <em>b</em> was " + b;
    return text;
}

// A text driver for params

element.append("<p>" + describe_params("Mozart") + "</p>");
element.append("<p>" + describe_params("Mozart", "Beethoven") + "</p>");
element.append("<p>" + describe_params("Mozart", "Beethoven", "Tchaikowsky") + "</p>");