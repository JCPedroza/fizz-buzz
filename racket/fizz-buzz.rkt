#lang typed/racket

;; Converts an integer into a fizz buzz string. That is, numbers divisible by 3 to
;; "fizz", by 5 to "buzz", by both to "bizzbuzz", and everything else to the string
;; representation of the number.
(: integer->fbstring (-> Integer String))
(define (integer->fbstring num)
  (cond
    [(zero? (modulo num 15)) "fizzbuzz"]
    [(zero? (modulo num 5)) "buzz"]
    [(zero? (modulo num 3)) "fizz"]
    [#t (number->string num)]))

;; Builds a sequence (as a list) of fizz buzz strings starting and ending at the
;; specified inclusive range.
(: build-fizz-buzz-sequence (-> Integer Integer (Listof String)))
(define (build-fizz-buzz-sequence from to)
  (map integer->fbstring (range from (add1 to))))

(provide build-fizz-buzz-sequence)
