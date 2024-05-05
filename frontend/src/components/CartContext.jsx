import { useContext, createContext, useState, useEffect } from "react";

export const CartContext = createContext({});

export const useCart = () => useContext(CartContext);

export function useAddToCart() {
  const { addProduct } = useContext(CartContext);

  const addToCart = (cart) => {
    addProduct(cart);
  };

  return addToCart;
}

export function CartContextProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  function addProduct(cart) {
    setCartProducts((prev) => [...prev, cart]);
  }

  return (
    <CartContext.Provider value={{ cartProducts, setCartProducts, addProduct }}>
      {children}
    </CartContext.Provider>
  );
}
