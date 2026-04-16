// // ============================================================
// // SPEECHES PAGE
// // ============================================================

// import { useState } from "react";

// const LONG_VIDEOS = [
//   { id: 1, title: "IIT Bombay Convocation Address 2024", institution: "IIT Bombay", duration: "1h 24m", date: "March 2024", views: "2.4M", thumbnail: "🎓", tags: ["Leadership", "Career"], desc: "Delivered to 3,000+ graduating engineers on building careers with purpose beyond paychecks." },
//   { id: 2, title: "TEDx Pune: The Courage Equation", institution: "TEDx Pune", duration: "18m", date: "January 2024", views: "4.8M", thumbnail: "🎤", tags: ["Courage", "TEDx"], desc: "One of the most-watched TEDx talks of 2024 — on why courage is a skill, not a trait." },
//   { id: 3, title: "XLRI Leadership Summit", institution: "XLRI Jamshedpur", duration: "52m", date: "February 2024", views: "890K", thumbnail: "🏛️", tags: ["Leadership", "MBA"], desc: "Deep-dive session with future business leaders on values-driven decision making." },
//   { id: 4, title: "NIT Trichy: Engineers Who Lead", institution: "NIT Trichy", duration: "1h 8m", date: "December 2023", views: "1.1M", thumbnail: "⚡", tags: ["Engineering", "Leadership"], desc: "An honest conversation about why technical skills alone will never be enough." },
//   { id: 5, title: "ISB Hyderabad: Startup Mindset", institution: "ISB Hyderabad", duration: "44m", date: "November 2023", views: "750K", thumbnail: "💡", tags: ["Startups", "MBA"], desc: "The counterintuitive principles behind building companies that last a decade." },
//   { id: 6, title: "BITS Pilani: Redefining Success", institution: "BITS Pilani", duration: "1h 15m", date: "October 2023", views: "1.6M", thumbnail: "🌟", tags: ["Success", "Mindset"], desc: "What does real success look like? An uncomfortable but necessary conversation." },
// ];

// const SpeechesPage = () => {
//   const [search, setSearch] = useState("");
//   const [tag, setTag] = useState("All");
//   const [selected, setSelected] = useState(null);

//   const tags = ["All", "Leadership", "Mindset", "TEDx", "Career", "MBA", "Success"];
//   const filtered = LONG_VIDEOS.filter(v =>
//     (tag === "All" || v.tags.includes(tag)) &&
//     v.title.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="page">
//       <div className="container" style={{ paddingTop: 40, paddingBottom: 80 }}>
//         <div style={{ marginBottom: 40 }}>
//           <span className="section-label">College & Conference Talks</span>
//           <h1 className="section-title">Full-Length Speeches</h1>
//           <p className="section-desc">Complete recordings from IITs, IIMs, NITs, and global conferences. All free to watch.</p>
//         </div>

//         {/* Filters */}
//         <div style={{ display: "flex", gap: 16, marginBottom: 32, flexWrap: "wrap" }}>
//           <div style={{ position: "relative", flex: "1 1 240px" }}>
//             <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)" }}>🔍</span>
//             <input className="input-glass" placeholder="Search speeches..." style={{ paddingLeft: 42 }} value={search} onChange={e => setSearch(e.target.value)} />
//           </div>
//           <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
//             {tags.map(t => (
//               <button key={t} onClick={() => setTag(t)} style={{
//                 padding: "9px 16px", borderRadius: 8, border: `1px solid ${tag === t ? "var(--gold)" : "var(--glass-border)"}`,
//                 background: tag === t ? "var(--gold-dim)" : "var(--glass)",
//                 color: tag === t ? "var(--gold)" : "var(--text-secondary)",
//                 cursor: "pointer", fontSize: 13, fontWeight: 500, fontFamily: "'DM Sans', sans-serif",
//                 backdropFilter: "blur(16px)",
//               }}>{t}</button>
//             ))}
//           </div>
//         </div>

