<!DOCTYPE html>
<!-- echo_params.php
An example to illustrate PHP. Echoes values passed in GET/POST
request.

This is an extremely simple script that uses PHP
to parse incoming form data and then prints out the
results to the screen. It neither saves the form data,
nor sends it anywhere. Its only use is to see how
forms interact with scripts.

-->
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title> Echo Parameters in PHP </title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/bootstrap-responsive.min.css">
    <link rel="stylesheet" href="css/main.css">
    <script src="js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>
  </head>
  <body>
    <div class="container">
      <h1> Echo GET/POST parameters in PHP </h1>
      <?php foreach ($_REQUEST as $name => $value) { ?>
      <p>
        The field with the NAME attribute equal to <b><?php print ("$name")
        ?></b> had VALUE equal to <b><?php print ("$value")
        ?></b>
      </p>
      <?php } // End of for loop.?>
    </div>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
    <script src="js/vendor/bootstrap.min.js"></script>
  </body>
</html>
