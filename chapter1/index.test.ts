import { Dollar } from './Dollar'

test('mutiplication', () => {
  const five = new Dollar(5)
  five.times(3)
  expect(five.amount).toStrictEqual(15)
})
