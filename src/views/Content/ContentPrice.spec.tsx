import { render, screen } from '@testing-library/react'
import ContentPrice from "./ContentPrice";

describe('Content - Price', () => {
  beforeEach(() => {
    render(<ContentPrice value={250} discount={50} />)
  })

  it('Should render value with discount', () => {
    const valueWithDiscount = screen.getByText('$125.00')
    expect(valueWithDiscount).toBeInTheDocument()
  })

  it('Should render the original value', () => {
    const originalValue = screen.getByText('$250.00')
    expect(originalValue).toBeInTheDocument()
  })

  it('Should render the discount badge', () => {
    const discountBadge = screen.getByText('50%')
    expect(discountBadge).toBeInTheDocument()
  })
})