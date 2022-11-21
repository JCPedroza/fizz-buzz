/**
 * Converts a number into a fizz buzz string. That is, numbers divisible by 3 to
 * 'fizz', by 5 to 'buzz', by  both to 'fizzbuzz', and everything else to the string
 * representation of the number.
 *
 * @param num Number to convert to fizz buzz string.
 * @returns Fizz buzz string representation of the number.
 */
const numToFizzBuzzStr = (num: number): string => {
  let fbStr = ''

  if (num % 3 === 0) fbStr += 'fizz'
  if (num % 5 === 0) fbStr += 'buzz'

  return fbStr.length === 0 ? String(num) : fbStr
}

/**
 * Builds a sequence of fizz buzz strings starting and ending at the
 * specified range.
 *
 * @param from Start of sequence (inclusive).
 * @param to End of sequence (inclusive).
 * @returns Array holding a sequence of fizz buzz strings.
 */
const buildFizzBuzzSequence = (from: number, to: number): string[] => {
  const fbSeq: string[] = []

  for (let num = from; num <= to; num++) {
    fbSeq.push(numToFizzBuzzStr(num))
  }

  return fbSeq
}

export default buildFizzBuzzSequence
