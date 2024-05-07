import { useContext, createContext, useState, useEffect } from "react";
import { getCart } from "../constants/cartApi";
import axios from "axios";

export const CartContext = createContext({});

export const useCart = () => useContext(CartContext);

export function useAddToCart() {
  const { addProduct } = useCart();

  const addToCart = (cart) => {
    addProduct(cart);
  };

  const { cartProducts } = useCart();
  console.log(cartProducts);

  return addToCart;
}

export function CartContextProvider({ children }) {
  const userId = 2;

  const [cartProducts, setCartProducts] = useState([]);

  function addProduct(cart) {
    setCartProducts((prev) => [...prev, cart]);
  }

  return (
    <CartContext.Provider
      value={{ userId, cartProducts, setCartProducts, addProduct }}
    >
      {children}
    </CartContext.Provider>
  );
}
