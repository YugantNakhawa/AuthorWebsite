// // ============================================================
// // PREMIUM VIDEOS PAGE
// // ============================================================

// import { useContext, useState } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { ToastContext } from "../context/ToastContext";

// const SHORT_VIDEOS = [
//   { id: 101, title: "Why You Keep Quitting (And How to Stop)", duration: "7m 42s", price: 50, category: "Mindset", thumbnail: "🔥", desc: "The psychological loop that kills every goal — and the exact pattern interrupt to break it forever.", rating: 4.9 },
//   { id: 102, title: "The 10-Minute Morning Reset", duration: "9m 15s", price: 50, category: "Productivity", thumbnail: "☀️", desc: "A science-backed morning routine that takes under 10 minutes and changes everything.", rating: 4.8 },
//   { id: 103, title: "Dealing with Toxic People at Work", duration: "8m 30s", price: 50, category: "Relationships", thumbnail: "🛡️", desc: "Specific, practical strategies to neutralize workplace toxicity without burning bridges.", rating: 4.7 },
//   { id: 104, title: "How to Make Decisions Under Pressure", duration: "6m 55s", price: 50, category: "Leadership", thumbnail: "⚖️", desc: "A 3-step framework used by top CEOs and military leaders in high-stakes situations.", rating: 4.9 },
//   { id: 105, title: "The Confidence Code: Rewired", duration: "9m 48s", price: 50, category: "Mindset", thumbnail: "💪", desc: "Not motivation. Not hype. The actual neurological shifts that build lasting confidence.", rating: 4.8 },
//   { id: 106, title: "Stop People Pleasing (Gently)", duration: "7m 12s", price: 50, category: "Relationships", thumbnail: "🌿", desc: "How to reclaim your boundaries without becoming cold — with exact scripts you can use.", rating: 4.6 },
//   { id: 107, title: "Become Indispensable in Any Room", duration: "8m 05s", price: 50, category: "Career", thumbnail: "👑", desc: "The uncommon skills that make people remember you — and seek you out again and again.", rating: 4.7 },
//   { id: 108, title: "Silence the Inner Critic", duration: "9m 00s", price: 50, category: "Mindset", thumbnail: "🧠", desc: "Evidence-based techniques to quiet the voice that doubts you and amplify the one that believes.", rating: 4.9 },
// ];

// const VideosPage = () => {
//   const { user, setShowLogin } = useContext(AuthContext);
//   const { show } = useContext(ToastContext);
//   const [payVideo, setPayVideo] = useState(null);
//   const [unlocked, setUnlocked] = useState([]);
//   const [category, setCategory] = useState("All");
//   const [search, setSearch] = useState("");

//   const categories = ["All", ...new Set(SHORT_VIDEOS.map(v => v.category))];
//   const filtered = SHORT_VIDEOS.filter(v =>
//     (category === "All" || v.category === category) &&
//     v.title.toLowerCase().includes(search.toLowerCase())
//   );

//   const handleWatch = (v) => {
//     if (!user) { setShowLogin(true); return; }
//     if (unlocked.includes(v.id)) { show("Playing: " + v.title); return; }
//     setPayVideo(v);
//   };

//   return (
//     <div className="page">
//       <div className="container" style={{ paddingTop: 40, paddingBottom: 80 }}>
//         {/* Header */}
//         <div style={{ marginBottom: 40 }}>
//           <span className="section-label">Exclusive Content</span>
//           <h1 className="section-title">Premium Short Videos</h1>
//           <p className="section-desc">5–10 minute deep-dives on specific life and career challenges. Pay once per view. ₹50 each.</p>
//         </div>

