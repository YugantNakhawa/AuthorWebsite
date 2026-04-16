// import { Link } from "react-router-dom";

// import { useContext } from "react";
// import { CartContext } from "../context/CartContext";

// export default function Navbar() {
//   const { cart } = useContext(CartContext);

//   return (
//     <div className="flex justify-between p-4 bg-black text-white">
//       <h1 className="text-xl font-bold">Author</h1>
//       <div className="space-x-4">
//         <Link to="/">Home</Link>
//         <Link to="/books">Books</Link>
//         <Link to="/cart">Cart ({cart.length})</Link>
//         <Link to="/about">About</Link>
//         <Link to="/contact">Contact</Link>
//       </div>
//     </div>
//   );
// }


// ============================================================
// NAVBAR
// ============================================================

// import { useContext, useState, useEffect } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { CartContext } from "../context/CartContext";
// import { ToastContext } from "../context/ToastContext";

// const Navbar = ({ page, setPage }) => {
//   const { cart } = useContext(CartContext);
//   const { user, setShowLogin, logout } = useContext(AuthContext);
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const cartCount = cart.reduce((s, i) => s + (i.qty || 1), 0);
//   const { show } = useContext(ToastContext);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const links = [
//     { id: "home", label: "Home" },
//     { id: "books", label: "Books" },
//     { id: "speeches", label: "Speeches" },
//     { id: "videos", label: "Premium Videos" },
//     { id: "about", label: "About" },
//     { id: "contact", label: "Contact" },
//   ];

//   return (
//     <>
//       <nav style={{
//         position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
//         padding: "0 24px",
//         background: scrolled ? "rgba(8,8,16,0.92)" : "transparent",
//         backdropFilter: scrolled ? "blur(24px)" : "none",
//         borderBottom: scrolled ? "1px solid var(--glass-border)" : "1px solid transparent",
//         transition: "all 0.3s",
//         height: 72, display: "flex", alignItems: "center",
//       }}>
//         <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", maxWidth: 1200, margin: "0 auto" }}>
//           {/* Logo */}
//           <button onClick={() => setPage("home")} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 12 }}>
//             <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg, var(--gold), #6B4A10)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>✦</div>
//             <div>
//               <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: "var(--text-primary)", lineHeight: 1 }}>Vikram Anand</div>
//               <div style={{ fontSize: 10, color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Author & Speaker</div>
//             </div>
//           </button>

//           {/* Desktop Links */}
//           <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: 4 }}>
//             {links.map(l => (
//               <button key={l.id} onClick={() => setPage(l.id)} className={`nav-link${page === l.id ? " active" : ""}`} style={{
//                 background: "none", border: "none", cursor: "pointer",
//                 color: page === l.id ? "var(--gold)" : "var(--text-secondary)",
//                 fontSize: 14, fontWeight: 500, padding: "8px 14px", borderRadius: 8,
//                 transition: "color 0.2s",
//                 fontFamily: "'DM Sans', sans-serif",
//               }}>{l.label}</button>
//             ))}
//           </div>

//           {/* Right actions */}
//           <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
//             <button onClick={() => setPage("cart")} style={{
//               position: "relative", background: "none", border: "none", cursor: "pointer",
//               color: "var(--text-secondary)", fontSize: 20, padding: "8px",
//               transition: "color 0.2s",
//             }} onMouseEnter={e => e.target.style.color = "var(--text-primary)"} onMouseLeave={e => e.target.style.color = "var(--text-secondary)"}>
//               🛒
//               {cartCount > 0 && (
//                 <span style={{
//                   position: "absolute", top: 2, right: 2, width: 18, height: 18,
//                   background: "var(--gold)", borderRadius: "50%", fontSize: 10, fontWeight: 700,
//                   display: "flex", alignItems: "center", justifyContent: "center", color: "#080810",
//                 }}>{cartCount}</span>
//               )}
//             </button>
//             {user ? (
//               <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
//                 <div style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--gold-dim)", border: "1px solid var(--gold)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, color: "var(--gold)", fontWeight: 600 }}>
//                   {user.name?.[0]?.toUpperCase() || "U"}
//                 </div>
//                 <button
//                   onClick={() => {
//                     logout(() => {
//                       show("Logged out successfully", "success");
//                       setPage("home");
//                     });
//                   }}
//                   className="btn-ghost"
//                   style={{ padding: "7px 14px", fontSize: 13 }}
//                 >
//                   Sign Out
//                 </button>
//               </div>
//             ) : (
//               <button onClick={() => setShowLogin(true)} className="btn-gold" style={{ padding: "9px 20px", fontSize: 13 }}>Sign In</button>
//             )}
//             {/* Mobile menu */}
//             <button className="nav-mobile-menu" onClick={() => setMobileOpen(v => !v)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-primary)", fontSize: 20 }}>☰</button>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile menu */}
//       {mobileOpen && (
//         <div style={{
//           position: "fixed", top: 72, left: 0, right: 0, zIndex: 99,
//           background: "rgba(8,8,16,0.97)", backdropFilter: "blur(24px)",
//           borderBottom: "1px solid var(--glass-border)", padding: "16px",
//         }}>
//           {links.map(l => (
//             <button key={l.id} onClick={() => { setPage(l.id); setMobileOpen(false); }} style={{
//               display: "block", width: "100%", textAlign: "left",
//               background: page === l.id ? "var(--gold-dim)" : "none",
//               border: "none", cursor: "pointer",
//               color: page === l.id ? "var(--gold)" : "var(--text-secondary)",
//               fontSize: 15, fontWeight: 500, padding: "14px 16px", borderRadius: 8,
//               fontFamily: "'DM Sans', sans-serif",
//             }}>{l.label}</button>
//           ))}
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;

