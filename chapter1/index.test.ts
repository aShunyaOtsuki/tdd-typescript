import { Dollar } from './Dollar'

test('mutiplication', () => {
  const five = new Dollar(5)
  let product: Dollar = five.times(3)
  expect(product.amount).toStrictEqual(15)
  product = five.times(4)
  expect(product.amount).toStrictEqual(20)
})

test('equal', () => {
  expect((new Dollar(5).equals(new Dollar(5)))).toStrictEqual(true)
  expect((new Dollar(5).equals(new Dollar(6)))).toStrictEqual(false)
})
