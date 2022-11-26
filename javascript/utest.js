/**
 * Returns an object used to compare two arrays of strings.
 *
 * @param {string[]} arrayA Array to compare.
 * @returns {object} An object used to compare two arrays of strings.
 */
const expect = (arrayA) => ({
  /**
   * Checks for equality between two arrays of strings.
   *
   * @param {string[]} arrayB Expected array to compare.
   * @throws Will throw an error if arrays are not equal.
   */
  toEqual: (arrayB) => {
    for (let index = 0; index < arrayB.length; index++) {
      if (arrayA[index] !== arrayB[index]) {
        throw new Error(`\nInequality\n[${arrayA}]\n[${arrayB}]`)
      }
    }
  }
})

module.exports = expect
