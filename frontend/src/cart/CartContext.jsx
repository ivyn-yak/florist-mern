import { useReducer, createContext,useEffect } from "react";

export const CartContext = createContext({});


const cartReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE':
      return { ...state, cart: action.payload };
    case 'ADD':
      return { ...state, cart: [...state.cart, action.payload] };
    case 'REMOVE':
      return { ...state, cart: state.cart.filter(item => item.id !== action.payload.id) };
    case 'CLEAR':
      return { cart: [] };
    default:
      return state;
  }
};

export function CartContextProvider({ children }) {

  const [state, dispatch] = useReducer(cartReducer, { cart: [] });

  useEffect(() => {

    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      dispatch({ type: "UPDATE", payload: cart });
    }
  }, []);

  console.log("CartContext state:", state, state.cart);

  return (
    <CartContext.Provider
      value={{ ...state, dispatch }}
    >
      {children}
    </CartContext.Provider>
  );
}