import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import { ThemeContext } from "../context/ThemeContext";
import { useNavigate, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home",     path: "/" },
  { label: "Books",    path: "/books" },
  { label: "Speeches", path: "/speeches" },
  { label: "Videos",   path: "/videos" },
  { label: "About",    path: "/about" },
  { label: "Contact",  path: "/contact" },
];

// ── Theme Toggle ───────────────────────────────────────────────────────────────
const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);
  const isDark = theme === "dark";
  return (
    <button
      className="theme-toggle"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="theme-toggle-track">
        <div className="theme-toggle-thumb" />
      </div>
      <span className="theme-toggle-label">{isDark ? "☀️" : "🌙"}</span>
    </button>
  );
};

// ── Navbar ─────────────────────────────────────────────────────────────────────
const Navbar = ({ setPage }) => {
  const { user, setShowLogin, logout } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (path) => { navigate(path); setMenuOpen(false); };
  const cartCount = cart.reduce((sum, i) => sum + (i.qty || 1), 0);

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 999,
        height: 64,
        background: "var(--bg-nav)",
        backdropFilter: "blur(24px)",
        borderBottom: "1px solid var(--glass-border)",
        display: "flex", alignItems: "center",
        padding: "0 24px", gap: 16,
        transition: "background 0.3s, border-color 0.3s",
      }}>
        {/* Logo */}
        <button
          onClick={() => go("/")}
          style={{
            background: "none", border: "none", cursor: "pointer",
            display: "flex", alignItems: "center", gap: 12, flexShrink: 0,
            marginRight: 24,
          }}
        >
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: "linear-gradient(135deg, var(--gold), #6B4A10)",
            display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16,
          }}>✦</div>
          <div style={{ textAlign: "left" }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: "var(--text-primary)", lineHeight: 1 }}>Raghvan Koli</div>
            <div style={{ fontSize: 10, color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Author & Speaker</div>
          </div>
        </button>

        {/* Desktop links */}
        <div className="nav-links" style={{ display: "flex", gap: 4, flex: 1 }}>
          {NAV_LINKS.map(({ label, path }) => (
            <button
              key={path}
              onClick={() => go(path)}
              className={`nav-link${location.pathname === path ? " active" : ""}`}
              style={{
                background: "none", border: "none", cursor: "pointer",
                color: location.pathname === path ? "var(--gold)" : "var(--text-secondary)",
                fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500,
                padding: "8px 14px", borderRadius: 8, transition: "color 0.15s",
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Right side */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginLeft: "auto" }}>
          <ThemeToggle />

          <button
            onClick={() => go("/cart")}
            style={{
              position: "relative", background: "none", border: "none",
              cursor: "pointer", fontSize: 20, color: "var(--text-secondary)",
              padding: "4px 8px",
            }}
          >
            🛒
            {cartCount > 0 && (
              <span style={{
                position: "absolute", top: -4, right: -4,
                background: "var(--gold)", color: "#080810",
                fontSize: 10, fontWeight: 700,
                width: 18, height: 18, borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>{cartCount}</span>
            )}
          </button>

          {user ? (
            <button className="btn-ghost nav-links" style={{ fontSize: 13, padding: "8px 16px" }} onClick={logout}>Sign Out</button>
          ) : (
            <button className="btn-gold nav-links" style={{ fontSize: 13, padding: "9px 18px" }} onClick={() => setShowLogin(true)}>Sign In</button>
          )}

          <button
            className="nav-mobile-menu"
            onClick={() => setMenuOpen(o => !o)}
            style={{
              background: "none", border: "none", cursor: "pointer",
              color: "var(--text-primary)", fontSize: 22, padding: "4px 6px", lineHeight: 1,
            }}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-drawer">
          {NAV_LINKS.map(({ label, path }) => (
            <button key={path} onClick={() => go(path)} className={location.pathname === path ? "active" : ""}>
              {label}
            </button>
          ))}
          {/* <div className="mobile-drawer-divider" /> */}
          {/* <div style={{ padding: "8px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontSize: 14, color: "var(--text-secondary)", fontFamily: "'DM Sans', sans-serif" }}>Theme</span>
            <ThemeToggle />
          </div> */}
          <div className="mobile-drawer-divider" />
          {user ? (
            <button onClick={() => { logout(); setMenuOpen(false); }}>Sign Out</button>
          ) : (
            <button onClick={() => { setShowLogin(true); setMenuOpen(false); }} style={{ color: "var(--gold)" }}>Sign In</button>
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;