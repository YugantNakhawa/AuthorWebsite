import { useState, useContext } from "react";
import axios from "axios";
import { ToastContext } from "../context/ToastContext";

const API = import.meta.env.VITE_API_URL;

const ForgotPasswordModal = ({ onClose }) => {
  const { show } = useContext(ToastContext);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      show("Enter email", "error");
      return;
    }

    try {
      setLoading(true);

      await axios.post(`${API}/auth/forgot-password`, { email });

      show("If account exists, reset link sent", "success");
      onClose();

    } catch (err) {
      show("Failed to send reset link", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>

        <div className="modal-header">
          <div>
            <div style={{ fontSize: 20, fontWeight: 700 }}>
              Forgot Password
            </div>
            <div style={{ fontSize: 13, color: "var(--text-muted)" }}>
              Enter your email to receive reset link
            </div>
          </div>
          <button onClick={onClose}>✕</button>
        </div>

        <form className="modal-body" onSubmit={handleSubmit}>
          <input
            className="input-glass"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <br /> <br />

          <button className="btn-gold" disabled={loading}>
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordModal;