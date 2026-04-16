// import { useContext, useState } from "react";
// import axios from "axios";
// import { CartContext } from "../context/CartContext";

// const API = "https://localhost:7032/api";

// export default function Checkout() {
//   const { cart, clearCart } = useContext(CartContext);
//   const [name, setName] = useState("");

//   const placeOrder = async () => {
//     try {
//       const orderData = {
//         items: cart.map(item => ({
//           bookId: item.id,
//           quantity: 1
//         }))
//       };

//       await axios.post(`${API}/orders`, orderData);

//       // 🔥 CLEAR CART AFTER SUCCESS
//       clearCart();

//       alert("Order placed successfully");

//     } catch (err) {
//       console.error(err);
//       alert("Failed to place order");
//     }
//   };

//   return (
//     <div className="p-6">
//       <h1>Checkout</h1>

//       <input
//         placeholder="Name"
//         value={name}
//         onChange={e => setName(e.target.value)}
//         className="border p-2"
//       />

//       <button
//         onClick={placeOrder}
//         className="block mt-4 bg-green-600 text-white px-4 py-2"
//       >
//         Pay Now (Fake)
//       </button>
//     </div>
//   );
// }

// import { useContext, useState } from "react";
// import { ToastContext } from "../context/ToastContext";
// import { CartContext } from "../context/CartContext";

// // ============================================================
// // CHECKOUT PAGE
// // ============================================================
// const CheckoutPage = ({ setPage }) => {
//   const { cart, total, clearCart } = useContext(CartContext);
//   const { show } = useContext(ToastContext);
//   const [step, setStep] = useState(1);
//   const [form, setForm] = useState({ name: "", email: "", phone: "", address: "", city: "", state: "", pincode: "", payment: "upi", upi: "" });
//   const [loading, setLoading] = useState(false);

//   const up = (k, v) => setForm(p => ({ ...p, [k]: v }));
//   const shipping = total >= 499 ? 0 : 49;
//   const grandTotal = total + shipping;

//   const placeOrder = async () => {
//     if (!form.name || !form.address || !form.pincode) { show("Please fill all required fields", "error"); return; }
//     setLoading(true);
//     await new Promise(r => setTimeout(r, 1400));
//     setLoading(false);
//     clearCart();
//     setStep(3);
//   };

//   if (step === 3) return (
//     <div className="page">
//       <div className="container" style={{ paddingTop: 80, textAlign: "center", maxWidth: 480, paddingBottom: 80 }}>
//         <div style={{ fontSize: 72, marginBottom: 24 }}>✅</div>
//         <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 700, marginBottom: 16 }}>Order Placed!</h1>
//         <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 8 }}>Thank you, {form.name}. Your books are confirmed and will ship in 2-4 business days.</p>
//         <p style={{ color: "var(--text-muted)", fontSize: 14, marginBottom: 32 }}>Order confirmation sent to {form.email}</p>
//         <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
//           <button className="btn-gold" onClick={() => setPage("books")}>Shop More Books</button>
//           <button className="btn-ghost" onClick={() => setPage("home")}>Go Home</button>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="page">
//       <div className="container" style={{ paddingTop: 40, paddingBottom: 80 }}>
//         <div style={{ marginBottom: 36 }}>
//           <span className="section-label">Almost There</span>
//           <h1 className="section-title">Checkout</h1>
//         </div>

//         {/* Steps */}
//         <div style={{ display: "flex", alignItems: "center", gap: 0, marginBottom: 48 }}>
//           {[{ n: 1, label: "Delivery" }, { n: 2, label: "Payment" }].map((s, i) => (
//             <>
//               <div key={s.n} style={{ display: "flex", alignItems: "center", gap: 12 }}>
//                 <div style={{ width: 36, height: 36, borderRadius: "50%", background: step >= s.n ? "var(--gold)" : "var(--glass)", border: `2px solid ${step >= s.n ? "var(--gold)" : "var(--glass-border)"}`, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 14, color: step >= s.n ? "#080810" : "var(--text-muted)" }}>{s.n}</div>
//                 <span style={{ fontSize: 14, fontWeight: 500, color: step >= s.n ? "var(--text-primary)" : "var(--text-muted)" }}>{s.label}</span>
//               </div>
//               {i === 0 && <div style={{ flex: 1, height: 1, background: "var(--glass-border)", margin: "0 16px" }} />}
//             </>
//           ))}
//         </div>

