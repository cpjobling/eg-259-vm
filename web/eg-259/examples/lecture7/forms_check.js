/* Function tst_phone_num
 Parameter: A string
 Result: Returns true if the parameter has the form of a legal
 seven-digit phone number (3 digits, a dash, 4 digits)
 */

function test_phone_number(num) {

  // Use a simple pattern to check the number of digits and the dash

  var ok = num.search(/\d{3}-\d{4}/);

  if (ok === 0) {
    return true;
  }
  else {
    return false;
  }
  
}// end of function tst_phone_num

/* Actual form validation. Called onclick */
var validate = function() {
  var phoneNumber = document.getElementById("phone_number");
  if (test_phone_number(phoneNumber.value)) {
    return true;
  } else {
    alert("Phone number is invalid. Please use format ddd-dddd.");
    // prevent submission 
    return false;
  }
};

// Test test_phone_number
var test_phone_number_test = function() {
  var tests = ["444-5432", "444-r432", "44-1234"];
  for (i = 0; i < tests.length; i++) {
    var test = test_phone_number(tests[i]);
    if (test) {
      console.log(tests[i] + " is a legal phone number <br />");
    } else {
      console.error("Error in test_phone_number: " + tests[i] + " is not a legal phone number <br />");
    }
  }
};