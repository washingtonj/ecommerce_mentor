import { render, screen } from '@testing-library/react'
import TheHeader, { MENU_ITEMS } from './TheHeader'

const mockToggleCart = jest.fn()

jest.mock('hooks/useCart', () => ({
  useCart: () => ({
    toggleCart: mockToggleCart,
    total: 1
  })
}))

describe('TheHeader Component', () => {
  beforeEach(() => {
    render(<TheHeader />)
  })

  describe('Hibrid', () => {
    it('Should open the cart on click', () => {
      const button = screen.getByTestId('the-header-cart-button')
      button.click()
      expect(mockToggleCart).toHaveBeenCalled()
    })

    it('Should show the quantity of items on the cart', () => {
      const button = screen.getByTestId('the-header-cart-button')
      button.click()
      const count = screen.getByTestId('the-header-cart-button-count')
      expect(count).toBeInTheDocument()
    })
  })

  describe('Desktop', () => {
    window.innerWidth = 1440

    it('Should render the menu with all options', () => {
      const menu = screen.queryAllByTestId('the-header-menu-item')

      MENU_ITEMS.forEach((item, index) => {
        expect(menu[index].textContent).toBe(item.name)
      })
    })
  })
})
