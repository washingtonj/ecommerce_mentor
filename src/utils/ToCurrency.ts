type currency = 'EUR' | 'USD'


export default function ToCurrency(value: number, currency: currency): string {
  return value.toLocaleString('US', { style: 'currency', currency })
}