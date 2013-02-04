/* Function tst_phone_num
 Parameter: A string
 Result: Returns true if the parameter has the form of a legal
 seven-digit phone number (3 digits, a dash, 4 digits)
 */

function tst_phone_num(num) {

  // Use a simple pattern to check the number of digits and the dash

  var ok = num.search(/\d{3}-\d{4}/);

  if(ok == 0)
    return true;
  else
    return false;

}// end of function tst_phone_num

/* Actual form validation. Called onclick */
var validate = function () {
  var phoneNumber = document.getElementById("phone_number");
  if(tst_phone_num(phoneNumber.value)) {
    return true;
  } else {
    alert("Phone number is invalid. Please use format ddd-dddd.");
    return false;
    // prevents submission
  }
};

// -->

/*
// Test tst_phone_num -- commented out in production
tests = ["444-5432", "444-r432", "44-1234"]
for( i = 0; i < tests.length; i++) {
  var tst = tst_phone_num(tests[i]);
  if(tst) {
    console.log(tests[i] + " is a legal phone number <br />");
  } else {
    console.error("Error in tst_phone_num: " + tests[i] + " is not a legal phone number <br />");
  }
}
*/