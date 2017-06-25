install: install-deps

run:
	npm run babel-node -- 'src/bin/promo-code.js'

install-deps:
	yarn

build:
	rm -rf dist
	npm run build

test:
	npm test

lint:
	npm run eslint -- src __tests__

publish:
	npm publish

.PHONY: test
