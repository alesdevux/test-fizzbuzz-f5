const fizzbuzz = require ('../src/index.js')

test('If number is divisible for 3 return Fizz', () => {
  // given
  let number = 3
  // when
  let result = fizzbuzz(number)
  // then
  expect(result).toBe('Fizz')
})

test('If number is divisible for 5 return Buzz', () => {
  // given
  let number = 5
  // when
  let result = fizzbuzz(number)
  // then
  expect(result).toBe('Buzz')
})

test('If number is divisible for 3 and 5 return FizzBuzz', () => {
  // given
  let number = 15
  // when
  let result = fizzbuzz(number)
  // then
  expect(result).toBe('FizzBuzz')
})

test('If number is not divisible for 3 or 5 return number', () => {
  // given
  let number = 7
  // when
  let result = fizzbuzz(number)
  // then
  expect(result).toBe(number)
})