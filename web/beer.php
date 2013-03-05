<!DOCTYPE html>
<!-- beer.php
An example to illustrate PHP.
Note that there is actually no PHP in this file!
-->
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Beer Shop - PHP</title>
      <link rel="stylesheet" href="css/bootstrap.min.css">
      <link rel="stylesheet" href="css/bootstrap-responsive.min.css">
      <link rel="stylesheet" href="css/main.css">
      <script src="js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>
  </head>
  <body>
    <div class="container">
      <h1>Beer Shop &ndash; Using PHP</h1>
      <form class="form-horizontal" method="post" action="echo_params.php">
        <fieldset>
          <legend>What's your poison?</legend>
          <div class="control-group">
            <label class="control-label">Beer colour</label>
            <div class="controls">
              <select name="colour"/>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </div>
            <br />
            <label class="control-label">Beer taste</label>
            <div class="controls">
              <select name="taste"/>
                <option value="malty">Malty</option>
                <option value="hoppy">Hoppy</option>
              </select>
            </div>
          </div>
        </fieldset>
        <input class="btn btn-primary" type="submit" />
      </form>
    </div>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
    <script src="js/vendor/bootstrap.min.js"></script>
  </body>
</html>
