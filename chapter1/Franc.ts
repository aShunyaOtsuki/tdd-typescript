export class Franc {
  private readonly amount: number
  constructor(amount: number) {
    this.amount = amount
  }
  times(multiplier: number): Franc {
    return new Franc(this.amount * multiplier)
  }
  equals(dollar: Franc): boolean {
    return this.amount === dollar.amount
  }
}
