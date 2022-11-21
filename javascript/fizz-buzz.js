/**
 * Converts a number into a fizz buzz string. That is, numbers divisible
 * by 3 to 'fizz', by 5 to 'buzz', by  both to 'fizzbuzz', and everything
 * else to the string representation of the number.
 *
 * @param {number} num Number to convert to fizz buzz string.
 * @returns {string} Fizz buzz string representation of the number.
 */
const numToFizzBuzzStr = (num) => {
  let fbStr = ''

  if (num % 3 === 0) fbStr += 'fizz'
  if (num % 5 === 0) fbStr += 'buzz'

  return fbStr || String(num)
}

/**
 * Builds a sequence of fizz buzz strings starting and ending at the
 * specified range.
 *
 * @param {number} from Start of sequence (inclusive).
 * @param {number} to End of sequence (inclusive).
 * @returns {string[]} Array holding a sequence of fizz buzz strings.
 */
const buildFizzBuzzSequence = (from, to) => {
  const fbSeq = []

  for (let num = from; num <= to; num++) {
    fbSeq.push(numToFizzBuzzStr(num))
  }

  return fbSeq
}

module.exports = buildFizzBuzzSequence
