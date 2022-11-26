/**
 * Functions used to convert a number into a fizz buzz string.
 */
const builders = [
  (num, str) => num % 3 === 0 ? `fizz` : str,
  (num, str) => num % 5 === 0 ? `${str}buzz` : str,
  (num, str) => str || String(num)
]

/**
 * Converts a number into a fizz buzz string. That is, numbers divisible
 * by 3 to 'fizz', by 5 to 'buzz', by  both to 'fizzbuzz', and everything
 * else to the string representation of the number.
 *
 * @param {number} num Number to convert to fizz buzz string.
 * @returns {string} Fizz buzz string representation of the number.
 */
const numToFBStr = (num) =>
  builders.reduce((str, build) => build(num, str), '')

/**
 * Builds a sequence of fizz buzz strings starting and ending at the
 * specified range.
 *
 * @param {number} from Start of sequence (inclusive).
 * @param {number} to End of sequence (inclusive).
 * @returns {string[]} Array holding a sequence of fizz buzz strings.
 */
const buildFBSequence = (from, to) => {
  const fbSeq = []

  for (let num = from; num <= to; num++) {
    fbSeq.push(numToFBStr(num))
  }

  return fbSeq
}

module.exports = buildFBSequence
