BIN=./node_modules/.bin
BUDO=$(BIN)/budo
BROWSERIFY=$(BIN)/browserify

REQUIRE_VENDORS=-r preact
EXCLUDE_MODULES=-x preact
ENTRY=src/client.js

CSS=--css src/index.css

watch:
	$(BUDO) $(EXCLUDE_MODULES) $(ENTRY) --live $(CSS) -- -d

watch-noreload:
	$(BUDO) $(EXCLUDE_MODULES) $(ENTRY) $(CSS) -- -d

watch-raw:
	$(BUDO) $(EXCLUDE_MODULES) $(ENTRY) --live

vendor:
	$(BROWSERIFY) -d $(REQUIRE_VENDORS) -o build/vendor.js

vendor-raw:
	$(BROWSERIFY) $(REQUIRE_VENDORS) -o build/vendor.js
