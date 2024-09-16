import React, { useState, createContext} from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);

  const addToCart = (product, quantity) => {
    setCartItems([...cartItems,{product, quantity}]);
   
  const newSubtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
    setSubtotal(newSubtotal);
    setTotal(newSubtotal);
  };
  
  return (
    <CartContext.Provider value={{ cartItems, subtotal, total, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
