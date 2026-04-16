// export default function About() {
//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold">About Author</h1>
//       <p className="mt-4">Motivational speaker and bestselling author.</p>
//     </div>
//   );
// }

// ============================================================
// ABOUT PAGE
// ============================================================

// const AboutPage = ({ setPage }) => {
//   return (
//     <div className="page">
//       <div className="container" style={{ paddingTop: 40, paddingBottom: 80 }}>
//         {/* Hero */}
//         <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 80, alignItems: "start", marginBottom: 80 }}>
//           <div>
//             <div className="glass" style={{ borderRadius: 24, overflow: "hidden" }}>
//               <div style={{ height: 400, background: "linear-gradient(160deg, rgba(201,168,76,0.12), rgba(40,20,80,0.3))", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 120 }}>
//                 👨‍💼
//               </div>
//               <div style={{ padding: 24 }}>
//                 <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700 }}>Vikram Anand</div>
//                 <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 4, marginBottom: 16 }}>Author · Speaker · Coach</div>
//                 <div style={{ display: "flex", gap: 12 }}>
//                   {["LinkedIn", "YouTube", "Instagram"].map(s => (
//                     <button key={s} className="btn-ghost" style={{ padding: "8px 14px", fontSize: 12 }}>{s}</button>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Stats */}
//             <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 20 }}>
//               {[
//                 { num: "14", label: "Books" }, { num: "200+", label: "Speeches" },
//                 { num: "500K+", label: "Readers" }, { num: "4.9★", label: "Avg Rating" },
//               ].map(s => (
//                 <div key={s.label} className="glass" style={{ borderRadius: 16, padding: "20px", textAlign: "center" }}>
//                   <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: "var(--gold)" }}>{s.num}</div>
//                   <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 4 }}>{s.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div>
//             <span className="section-label">About the Author</span>
//             <h1 className="section-title">A Voice That Changes How You Think</h1>
//             <div style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: 24 }}>
//               Vikram Anand is one of India's most sought-after voices on leadership, resilience, and personal transformation. Over two decades, he has shaped the thinking of millions through 14 bestselling books, 200+ college and corporate talks, and a media presence that spans every major platform.
//             </div>
//             <div style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: 24 }}>
//               His work isn't motivational fluff — it's structured, research-backed, and brutally honest. Born in Patna, educated at IIT Delhi, and forged through the failure of two early startups, Vikram speaks from a place of genuine experience, not theory.
//             </div>
//             <div style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: 32 }}>
//               Today he dedicates his life to one mission: helping people — especially young Indians — build mental fortitude strong enough to outlast anything life throws at them.
//             </div>
//             <div style={{ display: "flex", gap: 16 }}>
//               <button className="btn-gold" onClick={() => setPage("books")}>📚 Explore Books</button>
//               <button className="btn-ghost" onClick={() => setPage("contact")}>✉ Book a Session</button>
//             </div>
//           </div>
//         </div>

//         {/* Timeline */}
//         <div>
//           <span className="section-label">Journey</span>
//           <h2 className="section-title" style={{ marginBottom: 40 }}>Milestones</h2>
//           <div style={{ position: "relative" }}>
//             <div style={{ position: "absolute", left: 24, top: 0, bottom: 0, width: 1, background: "var(--glass-border)" }} />
//             {[
//               { year: "2002", event: "Graduated IIT Delhi, Computer Science" },
//               { year: "2004", event: "Founded first tech startup (failed in 18 months)" },
//               { year: "2007", event: "Published debut book 'The Quiet Warrior'" },
//               { year: "2010", event: "First major TEDx talk — 1M views in 30 days" },
//               { year: "2015", event: "Launched 'Lead Without Fear' — became national bestseller" },
//               { year: "2020", event: "200th college speech — IIT Bombay convocation" },
//               { year: "2024", event: "Platform launch — bringing content directly to readers" },
//             ].map((m, i) => (
//               <div key={i} style={{ display: "flex", gap: 32, marginBottom: 28, paddingLeft: 0 }}>
//                 <div style={{ width: 48, height: 48, flexShrink: 0, borderRadius: "50%", background: "var(--dark-3)", border: "2px solid var(--gold)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 1 }}>
//                   <div style={{ fontSize: 10, fontWeight: 700, color: "var(--gold)", textAlign: "center", lineHeight: 1.2 }}>{m.year.slice(2)}<br />{m.year.slice(0, 2)}</div>
//                 </div>
//                 <div className="glass" style={{ flex: 1, borderRadius: 14, padding: "16px 20px" }}>
//                   <div style={{ fontWeight: 600, fontSize: 13, color: "var(--gold)", marginBottom: 4 }}>{m.year}</div>
//                   <div style={{ fontSize: 15, color: "var(--text-primary)" }}>{m.event}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Press logos */}
//         <div style={{ marginTop: 80, textAlign: "center" }}>
//           <div style={{ fontSize: 12, color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 28 }}>Featured In</div>
//           <div style={{ display: "flex", gap: 32, justifyContent: "center", flexWrap: "wrap" }}>
//             {["The Hindu", "Economic Times", "Forbes India", "NDTV", "Times of India"].map(p => (
//               <div key={p} style={{ fontSize: 14, fontWeight: 700, color: "var(--text-muted)", letterSpacing: "0.06em", padding: "10px 20px", border: "1px solid var(--glass-border)", borderRadius: 10 }}>{p}</div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutPage;

const AboutPage = ({ setPage }) => {
  return (
    <div className="page">
      <style>{`
        .about-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 80px;
          align-items: start;
          margin-bottom: 80px;
        }
        @media (max-width: 860px) {
          .about-hero-grid { grid-template-columns: 1fr; gap: 40px; }
        }
        .about-social-btn {
          background: none;
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-sm);
          padding: 8px 14px;
          font-size: 12px;
          color: var(--text-secondary);
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          transition: color 0.2s, border-color 0.2s;
          text-decoration: none;
          display: inline-block;
          line-height: 1.8;
        }
        .about-social-btn:hover { color: var(--gold); border-color: rgba(201,168,76,0.4); }
        .about-press-item {
          font-size: 13px;
          font-weight: 600;
          color: var(--text-muted);
          letter-spacing: 0.04em;
          padding: 10px 18px;
          border: 1px solid var(--glass-border);
          border-radius: 10px;
          transition: color 0.2s, border-color 0.2s;
        }
        .about-press-item:hover { color: var(--text-secondary); border-color: rgba(255,255,255,0.15); }
      `}</style>

      <div className="container" style={{ paddingTop: 40, paddingBottom: 80 }}>

        {/* Hero */}
        <div className="about-hero-grid">
          <div>
            <div className="glass" style={{ borderRadius: 24, overflow: "hidden" }}>
              <div style={{ height: 400, background: "linear-gradient(160deg, rgba(201,168,76,0.12), rgba(40,20,80,0.3))", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", position: "relative" }}>
                <img
                  src="https://fourshlag.com/wp-content/uploads/2023/01/raghvan-koli.jpg"
                  alt="Raghvan Koli"
                  style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }}
                  onError={e => { e.currentTarget.style.display = "none"; }}
                />
                <span style={{ fontSize: 100, position: "relative", zIndex: 1 }}>🎤</span>
              </div>
              <div style={{ padding: 24 }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "var(--text-primary)" }}>Raghvan Koli</div>
                <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 4, marginBottom: 16 }}>Author · Speaker</div>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <a href="https://www.linkedin.com/in/raghvan-koli-164287186/" target="_blank" rel="noreferrer" className="about-social-btn">LinkedIn</a>
                  <a href="https://www.instagram.com/raghvan_koli/" target="_blank" rel="noreferrer" className="about-social-btn">Instagram</a>
                  <a href="https://www.threads.com/@raghvan_koli" target="_blank" rel="noreferrer" className="about-social-btn">Threads</a>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 20 }}>
              {[
                { num: "194+",    label: "Colleges" },
                { num: "1 Lakh+",label: "Lives Ignited" },
                { num: "2015",   label: "Speaking Since" },
                { num: "5★",     label: "Avg Rating" },
              ].map(s => (
                <div key={s.label} className="glass" style={{ borderRadius: 16, padding: 20, textAlign: "center" }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: "var(--gold)" }}>{s.num}</div>
                  <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="section-label">About the Speaker</span>
            <h1 className="section-title">World's First Multi-Field Motivational Speaker</h1>
            <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: 24 }}>
              Raghvan Koli is the author of the bestselling novel series <em style={{ color: "var(--gold-light)" }}>The Conqueror of Destiny</em> and the world's first multi-field motivational speaker — delivering transformational speeches across Engineering, MBBS, Dental, Pharmacy, Architecture, Physiotherapy, MBA, and International Business Conferences since 2015.
            </p>
            <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: 24 }}>
              Through his live shows, he has ignited the minds of more than one lakh people across the globe. His area of expertise is <strong style={{ color: "var(--gold)" }}>Emotional Intelligence</strong> — a topic he brings to life through real-life stories, humour, and brutally honest insight that students and professionals remember for years.
            </p>
            <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: 32 }}>
              A Mechanical Engineer by training, Lyricist by passion, and Casting Director by craft — Raghvan wears many hats. He is actively associated with NGO Help Desk Education, Pune, and was a featured speaker at the <strong style={{ color: "var(--gold-light)" }}>1st World Conference on Consciousness 2022</strong>. He is also the Brand Ambassador of Fourshlag Overseas Services.
            </p>

            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
              {["Emotional Intelligence", "Engineering", "MBBS & Medical", "MBA", "Pharmacy", "Architecture", "Business Conferences"].map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <button className="btn-gold" onClick={() => setPage("/books")}>📚 Get the Book</button>
              <button className="btn-ghost" onClick={() => setPage("/contact")}>✉ Book a Session</button>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div>
          <span className="section-label">Journey</span>
          <h2 className="section-title" style={{ marginBottom: 40 }}>Milestones</h2>
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", left: 24, top: 0, bottom: 0, width: 1, background: "var(--glass-border)" }} />
            {[
              { year: "2015", event: "Began speaking at colleges across India — Engineering, MBBS, MBA and more" },
              { year: "2018", event: "Published debut novel 'The Conqueror of Destiny' — became a bestselling series" },
              { year: "2019", event: "Delivered 'You Are Awesome' talk at Smt. Kashibai Navale College of Pharmacy, Pune" },
              { year: "2021", event: "Published 'The Conqueror of Destiny — II', extending the bestselling series" },
              { year: "2022", event: "Featured Speaker at the 1st World Conference on Consciousness" },
              { year: "2023", event: "Appointed Brand Ambassador of Fourshlag Overseas Services" },
              { year: "2024", event: "Crossed 194 colleges & 1 lakh+ lives impacted — platform launch to reach the world" },
            ].map((m, i) => (
              <div key={i} style={{ display: "flex", gap: 32, marginBottom: 28 }}>
                <div style={{ width: 48, height: 48, flexShrink: 0, borderRadius: "50%", background: "var(--dark-3)", border: "2px solid var(--gold)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 1 }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: "var(--gold)", textAlign: "center", lineHeight: 1.2 }}>{m.year.slice(2)}<br />{m.year.slice(0, 2)}</div>
                </div>
                <div className="glass" style={{ flex: 1, borderRadius: 14, padding: "16px 20px" }}>
                  <div style={{ fontWeight: 600, fontSize: 13, color: "var(--gold)", marginBottom: 4 }}>{m.year}</div>
                  <div style={{ fontSize: 15, color: "var(--text-primary)" }}>{m.event}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Institutions */}
        <div style={{ marginTop: 80, textAlign: "center" }}>
          <div style={{ fontSize: 12, color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 28 }}>Spoken At</div>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            {["IIT Bombay","SPIT Mumbai","MGM Kalamboli","VESIT Mumbai","Grant Govt. Medical College", "Seth GSMC & KEM Hospitals", "JSPM Rajarshi Shahu College", "S.B. Patil Institute of Management", "Ajeenkya DY Patil Engg.", "VIT Pune", "NMIET"].map(p => (
              <div key={p} className="about-press-item">{p}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;