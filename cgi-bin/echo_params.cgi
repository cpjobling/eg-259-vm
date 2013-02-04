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
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN"
  "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<!-- echo_params.cgi
     An example to illustrate CGI. Echoes values passed in GET/POST
     request.
     -->
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
  <head><head>
    <title>
      Echo Parameters in Perl CGI
    </title>
  </head>
  <body>
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

print "</body></html>\n"