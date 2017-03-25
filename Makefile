BIN=./node_modules/.bin
BUDO=$(BIN)/budo
BROWSERIFY=$(BIN)/browserify

ENTRY=src/client.js

CSS=--css src/index.css
PORT=-p 7755
LIVE=-p [ livereactload --port 7756 ]
TITLE=--title pokerhand

watch:
	$(BUDO) $(ENTRY) $(CSS) $(PORT) $(TITLE) -- -d $(LIVE) 

watch-noreload:
	$(BUDO) $(ENTRY) $(CSS) $(PORT) $(TITLE) -- -d

watch-raw:
	$(BUDO) $(ENTRY) $(CSS) $(PORT) $(TITLE) -- -p $(LIVE) 
