import { Dollar } from './Dollar'

test('mutiplication', () => {
  const five = new Dollar(5)
  let product: Dollar = five.times(3)
  expect(product.amount).toStrictEqual(15)
  product = five.times(4)
  expect(product.amount).toStrictEqual(20)
})
