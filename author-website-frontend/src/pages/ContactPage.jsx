// import { useState } from "react";
// import axios from "axios";

// export default function Contact() {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });

//   const handleSubmit = async () => {
//     await axios.post("https://localhost:7032/api/contact", form);
//     alert("Message sent");
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl">Contact</h1>
//       <input placeholder="Name" onChange={e => setForm({...form, name: e.target.value})} />
//       <input placeholder="Email" onChange={e => setForm({...form, email: e.target.value})} />
//       <textarea placeholder="Message" onChange={e => setForm({...form, message: e.target.value})} />
//       <button onClick={handleSubmit}>Send</button>
//     </div>
//     );
// }

// import { useContext, useState } from "react";
// import { ToastContext } from "../context/ToastContext";

// // ============================================================
// // CONTACT PAGE
// // ============================================================
// const ContactPage = () => {
//   const { show } = useContext(ToastContext);
//   const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async () => {
//     if (!form.name || !form.email || !form.message) { show("Please fill required fields", "error"); return; }
//     setLoading(true);
//     await new Promise(r => setTimeout(r, 1000));
//     setLoading(false);
//     show("Message sent! We'll respond within 24 hours.", "success");
//     setForm({ name: "", email: "", phone: "", subject: "", message: "" });
//   };

//   return (
//     <div className="page">
//       <div className="container" style={{ paddingTop: 40, paddingBottom: 80 }}>
//         <div style={{ marginBottom: 56 }}>
//           <span className="section-label">Get in Touch</span>
//           <h1 className="section-title">Let's Connect</h1>
//           <p className="section-desc">For speaking engagements, media queries, or personal sessions — reach out and we'll get back within 24 hours.</p>
//         </div>

//         <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 48, alignItems: "start" }}>
//           {/* Info */}
//           <div>
//             <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
//               {[
//                 { icon: "✉", label: "Email", value: "connect@vikramanand.com" },
//                 { icon: "📞", label: "Phone", value: "+91 98765 43210" },
//                 { icon: "📍", label: "Based in", value: "Mumbai, Maharashtra" },
//                 { icon: "🕐", label: "Response time", value: "Within 24 hours" },
//               ].map(c => (
//                 <div key={c.label} className="glass" style={{ borderRadius: 16, padding: "18px 20px", display: "flex", alignItems: "center", gap: 16 }}>
//                   <div style={{ width: 44, height: 44, borderRadius: 12, background: "var(--gold-dim)", border: "1px solid rgba(201,168,76,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>{c.icon}</div>
//                   <div>
//                     <div style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 2 }}>{c.label}</div>
//                     <div style={{ fontWeight: 600, fontSize: 14 }}>{c.value}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="glass" style={{ borderRadius: 20, padding: 28, marginTop: 20 }}>
//               <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, marginBottom: 12 }}>Book a Speaking Session</div>
//               <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 20 }}>
//                 Vikram speaks at colleges, corporate events, and leadership summits. He's spoken at 50+ institutions including IITs, IIMs, and global conferences.
//               </p>
//               <div style={{ display: "flex", flex: "column", gap: 12, fontSize: 13, color: "var(--text-muted)" }}>
//                 <div>📍 Available: Pan India + International</div>
//                 <div style={{ marginTop: 8 }}>⏱ Duration: 45 min – 2 hours</div>
//                 <div style={{ marginTop: 8 }}>🎓 Speciality: College convocations, Leadership summits</div>
//               </div>
//             </div>
//           </div>

//           {/* Form */}
//           <div className="glass" style={{ borderRadius: 24, padding: 36 }}>
//             <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, marginBottom: 28 }}>Send a Message</h2>
//             <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
//               <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
//                 <div>
//                   <label className="form-label">Full Name *</label>
//                   <input className="input-glass" placeholder="Your name" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} />
//                 </div>
//                 <div>
//                   <label className="form-label">Phone</label>
//                   <input className="input-glass" placeholder="+91 ..." value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} />
//                 </div>
//               </div>
//               <div>
//                 <label className="form-label">Email *</label>
//                 <input className="input-glass" type="email" placeholder="you@example.com" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} />
//               </div>
//               <div>
//                 <label className="form-label">Subject</label>
//                 <select className="input-glass" value={form.subject} onChange={e => setForm(p => ({ ...p, subject: e.target.value }))}>
//                   <option value="">Select a subject</option>
//                   <option>Speaking / Event Booking</option>
//                   <option>Media / Press Inquiry</option>
//                   <option>Book Order Support</option>
//                   <option>General Message</option>
//                   <option>Collaboration</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="form-label">Message *</label>
//                 <textarea className="input-glass" rows={5} placeholder="Tell us what's on your mind..." style={{ resize: "vertical" }} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} />
//               </div>
//               <button className="btn-gold" onClick={handleSubmit} disabled={loading} style={{ width: "100%", justifyContent: "center", padding: 15, fontSize: 15, opacity: loading ? 0.7 : 1 }}>
//                 {loading ? "Sending..." : "Send Message →"}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;

import { useContext, useState } from "react";
import { ToastContext } from "../context/ToastContext";
import axios from "axios";

