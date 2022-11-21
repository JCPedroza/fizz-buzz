# Fizz Buzz Implemented in Multiple Languages

The fizz buzz problem implemented in multiple languages, with unit tests and
zero dependencies.

## Prompt

- Write a function that takes two numbers representing a range as arguments,
and returns a sequence of fizz buzz strings (use the most commonly used data
structure for collections).

- Write unit tests for your function, based on the examples given below
(without using external dependencies).

## Fizz Buzz String Conversion

A fizz buzz string is a string representation of a number that follows these
rules:

- If the number is divisible by 3, the string representation is "fizz"
- If the number is divisible by 5, the string representation is "buzz"
- if the number is divisible by both 3 and 5, the string representation
is "fizzbuzz"
- For everything else, the string representation is the number as a string

Inconsitent ranges, like a start that has a lower value than the end, must
return an empty array.

One-number-ranges, like a range that consists of the two values, must return
a singleton array.

## Examples

```text
in: 10, 20
out: ['buzz', '11', 'fizz', '13', '14', 'fizzbuzz', '16', '17', 'fizz',
'19', 'buzz']

in: -20, 10
out: ['buzz', '-19', 'fizz', '-17', '-16', 'fizzbuzz', '-14', '-13', 'fizz',
'-11', 'buzz']

in: 0, 0
out: ["fizzbuzz"]

in: 10, 0
out: []
```

## Resources

[FizzBuzz at Wikipedia][50]

[50]: https://en.wikipedia.org/wiki/Fizz_buzz
