// // ============================================================
// // AUTH MODAL
// // ============================================================

// import { useContext, useState } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { ToastContext } from "../context/ToastContext";

// const AuthModal = () => {
//   const { showLogin, setShowLogin, login } = useContext(AuthContext);
//   const { show } = useContext(ToastContext);
//   const [tab, setTab] = useState("login");
//   const [form, setForm] = useState({ name: "", email: "", password: "" });

//   if (!showLogin) return null;

//   const handleSubmit = () => {
//     if (!form.email || !form.password) { show("Please fill all fields", "error"); return; }
//     login({ name: form.name || form.email.split("@")[0], email: form.email });
//     show(`Welcome${form.name ? ", " + form.name : ""}!`, "success");
//     setShowLogin(false);
//   };

//   return (
//     <div className="modal-backdrop" onClick={() => setShowLogin(false)}>
//       <div className="modal" onClick={e => e.stopPropagation()}>
//         <div className="modal-header">
//           <div>
//             <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700 }}>
//               {tab === "login" ? "Welcome back" : "Create account"}
//             </div>
//             <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 4 }}>
//               {tab === "login" ? "Sign in to access premium content" : "Join thousands of learners"}
//             </div>
//           </div>
//           <button onClick={() => setShowLogin(false)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)", fontSize: 20 }}>✕</button>
//         </div>
//         <div className="modal-body">
//           <div className="tabs" style={{ marginBottom: 24 }}>
//             <button className={`tab${tab === "login" ? " active" : ""}`} onClick={() => setTab("login")}>Sign In</button>
//             <button className={`tab${tab === "register" ? " active" : ""}`} onClick={() => setTab("register")}>Register</button>
//           </div>
//           <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
//             {tab === "register" && (
//               <div>
//                 <label className="form-label">Full Name</label>
//                 <input className="input-glass" placeholder="Your name" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} />
//               </div>
//             )}
//             <div>
//               <label className="form-label">Email</label>
//               <input className="input-glass" type="email" placeholder="you@example.com" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} />
//             </div>
//             <div>
//               <label className="form-label">Password</label>
//               <input className="input-glass" type="password" placeholder="••••••••" value={form.password} onChange={e => setForm(p => ({ ...p, password: e.target.value }))} />
//             </div>
//             {tab === "login" && (
//               <button style={{ background: "none", border: "none", cursor: "pointer", color: "var(--gold)", fontSize: 13, textAlign: "right", fontFamily: "'DM Sans', sans-serif" }}>Forgot password?</button>
//             )}
//             <button className="btn-gold" onClick={handleSubmit} style={{ width: "100%", justifyContent: "center", padding: 14 }}>
//               {tab === "login" ? "Sign In" : "Create Account"}
//             </button>
//             <div style={{ textAlign: "center", fontSize: 13, color: "var(--text-muted)" }}>
//               Or continue with
//             </div>
//             <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
//               {["Google", "LinkedIn"].map(p => (
//                 <button key={p} className="btn-ghost" style={{ justifyContent: "center", fontSize: 13 }}>{p}</button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AuthModal;

import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { ToastContext } from "../context/ToastContext";
import ForgotPasswordModal from "./ForgotPasswordModal";

const API = import.meta.env.VITE_API_URL;

