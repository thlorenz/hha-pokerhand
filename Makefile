BIN=./node_modules/.bin
BUDO=$(BIN)/budo
BROWSERIFY=$(BIN)/browserify

ENTRY=src/client.js

CSS=--css src/index.css

watch:
	$(BUDO) $(ENTRY) $(CSS) -- -d -p livereactload

watch-noreload:
	$(BUDO) $(ENTRY) $(CSS) -- -d

watch-raw:
	$(BUDO) $(ENTRY) $(CSS) -- -p livereactload
