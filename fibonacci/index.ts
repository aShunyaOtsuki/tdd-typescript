const fibonacciNumber = (integer: number): number => {
  if (integer <= 0) return 0
  if (integer === 1) return 1
  return fibonacciNumber(integer - 1) + fibonacciNumber(integer - 2)
}

[1, 2, 3, 4, 5, 6, 7, 8, 9].map(fibonacciNumber).forEach(i => console.log(i))
