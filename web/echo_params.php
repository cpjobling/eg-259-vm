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
  </head>
  <body>
    <h1> Echo GET/POST parameters in PHP </h1>
    <?php foreach ($_REQUEST as $name => $value) { ?>
    <p>
      The field with the NAME attribute equal to <b><?php print ("$name")
      ?></b> had VALUE equal to <b><?php print ("$value")
      ?></b>
    </p>
    <?php } // End of for loop.?>
  </body>
</html>
