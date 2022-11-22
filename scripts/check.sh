# Runs all unit tests and linters with auto fix

set -x # Echo commands

# Python
black ./python/ && # Lint
mypy ./python/ &&  # Type check
python ./python/fizz_buzz.test.py && # Unit tests

# JavaScript
standard --fix ./javascript/ && # Lint
node ./javascript/fizz-buzz.test.js && # Unit tests

# Racket
racket ./racket/fizz-buzz.test.rkt && # Unit tests

# TypeScript
ts-standard --fix ./typescript/ && # Lint
bun ./typescript/fizz-buzz.test.ts # Unit tests
