import { createContext, useContext, useState } from "react";
// Create global cart context
const CartContext = createContext();

export function CartProvider({ children }) {
   // Store all cats added to cart
  const [cartItems, setCartItems] = useState([]);
 // Add selected cat to cart
  function addToCart(cat) {
    setCartItems((prev) => [...prev, cat]);
  }
  // Remove all items after order is completed
  function clearCart() {
    setCartItems([]);
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}
// Custom hook for easier cart access
export function useCart() {
  return useContext(CartContext);
}