const fizzbuzz = require ('../src/index.js')

test('If number is divisible for 3 return Fizz', () => {
  let number = 3
  let result = fizzbuzz(number)
  expect(result).toBe('Fizz')
})

test('If number is divisible for 5 return Buzz', () => {
  let number = 5
  let result = fizzbuzz(number)
  expect(result).toBe('Buzz')
})

test('If number is divisible for 3 and 5 return FizzBuzz', () => {
  let number = 15
  let result = fizzbuzz(number)
  expect(result).toBe('FizzBuzz')
})

test('If number is not divisible for 3 or 5 return number', () => {
  let number = 7
  let result = fizzbuzz(number)
  expect(result).toBe(number)
})