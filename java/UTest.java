import java.util.Arrays;

public class UTest {
    /**
     * Holds a reference to a string array that will be later compared to another
     * string array.
     */
    public static class Expectation {
        private String[] arrayA;

        public Expectation(String[] arrayA) {
            this.arrayA = arrayA;
        }

        /**
         * Checks for equality between two string arrays.
         *
         * @param arrayB Array to be compared.
         * @throws Exception Will throw exception if arrays are not equal.
         */
        public void toEqual(String[] arrayB) throws Exception {
            if (!Arrays.equals(arrayA, arrayB)) {
                throw new Exception(String.format(
                    "\nInequality\n%s\n%s",
                    Arrays.toString(arrayA),
                    Arrays.toString(arrayB)));
            }
        }
    }

    /**
     * Factory for Expectation, used to assert in the expect().toEqual() style.
     *
     * @param arrayA Array to be compared.
     * @return Expectation instance.
     */
    public static Expectation expect(String[] arrayA) {
        return new Expectation(arrayA);
    }
}