//         {/* Featured */}
//         {filtered.length > 0 && (
//           <div style={{ marginBottom: 32 }}>
//             <button onClick={() => setSelected(filtered[0])} style={{
//               width: "100%", background: "var(--glass)", backdropFilter: "blur(24px)",
//               border: "1px solid var(--glass-border)", borderRadius: 24, padding: 0,
//               cursor: "pointer", textAlign: "left", overflow: "hidden",
//             }}>
//               <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
//                 <div style={{
//                   background: "linear-gradient(135deg, rgba(201,168,76,0.1) 0%, rgba(50,30,100,0.3) 100%)",
//                   display: "flex", alignItems: "center", justifyContent: "center",
//                   fontSize: 100, minHeight: 260, position: "relative",
//                 }}>
//                   {filtered[0].thumbnail}
//                   <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
//                     <div style={{ width: 72, height: 72, background: "rgba(255,255,255,0.1)", borderRadius: "50%", border: "2px solid rgba(255,255,255,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28 }}>▶</div>
//                   </div>
//                 </div>
//                 <div style={{ padding: 40, display: "flex", flexDirection: "column", justifyContent: "center" }}>
//                   <span className="badge" style={{ marginBottom: 16, alignSelf: "flex-start" }}>Featured Talk</span>
//                   <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, marginBottom: 12, lineHeight: 1.3 }}>{filtered[0].title}</h2>
//                   <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 20 }}>{filtered[0].desc}</p>
//                   <div style={{ display: "flex", gap: 20, fontSize: 13, color: "var(--text-muted)" }}>
//                     <span>🕐 {filtered[0].duration}</span>
//                     <span>👁 {filtered[0].views} views</span>
//                     <span>📅 {filtered[0].date}</span>
//                   </div>
//                 </div>
//               </div>
//             </button>
//           </div>
//         )}

//         {/* Grid */}
//         <div className="grid-3" style={{ gap: 20 }}>
//           {filtered.slice(1).map(v => (
//             <button key={v.id} onClick={() => setSelected(v)} className="glass video-card" style={{ borderRadius: 20, overflow: "hidden", cursor: "pointer", textAlign: "left", border: "1px solid var(--glass-border)" }}>
//               <div style={{ height: 160, background: "linear-gradient(135deg, rgba(201,168,76,0.08), rgba(30,20,60,0.3))", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 64, position: "relative" }}>
//                 {v.thumbnail}
//                 <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
//                   <div style={{ width: 48, height: 48, background: "rgba(255,255,255,0.08)", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>▶</div>
//                 </div>
//               </div>
//               <div style={{ padding: 20 }}>
//                 <div style={{ display: "flex", gap: 6, marginBottom: 10 }}>
//                   {v.tags.map(t => <span key={t} className="tag" style={{ fontSize: 10 }}>{t}</span>)}
//                 </div>
//                 <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, marginBottom: 8, lineHeight: 1.4 }}>{v.title}</h3>
//                 <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{v.institution} · {v.duration} · {v.views} views</div>
//               </div>
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Video Modal */}
//       {selected && (
//         <div className="modal-backdrop" onClick={() => setSelected(null)}>
//           <div style={{ width: "100%", maxWidth: 720, background: "var(--dark-3)", border: "1px solid var(--glass-border)", borderRadius: 24, overflow: "hidden" }} onClick={e => e.stopPropagation()}>
//             {/* Video player mock */}
//             <div style={{ background: "#000", height: 360, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", fontSize: 80 }}>
//               {selected.thumbnail}
//               <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
//                 <div style={{ width: 80, height: 80, background: "rgba(201,168,76,0.9)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, cursor: "pointer" }}>▶</div>
//               </div>
//               <button onClick={() => setSelected(null)} style={{ position: "absolute", top: 16, right: 16, background: "rgba(0,0,0,0.7)", border: "none", color: "white", cursor: "pointer", fontSize: 18, width: 36, height: 36, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>✕</button>
//             </div>
//             <div style={{ padding: "24px 28px" }}>
//               <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, marginBottom: 8 }}>{selected.title}</h2>
//               <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: 16 }}>{selected.desc}</p>
//               <div style={{ display: "flex", gap: 20, fontSize: 13, color: "var(--text-muted)" }}>
//                 <span>🏛 {selected.institution}</span>
//                 <span>🕐 {selected.duration}</span>
//                 <span>👁 {selected.views} views</span>
//                 <span>📅 {selected.date}</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SpeechesPage;

import { useState, useEffect } from "react";
import axios from "axios";

const API = import.meta.env.VITE_API_URL;

