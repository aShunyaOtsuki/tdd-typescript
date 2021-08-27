export const fibonacchi = (integer: number): number => {
  if (integer === 0) return 0
  if (integer === 1) return 1
  return fibonacchi(integer - 1) + fibonacchi(integer - 2)
}
