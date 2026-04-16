// ============================================================
// PAY-PER-VIEW MODAL
// ============================================================

// import { useContext, useState } from "react";
// import { ToastContext } from "../context/ToastContext";

// const PayModal = ({ video, onClose, onSuccess }) => {
//   const { show } = useContext(ToastContext);
//   const [step, setStep] = useState(1); // 1=confirm, 2=payment
//   const [method, setMethod] = useState("upi");

//   const pay = () => {
//     setTimeout(() => {
//       show("Payment successful! Enjoy the video.", "success");
//       onSuccess(video.id);
//       onClose();
//     }, 1200);
//   };

//   return (
//     <div className="modal-backdrop" onClick={onClose}>
//       <div className="modal" onClick={e => e.stopPropagation()}>
//         <div className="modal-header">
//           <div>
//             <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700 }}>Unlock Video</div>
//             <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 2 }}>One-time access • ₹{video.price}</div>
//           </div>
//           <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)", fontSize: 20 }}>✕</button>
//         </div>
//         <div className="modal-body">
//           <div style={{ background: "var(--gold-dim)", borderRadius: 12, padding: "16px", marginBottom: 24, border: "1px solid rgba(201,168,76,0.2)" }}>
//             <div style={{ fontSize: 28, marginBottom: 8 }}>{video.thumbnail}</div>
//             <div style={{ fontWeight: 600, marginBottom: 4 }}>{video.title}</div>
//             <div style={{ fontSize: 13, color: "var(--text-secondary)", marginBottom: 12 }}>{video.duration} · {video.category}</div>
//             <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
//               <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: "var(--gold)" }}>₹{video.price}</span>
//               <span style={{ fontSize: 12, color: "var(--text-muted)" }}>per view</span>
//             </div>
//           </div>
//           <div style={{ marginBottom: 20 }}>
//             <label className="form-label">Payment Method</label>
//             <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
//               {[{ id: "upi", label: "UPI" }, { id: "card", label: "Card" }, { id: "wallet", label: "Wallet" }].map(m => (
//                 <button key={m.id} onClick={() => setMethod(m.id)} style={{
//                   padding: "12px", borderRadius: 10, border: `1px solid ${method === m.id ? "var(--gold)" : "var(--glass-border)"}`,
//                   background: method === m.id ? "var(--gold-dim)" : "rgba(255,255,255,0.03)",
//                   color: method === m.id ? "var(--gold)" : "var(--text-secondary)",
//                   cursor: "pointer", fontSize: 13, fontWeight: 500, fontFamily: "'DM Sans', sans-serif",
//                 }}>{m.label}</button>
//               ))}
//             </div>
//           </div>
//           {method === "upi" && (
//             <div style={{ marginBottom: 20 }}>
//               <label className="form-label">UPI ID</label>
//               <input className="input-glass" placeholder="yourname@upi" />
//             </div>
//           )}
//           {method === "card" && (
//             <div style={{ marginBottom: 20, display: "flex", flexDirection: "column", gap: 12 }}>
//               <input className="input-glass" placeholder="Card Number" />
//               <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
//                 <input className="input-glass" placeholder="MM/YY" />
//                 <input className="input-glass" placeholder="CVV" />
//               </div>
//             </div>
//           )}
//           <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20, padding: "12px 14px", background: "rgba(82,192,122,0.08)", borderRadius: 10, border: "1px solid rgba(82,192,122,0.15)" }}>
//             <span style={{ color: "var(--success)", fontSize: 14 }}>🛡</span>
//             <span style={{ fontSize: 12, color: "var(--text-secondary)" }}>Secure payment via Razorpay. Your data is encrypted.</span>
//           </div>
//           <button className="btn-gold" onClick={pay} style={{ width: "100%", justifyContent: "center", padding: 14, fontSize: 15 }}>
//             Pay ₹{video.price} & Watch Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PayModal;

import { useContext, useState } from "react";
import axios from "axios";
import { ToastContext } from "../context/ToastContext";
import { AuthContext } from "../context/AuthContext";
import PaymentLoader from "./PaymentLoader"; 

const API = import.meta.env.VITE_API_URL;

const PayModal = ({ video, onClose, onSuccess }) => {
  const { show } = useContext(ToastContext);
  const { user, setShowLogin } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);

  // ✅ loader state
  const [payLoader, setPayLoader] = useState(false);
  const [payLoaderStep, setPayLoaderStep] = useState(0);

  const advanceLoader = (step, delay = 800) =>
    new Promise(res => setTimeout(() => {
      setPayLoaderStep(step);
      res();
    }, delay));

  const pay = async () => {
    if (!user) {
      setShowLogin(true);
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(`${API}/orders/create-razorpay-order`, {
        type: "video",
        items: [{ id: video.id, quantity: 1 }],
      });

      const { orderId, amount, key } = res.data;

      const options = {
        key,
        amount,
        currency: "INR",
        name: "Author Website",
        description: video.title,
        order_id: orderId,

        handler: async function (response) {
          try {
            setPayLoader(true);
            setPayLoaderStep(0);

            await advanceLoader(1, 800);

            await axios.post(`${API}/orders/verify-payment`, {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              OrderData: {
                type: "video",
                customerName: user.name,
                email: user.email,
                phone: "NA",
                address: "NA",
                city: "NA",
                state: "NA",
                pincode: "NA",
                paymentMethod: "Razorpay",
                items: [{ id: video.id, quantity: 1 }],
              },
            });

            await advanceLoader(2, 600);
            await new Promise(r => setTimeout(r, 500));

            setPayLoader(false);

            show("Payment successful! Enjoy the video.", "success");
            onSuccess(video.id);
            onClose();

          } catch (err) {
            console.error(err);
            setPayLoader(false);
            show("Payment verification failed", "error");
          }
        },

        modal: {
          ondismiss: () => show("Payment cancelled", "error"),
        },

        prefill: {
          name: user?.name,
          email: user?.email,
        },

        theme: {
          color: "#C8A96A",
        },
      };

      new window.Razorpay(options).open();

    } catch (err) {
      console.error(err);
      show("Payment initiation failed", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ✅ Loader overlay */}
      {payLoader && <PaymentLoader step={payLoaderStep} />}

      <div className="modal-backdrop" onClick={onClose}>
        <div className="pay-modal-box" onClick={(e) => e.stopPropagation()}>

          <div className="pay-modal-header">
            <div>
              <div className="pay-modal-title">Unlock Video</div>
              <div className="pay-modal-sub">
                One-time access · ₹{video.price}
              </div>
            </div>
            <button className="pay-modal-close" onClick={onClose}>✕</button>
          </div>

          <div className="pay-modal-body" style={{background: "var(--bg-dark3)"}}>

            <div className="pay-modal-card">
              <div style={{ fontSize: 14, color: "var(--text-secondary)" }}>
                {video.title}
              </div>
              <div className="pay-modal-price">
                ₹{video.price}
              </div>
            </div>

            <button
              className="btn-gold"
              style={{ width: "100%", justifyContent: "center" }}
              onClick={pay}
              disabled={loading}
            >
              {loading ? "Initializing…" : `Pay ₹${video.price} & Watch`}
            </button>

          </div>
        </div>
      </div>
    </>
  );
};

export default PayModal;