import { render, screen, fireEvent } from '@testing-library/react'
import TheHeaderCart from './TheHeaderCart'

describe('The Header Cart - Component', () => {
  const mockOnClose = jest.fn()
  const mockOnRemove = jest.fn()

  beforeEach(() => {
    render(
      <TheHeaderCart
        data={[
          { id: 'abb', imgUrl: 'url', name: 'test', price: 10, quantity: 1 }
        ]}
        onClose={mockOnClose}
        onRemove={mockOnRemove}
      />
    )
  })

  describe('Hibrid', () => {
    it('Should render a message if the cart is empty', () => {
      render(
        <TheHeaderCart data={[]} onClose={() => {}} onRemove={() => {}} />
      )
      const emptyText = screen.getByTestId('the-header-cart-empty-text')
      expect(emptyText).toBeInTheDocument()
    })

    it('Should render the item if the cart is not empty', () => {
      const item = screen.getByTestId('the-header-cart-item')
      expect(item).toBeInTheDocument()
    })

    it('Should render the checkout button if the cart is not empty', () => {
      const checkoutButton = screen.getByTestId(
        'the-header-cart-checkout-button'
      )
      expect(checkoutButton).toBeInTheDocument()
    })

    it('Should call the onRemove function when the remove button is clicked', () => {
      const removeButton = screen.getByTestId('the-header-cart-remove-button')
      fireEvent.click(removeButton)
      expect(mockOnRemove).toHaveBeenCalled()
    })
  })
})
