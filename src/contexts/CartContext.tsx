import { createContext, useReducer, Dispatch, ReactElement } from "react";

export interface ICartItem {
  id: string | number;
  name: string;
  price: number;
  imgUrl: string;
  quantity: number;
}

type InitialStateProps = {
  cart: ICartItem[];
  isOpen: boolean;
};

const initialState: InitialStateProps = {
  cart: [],
  isOpen: false
};

type CartActions =
  | { type: "ADD_TO_CART"; payload: ICartItem }
  | { type: "UPDATE_ITEM_QTY"; payload: { id: string | number; qty: number } }
  | { type: "REMOVE_FROM_CART"; payload: string | number }
  | { type: "CLEAR_CART" }
  | { type: "TOGGLE_CART" };

export function CartReducer(state: InitialStateProps, action: CartActions) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "UPDATE_ITEM_QTY":
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: action.payload.qty,
            };
          }
          return item;
        }),
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(
          (item: ICartItem) => item.id !== action.payload
        ),
      };
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };
    case "TOGGLE_CART":
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    default:
      return state;
  }
}

export const CartContext = createContext<
  [InitialStateProps, Dispatch<CartActions>]
>([initialState, () => {}]);

export function CartProvider({
  children,
}: {
  children: ReactElement | ReactElement[];
}) {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  return (
    <CartContext.Provider value={[state, dispatch]}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