const ContactPage = () => {
  const { show } = useContext(ToastContext);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  const API = import.meta.env.VITE_API_URL;

  const handleSubmit = async () => {
  if (!form.name || !form.email || !form.message) {
    show("Please fill required fields", "error");
    return;
  }

  try {
    setLoading(true);

    await axios.post(`${API}/contact`, form);

    show("Message sent! We'll respond within 24 hours.", "success");

    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  } catch (err) {
    show("Something went wrong", "error");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="page">
      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 48px;
          align-items: start;
        }
        @media (max-width: 860px) {
          .contact-grid { grid-template-columns: 1fr; gap: 32px; }
        }
        .contact-social-btn {
          background: none;
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-sm);
          padding: 8px 16px;
          font-size: 12px;
          color: var(--text-secondary);
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          transition: color 0.2s, border-color 0.2s;
          text-decoration: none;
          display: inline-block;
          line-height: 1.8;
        }
        .contact-social-btn:hover { color: var(--gold); border-color: rgba(201,168,76,0.4); }
      `}</style>

      <div className="container" style={{ paddingTop: 40, paddingBottom: 80 }}>
        <div style={{ marginBottom: 56 }}>
          <span className="section-label">Get in Touch</span>
          <h1 className="section-title">Let's Connect</h1>
          <p className="section-desc">For speaking engagements, college bookings, media queries, or personal sessions — reach out and we'll respond within 24 hours.</p>
        </div>

        <div className="contact-grid">
          {/* Info */}
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { icon: "✉", label: "Email", value: "raghvankoli@fourshlag.com" },
                { icon: "🌐", label: "Website", value: "fourshlag.com/mr-raghvan-koli" },
                { icon: "📍", label: "Based in", value: "Pune, Maharashtra" },
                { icon: "🕐", label: "Response time", value: "Within 24 hours" },
              ].map(c => (
                <div key={c.label} className="glass" style={{ borderRadius: 16, padding: "18px 20px", display: "flex", alignItems: "center", gap: 16 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: "var(--gold-dim)", border: "1px solid rgba(201,168,76,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>{c.icon}</div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 2 }}>{c.label}</div>
                    <div style={{ fontWeight: 600, fontSize: 14, color: "var(--text-primary)", wordBreak: "break-word" }}>{c.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="glass" style={{ borderRadius: 20, padding: 28, marginTop: 20 }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, marginBottom: 12, color: "var(--text-primary)" }}>Book a Speaking Session</div>
              <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 20 }}>
                Raghvan speaks at engineering colleges, medical institutes, MBA programs, and corporate conferences. He has spoken at 194+ institutions across India since 2015.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 13, color: "var(--text-muted)" }}>
                <div>📍 Available: Pan India + International</div>
                <div>⏱ Duration: 45 min – 2 hours</div>
                <div>🎓 Fields: Engineering, Medical, MBA, Pharmacy, Architecture</div>
                <div>🌍 Conferences: National & International Business Events</div>
              </div>
            </div>

            <div className="glass" style={{ borderRadius: 20, padding: 24, marginTop: 20 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text-secondary)", marginBottom: 16 }}>Follow Raghvan</div>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a href="https://www.instagram.com/raghvan_koli/" target="_blank" rel="noreferrer" className="contact-social-btn">Instagram</a>
                <a href="https://www.linkedin.com/in/raghvan-koli-164287186/" target="_blank" rel="noreferrer" className="contact-social-btn">LinkedIn</a>
                <a href="https://www.threads.com/@raghvan_koli" target="_blank" rel="noreferrer" className="contact-social-btn">Threads</a>
                <a href="https://fourshlag.com/mr-raghvan-koli/" target="_blank" rel="noreferrer" className="contact-social-btn">Fourshlag</a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="glass" style={{ borderRadius: 24, padding: 36 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, marginBottom: 28, color: "var(--text-primary)" }}>Send a Message</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div>
                  <label className="form-label">Full Name *</label>
                  <input className="input-glass" placeholder="Your name" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} />
                </div>
                <div>
                  <label className="form-label">Phone</label>
                  <input className="input-glass" placeholder="+91 ..." value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} />
                </div>
              </div>
              <div>
                <label className="form-label">Email *</label>
                <input className="input-glass" type="email" placeholder="you@example.com" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} />
              </div>
              <div>
                <label className="form-label">Subject</label>
                <select className="input-glass" value={form.subject} style={{
                  minWidth: 180,
                  maxWidth: 220
                }} onChange={e => setForm(p => ({ ...p, subject: e.target.value }))}>
                  <option value="">Select a subject</option>
                  <option>College Speaking Engagement</option>
                  <option>Corporate / Conference Booking</option>
                  <option>Media / Press Inquiry</option>
                  <option>Book Order Support</option>
                  <option>General Message</option>
                  <option>Collaboration</option>
                </select>
              </div>
              <div>
                <label className="form-label">Message *</label>
                <textarea className="input-glass" rows={5} placeholder="Tell us about your event, institution, or query..." style={{ resize: "vertical" }} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} />
              </div>
              <button className="btn-gold" onClick={handleSubmit} disabled={loading} style={{ width: "100%", justifyContent: "center", padding: 15, fontSize: 15, opacity: loading ? 0.7 : 1 }}>
                {loading ? "Sending..." : "Send Message →"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;