//         {/* How it works */}
//         <div className="glass" style={{ borderRadius: 20, padding: "24px 28px", marginBottom: 40, display: "flex", gap: 40, flexWrap: "wrap" }}>
//           {[
//             { icon: "👤", title: "Create account", desc: "Free to sign up" },
//             { icon: "🔍", title: "Pick your video", desc: "Browse by topic" },
//             { icon: "💳", title: "Pay ₹50", desc: "Secure via Razorpay" },
//             { icon: "▶", title: "Watch instantly", desc: "Streamed in HD" },
//           ].map((s, i) => (
//             <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14, flex: "1 1 160px" }}>
//               <div style={{ width: 40, height: 40, borderRadius: 10, background: "var(--gold-dim)", border: "1px solid rgba(201,168,76,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>{s.icon}</div>
//               <div>
//                 <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 2 }}>{s.title}</div>
//                 <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{s.desc}</div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Filters */}
//         <div style={{ display: "flex", gap: 16, marginBottom: 32, flexWrap: "wrap" }}>
//           <div style={{ position: "relative", flex: "1 1 200px" }}>
//             <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)" }}>🔍</span>
//             <input className="input-glass" placeholder="Search videos..." style={{ paddingLeft: 42 }} value={search} onChange={e => setSearch(e.target.value)} />
//           </div>
//           <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
//             {categories.map(c => (
//               <button key={c} onClick={() => setCategory(c)} style={{
//                 padding: "9px 16px", borderRadius: 8,
//                 border: `1px solid ${category === c ? "var(--gold)" : "var(--glass-border)"}`,
//                 background: category === c ? "var(--gold-dim)" : "var(--glass)",
//                 color: category === c ? "var(--gold)" : "var(--text-secondary)",
//                 cursor: "pointer", fontSize: 13, fontWeight: 500, fontFamily: "'DM Sans', sans-serif",
//               }}>{c}</button>
//             ))}
//           </div>
//         </div>

//         {/* Grid */}
//         <div className="grid-3" style={{ gap: 24 }}>
//           {filtered.map(v => {
//             const isUnlocked = unlocked.includes(v.id);
//             return (
//               <div key={v.id} className="glass video-card" style={{ borderRadius: 20, overflow: "hidden", border: "1px solid var(--glass-border)" }}>
//                 {/* Thumbnail */}
//                 <div style={{ height: 160, background: "linear-gradient(135deg, rgba(201,168,76,0.07), rgba(30,20,70,0.3))", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 72, position: "relative" }}>
//                   {v.thumbnail}
//                   {!isUnlocked && (
//                     <div style={{ position: "absolute", inset: 0, background: "rgba(8,8,16,0.4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
//                       <div style={{ fontSize: 20 }}>🔒</div>
//                     </div>
//                   )}
//                   {isUnlocked && (
//                     <div style={{ position: "absolute", top: 12, right: 12 }}>
//                       <span className="badge badge-green" style={{ fontSize: 10 }}>✓ Unlocked</span>
//                     </div>
//                   )}
//                 </div>

//                 <div style={{ padding: 20 }}>
//                   <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
//                     <span className="tag" style={{ fontSize: 11 }}>{v.category}</span>
//                     <span style={{ fontSize: 12, color: "var(--text-muted)" }}>🕐 {v.duration}</span>
//                   </div>
//                   <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, marginBottom: 8, lineHeight: 1.4 }}>{v.title}</h3>
//                   <p style={{ fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: 16 }}>{v.desc}</p>
//                   <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 16 }}>
//                     <span className="stars" style={{ fontSize: 11 }}>★★★★★</span>
//                     <span style={{ fontSize: 11, color: "var(--text-secondary)" }}>{v.rating}</span>
//                   </div>
//                   <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
//                     <div>
//                       {isUnlocked ? (
//                         <span className="badge badge-green" style={{ fontSize: 11 }}>Access granted</span>
//                       ) : (
//                         <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "var(--gold)" }}>₹{v.price}</span>
//                       )}
//                     </div>
//                     <button
//                       className={isUnlocked ? "btn-ghost" : "btn-gold"}
//                       style={{ padding: "9px 18px", fontSize: 13 }}
//                       onClick={() => handleWatch(v)}
//                     >
//                       {isUnlocked ? "▶ Watch" : "🔓 Unlock"}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {payVideo && (
//         <PayModal
//           video={payVideo}
//           onClose={() => setPayVideo(null)}
//           onSuccess={(id) => setUnlocked(p => [...p, id])}
//         />
//       )}
//     </div>
//   );
// };

// export default VideosPage;


