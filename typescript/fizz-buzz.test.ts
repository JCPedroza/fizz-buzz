import fizzBuzz from './fizz-buzz'

interface Expectation {
  toEqual: (s: string[]) => void
}

/**
 * Returns an Expectation object used to compare two arrays.
 *
 * @param arrayA Array to compare.
 * @returns An object used to compare two arrays.
 */
const expect = (arrayA: string[]): Expectation => ({
  /**
   * Checks for deep quality between two arrays.
   *
   * @param {number[]} arrayB Expected array to compare.
   * @throws Will throw an error if arrays are not deeply equal.
   */
  toEqual: (arrayB: string[]): void => {
    for (let index = 0; index < arrayB.length; index++) {
      if (arrayA[index] !== arrayB[index]) {
        const msg = `\nArrays are not equal:\n[${String(arrayA)}]\n[${String(arrayB)}]`
        throw new Error(msg)
      }
    }
  }
})

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
    'buzz'])
