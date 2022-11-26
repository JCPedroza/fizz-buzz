# Fizz Buzz Implemented in JavaScript

Style: [Standard JS][0]

## Run Program from This Directory

```bash
node fizz-buzz.test.js # with node
bun fizz-buzz.test.js  # with bun
```

## Idiomatic JavaScript

A combination of declarative and imperative style was used for this
implementation.

- Reduce-based string builder for conversion.
- Accumulator loop for sequence builder.

Modern JS is all about higher-order functions, but there's no way to concisely
express a lazy range, so `map` was not used for the sequence building.

If you want to sacrifice readability and speed for a short solution that uses
`map`, you could do something like:

```javascript
[...Array(to - from + 1).keys()]
  .map(idx => numToFBStr(idx + from))
```

But this does one extra iteration, and is a little hacky.

[0]: https://github.com/standard/standard
