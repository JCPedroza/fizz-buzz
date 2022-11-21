const fizzBuzz = require('./fizz-buzz')

/**
 * Returns an object used to compare two arrays.
 * @param {number[]} arr Array to compare.
 * @returns {object} An object used to compare two arrays..
 */
const expect = (arr) => ({
  /**
   * Checks for deep quality between two arrays.
   * @param {number[]} expArr Expected array to compare.
   * @throws Will throw error if arrays are not deeply equal.
   */
  toEqual: (expArr) => {
    // Arrays of different sizes are not equal
    if (arr.length !== expArr.length) {
      const msg = `\nArrays of different sizes:\n[${arr}]\n[${expArr}]`
      throw new Error(msg)
    }

    // Arrays with different values are not equal
    for (let index = 0; index < expArr.length; index++) {
      if (arr[index] !== expArr[index]) {
        const msg = `\nInequality at index ${index}:\n[${arr}]\n[${expArr}]`
        throw new Error(msg)
      }
    }
  }
})

// If range is inconsistent, return an empty array
expect(fizzBuzz(10, 0))
  .toEqual([])

// If both arguments are equal, return a singleton array
expect(fizzBuzz(0, 0))
  .toEqual(['fizzbuzz'])

// Test for positive range
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

// Test for negative range
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
