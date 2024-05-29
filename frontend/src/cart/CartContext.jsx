import { useReducer, createContext,useEffect } from "react";
import { useAuthContext } from "../auth/useAuthContext";
import { getCart } from "../constants/cartApi";

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
  const {user} = useAuthContext()

  useEffect(() => {
    const fetchCart = async () => {
      try {
        if (user) {
          const cart = await getCart({ userId: user.id });
          dispatch({ type: "UPDATE", payload: cart || [] });
        }
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };
  
    fetchCart();
  }, [user]);

  console.log("CartContext state:", state, state.cart);

  return (
    <CartContext.Provider
      value={{ ...state, dispatch }}
    >
      {children}
    </CartContext.Provider>
  );
}



