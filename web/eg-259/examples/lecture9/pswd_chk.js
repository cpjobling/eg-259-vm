// The event handler for password checking
 
var chkPasswords = function () {
  var password = document.getElementById("password");
  var confirmation = document.getElementById("password_confirmation");
  if (password.value === "") {
    alert("You did not enter a password \n" + "Please enter one now");
    password.focus();
    return false;
  }
  if (password.value !== confirmation.value) {
    alert("The two passwords you enterd are not the same \n" + "Please re-enter both now");
    password.focus();
    password.select();
    return false;
  } else {
    return true;
  }
};

// Set submit button onsubmit property to the event handler

document.getElementById("password_confirmation").onblur = chkPasswords;
document.getElementById("myForm").onsubmit = chkPasswords;