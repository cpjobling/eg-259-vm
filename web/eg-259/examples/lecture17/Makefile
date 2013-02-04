# Make lecture

THISLECTURE = php1

NEXTLECTURE = ../php2

HOMEWORK_INC =  

REVIEW_INC = reviewQ.txt rQ1.txt rQ2.txt rQ3.txt

INCLUDES =  *.png \
	powers.php \
	today.php \
	rQ1.txt rQ2.txt rQ3.txt 
	
#include ../Makefile.inc

eg-259-PHP1-examples.html: examples.txt
	rst2html.py --stylesheet=../styles/default.css examples.txt eg-259-PHP1-examples.html

examples: eg-259-PHP1-examples.html

zip: sorting.php word_table.php index.html
	mkdir lecture17
	cp sorting.php word_table.php index.html lecture17
	zip -r lecture17.zip lecture17
	rm -rf lecture17
