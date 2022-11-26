const fizzBuzz = require('./fizz-buzz')
const expect = require('./utest')

// Inconsistent ranges evaluate to empty arrays
expect(fizzBuzz(10, 0))
  .toEqual([])

// One-number ranges evaluate to singleton arrays
expect(fizzBuzz(0, 0))
  .toEqual(['fizzbuzz'])

// Positive range
expect(fizzBuzz(10, 20))
  .toEqual([
    'buzz',
    '11',
    'fizz',
    '13',
    '14',
    'fizzbuzz',
    '16',
    '17',
    'fizz',
    '19',
    'buzz'])

// Negative range
expect(fizzBuzz(-20, -10))
  .toEqual([
    'buzz',
    '-19',
    'fizz',
    '-17',
    '-16',
    'fizzbuzz',
    '-14',
    '-13',
    'fizz',
    '-11',
    'buzz'
  ])