//         <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 32, alignItems: "start" }}>
//           {/* Form steps */}
//           <div>
//             {step === 1 && (
//               <div className="glass" style={{ borderRadius: 24, padding: 36 }}>
//                 <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, marginBottom: 28 }}>Delivery Information</h2>
//                 <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
//                   <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
//                     <div><label className="form-label">Full Name *</label><input className="input-glass" placeholder="Your name" value={form.name} onChange={e => up("name", e.target.value)} /></div>
//                     <div><label className="form-label">Phone *</label><input className="input-glass" placeholder="+91 ..." value={form.phone} onChange={e => up("phone", e.target.value)} /></div>
//                   </div>
//                   <div><label className="form-label">Email *</label><input className="input-glass" type="email" placeholder="you@example.com" value={form.email} onChange={e => up("email", e.target.value)} /></div>
//                   <div><label className="form-label">Address *</label><input className="input-glass" placeholder="Street address" value={form.address} onChange={e => up("address", e.target.value)} /></div>
//                   <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
//                     <div><label className="form-label">City</label><input className="input-glass" placeholder="City" value={form.city} onChange={e => up("city", e.target.value)} /></div>
//                     <div><label className="form-label">State</label><input className="input-glass" placeholder="State" value={form.state} onChange={e => up("state", e.target.value)} /></div>
//                     <div><label className="form-label">Pincode *</label><input className="input-glass" placeholder="400001" value={form.pincode} onChange={e => up("pincode", e.target.value)} /></div>
//                   </div>
//                   <button className="btn-gold" onClick={() => setStep(2)} style={{ width: "100%", justifyContent: "center", padding: 14, fontSize: 15, marginTop: 8 }}>Continue to Payment →</button>
//                 </div>
//               </div>
//             )}

//             {step === 2 && (
//               <div className="glass" style={{ borderRadius: 24, padding: 36 }}>
//                 <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, marginBottom: 28 }}>Payment Method</h2>
//                 <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
//                   {[{ id: "upi", label: "UPI", icon: "📱" }, { id: "card", label: "Credit / Debit Card", icon: "💳" }, { id: "netbanking", label: "Net Banking", icon: "🏦" }, { id: "cod", label: "Cash on Delivery", icon: "💵" }].map(m => (
//                     <button key={m.id} onClick={() => up("payment", m.id)} style={{
//                       padding: "16px 20px", borderRadius: 14, border: `1px solid ${form.payment === m.id ? "var(--gold)" : "var(--glass-border)"}`,
//                       background: form.payment === m.id ? "var(--gold-dim)" : "rgba(255,255,255,0.03)",
//                       cursor: "pointer", textAlign: "left", display: "flex", alignItems: "center", gap: 16,
//                       fontFamily: "'DM Sans', sans-serif",
//                     }}>
//                       <span style={{ fontSize: 24 }}>{m.icon}</span>
//                       <span style={{ fontSize: 15, fontWeight: 500, color: form.payment === m.id ? "var(--gold)" : "var(--text-primary)" }}>{m.label}</span>
//                       {form.payment === m.id && <span style={{ marginLeft: "auto", color: "var(--gold)" }}>✓</span>}
//                     </button>
//                   ))}

//                   {form.payment === "upi" && (
//                     <div style={{ marginTop: 8 }}>
//                       <label className="form-label">UPI ID</label>
//                       <input className="input-glass" placeholder="yourname@paytm" value={form.upi} onChange={e => up("upi", e.target.value)} />
//                     </div>
//                   )}
//                   {form.payment === "card" && (
//                     <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 8 }}>
//                       <input className="input-glass" placeholder="Card Number" />
//                       <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
//                         <input className="input-glass" placeholder="MM/YY" />
//                         <input className="input-glass" placeholder="CVV" />
//                       </div>
//                       <input className="input-glass" placeholder="Name on card" />
//                     </div>
//                   )}

