public class FizzBuzz {
    /**
     * Converts an integer into a fizz buzz string. That is, numbers divisible by 3 to
     * "fizz", by 5 to "buzz", by both to "fizzbuzz", and everything else to the
     * string representation of the number.
     *
     * @param num Number to convert to fizz buzz string.
     * @return Fizz buzz string representation of the input number.
     */
    private static String fromInt(int num) {
        if (num % 15 == 0) return "fizzbuzz";
        if (num % 3 == 0) return "fizz";
        if (num % 5 == 0) return "buzz";
        return Integer.toString(num);
    }

    /**
     * Builds a sequence of fizz buzz strings starting and ending at the specified
     * range.
     *
     * @param from Inclusive start of range.
     * @param to Inclusive end of range.
     * @return Array holding a sequence of fizz buzz strings.
     */
    public static String[] buildSequence(int from, int to) {
        String[] seq = new String[from > to ? 0 : to - from + 1];

        for (int num = from; num <= to; num++) {
            seq[num - from] = FizzBuzz.fromInt(num);
        }

        return seq;
    }
}
