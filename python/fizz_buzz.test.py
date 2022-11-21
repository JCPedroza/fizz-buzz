from fizz_buzz import build_fizz_buzz_sequence as fizz_buzz


class Expectation:
    """
    Used to compare to arrays with the expect().to_equal() assertion style.
    """

    def __init__(self, list_a: list[str]):
        self.list_a = list_a

    def to_equal(self, list_b: list[str]):
        """
        Checks for deep equality between two arrays.

        :param list_b: Expected array to compare.
        :raises: Will raise an error if lists are not deeply equal.
        """
        if self.list_a != list_b:
            msg = f"\nLists are not equal\n{self.list_a}\n{list_b}"
            raise ValueError(msg)


def expect(list_a: list[str]) -> Expectation:
    """
    Returns an object used to compare two arrays.

    :param list_a: Array to compare.
    :returns: AN object used to compare two arrays.
    """
    return Expectation(list_a)


# Inconsistent ranges evaluate to empty lists
expect(fizz_buzz(10, 0)).to_equal([])

# One-number ranges evaluate to singleton lists
expect(fizz_buzz(0, 0)).to_equal(["fizzbuzz"])

# Positive range
expect(fizz_buzz(10, 20)).to_equal(
    [
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
        "buzz",
    ]
)

# Negative range
expect(fizz_buzz(-20, -10)).to_equal(
    [
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
        "buzz",
    ]
)
