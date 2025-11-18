import React, { createContext, useContext, useState } from 'react';

// 1. Context banana
const CartContext = createContext();

// 2. Custom hook banana (taaki use karna aasan ho)
export const useCart = () => {
  return useContext(CartContext);
};

// 3. Provider component banana (jo poore app ko data dega)
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // --- Cart Functions ---

  // Cart mein item add karna
  const addItemToCart = (item) => {
    // Abhi ke liye, hum bas naye item ko add kar rahe hain
    // Aap yahan check kar sakte hain ki item pehle se hai ya nahi
    setCartItems([item]); 
    // NOTE: Maine [item] use kiya hai, taaki har baar naya item purane ko replace kar de.
    // Agar aapko multiple items add karne hain (jaise hosting + domain), 
    // to ise setCartItems([...cartItems, item]) karein.
  };

  // Cart se item remove karna
  const removeItemFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // --- Price Calculation ---
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const tax = subtotal * 0.18; // 18% GST
  const total = subtotal + tax;

  // Helper currency format
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Sabhi functions aur state ko 'value' mein pass karna
  const value = {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    subtotal,
    tax,
    total,
    formatCurrency,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};