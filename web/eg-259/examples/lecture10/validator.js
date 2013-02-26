// Form validator re-implemented in jQuery

$(document).ready(function() {

  // The event handler function for the name text box

  var chkName = function(event) {
    var myName = event.target;

    // Test the format of the input name
    //  Allow the spaces after the commas to be optional
    //  Allow the period after the initial to be optional
    var pos = myName.value.search(/^[A-Z][a-z]+, ?[A-Z][a-z]+, ?[A-Z]\.?$/);

    if (pos != 0) {
      alert("The name you entered (" + myName.value + ") is not in the correct form. \n" + 
            "The correct form is: " + "Last name, First name, Middle initial \n" + 
            "Please go back and fix your name");
      myName.focus();
      myName.select();
      return false;
    } else
      return true;
  };

  // The event handler function for the phone number text box

  var chkPhone = function(event) {
    var myPhone = event.target;

    // Test the format of the input phone number
    var pos = myPhone.value.search(/^\d{3}-\d{3}-\d{4}$/);

    if (pos != 0) {
      alert("The phone number you entered (" + myPhone.value + ") is not in the correct form. \n" + 
            "The correct form is: ddd-ddd-dddd \n" + 
            "Please go back and fix your phone number");
      myPhone.focus();
      myPhone.select();
      return false;
    } else
      return true;
  };

  var validate_form = function(event) {
    if (! chkName(event) || ! chkPhone(event)) {
      event.preventDefault();
    }
  };


  // Register event handlers
  $("#custName").change(chkName);
  $("#phone")   .change(chkPhone);
  $("#submit")  .click(validate_form);

});