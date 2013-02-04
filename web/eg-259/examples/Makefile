SITE=/home/cpjoblin/public_html/eg-259/examples
HOST=cpjobling.me
LOGIN=cpjoblin
LOCALSITE=/Library/WebServer/Documents/eg-259/examples
#SITE=../../var/www/eg-259/examples
#HOST=eng-hope.swan.ac.uk
#LOGIN=cjobling
#LOCALSITE=/Library/WebServer/Documents/eg-259/examples

get:
	rsync -avuzb --progress --exclude '*~'  --exclude '.svn' $(LOGIN)@$(HOST):$(SITE)/

local-get:
	rsync -avuzb --progress --exclude '*~'  --exclude '.svn' $(LOCALSITE)/ 
	

put:
	rsync -Cavuzb --progress --delete --exclude '*~' --exclude '.svn' . $(LOGIN)@$(HOST):$(SITE)

local-put:
	rsync -Cavuzb --progress --delete --exclude '*~' --exclude '.svn' . $(LOCALSITE)
	# ssh $(LOGIN)@$(HOST) "cd ~/$(SITE); sh ./permissions.sh"
	
sync: get put

local-sync: local-get local-put


