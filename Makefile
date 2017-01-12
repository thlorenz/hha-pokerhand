BIN=./node_modules/.bin
BUDO=$(BIN)/budo
BROWSERIFY=$(BIN)/browserify

ENTRY=src/client.js

CSS=--css src/index.css

watch:
	$(BUDO) $(ENTRY) --live $(CSS) -- -d

watch-noreload:
	$(BUDO) $(ENTRY) $(CSS) -- -d

watch-raw:
	$(BUDO) $(ENTRY) --live $(CSS)
