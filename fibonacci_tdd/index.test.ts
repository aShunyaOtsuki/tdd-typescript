import { fibonacchi } from './index'

test('fibonacchi', () => {
  expect(fibonacchi(0)).toStrictEqual(0)
  expect(fibonacchi(1)).toStrictEqual(1)
})