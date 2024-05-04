import { useContext, createContext, useState, useEffect } from "react";

export const CartContext = createContext({});

export const useCart = () => useContext(CartContext);

export function useAddToCart() {
  const { addProduct } = useContext(CartContext);

  const addToCart = (id) => {
    addProduct(id);
  };

  return addToCart;
}

export function CartContextProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  function addProduct(productId) {
    setCartProducts((prev) => [...prev, productId]);
  }

  return (
    <CartContext.Provider value={{ cartProducts, setCartProducts, addProduct }}>
      {children}
    </CartContext.Provider>
  );
}
