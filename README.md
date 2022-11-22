# Fizz Buzz Unit-Tested and Implemented in Multiple Languages

An exercise to review the basics of some programming languages, their runtimes,
and static analysis possibilities.

Only one implementation per language. The aim is for all the code to illustrate
idiomatic patterns.

The problem itself is simple, but trying to solve anything idiomatically raises
a few interesting questions and implementation choices.

## Prompt

- Write a function that takes two numbers representing an inclusive range as
arguments, and returns a sequence of fizz buzz strings within that range. Use
the most common data structure for collections. (Note that [usually
closed, closed ranges are not a good idea][0], this is just a random spec for
the exercise).

- Write unit tests for your function, based on the examples given below
(without using external dependencies). Use the expect() assertion
style if possible and idiomatic.

- Document code with comments, idiomatically.

- Use static type check if available.

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

## Scripts

You can run all static checks and unit tests with the provided script `check.sh`.

```bash
./scripts/check.sh
```

You might need to give execute permission to the script before running it.

```bash
chmod +x ./scripts/check.sh
```

Be sure to have all the script's dependencies installed!

## Resources

[Fizz Buzz at Wikipedia][50]

[0]: https://fhur.me/posts/always-use-closed-open-intervals
[50]: https://en.wikipedia.org/wiki/Fizz_buzz