//                   <div style={{ display: "flex", gap: 16, marginTop: 8 }}>
//                     <button className="btn-ghost" onClick={() => setStep(1)} style={{ flex: 1, justifyContent: "center" }}>← Back</button>
//                     <button className="btn-gold" onClick={placeOrder} disabled={loading} style={{ flex: 2, justifyContent: "center", padding: 14, fontSize: 15, opacity: loading ? 0.7 : 1 }}>
//                       {loading ? "Processing..." : `Pay ₹${grandTotal} →`}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Order summary */}
//           <div>
//             <div className="glass" style={{ borderRadius: 24, padding: 28 }}>
//               <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, marginBottom: 20 }}>Order Summary</h3>
//               {cart.map(item => (
//                 <div key={item.id} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
//                   <div style={{ width: 40, height: 40, borderRadius: 10, background: "var(--gold-dim)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>{item.cover}</div>
//                   <div style={{ flex: 1 }}>
//                     <div style={{ fontSize: 13, fontWeight: 600, lineHeight: 1.3 }}>{item.title}</div>
//                     <div style={{ fontSize: 11, color: "var(--text-muted)" }}>Qty: {item.qty || 1}</div>
//                   </div>
//                   <div style={{ fontSize: 14, fontWeight: 600, color: "var(--gold)" }}>₹{item.price * (item.qty || 1)}</div>
//                 </div>
//               ))}
//               <hr className="divider" />
//               <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "var(--text-secondary)", marginBottom: 8 }}>
//                 <span>Subtotal</span><span>₹{total}</span>
//               </div>
//               <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "var(--text-secondary)", marginBottom: 16 }}>
//                 <span>Shipping</span><span style={{ color: "var(--success)" }}>{shipping === 0 ? "Free" : `₹${shipping}`}</span>
//               </div>
//               <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700 }}>
//                 <span>Total</span>
//                 <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, color: "var(--gold)" }}>₹{grandTotal}</span>
//               </div>
//             </div>
//             <div style={{ marginTop: 16, padding: "14px 16px", background: "rgba(82,192,122,0.08)", border: "1px solid rgba(82,192,122,0.15)", borderRadius: 14, fontSize: 12, color: "var(--text-secondary)", display: "flex", gap: 10 }}>
//               <span style={{ color: "var(--success)" }}>🛡</span>
//               <span>Payments secured by Razorpay. 256-bit SSL encrypted.</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;

import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { ToastContext } from "../context/ToastContext";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import PaymentLoader from "../modals/PaymentLoader";

const API = import.meta.env.VITE_API_URL;