import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { ToastContext } from "../context/ToastContext";
import PayModal from "../modals/PayModal";

const API = import.meta.env.VITE_API_URL;

const VideosPage = () => {
  const { user, setShowLogin } = useContext(AuthContext);
  const { show } = useContext(ToastContext);

  const [videos, setVideos] = useState([]);
  const [accessMap, setAccessMap] = useState({});
  const [payVideo, setPayVideo] = useState(null);
  const [selected, setSelected] = useState(null);

  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  // ============================================================
  // FETCH VIDEOS
  // ============================================================
  useEffect(() => {
    //console.log("FETCHING VIDEOS...");
    axios.get(`${API}/videos`).then(res => setVideos(res.data));
  }, []);

  // ============================================================
  // FETCH ACCESS
  // ============================================================
  useEffect(() => {
    const fetchAccess = async () => {
      if (!user) {
        setAccessMap({});
        return;
      }

      if (videos.length === 0) return;

      const map = {};

      await Promise.all(
        videos.map(async (v) => {
          try {
            const res = await axios.get(`${API}/videos/access`, {
              params: { videoId: v.id }
            });

            map[v.id] = res.data.expiresAt;
          } catch {
            map[v.id] = null;
          }
        })
      );

      setAccessMap(map);
    };

    fetchAccess();
  }, [user, videos]);

  // ============================================================
  // ACCESS CHECK
  // ============================================================
  const isUnlocked = (videoId) => {
    if (!user) return false;

    const expiry = accessMap[videoId];
    if (!expiry) return false;

    const iso = expiry.replace(" ", "T") + "Z";
    return new Date(iso) > new Date();
  };

  // ============================================================
  // FORMAT IST
  // ============================================================
  const formatIST = (utc) => {
    if (!utc) return "";

    const iso = utc.replace(" ", "T") + "Z";

    return new Date(iso).toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      day: "2-digit",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true
    }) + " IST";
  };

  const refreshAccessForVideo = async (videoId) => {
    if (!user) return;

    try {
      const res = await axios.get(`${API}/videos/access`, {
        params: { videoId }
      });

      setAccessMap(prev => ({
        ...prev,
        [videoId]: res.data.expiresAt
      }));
    } catch {
      setAccessMap(prev => ({
        ...prev,
        [videoId]: null
      }));
    }
  };

  // ============================================================
  // EMBED
  // ============================================================
  const getEmbedUrl = (url) => {
    const id =
      url.split("v=")[1]?.split("&")[0] ||
      url.split("/").pop();

    return `https://www.youtube.com/embed/${id}`;
  };

  // ============================================================
  // WATCH / UNLOCK
  // ============================================================
  const handleWatch = async (v) => {
    if (!user) {
      setShowLogin(true);
      return;
    }

    if (!isUnlocked(v.id)) {
      setPayVideo(v);
      return;
    }

    try {
      const res = await axios.get(`${API}/videos/stream`, {
        params: { videoId: v.id }
      });

      const youtubeUrl = res.data.youtubeUrl;

      setSelected({
        ...v,
        embedUrl: getEmbedUrl(youtubeUrl)
      });

    } catch (err) {
      console.error(err);
      show("Unable to load video", "error");
    }
  };

  // ============================================================
  // FILTER
  // ============================================================
  const categories = ["All", ...new Set(videos.map(v => v.category))];

  const filtered = videos.filter(v =>
    (category === "All" || v.category === category) &&
    v.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page">
      <div className="container" style={{ paddingTop: 40, paddingBottom: 80 }}>

        {/* HEADER */}
        <div style={{ marginBottom: 40 }}>
          <span className="section-label">Exclusive Content</span>
          <h1 className="section-title">Premium Short Videos</h1>
          <p className="section-desc">
            5–10 minute deep-dives on real problems. Pay once, watch instantly.
          </p>
        </div>

        {/* FILTERS */}
        <div style={{ display: "flex", gap: 16, marginBottom: 32, flexWrap: "wrap" }}>
          <div style={{ position: "relative", flex: "1 1 200px" }}>
            <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)" }}>🔍</span>
            <input
              className="input-glass"
              placeholder="Search videos..."
              style={{ paddingLeft: 42 }}
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>

          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                style={{
                  padding: "9px 16px",
                  borderRadius: 8,
                  border: `1px solid ${category === c ? "var(--gold)" : "var(--glass-border)"}`,
                  background: category === c ? "var(--gold-dim)" : "var(--glass)",
                  color: category === c ? "var(--gold)" : "var(--text-secondary)",
                  cursor: "pointer",
                  fontSize: 13
                }}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* GRID */}
        {videos.length === 0 ? (
          <div style={{ textAlign: "center" }}>Loading videos...</div>
        ) : (
          <div className="grid-3" style={{ gap: 24 }}>
            {filtered.map(v => {
              const unlocked = isUnlocked(v.id);

              return (
                <div key={v.id} className="glass video-card" style={{ borderRadius: 20, overflow: "hidden" }}>

                  {/* THUMBNAIL */}
                  <div style={{
                    height: 160,
                    background: "linear-gradient(135deg, rgba(201,168,76,0.07), rgba(30,20,70,0.3))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 60,
                    position: "relative"
                  }}>
                    🎬

                    {!unlocked && (
                      <div style={{
                        position: "absolute",
                        inset: 0,
                        background: "rgba(8,8,16,0.5)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}>
                        🔒
                      </div>
                    )}

                    {unlocked && (
                      <div style={{ position: "absolute", top: 12, right: 12 }}>
                        <span className="badge badge-green">✓</span>
                      </div>
                    )}
                  </div>

                  {/* CONTENT */}
                  <div style={{ padding: 20 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                      <span className="tag">{v.category}</span>
                      <span style={{ fontSize: 12, color: "var(--text-muted)" }}>
                        🕐 {v.duration || "5-10m"}
                      </span>
                    </div>

                    <h3 style={{ fontSize: 16, marginBottom: 8 }}>{v.title}</h3>

                    <p style={{ fontSize: 12, color: "var(--text-secondary)", marginBottom: 12 }}>
                      {v.description || "Premium content to level up your thinking."}
                    </p>

                    <div style={{ fontSize: 11, marginBottom: 12 }}>
                      ⭐ {v.rating || "4.8"}
                    </div>

                    {unlocked && (
                      <div style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 10 }}>
                        Expires: {formatIST(accessMap[v.id])}
                      </div>
                    )}

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      {unlocked ? (
                        <span className="badge badge-green">Access granted</span>
                      ) : (
                        <span style={{ fontSize: 18, color: "var(--gold)" }}>₹{v.price}</span>
                      )}

                      <button
                        className={unlocked ? "btn-ghost" : "btn-gold"}
                        onClick={() => handleWatch(v)}
                      >
                        {unlocked ? "▶ Watch" : "🔓 Unlock"}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* PAY MODAL */}
      {payVideo && (
        <PayModal
          video={payVideo}
          onClose={() => setPayVideo(null)}
          onSuccess={async (id) => {
            try {
              const res = await axios.post(`${API}/videos/purchase`, {
                videoId: id
              });

              // update access
              setAccessMap(prev => ({
                ...prev,
                [id]: res.data.expiresAt
              }));

              show("Unlocked!", "success");

              console.log("FETCHING STREAM...");
              // 🔥 fetch stream URL AFTER purchase
              const streamRes = await axios.get(`${API}/videos/stream`, {
                params: { userId: user.id, videoId: id }
              });

              const youtubeUrl = streamRes.data.youtubeUrl;

              const video = videos.find(v => v.id === id);

              setSelected({
                ...video,
                embedUrl: getEmbedUrl(youtubeUrl)
              });

            } catch (err) {
              console.error(err);
              show("Purchase failed", "error");
            }
          }}
        />
      )}

      {/* VIDEO MODAL */}
      {selected && (
        <div className="modal-backdrop" onClick={async () => {
          if (selected) {
            await refreshAccessForVideo(selected.id);
          }
          setSelected(null);
        }}>
          <div style={{ maxWidth: 720 }}>
            <iframe width="100%" height="360" src={selected.embedUrl} allowFullScreen />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideosPage;