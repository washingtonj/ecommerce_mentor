import { render } from '@testing-library/react'
import TheHeaderCart from './TheHeaderCart'

describe('The Header Cart - Component', () => {
  afterEach(() => {
    render(<TheHeaderCart />)
  })

  it('Should open cart modal on click in cart button', () => {})
  it('Should appear message if the cart empty', () => {})
})
