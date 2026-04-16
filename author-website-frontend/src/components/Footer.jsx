// ============================================================
// FOOTER
// ============================================================
// const Footer = ({ setPage }) => (
//   <footer style={{ borderTop: "1px solid var(--glass-border)", background: "rgba(8,8,16,0.8)", backdropFilter: "blur(16px)", padding: "56px 24px 32px", position: "relative", zIndex: 1 }}>
//     <div className="container">
//       <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
//         <div>
//           <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, marginBottom: 12 }}>Vikram Anand</div>
//           <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7, maxWidth: 280, marginBottom: 20 }}>
//             Helping individuals and organizations unlock their full potential through books, speeches, and exclusive content.
//           </p>
//           <div style={{ display: "flex", gap: 12 }}>
//             {["YouTube", "LinkedIn", "Instagram", "Twitter"].map(s => (
//               <button key={s} style={{ background: "var(--glass)", border: "1px solid var(--glass-border)", borderRadius: 8, padding: "6px 12px", fontSize: 11, color: "var(--text-muted)", cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>{s}</button>
//             ))}
//           </div>
//         </div>
//         {[
//           { title: "Platform", links: [{ label: "Books", page: "books" }, { label: "Speeches", page: "speeches" }, { label: "Premium Videos", page: "videos" }, { label: "About", page: "about" }] },
//           { title: "Support", links: [{ label: "Contact", page: "contact" }, { label: "Track Order", page: "contact" }, { label: "Returns", page: "contact" }, { label: "FAQs", page: "contact" }] },
//           { title: "Legal", links: [{ label: "Privacy Policy", page: "home" }, { label: "Terms of Service", page: "home" }, { label: "Refund Policy", page: "home" }, { label: "Shipping Policy", page: "home" }] },
//         ].map(col => (
//           <div key={col.title}>
//             <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 16, color: "var(--text-primary)" }}>{col.title}</div>
//             {col.links.map(l => (
//               <button key={l.label} onClick={() => setPage(l.page)} style={{ display: "block", background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)", fontSize: 13, padding: "5px 0", fontFamily: "'DM Sans', sans-serif", textAlign: "left", transition: "color 0.2s" }}
//                 onMouseEnter={e => e.target.style.color = "var(--text-secondary)"}
//                 onMouseLeave={e => e.target.style.color = "var(--text-muted)"}
//               >{l.label}</button>
//             ))}
//           </div>
//         ))}
//       </div>
//       <hr className="divider" />
//       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 12, color: "var(--text-muted)", flexWrap: "wrap", gap: 12 }}>
//         <span>© 2024 Vikram Anand. All rights reserved.</span>
//         <span>Made with ♥ in India · Powered by Razorpay & Shiprocket</span>
//       </div>
//     </div>
//   </footer>
// );

// export default Footer;

const Footer = ({ setPage }) => (
  <footer style={{
    borderTop: "1px solid var(--glass-border)",
    background: "var(--bg-footer)",
    backdropFilter: "blur(16px)",
    padding: "56px 24px 32px",
    position: "relative",
    zIndex: 1,
    transition: "background 0.3s, border-color 0.3s",
  }}>
    <style>{`
      .footer-grid {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr 1fr;
        gap: 48px;
        margin-bottom: 48px;
      }
      .footer-social { display: flex; gap: 8px; flex-wrap: wrap; }
      .footer-link {
        display: block; background: none; border: none; cursor: pointer;
        color: var(--text-muted); font-size: 13px; padding: 5px 0;
        font-family: 'DM Sans', sans-serif; text-align: left;
        transition: color 0.2s; text-decoration: none;
      }
      .footer-link:hover { color: var(--text-secondary) !important; }
      .footer-social-btn {
        background: var(--glass); border: 1px solid var(--glass-border);
        border-radius: 8px; padding: 6px 14px; font-size: 11px;
        color: var(--text-muted); cursor: pointer;
        font-family: 'DM Sans', sans-serif;
        transition: color 0.2s, border-color 0.2s;
        text-decoration: none; display: inline-block; line-height: 2;
      }
      .footer-social-btn:hover { color: var(--gold); border-color: rgba(201,168,76,0.3); }
      @media (max-width: 900px) {
        .footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; }
        .footer-brand-col { grid-column: 1 / -1; }
      }
      @media (max-width: 480px) {
        .footer-grid { grid-template-columns: 1fr 1fr; gap: 24px; }
        .footer-brand-col { grid-column: 1 / -1; }
      }
    `}</style>

    <div className="container">
      <div className="footer-grid">

        {/* Brand */}
        <div className="footer-brand-col">
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{
              width: 36, height: 36, borderRadius: 10,
              background: "linear-gradient(135deg, var(--gold), #6B4A10)",
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0,
            }}>✦</div>
            <div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: "var(--text-primary)", lineHeight: 1 }}>Raghvan Koli</div>
              <div style={{ fontSize: 10, color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 3 }}>Author & Speaker</div>
            </div>
          </div>
          <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7, maxWidth: 300, marginBottom: 20 }}>
            World's first multi-field motivational speaker. Igniting minds across engineering, medical, MBA & beyond — since 2015.
          </p>
          <div className="footer-social">
            {[
              { label: "Instagram", url: "https://www.instagram.com/raghvan_koli/" },
              { label: "LinkedIn", url: "https://www.linkedin.com/in/raghvan-koli-164287186/" },
              { label: "Threads", url: "https://www.threads.com/@raghvan_koli" },
              { label: "Fourshlag", url: "https://fourshlag.com/mr-raghvan-koli/" },
            ].map(s => (
              <a key={s.label} href={s.url} target="_blank" rel="noreferrer" className="footer-social-btn">
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {[
          {
            title: "Platform",
            links: [
              { label: "Books", page: "/books" },
              { label: "Speeches", page: "/speeches" },
              { label: "Premium Videos", page: "/videos" },
              { label: "About", page: "/about" },
            ],
          },
          {
            title: "Support",
            links: [
              { label: "Contact", page: "/contact" },
              { label: "Track Order", page: "/contact" },
              { label: "Returns", page: "/contact" },
              { label: "FAQs", page: "/contact" },
            ],
          },
          {
            title: "Legal",
            links: [
              { label: "Privacy Policy", page: "/" },
              { label: "Terms of Service", page: "/" },
              { label: "Refund Policy", page: "/" },
              { label: "Shipping Policy", page: "/" },
            ],
          },
        ].map(col => (
          <div key={col.title}>
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 16, color: "var(--text-primary)" }}>
              {col.title}
            </div>
            {col.links.map(l => (
              <button key={l.label} onClick={() => setPage(l.page)} className="footer-link">
                {l.label}
              </button>
            ))}
          </div>
        ))}
      </div>

      <hr className="divider" />

      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        fontSize: 12, color: "var(--text-muted)", flexWrap: "wrap", gap: 8,
      }}>
        <span>© 2026 Raghvan Koli. All rights reserved.</span>
        <span>Made with ♥ in India · Brand Ambassador, Fourshlag Overseas Services</span>
      </div>
    </div>
  </footer>
);

export default Footer;