const SpeechesPage = () => {
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState("");
  const [tag, setTag] = useState("All");
  const [selected, setSelected] = useState(null);

  // ============================================================
  // FETCH API
  // ============================================================
  useEffect(() => {
    axios.get(`${API}/speeches`)
      .then(res => {
        const formatted = res.data.map(v => ({
          ...v,
          tags: v.tags ? v.tags.split(",") : [],
          embedUrl: getEmbedUrl(v.youtubeUrl)
        }));
        setVideos(formatted);
      });
  }, []);

  // ============================================================
  // YOUTUBE EMBED CONVERTER
  // ============================================================
  const getEmbedUrl = (url) => {
    if (!url) return "";
    const videoId = url.split("v=")[1]?.split("&")[0] || url.split("/").pop();
    return `https://www.youtube.com/embed/${videoId}`;
  };

  // ============================================================
  // FILTER
  // ============================================================
  const allTags = ["All", ...new Set(videos.flatMap(v => v.tags))];

  const filtered = videos.filter(v =>
    (tag === "All" || v.tags.includes(tag)) &&
    v.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page">
      <div className="container" style={{ paddingTop: 40, paddingBottom: 80 }}>

        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <span className="section-label">College & Conference Talks</span>
          <h1 className="section-title">Full-Length Speeches</h1>
        </div>

        {/* Filters */}
        <div style={{ display: "flex", gap: 16, marginBottom: 32, flexWrap: "wrap" }}>
          <input
            className="input-glass"
            placeholder="Search speeches..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />

          {allTags.map(t => (
            <button
              key={t}
              onClick={() => setTag(t)}
              style={{
                padding: "9px 16px",
                borderRadius: 8,
                border: `1px solid ${tag === t ? "var(--gold)" : "var(--glass-border)"}`,
                background: tag === t ? "var(--gold-dim)" : "var(--glass)",
                color: tag === t ? "var(--gold)" : "var(--text-secondary)"
              }}
            >
              {t}
            </button>
          ))}
        </div>

        {filtered.length > 0 && (
  <div style={{ marginBottom: 32 }}>
    <button
      onClick={() => setSelected(filtered[0])}
      style={{
        width: "100%",
        background: "var(--glass)",
        backdropFilter: "blur(24px)",
        border: "1px solid var(--glass-border)",
        borderRadius: 24,
        padding: 0,
        cursor: "pointer",
        textAlign: "left",
        overflow: "hidden",
      }}
    >
      {/* <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}> */}
      <div className="speeches-featured-grid">
        
        {/* VIDEO */}
        <div style={{ position: "relative", minHeight: 260 }}>
          <iframe
            src={filtered[0].embedUrl}
            title={filtered[0].title}
            style={{ width: "100%", height: "100%", border: "none" }}
            allowFullScreen
          />

          {/* Play Overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
            }}
          >
            <div
              style={{
                width: 72,
                height: 72,
                background: "rgba(255,255,255,0.1)",
                borderRadius: "50%",
                border: "2px solid rgba(255,255,255,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 28,
              }}
            >
              ▶
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div
          style={{
            padding: 40,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* ✅ FEATURED BADGE RESTORED */}
          <span
            className="badge"
            style={{ marginBottom: 16, alignSelf: "flex-start" }}
          >
            Featured Talk
          </span>

          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 26,
              fontWeight: 700,
              marginBottom: 12,
              lineHeight: 1.3,
            }}
          >
            {filtered[0].title}
          </h2>

          <p
            style={{
              fontSize: 14,
              color: "var(--text-secondary)",
              lineHeight: 1.7,
              marginBottom: 20,
            }}
          >
            {filtered[0].description}
          </p>

          <div
            style={{
              display: "flex",
              gap: 20,
              fontSize: 13,
              color: "var(--text-muted)",
            }}
          >
            <span>🕐 {filtered[0].duration}</span>
            <span>👁 {filtered[0].views}</span>
            <span>📅 {filtered[0].date}</span>
          </div>
        </div>
      </div>
    </button>
  </div>
)}

        {/* Grid */}
        <div className="grid-3">
          {filtered.slice(1).map(v => (
            <div key={v.id} className="glass" onClick={() => setSelected(v)}>
              <iframe
                width="100%"
                height="160"
                src={v.embedUrl}
                title={v.title}
                allowFullScreen
              />
              <div style={{ padding: 16 }}>
                <h3>{v.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selected && (
        <div className="modal-backdrop" onClick={() => setSelected(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <iframe
              width="100%"
              height="300"
              src={selected.embedUrl}
              title={selected.title}
              allowFullScreen
            />
            <div style={{ padding: 20 }}>
              <h2>{selected.title}</h2>
              <p>{selected.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpeechesPage;