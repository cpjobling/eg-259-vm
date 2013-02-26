$(document).ready(function() {
    // The event handler for a radio button collection

    var planeChoice = function (plane) {

        // Produce an alert message about the chosen airplane

        switch (plane) {
            case "152":
                alert("A small two-place airplane for flight training");
                break;
            case "172":
                alert("The smaller of two four-place airplanes");
                break;
            case "182":
                alert("The larger of two four-place airplanes");
                break;
            case "210":
                alert("A six-place high-performance airplane");
                break;
            default:
                alert("Error in JavaScript function planeChoice");
                break;
        }
    };

    var describeEvent = function(event, source) {
        console.log("Handler caught " + event.type + " event from " + source);
        console.log("Original target")
        console.log(event.target);
        console.log("Current target");
        console.log(event.currentTarget);
        console.log("Mouse coordinates: [" + event.pageX + ", " + event.pageY + "]");
    };

    // Register event handlers for radio buttons
    $('[name="planeButton"]').on("click", function(event) {
        console.log(describeEvent(event,"planeButton"));
        plane = $(this).val();
        console.log("Button " + plane + " clicked");
        planeChoice(plane);
    });

    // Simplified event registration
    $('#target').click(function(event) {
        console.log(describeEvent(event,"Target Button"));
        alert("Target button clicked");
    });

    $('#other').click(function(event) {
        console.log(describeEvent(event,"Other Button"));
        alert("Other button clicked ... now clicking 'target'");
        $('#target').click();
    });


    // The jQuery event object - allows us to explore bubbling
    jQuery('button[type="submit"]').on("click", function(event) {
        describeEvent(event, "'Search' button");
        // stop form being submitted
        event.preventDefault();
    });

    jQuery('#inner').on("click", function(event) {
        describeEvent(event, "'#inner' div");
        // stop bubbling here
        event.stopPropagation();
    });

    jQuery('#outer').on("click", function(event) {
        // should never fire!
        describeEvent(event, "'#outer' div");
    });

});
