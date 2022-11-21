def int_to_fizz_buzz_str(num: int) -> str:
    """
    Converts an integer into a fizz buzz string. That is, numbers divisible by 3 to
    "fizz", by 5 to "buzz", by both to "fizzbuzz", and everything else to the string
    representation of the number.

    :param num: Number to convert to fizz buzz string.
    :returns: Fizz buzz string representation of the number.
    """
    fbStr = ""

    if num % 3 == 0:
        fbStr += "fizz"

    if num % 5 == 0:
        fbStr += "buzz"

    return fbStr or str(num)


def build_fizz_buzz_sequence(start: int, end: int) -> list[str]:
    """
    Builds a sequence of fizz buzz strings starting and ending at the specified
    range.

    :param start: Start of sequence (inclusive).
    :param end: End of sequence (inclusive).
    :returns: List holding a sequence of fizz buzz strings.
    """
    return [int_to_fizz_buzz_str(num) for num in range(start, end + 1)]
