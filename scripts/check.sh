# Runs all unit tests and linters

set -x # Echo commands

# Python
black --quiet ./python/ &&
python ./python/fizz_buzz.test.py &&

# JavaScript
standard --fix ./javascript/ &&
node ./javascript/fizz-buzz.test.js
