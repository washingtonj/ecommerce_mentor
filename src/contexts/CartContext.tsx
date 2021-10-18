import React, { createContext, useState } from 'react'

export interface ICartItem {
  name: string,
  picture: string,
  price: number,
  quantity: number
}

interface ICartActions {
  add: () => void,
  toggle: () => void
}

interface IState {
  isOpen: boolean,
  actions: ICartActions
  data: Array<ICartItem> | []
}

const defaultState: IState = {
  isOpen: false,
  actions: {
    add: () => { },
    toggle: () => { }
  },
  data: []
}

export const CartContext = createContext<IState>(defaultState)

const CartProvider: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  function toggle() {
    setIsOpen(prev => !prev)
  }

  function add() {
    console.log('added')
  }


  return (
    <CartContext.Provider value={{ ...defaultState, isOpen, actions: { toggle, add } }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider