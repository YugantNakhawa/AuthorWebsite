// export default function Home() {
//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold">Welcome to Author Platform</h1>
//       <p className="mt-4">Explore books, videos and more.</p>
//     </div>
//   );
// }

// const TESTIMONIALS = [
//   { name: "Priya Sharma", role: "IIM Ahmedabad, MBA '23", text: "Listening to this talk changed how I think about leadership. I've recommended it to every colleague.", rating: 5 },
//   { name: "Arjun Mehta", role: "Founder, TechFlow", text: "The short video on decision-making under pressure paid for itself within a week. Worth every rupee.", rating: 5 },
//   { name: "Sneha Kapoor", role: "Senior Manager, Infosys", text: "'Lead Without Fear' is the most dog-eared book on my shelf. I revisit it quarterly.", rating: 5 },
// ];

// // ============================================================
// // HOME PAGE
// // ============================================================
// const HomePage = ({ setPage }) => {
//   return (
//     <div className="page">
//       {/* Hero */}
//       <section style={{
//         minHeight: "100vh", display: "flex", alignItems: "center",
//         position: "relative", overflow: "hidden",
//         padding: "120px 24px 80px",
//       }}>
//         {/* Decorative rings */}
//         <div style={{
//           position: "absolute", right: -100, top: "50%", transform: "translateY(-50%)",
//           width: 600, height: 600, borderRadius: "50%",
//           border: "1px solid rgba(201,168,76,0.08)", pointerEvents: "none",
//         }} />
//         <div style={{
//           position: "absolute", right: -50, top: "50%", transform: "translateY(-50%)",
//           width: 400, height: 400, borderRadius: "50%",
//           border: "1px solid rgba(201,168,76,0.06)", pointerEvents: "none",
//         }} />

//         <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
//           <div>
//             <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
//               <span className="badge">✦ Bestselling Author</span>
//               <span className="badge badge-green">🎤 National Speaker</span>
//             </div>
//             <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 24 }}>
//               Transform Your<br />
//               <span className="grad-text">Mind. Lead Your</span><br />
//               Life with Purpose.
//             </h1>
//             <p style={{ fontSize: 18, color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 36, maxWidth: 480 }}>
//               Join 500,000+ people who've discovered the power of intentional living through books, speeches, and exclusive short-form content.
//             </p>
//             <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
//               <button className="btn-gold" onClick={() => setPage("books")} style={{ fontSize: 15, padding: "14px 28px" }}>
//                 📚 Explore Books
//               </button>
//               <button className="btn-ghost" onClick={() => setPage("speeches")} style={{ fontSize: 15, padding: "14px 28px" }}>
//                 🎤 Watch Speeches
//               </button>
//             </div>
//             {/* Stats */}
//             <div style={{ display: "flex", gap: 40, marginTop: 48 }}>
//               {[{ num: "14", label: "Books Published" }, { num: "500K+", label: "Lives Impacted" }, { num: "200+", label: "College Talks" }].map(s => (
//                 <div key={s.label}>
//                   <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 700, color: "var(--gold)", lineHeight: 1 }}>{s.num}</div>
//                   <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 4, letterSpacing: "0.04em" }}>{s.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Author portrait card */}
//           <div style={{ display: "flex", justifyContent: "center" }}>
//             <div style={{
//               width: 340, position: "relative",
//             }}>
//               <div className="glass" style={{
//                 borderRadius: 24, padding: 4, position: "relative",
//                 boxShadow: "0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,168,76,0.15)",
//               }}>
//                 <div style={{
//                   background: "linear-gradient(160deg, rgba(201,168,76,0.15) 0%, rgba(40,30,80,0.2) 50%, rgba(201,168,76,0.05) 100%)",
//                   borderRadius: 22, height: 380, display: "flex", alignItems: "center", justifyContent: "center",
//                   fontSize: 120, position: "relative", overflow: "hidden",
//                 }}>
//                   <span style={{ position: "relative", zIndex: 1 }}>👨‍💼</span>
//                   <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, transparent 40%, rgba(8,8,16,0.5) 100%)" }} />
//                 </div>
//                 {/* Floating info card */}
//                 <div style={{
//                   position: "absolute", bottom: -20, left: -20, right: -20,
//                   background: "rgba(15,15,26,0.92)", backdropFilter: "blur(16px)",
//                   border: "1px solid var(--glass-border)", borderRadius: 16,
//                   padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center",
//                 }}>
//                   <div>
//                     <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 16 }}>Vikram Anand</div>
//                     <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 2 }}>Motivational Speaker & Author</div>
//                   </div>
//                   <div style={{ textAlign: "right" }}>
//                     <div className="stars">★★★★★</div>
//                     <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2 }}>4.9/5 · 12K+ Reviews</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Quick nav cards */}
//       <section style={{ padding: "0 24px 80px" }}>
//         <div className="container">
//           <div className="grid-3" style={{ gap: 20 }}>
//             {[
//               { icon: "📚", title: "Books", desc: "14 bestselling titles. Delivered to your door.", page: "books", badge: "Direct Delivery" },
//               { icon: "🎓", title: "College Speeches", desc: "Watch full-length talks from IITs, IIMs & more.", page: "speeches", badge: "Free Access" },
//               { icon: "🔥", title: "Premium Videos", desc: "Exclusive 5-10 min masterclasses. ₹50 per view.", page: "videos", badge: "₹50 / View" },
//             ].map(c => (
//               <button key={c.title} onClick={() => setPage(c.page)} style={{
//                 background: "var(--glass)", backdropFilter: "blur(24px)", border: "1px solid var(--glass-border)",
//                 borderRadius: 20, padding: 28, cursor: "pointer", textAlign: "left",
//                 transition: "all 0.2s", display: "block", width: "100%",
//               }}
//                 onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
//                 onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--glass-border)"; e.currentTarget.style.transform = "none"; }}
//               >
//                 <span style={{ fontSize: 36, marginBottom: 16, display: "block" }}>{c.icon}</span>
//                 <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
//                   <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700 }}>{c.title}</span>
//                   <span className="badge" style={{ fontSize: 10 }}>{c.badge}</span>
//                 </div>
//                 <div style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.6 }}>{c.desc}</div>
//                 <div style={{ marginTop: 20, color: "var(--gold)", fontSize: 13, fontWeight: 600 }}>Explore →</div>
//               </button>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section style={{ padding: "60px 24px 100px" }}>
//         <div className="container">
//           <div style={{ textAlign: "center", marginBottom: 48 }}>
//             <span className="section-label">What People Say</span>
//             <h2 className="section-title" style={{ margin: "0 auto 12px" }}>Trusted by Thousands</h2>
//           </div>
//           <div className="grid-3" style={{ gap: 20 }}>
//             {TESTIMONIALS.map((t, i) => (
//               <div key={i} className="glass" style={{ borderRadius: 20, padding: 28 }}>
//                 <div className="stars" style={{ marginBottom: 16 }}>{"★".repeat(t.rating)}</div>
//                 <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 20, fontStyle: "italic" }}>"{t.text}"</p>
//                 <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
//                   <div style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--gold-dim)", border: "1px solid var(--gold)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, color: "var(--gold)" }}>
//                     {t.name[0]}
//                   </div>
//                   <div>
//                     <div style={{ fontWeight: 600, fontSize: 14 }}>{t.name}</div>
//                     <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{t.role}</div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HomePage;

const TESTIMONIALS = [
  { name: "Aditya Patil", role: "B.Tech, JSPM Rajarshi Shahu College of Engineering", text: "Raghvan sir's bindass nature and unique way of explaining Emotional Intelligence completely changed how I approach my studies and career.", rating: 5 },
  { name: "Sneha Iyer", role: "B.Pharm, Smt. Kashibai Navale College", text: "The talk titled 'You Are Awesome' was truly life-changing. I walked out feeling invincible. Worth every minute.", rating: 5 },
  { name: "Rohan Verma", role: "MBA Student, S.B. Patil Institute of Management", text: "Very knowledgeable! Great examples — real life scenarios. Raghvan sir was insightful and humorous. A must-attend session.", rating: 5 },
];

const HomePage = ({ setPage }) => {
  return (
    <div className="page">
      <style>{`
        .home-nav-card {
          background: var(--glass);
          backdrop-filter: blur(24px);
          border: 1px solid var(--glass-border);
          border-radius: 20px;
          padding: 28px;
          cursor: pointer;
          text-align: left;
          transition: border-color 0.2s, transform 0.2s;
          display: block;
          width: 100%;
          color: var(--text-primary);
        }
        .home-nav-card:hover {
          border-color: rgba(201,168,76,0.3);
          transform: translateY(-3px);
        }
        /* Hero two-col → single col */
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        @media (max-width: 860px) {
          .hero-grid { grid-template-columns: 1fr; gap: 48px; }
          .hero-portrait { display: none; }
        }
      `}</style>

      {/* Hero */}
      <section style={{
        minHeight: "100vh", display: "flex", alignItems: "center",
        position: "relative", overflow: "hidden",
        padding: "120px 24px 80px",
      }}>
        <div style={{ position: "absolute", right: -100, top: "50%", transform: "translateY(-50%)", width: 600, height: 600, borderRadius: "50%", border: "1px solid rgba(201,168,76,0.08)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", right: -50, top: "50%", transform: "translateY(-50%)", width: 400, height: 400, borderRadius: "50%", border: "1px solid rgba(201,168,76,0.06)", pointerEvents: "none" }} />

        <div className="container">
          <div className="hero-grid">
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
                <span className="badge">✦ Bestselling Author</span>
                <span className="badge badge-green">🌍 World Conference Speaker</span>
              </div>
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 24, color: "var(--text-primary)" }}>
                Ignite Your<br />
                <span className="grad-text">Mind. Master Your</span><br />
                Emotional Intelligence.
              </h1>
              <p style={{ fontSize: 18, color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 36, maxWidth: 480 }}>
                Join 1,00,000+ people across the globe who've been transformed by Raghvan Koli — world's first multi-field motivational speaker, author of <em style={{ color: "var(--gold-light)" }}>The Conqueror of Destiny</em>, and speaker at 194+ colleges.
              </p>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <button className="btn-gold" onClick={() => setPage("/books")} style={{ fontSize: 15, padding: "14px 28px" }}>📚 Get the Book</button>
                <button className="btn-ghost" onClick={() => setPage("/speeches")} style={{ fontSize: 15, padding: "14px 28px" }}>🎤 Watch Speeches</button>
              </div>
              <div style={{ display: "flex", gap: 40, marginTop: 48, flexWrap: "wrap" }}>
                {[
                  { num: "194+",    label: "Colleges Visited" },
                  { num: "1 Lakh+", label: "Lives Ignited" },
                  { num: "2015",    label: "Speaking Since" },
                ].map(s => (
                  <div key={s.label}>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 700, color: "var(--gold)", lineHeight: 1 }}>{s.num}</div>
                    <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 4, letterSpacing: "0.04em" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Portrait */}
            <div className="hero-portrait" style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ width: 340, position: "relative" }}>
                <div className="glass" style={{ borderRadius: 24, padding: 4, boxShadow: "0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,168,76,0.15)" }}>
                  <div style={{ borderRadius: 22, height: 380, overflow: "hidden", position: "relative", background: "linear-gradient(160deg, rgba(201,168,76,0.15), rgba(40,30,80,0.2))", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img
                      src="https://fourshlag.com/wp-content/uploads/2023/01/raghvan-koli.jpg"
                      alt="Raghvan Koli"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      onError={e => { e.currentTarget.style.display = "none"; }}
                    />
                    <span style={{ fontSize: 100, position: "absolute" }}>🎤</span>
                    <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, transparent 40%, rgba(8,8,16,0.5) 100%)" }} />
                  </div>
                  <div style={{
                    position: "absolute", bottom: -20, left: -20, right: -20,
                    background: "var(--bg-dark3)", backdropFilter: "blur(16px)",
                    border: "1px solid var(--glass-border)", borderRadius: 16,
                    padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center",
                  }}>
                    <div>
                      <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 16, color: "var(--text-primary)" }}>Raghvan Koli</div>
                      <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 2 }}>Author · Speaker</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div className="stars">★★★★★</div>
                      <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2 }}>World Conference 2022</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick nav cards */}
      <section style={{ padding: "0 24px 80px" }}>
        <div className="container">
          <div className="grid-3" style={{ gap: 20 }}>
            {[
              { icon: "📚", title: "Books", desc: "The Conqueror of Destiny series — bestselling novels delivered to your door.", page: "/books", badge: "Direct Delivery" },
              { icon: "🎓", title: "College Speeches", desc: "Full-length talks from engineering colleges, medical institutes, MBA programs & more.", page: "/speeches", badge: "Free Access" },
              { icon: "🔥", title: "Premium Videos", desc: "Exclusive masterclasses on Emotional Intelligence. ₹50 per view.", page: "/videos", badge: "₹50 / View" },
            ].map(c => (
              <button key={c.title} onClick={() => setPage(c.page)} className="home-nav-card">
                <span style={{ fontSize: 36, marginBottom: 16, display: "block" }}>{c.icon}</span>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10, flexWrap: "wrap" }}>
                  <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "var(--text-primary)" }}>{c.title}</span>
                  <span className="badge" style={{ fontSize: 10 }}>{c.badge}</span>
                </div>
                <div style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.6 }}>{c.desc}</div>
                <div style={{ marginTop: 20, color: "var(--gold)", fontSize: 13, fontWeight: 600 }}>Explore →</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: "60px 24px 100px" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-label">What Students Say</span>
            <h2 className="section-title" style={{ margin: "0 auto 12px" }}>Trusted Across 194+ Colleges</h2>
          </div>
          <div className="grid-3" style={{ gap: 20 }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="glass" style={{ borderRadius: 20, padding: 28 }}>
                <div className="stars" style={{ marginBottom: 16 }}>{"★".repeat(t.rating)}</div>
                <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 20, fontStyle: "italic" }}>"{t.text}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--gold-dim)", border: "1px solid var(--gold)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, color: "var(--gold)", flexShrink: 0 }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14, color: "var(--text-primary)" }}>{t.name}</div>
                    <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;