const AuthModal = () => {
  const { showLogin, setShowLogin, login } = useContext(AuthContext);
  const { show } = useContext(ToastContext);

  const [tab, setTab] = useState("login");
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);

  // ✅ NEW STATE (forgot modal)
  const [showForgot, setShowForgot] = useState(false);

  const validatePassword = (password) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    return regex.test(password);
  };

  // ❌ Only hide login modal, not whole component
  if (!showLogin && !showForgot) return null;

  // =========================
  // SUBMIT HANDLER
  // =========================
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      show("Please fill all fields", "error");
      return;
    }

    try {
      setLoading(true);

      if (tab === "login") {
        const res = await axios.post(
          `${API}/auth/login`,
          {
            email: form.email.trim().toLowerCase(),
            password: form.password.trim()
          },
          { withCredentials: true }
        );

        login(res.data.user);
        show(`Welcome back, ${res.data.user.name}!`, "success");

      } else {
        if (!form.name || !form.email || !form.password) {
          show("Please fill all fields", "error");
          return;
        }

        if (!validatePassword(form.password)) {
          show(
            "Password must be 8+ chars with uppercase, lowercase, number & special character",
            "error"
          );
          return;
        }

        await axios.post(`${API}/auth/register`, form);

        show("Account created! Please login.", "success");
        setTab("login");
        return;
      }

      setShowLogin(false);

    } catch (err) {
      show(
        err.response?.data ||
        err.message ||
        "Something went wrong",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ================= LOGIN MODAL ================= */}
      {showLogin && (
        <div
          className="modal-backdrop"
          onClick={() => setShowLogin(false)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 20
          }}
        >
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: 420,
              maxHeight: "90vh",
              display: "flex",
              flexDirection: "column",
              borderRadius: 20,
              overflow: "hidden"
            }}
          >
            {/* HEADER */}
            <div
              style={{
                padding: "20px 24px",
                borderBottom: "1px solid var(--glass-border)",
                position: "sticky",
                top: 0,
                background: "rgba(15,15,25,0.9)",
                backdropFilter: "blur(12px)",
                zIndex: 2,
                background: "var(--bg-dark3)"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <div style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 20,
                    fontWeight: 700
                  }}>
                    {tab === "login" ? "Welcome back" : "Create account"}
                  </div>
                  <div style={{
                    fontSize: 13,
                    color: "var(--text-muted)",
                    marginTop: 4
                  }}>
                    {tab === "login"
                      ? "Sign in to access premium content"
                      : "Join thousands of learners"}
                  </div>
                </div>

                <button onClick={() => setShowLogin(false)}>✕</button>
              </div>

              {/* Tabs */}
              <div style={{ display: "flex", gap: 8, marginTop: 16, background: "var(--bg-dark3)" }}>
                {["login", "register"].map(t => (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    style={{
                      flex: 1,
                      padding: "10px",
                      borderRadius: 10,
                      border: `1px solid ${tab === t ? "var(--gold)" : "var(--glass-border)"}`,
                      background: tab === t ? "var(--gold-dim)" : "transparent",
                      color: tab === t ? "var(--gold)" : "var(--text-secondary)",
                      fontSize: 13
                    }}
                  >
                    {t === "login" ? "Sign In" : "Register"}
                  </button>
                ))}
              </div>
            </div>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              style={{
                padding: 24,
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
                gap: 16
              }}
            >
              {tab === "register" && (
                <input
                  className="input-glass"
                  placeholder="Your name"
                  value={form.name}
                  onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                />
              )}

              <input
                className="input-glass"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
              />

              <input
                className="input-glass"
                type="password"
                placeholder="••••••••"
                value={form.password}
                onChange={e => setForm(p => ({ ...p, password: e.target.value }))}
              />

              {/* ✅ FORGOT PASSWORD */}
              {tab === "login" && (
                <button
                  type="button"
                  onClick={() => {
                    setShowLogin(false);
                    setShowForgot(true);
                  }}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "var(--gold)",
                    fontSize: 13,
                    textAlign: "right"
                  }}
                >
                  Forgot password?
                </button>
              )}

              <button className="btn-gold" disabled={loading}>
                {loading
                  ? "Please wait..."
                  : tab === "login"
                  ? "Sign In"
                  : "Create Account"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ================= FORGOT MODAL ================= */}
      {showForgot && (
        <ForgotPasswordModal
          onClose={() => {
            setShowForgot(false);
            setShowLogin(true); // 🔥 go back to login
          }}
        />
      )}
    </>
  );
};

export default AuthModal;