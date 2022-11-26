public class FizzBuzzTest {
    public static void main(String[] args) throws Exception {
        // Inconsistent ranges evaluate to empty arrays
        UTest
            .expect(FizzBuzz.buildSequence(10, 0))
            .toEqual(new String[]{});

        // One-number ranges evaluate to singleton lists
        UTest
            .expect(FizzBuzz.buildSequence(0, 0))
            .toEqual(new String[]{"fizzbuzz"});

        // Positive range
        UTest
            .expect(FizzBuzz.buildSequence(10, 20))
            .toEqual(new String[]{
                "buzz",
                "11",
                "fizz",
                "13",
                "14",
                "fizzbuzz",
                "16",
                "17",
                "fizz",
                "19",
                "buzz"});

        // Negative range
        UTest
            .expect(FizzBuzz.buildSequence(-20, -10))
            .toEqual(new String[]{
                "buzz",
                "-19",
                "fizz",
                "-17",
                "-16",
                "fizzbuzz",
                "-14",
                "-13",
                "fizz",
                "-11",
                "buzz"});

        System.out.println("Java unit tests passed!");
    }
}
