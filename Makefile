build:
	./node_modules/.bin/webpack --config webpack.config.js

theme:
	./node_modules/.bin/tsc ./src/themes/*.ts --outFile ./dist/theme.js --module amd