const CheckoutPage = ({ setPage }) => {
  const { cart, total, clearCart } = useContext(CartContext);
  const { show } = useContext(ToastContext);
  const { user, setShowLogin } = useContext(AuthContext);

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const [payLoader, setPayLoader] = useState(false);
  const [payLoaderStep, setPayLoaderStep] = useState(0);

  const [form, setForm] = useState({
    name: "", email: "", phone: "",
    address: "", city: "", state: "", pincode: "",
  });

  const up = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  const shipping = total >= 499 ? 0 : 49;
  const grandTotal = total + shipping;

  // ============================================================
  // 🚫 BLOCK EMPTY CART ACCESS (IMPORTANT)
  // ============================================================
  useEffect(() => {
    // 🚫 Only block if user is NOT in success state
    if (cart.length === 0 && step !== 3) {
      show("Your cart is empty", "error");
      setPage("books");
    }
  }, [cart, step]);

  // ============================================================
  // VALIDATION
  // ============================================================
  const validate = () => {
    if (!form.name || !form.email || !form.phone || !form.address || !form.city || !form.state || !form.pincode) {
      show("Fill all required fields", "error");
      return false;
    }
    return true;
  };

  // ============================================================
  // LOADER STEP HELPER
  // ============================================================
  const advanceLoader = (targetStep, delay = 800) =>
    new Promise(resolve =>
      setTimeout(() => {
        setPayLoaderStep(targetStep);
        resolve();
      }, delay)
    );

  // ============================================================
  // PAYMENT
  // ============================================================
  const placeOrder = async () => {
    if (loading) return; // ✅ prevent double click

    if (!user) {
      setShowLogin(true);
      return;
    }

    if (cart.length === 0) {
      show("Cart is empty", "error");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(`${API}/orders/create-razorpay-order`, {
        type: "book",
        items: cart.map(i => ({ id: i.id, quantity: i.qty || 1 })),
      });

      const { orderId, amount, key } = res.data;

      const options = {
        key,
        amount,
        currency: "INR",
        name: "Author Website",
        description: "Book Purchase",
        order_id: orderId,

        handler: async function (response) {
          try {
            setPayLoader(true);
            setPayLoaderStep(0);

            await advanceLoader(1, 900);

            await axios.post(`${API}/orders/verify-payment`, {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              OrderData: {
                type: "book",
                customerName: form.name,
                email: form.email,
                phone: form.phone,
                address: form.address,
                city: form.city,
                state: form.state,
                pincode: form.pincode,
                paymentMethod: "Razorpay",
                items: cart.map(item => ({
                  id: item.id,
                  quantity: item.qty || 1
                })),
              },
            });

            await advanceLoader(2, 700);
            await new Promise(r => setTimeout(r, 600));

            setPayLoader(false);

            clearCart();
            setStep(3);
            show("Payment successful!", "success");

          } catch (err) {
            console.error(err);
            setPayLoader(false);
            show("Payment verification failed", "error");
          }
        },

        modal: {
          ondismiss: () => {
            setLoading(false);
            show("Payment cancelled", "error");
          },
        },

        prefill: {
          name: form.name,
          email: form.email,
          contact: form.phone
        },

        theme: { color: "#C8A96A" },
      };

      new window.Razorpay(options).open();

    } catch (err) {
      console.error(err);
      show("Payment initiation failed", "error");
    } finally {
      setLoading(false);
    }
  };

  // ============================================================
  // SUCCESS SCREEN
  // ============================================================
  if (step === 3) {
  return (
    <div className="page success-page">
      <div className="success-box">

        <div className="success-icon">✅</div>

        <h1 className="playfair success-title">
          Order Confirmed
        </h1>

        <p className="section-desc success-desc">
          Confirmation sent to {form.email}
        </p>

        <button
          className="btn-gold success-btn"
          onClick={() => setPage("books")}
        >
          Continue Shopping
        </button>

      </div>
    </div>
  );
}

  // ============================================================
  // MAIN UI
  // ============================================================
  return (
    <>
      {payLoader && <PaymentLoader step={payLoaderStep} />}

      <div className="page">
        <div className="container">

          <div style={{ marginBottom: 32, paddingTop: 40 }}>
            <span className="section-label">Checkout</span>
            <h1 className="section-title">Complete Your Order</h1>
          </div>

          <div className="cart-layout">

            {/* LEFT */}
            <div>

              {/* STEP 1 */}
              {step === 1 && (
                <div className="glass" style={{ padding: 32, borderRadius: 20 }}>
                  <h2 className="playfair" style={{ marginBottom: 24 }}>
                    Delivery Details
                  </h2>

                  <div className="grid-2">
                    <input className="input-glass" placeholder="Full Name" value={form.name} onChange={e => up("name", e.target.value)} />
                    <input className="input-glass" placeholder="Email" value={form.email} onChange={e => up("email", e.target.value)} />
                    <input className="input-glass" placeholder="Phone" value={form.phone} onChange={e => up("phone", e.target.value)} />
                    <input className="input-glass" placeholder="Pincode" value={form.pincode} onChange={e => up("pincode", e.target.value)} />
                  </div>

                  <input className="input-glass" style={{ marginTop: 16 }} placeholder="Address" value={form.address} onChange={e => up("address", e.target.value)} />

                  <div className="grid-2" style={{ marginTop: 16 }}>
                    <input className="input-glass" placeholder="City" value={form.city} onChange={e => up("city", e.target.value)} />
                    <input className="input-glass" placeholder="State" value={form.state} onChange={e => up("state", e.target.value)} />
                  </div>

                  <button className="btn-gold" style={{ marginTop: 24 }} onClick={() => validate() && setStep(2)}>
                    Continue →
                  </button>
                </div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <div className="glass" style={{ padding: 32, borderRadius: 20 }}>
                  <h2 className="playfair" style={{ marginBottom: 20 }}>
                    Payment
                  </h2>

                  {/* ✅ Address Preview (IMPORTANT) */}
                  <div style={{
                    background: "var(--glass)",
                    border: "1px solid var(--glass-border)",
                    borderRadius: 12,
                    padding: "14px 18px",
                    marginBottom: 24,
                    fontSize: 13,
                    color: "var(--text-secondary)",
                    lineHeight: 1.7,
                  }}>
                    <div style={{
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      marginBottom: 4
                    }}>
                      Delivering to
                    </div>

                    <div>{form.name} · {form.phone}</div>
                    <div>{form.address}, {form.city} — {form.pincode}</div>
                    <div>{form.state}</div>

                    <button
                      onClick={() => setStep(1)}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        color: "var(--gold)",
                        fontSize: 12,
                        fontWeight: 600,
                        padding: 0,
                        marginTop: 6,
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      ✎ Edit
                    </button>
                  </div>

                  {/* Info */}
                  <p style={{
                    marginBottom: 20,
                    color: "var(--text-muted)",
                    fontSize: 14
                  }}>
                    You'll be redirected to Razorpay's secure checkout.
                  </p>

                  <button
                    className="btn-gold"
                    onClick={placeOrder}
                    disabled={loading}
                  >
                    {loading ? "Processing..." : `Pay ₹${grandTotal}`}
                  </button>
                </div>
              )}
            </div>

            {/* RIGHT */}
            <div className="glass cart-summary-sticky" style={{ padding: 28, borderRadius: 20 }}>
              <h3 className="playfair" style={{ marginBottom: 20 }}>Summary</h3>

              <div>Subtotal: ₹{total}</div>
              <div>Shipping: {shipping === 0 ? "Free" : `₹${shipping}`}</div>

              <hr className="divider" />

              <div style={{ fontWeight: 700 }}>
                Total: ₹{grandTotal}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;