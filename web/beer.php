<!DOCTYPE html>
<!-- beer.php
An example to illustrate PHP.
Note that there is actually no PHP in this file!
-->
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Beer Shop - PHP</title>
  </head>
  <body>
    <h1>Beer Shop - PHP Version</h1>
    <form method="post" action="echo_params.php">
      <p>
        What's your poison?
      </p>
      <p>
        Beer colour
        <select name="colour"/>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        </select>
        <br />
        Beer taste
        <select name="taste"/>
        <option value="malty">Malty</option>
        <option value="hoppy">Hoppy</option>
        </select>
        <br />
        <input type="submit" />
    </form>
  </body>
</html>
