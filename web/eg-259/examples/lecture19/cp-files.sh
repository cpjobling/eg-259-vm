#!/bin/sh

SERVER_ROOT=/cygdrive/c/xampp
CGI_BIN=/cygdrive/c/Users/eechris/public_html/cgi-bin
HTDOCS=$SERVER_ROOT/htdocs/eg-259/examples/lecture19
USER=eechris
REMOTE_HOST=eehope.swan.ac.uk
LOCAL_HASH_BANG=win-header.txt
REMOTE_HASH_BANG=unix-header.txt

cat $LOCAL_HASH_BANG access_cars.txt > $CGI_BIN/access_cars.cgi
cp *.php $HTDOCS
cp carsdata.html $HTDOCS
cp carscgi.html $HTDOCS
cat unix-header.txt access_cars.txt > access_cars_unix.cgi
scp access_cars_unix.cgi $USER@$REMOTE_HOST:public_html/cgi-bin/access_cars.cgi
rm access_cars_unix.cgi
ssh $USER@$REMOTE_HOST 'cd ~/public_html/cgi-bin; dos2unix access_cars.cgi; chmod 755 access_cars.cgi'




