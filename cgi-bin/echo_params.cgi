#!/usr/bin/perl -wT

#This is an extremely simple script that uses CGI.pm 
#to parse incoming form data and then prints out the 
#results to the screen. It neither saves the form data, 
#nor sends it anywhere. Its only use is to see how 
#forms interact with scripts.


use strict;

use CGI ':standard';
my @param=param();

print "Content-type: text/html\n\n";

print <<END;
<!DOCTYPE html>
<!-- echo_params.cgi
     An example to illustrate CGI. Echoes values passed in GET/POST
     request.
-->
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>
      Echo Parameters in Perl CGI
    </title>
    <link rel="stylesheet" href="/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/bootstrap-responsive.min.css">
    <link rel="stylesheet" href="/css/main.css">
    <script src="/js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>
  </head>
  <body>
    <div class="container">
      <h1>
        Echo GET/POST parameters in Perl CGI
      </h1>
END

foreach my $name (param()) {
	my @value= param($name);
	print "<p>The field with the NAME attribute equal ";
	print "to <b>$name</b> had a VALUE equal to ";
	print "<b>@value</b></p>\n";
}

print <<END;
    </div>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
    <script src="/js/vendor/bootstrap.min.js"></script>
  </body>
</html>
END
