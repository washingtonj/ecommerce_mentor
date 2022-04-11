import { useContext } from 'react'
import { CartContext, ICartItem } from 'contexts'

export function useCart () {
  const [state, dispatch] = useContext(CartContext)

  function addItem (cartItem: ICartItem) {
    const existentItem = state.cart.find((item) => item.id === cartItem.id)

    if (existentItem) {
      dispatch({
        type: 'UPDATE_ITEM_QTY',
        payload: {
          id: cartItem.id,
          qty: cartItem.quantity + existentItem.quantity
        }
      })
      return
    }

    dispatch({ type: 'ADD_TO_CART', payload: cartItem })
  }

  function removeItem (id: string) {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id })
  }

  function toggleCart () {
    dispatch({ type: 'TOGGLE_CART' })
  }

  const hasItem = state.cart.length > 0

  const total = state.cart.length

  return {
    addItem,
    removeItem,
    toggleCart,
    items: state.cart,
    isOpen: state.isOpen,
    hasItem,
    total
  }
}

export default useCart
