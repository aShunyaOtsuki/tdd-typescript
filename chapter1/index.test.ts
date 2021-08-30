import { Dollar } from './Dollar'
import { Franc } from './Franc'

test('mutiplication', () => {
  const five = new Dollar(5)
  expect(five.times(3).equals(new Dollar(15))).toStrictEqual(true)
  expect(five.times(4).equals(new Dollar(20))).toStrictEqual(true)
})

test('equal', () => {
  expect((new Dollar(5).equals(new Dollar(5)))).toStrictEqual(true)
  expect((new Dollar(5).equals(new Dollar(6)))).toStrictEqual(false)
})

test('Franc mutiplication', () => {
  const five = new Franc(5)
  expect(five.times(3).equals(new Franc(15))).toStrictEqual(true)
  expect(five.times(4).equals(new Franc(20))).toStrictEqual(true)
})
