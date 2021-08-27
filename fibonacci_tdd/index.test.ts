import { fibonacchi } from './index'

test('fibonacchi', () => {
  expect(fibonacchi(0)).toStrictEqual(0)
})