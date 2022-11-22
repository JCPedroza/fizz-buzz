#lang typed/racket

(require (rename-in "fizz-buzz.rkt" (build-fizz-buzz-sequence fizz-buzz)))

;; Consolidate information for error message string creation
(: build-error-msg (-> String (Listof String) (Listof String) String))
(define (build-error-msg id list-a list-b)
  (~a "Array inequality\n" id "\n" (string-join list-a) "\n" (string-join list-b)))

;; Check for list equality. Raise error if lists are not equal.
(: list-test (-> String (Listof String) (Listof String) Void))
(define (list-test id list-a list-b)
  (when
    (not (equal? list-a list-b))
    (error (build-error-msg id list-a list-b))))

; Inconsistent ranges evaluate to empty lists
(list-test "(fb 10 0)" (fizz-buzz 10 0) '())

; One-number ranges evaluate to singleton lists
(list-test "(fb 0 0)" (fizz-buzz 0 0) '("fizzbuzz"))

; Positive range
(list-test
  "(fb 10 20)"
  (fizz-buzz 10 20)
  '(
    "buzz"
    "11"
    "fizz"
    "13"
    "14"
    "fizzbuzz"
    "16"
    "17"
    "fizz"
    "19"
    "buzz"))

; Negative range
(list-test
  "(fb -20 -10)"
  (fizz-buzz -20 -10)
  '(
    "buzz"
    "-19"
    "fizz"
    "-17"
    "-16"
    "fizzbuzz"
    "-14"
    "-13"
    "fizz"
    "-11"
    "buzz"))
