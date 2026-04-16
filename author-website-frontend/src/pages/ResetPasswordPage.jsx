import { useState, useContext } from "react";
import axios from "axios";
import { ToastContext } from "../context/ToastContext";

const API = import.meta.env.VITE_API_URL;

const ResetPasswordPage = ({ setPage }) => {
  const { show } = useContext(ToastContext);

  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const token = sessionStorage.getItem("resetToken");

  const validatePassword = (password) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password);
  };

  const handleReset = async () => {
    if (!password) {
      show("Enter new password", "error");
      return;
    }

    if (!validatePassword(password)) {
      show("Weak password - Password must be 8+ chars with uppercase, lowercase, number & special character", "error");
      return;
    }

    try {
      setLoading(true);

      await axios.post(`${API}/auth/reset-password`, {
        token,
        newPassword: password
      });

      show("Password reset successful", "success");

      sessionStorage.removeItem("resetToken");

      setTimeout(() => {
        setPage("home");
      }, 1500);

    } catch (err) {
      show(err.response?.data || "Reset failed", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <div className="container" style={{ paddingTop: 80, maxWidth: 420 }}>

        <h1 className="section-title">Reset Password</h1>

        <input
          type="password"
          className="input-glass"
          placeholder="New password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="btn-gold"
          onClick={handleReset}
          disabled={loading}
          style={{ marginTop: 20, width: "100%" }}
        >
          {loading ? "Resetting..." : "Reset Password"}
        </button>
      </div>
    </div>
  );
};

export default ResetPasswordPage;