import { ToCurrency } from "utils";

describe('To currency utils', () => {

  it('Should transform value to USD currency', () => {
    const value = ToCurrency(500, 'USD')
    expect(value).toBe('$500.00')
  })

  it('Should tranform value to EUR currency', () => {
    const value = ToCurrency(500, 'EUR')
    expect(value).toBe('€500.00')
  })
})