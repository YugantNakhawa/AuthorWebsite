// // src/pages/Cart.jsx
// import { useContext } from "react";
// import { CartContext } from "../context/CartContext";
// import { useNavigate } from "react-router-dom";

import ContactPage from "./ContactPage";

// export default function Cart() {
//   const { cart, removeFromCart } = useContext(CartContext);
//   const navigate = useNavigate();

//   const total = cart.reduce((sum, item) => sum + item.price, 0);

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl">Cart</h1>

//       {cart.map(item => (
//         <div key={item.id} className="border p-3 mt-2">
//           <h2>{item.title}</h2>
//           <p>₹{item.price}</p>
//           <button onClick={() => removeFromCart(item.id)}>Remove</button>
//         </div>
//       ))}

//       <h2 className="mt-4">Total: ₹{total}</h2>

//       <button
//         onClick={() => navigate("/checkout")}
//         className="mt-3 bg-black text-white px-4 py-2"
//       >
//         Checkout
//       </button>
//     </div>
//   );
// }

import { useContext } from "react";
import { ToastContext } from "../context/ToastContext";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

// ============================================================
// CART PAGE
// ============================================================
const CartPage = ({ setPage }) => {
  const { cart, removeFromCart, updateQty, total, clearCart } = useContext(CartContext);
  const { show } = useContext(ToastContext);
  const { user, setShowLogin } = useContext(AuthContext);

  if (cart.length === 0) return (
    <div className="page">
      <div className="container" style={{ paddingTop: 80, textAlign: "center", paddingBottom: 80 }}>
        <div style={{ fontSize: 72, marginBottom: 24 }}>🛒</div>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, marginBottom: 12 }}>Your cart is empty</h2>
        <p style={{ color: "var(--text-muted)", marginBottom: 32 }}>Add some books to get started.</p>
        <button className="btn-gold" onClick={() => setPage("books")}>Browse Books</button>
      </div>
    </div>
  );

  return (
    <div className="page">
      <div className="container" style={{ paddingTop: 40, paddingBottom: 80 }}>
        <div style={{ marginBottom: 32 }}>
          <span className="section-label">Your Selection</span>
          <h1 className="section-title">Cart</h1>
        </div>
        {/* <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 32, alignItems: "start" }}> */}
        <div className="cart-layout">

          {/* Items */}
          <div>
            {cart.map(item => (
              <div key={item.id} className="glass cart-item">

                {/* TOP: Image + Info */}
                <div className="cart-item-top">
                  <div className="cart-item-img"
                    style={{
                      background: "linear-gradient(135deg, rgba(201,168,76,0.1), rgba(30,20,60,0.3))"
                    }}
                  >
                    <img
                      src={item.cover}
                      alt={item.title}
                      style={{ maxWidth: "90%", maxHeight: "90%", objectFit: "contain" }}
                    />
                  </div>

                  <div className="cart-item-info">
                    <div style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 700,
                      fontSize: 16,
                      marginBottom: 4
                    }}>
                      {item.title}
                    </div>

                    <div style={{
                      fontSize: 12,
                      color: "var(--text-muted)",
                      marginBottom: 8
                    }}>
                      {item.subtitle}
                    </div>

                    <span className="tag" style={{ fontSize: 11 }}>
                      {item.genre}
                    </span>
                  </div>
                </div>

                {/* CONTROLS */}
                <div className="cart-item-controls">

                  {/* Qty */}
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid var(--glass-border)",
                    borderRadius: 10,
                    padding: "6px 12px"
                  }}>
                    <button
                      onClick={() => updateQty(item.id, (item.qty || 1) - 1)}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        color: "var(--text-secondary)",
                        fontSize: 18
                      }}
                    >
                      −
                    </button>

                    <span style={{
                      width: 24,
                      textAlign: "center",
                      fontWeight: 600
                    }}>
                      {item.qty || 1}
                    </span>

                    <button
                      onClick={() => updateQty(item.id, (item.qty || 1) + 1)}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        color: "var(--text-secondary)",
                        fontSize: 18
                      }}
                    >
                      +
                    </button>
                  </div>

                  {/* Price */}
                  <div className="cart-item-price"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 700,
                      color: "var(--gold)"
                    }}
                  >
                    ₹{item.price * (item.qty || 1)}
                  </div>

                  {/* Remove */}
                  <button
                    className="btn-danger"
                    onClick={() => {
                      removeFromCart(item.id);
                      show("Removed from cart");
                    }}
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
            <button onClick={clearCart} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)", fontSize: 13, padding: "8px 0", fontFamily: "'DM Sans', sans-serif" }}>Clear all items</button>
          </div>

          {/* Summary */}
          {/* <div className="glass-strong" style={{ borderRadius: 24, padding: 32, position: "sticky", top: 90 }}> */}
          <div className="glass-strong cart-summary-sticky" style={{ borderRadius: 24, padding: 32, position: "sticky", top: 90 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, marginBottom: 24 }}>Order Summary</h2>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12, fontSize: 14, color: "var(--text-secondary)" }}>
              <span>Subtotal ({cart.length} item{cart.length > 1 ? "s" : ""})</span>
              <span>₹{total}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12, fontSize: 14, color: "var(--text-secondary)" }}>
              <span>Shipping</span>
              <span style={{ color: "var(--success)" }}>{total >= 499 ? "Free" : "₹49"}</span>
            </div>
            {total < 499 && (
              <div style={{ fontSize: 12, color: "var(--gold)", marginBottom: 12, padding: "8px 12px", background: "var(--gold-dim)", borderRadius: 8, border: "1px solid rgba(201,168,76,0.2)" }}>
                Add ₹{499 - total} more for free shipping
              </div>
            )}
            <hr className="divider" />
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 24 }}>
              <span style={{ fontWeight: 700, fontSize: 16 }}>Total</span>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: "var(--gold)" }}>₹{total + (total >= 499 ? 0 : 49)}</span>
            </div>
            <button className="btn-gold" onClick={() => {
              if (cart.length === 0) {
                show("Your cart is empty", "error");
                return;
              }

              if (!user) {
                setShowLogin(true);
                return;
              }

              setPage("checkout");
            }} style={{ width: "100%", justifyContent: "center", padding: 15, fontSize: 15 }}>
              Proceed to Checkout →
            </button>
            <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 10 }}>
              {["🔒 Secure checkout", "📦 Ships in 2-4 days", "↩ 7-day returns"].map(f => (
                <div key={f} style={{ fontSize: 12, color: "var(--text-muted)", display: "flex", alignItems: "center", gap: 6 }}>{f}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;