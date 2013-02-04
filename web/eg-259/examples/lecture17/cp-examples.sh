
#!/bin/sh 
# copy all examples to eehope.swan.ac.uk

HTDOCS=/cygdrive/c/xampp/htdocs
SITE=eg-259/examples/lecture17

rst2html.py examples.txt index.html
# Copy to eehope
echo "Copying to eechris@eehope.swan.ac.uk:public_html/$SITE"
scp index.html eechris@eehope.swan.ac.uk:public_html/$SITE
scp today.php powers.php eechris@eehope.swan.ac.uk:public_html/$SITE
scp powers.php eechris@eehope.swan.ac.uk:public_html/$SITE
echo "Done ... try http://eehope.swan.ac.uk/~eechris/$SITE/index.html"
# Copy to localhost
echo "Copying to localhost/$SITE"
cp index.html $HTDOCS/$SITE
cp today.php powers.php $HTDOCS/$SITE
echo "Done ... try http://localhost/$SITE/index.html"

