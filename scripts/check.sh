# Runs all unit tests and linters with auto fix

set -x # Echo commands

# Python
black ./python/ &&
python ./python/fizz_buzz.test.py &&

# JavaScript
standard --fix ./javascript/ &&
node ./javascript/fizz-buzz.test.js &&

# TypeScript
ts-standard --fix ./typescript/ &&
bun ./typescript/fizz-buzz.test.ts
