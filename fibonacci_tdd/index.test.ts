import { fibonacchi } from './index'

const testCase = [
  //[input, expected]
  [0, 0],
  [1, 1],
  [2, 1],
  [3, 2],
  [4, 3],
  [5, 5]
]

test.each(testCase)('fibonacchi', (input, expected) => {
  expect(fibonacchi(input)).toStrictEqual(expected)
})