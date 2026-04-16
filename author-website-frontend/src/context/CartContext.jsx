// import { createContext, useState, useEffect } from "react";

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {

//   // ✅ Load cart from localStorage on start
//   const [cart, setCart] = useState(() => {
//     const saved = localStorage.getItem("cart");
//     return saved ? JSON.parse(saved) : [];
//   });

//   // ✅ Save cart to localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

//   // ✅ Add to cart
//   const addToCart = (book) => {
//     setCart(prev => {
//       const exists = prev.find(item => item.id === book.id);
//       if (exists) return prev;

//       return [...prev, book];
//     });
//   };

//   // ✅ Remove from cart
//   const removeFromCart = (id) => {
//     setCart(prev => prev.filter(item => item.id !== id));
//   };

//   // ✅ Clear cart (important for checkout later)
//   const clearCart = () => {
//     setCart([]);
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };
import { createContext, useState, useEffect } from "react";
const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try { return JSON.parse(localStorage.getItem("cart") || "[]"); } catch { return []; }
  });
  useEffect(() => { localStorage.setItem("cart", JSON.stringify(cart)); }, [cart]);

  const addToCart = (book) => setCart(prev => prev.find(i => i.id === book.id) ? prev : [...prev, { ...book, qty: 1 }]);
  const removeFromCart = (id) => setCart(prev => prev.filter(i => i.id !== id));
  const updateQty = (id, qty) => {
    if (qty < 1) return removeFromCart(id);
    setCart(prev => prev.map(i => i.id === id ? { ...i, qty } : i));
  };
  const clearCart = () => setCart([]);
  const total = cart.reduce((s, i) => s + i.price * (i.qty || 1), 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQty, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };