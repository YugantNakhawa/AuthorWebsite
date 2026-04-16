// import { useEffect, useState, useContext } from "react";
// import axios from "axios";
// import { CartContext } from "../context/CartContext";

// export default function Books() {
//   const [books, setBooks] = useState([]);
//   const { addToCart } = useContext(CartContext);

//   useEffect(() => {
//     axios
//       .get("https://localhost:7032/api/books")
//       .then(res => setBooks(res.data))
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <div className="p-6 grid grid-cols-3 gap-4">
//       {books.map(book => (
//         <div key={book.id} className="border p-4 rounded shadow">
//           <h2 className="font-bold">{book.title}</h2>
//           <p className="text-gray-600">₹{book.price}</p>

//           <button
//             onClick={() => addToCart(book)}
//             className="mt-2 bg-black text-white px-3 py-1 rounded"
//           >
//             Add to Cart
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }

// import { useContext, useState } from "react";
// import { ToastContext } from "../context/ToastContext";
// import { CartContext } from "../context/CartContext";

// const BOOKS = [
//   { id: 1, title: "The Undefeated Mind", subtitle: "Building resilience in chaos", price: 349, originalPrice: 499, genre: "Self-Help", pages: 312, rating: 4.8, reviews: 2140, cover: "📘", bestseller: true, stock: 23, desc: "A transformative guide to building unshakeable mental fortitude in the face of life's greatest challenges." },
//   { id: 2, title: "Rise Before Dawn", subtitle: "Morning rituals of exceptional people", price: 299, originalPrice: 399, genre: "Productivity", pages: 268, rating: 4.6, reviews: 1876, cover: "🌅", bestseller: false, stock: 45, desc: "Discover how the world's most successful leaders structure their mornings to dominate their days." },
//   { id: 3, title: "Lead Without Fear", subtitle: "Courage-driven leadership", price: 399, originalPrice: 549, genre: "Leadership", pages: 384, rating: 4.9, reviews: 3200, cover: "🦁", bestseller: true, stock: 12, desc: "A bold exploration of what it truly means to lead — and why fear is the only real obstacle to greatness." },
//   { id: 4, title: "The Silence Speaks", subtitle: "Mindfulness for modern warriors", price: 279, originalPrice: 379, genre: "Mindfulness", pages: 224, rating: 4.5, reviews: 987, cover: "🧘", bestseller: false, stock: 60, desc: "Cut through the noise of modern life with ancient wisdom adapted for the high-performance professional." },
//   { id: 5, title: "Zero to Vision", subtitle: "Entrepreneurship from nothing", price: 449, originalPrice: 599, genre: "Business", pages: 420, rating: 4.7, reviews: 1543, cover: "🚀", bestseller: true, stock: 8, desc: "The real playbook for building something meaningful from scratch, without shortcuts or excuses." },
//   { id: 6, title: "Conversations With Greatness", subtitle: "Lessons from 50 extraordinary minds", price: 329, originalPrice: 449, genre: "Interviews", pages: 356, rating: 4.6, reviews: 1102, cover: "💬", bestseller: false, stock: 34, desc: "50 intimate conversations revealing the mindset secrets that separate the extraordinary from the ordinary." },
// ];

// // ============================================================
// // BOOKS PAGE
// // ============================================================
// const BooksPage = () => {
//   const { addToCart } = useContext(CartContext);
//   const { show } = useContext(ToastContext);
//   const [search, setSearch] = useState("");
//   const [genre, setGenre] = useState("All");
//   const [sort, setSort] = useState("popular");
//   const [selected, setSelected] = useState(null);

//   const genres = ["All", ...new Set(BOOKS.map(b => b.genre))];
//   const filtered = BOOKS
//     .filter(b => (genre === "All" || b.genre === genre) && b.title.toLowerCase().includes(search.toLowerCase()))
//     .sort((a, b) => sort === "price-asc" ? a.price - b.price : sort === "price-desc" ? b.price - a.price : b.reviews - a.reviews);

//   const handleAdd = (book) => {
//     addToCart(book);
//     show(`"${book.title}" added to cart`, "success");
//   };

//   return (
//     <div className="page">
//       <div className="container" style={{ paddingTop: 40, paddingBottom: 80 }}>
//         {/* Header */}
//         <div style={{ marginBottom: 40 }}>
//           <span className="section-label">All Titles</span>
//           <h1 className="section-title">The Book Collection</h1>
//           <p className="section-desc">Every book shipped directly by us — no marketplace, no middlemen. Just great writing and reliable delivery.</p>
//         </div>

//         {/* Filters */}
//         <div style={{ display: "flex", gap: 16, marginBottom: 32, flexWrap: "wrap", alignItems: "center" }}>
//           <div style={{ position: "relative", flex: "1 1 240px" }}>
//             <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", fontSize: 16, pointerEvents: "none" }}>🔍</span>
//             <input className="input-glass" placeholder="Search books..." style={{ paddingLeft: 42 }} value={search} onChange={e => setSearch(e.target.value)} />
//           </div>
//           <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
//             {genres.map(g => (
//               <button key={g} onClick={() => setGenre(g)} style={{
//                 padding: "9px 16px", borderRadius: 8, border: `1px solid ${genre === g ? "var(--gold)" : "var(--glass-border)"}`,
//                 background: genre === g ? "var(--gold-dim)" : "var(--glass)",
//                 color: genre === g ? "var(--gold)" : "var(--text-secondary)",
//                 cursor: "pointer", fontSize: 13, fontWeight: 500, fontFamily: "'DM Sans', sans-serif",
//                 backdropFilter: "blur(16px)", transition: "all 0.15s",
//               }}>{g}</button>
//             ))}
//           </div>
//           <select className="input-glass" style={{ width: "auto", minWidth: 160 }} value={sort} onChange={e => setSort(e.target.value)}>
//             <option value="popular">Most Popular</option>
//             <option value="price-asc">Price: Low to High</option>
//             <option value="price-desc">Price: High to Low</option>
//           </select>
//         </div>

//         {/* Grid */}
//         <div className="grid-3" style={{ gap: 24 }}>
//           {filtered.map(book => (
//             <div key={book.id} className="glass video-card" style={{ borderRadius: 20, overflow: "hidden", cursor: "pointer" }} onClick={() => setSelected(book)}>
//               {/* Cover */}
//               <div style={{
//                 height: 180, background: "linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(30,20,60,0.3) 100%)",
//                 display: "flex", alignItems: "center", justifyContent: "center",
//                 fontSize: 72, position: "relative",
//               }}>
//                 {book.thumbnail || book.cover}
//                 {book.bestseller && <span className="floating-badge" style={{ background: "rgba(201,168,76,0.9)", color: "#080810" }}>⭐ Bestseller</span>}
//                 {book.stock < 15 && <span className="floating-badge" style={{ top: "auto", bottom: 12, right: 12, left: "auto", background: "rgba(224,82,82,0.85)" }}>Only {book.stock} left</span>}
//               </div>
//               <div style={{ padding: 24 }}>
//                 <span className="tag" style={{ marginBottom: 10 }}>{book.genre}</span>
//                 <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, marginTop: 10, marginBottom: 4, lineHeight: 1.3 }}>{book.title}</h3>
//                 <p style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 14 }}>{book.subtitle}</p>
//                 <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
//                   <span className="stars" style={{ fontSize: 12 }}>{"★".repeat(Math.floor(book.rating))}</span>
//                   <span style={{ fontSize: 12, color: "var(--text-secondary)" }}>{book.rating} ({book.reviews.toLocaleString()})</span>
//                 </div>
//                 <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
//                   <div>
//                     <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "var(--gold)" }}>₹{book.price}</span>
//                     <span style={{ fontSize: 12, color: "var(--text-muted)", textDecoration: "line-through", marginLeft: 8 }}>₹{book.originalPrice}</span>
//                   </div>
//                   <button className="btn-gold" style={{ padding: "9px 18px", fontSize: 13 }} onClick={e => { e.stopPropagation(); handleAdd(book); }}>Add to Cart</button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {filtered.length === 0 && (
//           <div style={{ textAlign: "center", padding: "80px 0", color: "var(--text-muted)" }}>
//             <div style={{ fontSize: 48, marginBottom: 16 }}>📭</div>
//             <div style={{ fontSize: 16 }}>No books found matching your search.</div>
//           </div>
//         )}
//       </div>

//       {/* Book Detail Modal */}
//       {selected && (
//         <div className="modal-backdrop" onClick={() => setSelected(null)}>
//           <div style={{ width: "100%", maxWidth: 640, background: "var(--dark-3)", border: "1px solid var(--glass-border)", borderRadius: 24, overflow: "hidden" }} onClick={e => e.stopPropagation()}>
//             <div style={{ display: "grid", gridTemplateColumns: "200px 1fr" }}>
//               <div style={{ background: "linear-gradient(135deg, rgba(201,168,76,0.1) 0%, rgba(30,20,60,0.3) 100%)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 72, minHeight: 200 }}>
//                 {selected.cover}
//               </div>
//               <div style={{ padding: "28px 28px 20px" }}>
//                 <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
//                   <span className="tag">{selected.genre}</span>
//                   <button onClick={() => setSelected(null)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)", fontSize: 18 }}>✕</button>
//                 </div>
//                 <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, marginBottom: 6, lineHeight: 1.3 }}>{selected.title}</h2>
//                 <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 12 }}>{selected.subtitle}</p>
//                 <div className="stars" style={{ fontSize: 13, marginBottom: 8 }}>{"★".repeat(Math.floor(selected.rating))} <span style={{ color: "var(--text-muted)", fontFamily: "'DM Sans', sans-serif" }}>{selected.rating} · {selected.reviews.toLocaleString()} reviews</span></div>
//                 <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: 16 }}>{selected.desc}</p>
//                 <div style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 20 }}>📖 {selected.pages} pages · ✅ {selected.stock} in stock</div>
//                 <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
//                   <div>
//                     <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: "var(--gold)" }}>₹{selected.price}</span>
//                     <span style={{ fontSize: 12, color: "var(--text-muted)", textDecoration: "line-through", marginLeft: 8 }}>₹{selected.originalPrice}</span>
//                   </div>
//                   <button className="btn-gold" onClick={() => { handleAdd(selected); setSelected(null); }}>Add to Cart</button>
//                 </div>
//               </div>
//             </div>
//             <div style={{ padding: "20px 28px", borderTop: "1px solid var(--glass-border)", display: "flex", gap: 16, fontSize: 12, color: "var(--text-muted)" }}>
//               <span>🚚 Free delivery on orders above ₹499</span>
//               <span>📦 Ships in 2-4 business days</span>
//               <span>↩ 7-day returns</span>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BooksPage;


import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { ToastContext } from "../context/ToastContext";
import { CartContext } from "../context/CartContext";

const BooksPage = () => {
  const { addToCart } = useContext(CartContext);
  const { show } = useContext(ToastContext);

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");
  const [sort, setSort] = useState("popular");
  const [selected, setSelected] = useState(null);

  const API = import.meta.env.VITE_API_URL;

  // ============================================================
  // FETCH API
  // ============================================================
  useEffect(() => {
    axios.get(`${API}/books`)
      .then(res => {
        const enriched = res.data.map(book => ({
          ...book,
          subtitle: book.subtitle || "No subtitle available",
          genre: book.genre || "General",
          rating: book.rating || 4.5,
          reviews: book.reviews || Math.floor(Math.random() * 2000),
          cover: book.cover || "",
          bestseller: book.bestseller || false,
          stock: book.stock ?? 20,
          desc: book.description || "No description available",
          pages: book.pages || 250,
          originalPrice: book.originalPrice || book.price + 100,
        }));

        setBooks(enriched);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // ============================================================
  // FILTER + SORT
  // ============================================================
  const genres = ["All", ...new Set(books.map(b => b.genre))];

  const filtered = books
    .filter(b =>
      (genre === "All" || b.genre === genre) &&
      b.title.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) =>
      sort === "price-asc" ? a.price - b.price :
        sort === "price-desc" ? b.price - a.price :
          b.reviews - a.reviews
    );

  const handleAdd = (book) => {
    addToCart(book);
    show(`"${book.title}" added to cart`, "success");
  };

  if (loading) return <div className="page"><div style={{ textAlign: "center", padding: 100 }}>Loading...</div></div>;

  return (
    <div className="page">
      <div className="container" style={{ paddingTop: 40, paddingBottom: 80 }}>

        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <span className="section-label">All Titles</span>
          <h1 className="section-title">The Book Collection</h1>
          <p className="section-desc">
            Every book shipped directly by us — no marketplace, no middlemen.
          </p>
        </div>

        {/* Filters */}
        <div className="books-filter-bar">

          {/* Search */}
          <div style={{ position: "relative", flex: "1 1 240px" }}>
            <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)" }}>🔍</span>
            <input
              className="input-glass"
              placeholder="Search books..."
              style={{ paddingLeft: 42 }}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Genre Buttons */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {genres.map(g => (
              <button
                key={g}
                onClick={() => setGenre(g)}
                style={{
                  padding: "9px 16px",
                  borderRadius: 8,
                  border: `1px solid ${genre === g ? "var(--gold)" : "var(--glass-border)"}`,
                  background: genre === g ? "var(--gold-dim)" : "var(--glass)",
                  color: genre === g ? "var(--gold)" : "var(--text-secondary)",
                  cursor: "pointer",
                  fontSize: 13,
                  fontWeight: genre === g ? 600 : 500,
                  backdropFilter: "blur(16px)",
                  transition: "all 0.15s",
                  boxShadow: genre === g ? "0 0 12px rgba(201,168,76,0.2)" : "none"
                }}
              >
                {g}
              </button>
            ))}
          </div>

          {/* Sort */}
          <select
            className="input-glass"
            style={{ minWidth: 180, maxWidth: 220 }}
            value={sort}
            onChange={e => setSort(e.target.value)}
          >
            <option value="popular">Most Popular</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>

        {/* Grid */}
        <div className="grid-3" style={{ gap: 24 }}>
          {filtered.map(book => (
            <div
              key={book.id}
              className="glass video-card"
              style={{ borderRadius: 20, overflow: "hidden", cursor: "pointer" }}
              onClick={() => setSelected(book)}
            >
              {/* Image */}
              <div style={{
                height: 180,
                background: "var(--card-img-bg)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
              }}>
                <img
                  src={book.cover}
                  alt={book.title}
                  style={{ maxWidth: "90%", maxHeight: "90%", objectFit: "contain" }}
                />

                {/* Bestseller badge: top-left */}
                {book.bestseller && (
                  <span className="floating-badge">⭐ Bestseller</span>
                )}

                {/* Stock badge: bottom-left — SEPARATE class, no overlap */}
                {book.stock < 15 && (
                  <span className="floating-badge-bottom">Only {book.stock} left</span>
                )}
              </div>

              {/* Content */}
              <div style={{ padding: 24 }}>
                <div style={{ marginBottom: 10 }}>
                  <span className="tag">{book.genre}</span>
                </div>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 17, fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: 6, lineHeight: 1.3,
                }}>
                  {book.title}
                </h3>
                <p style={{ color: "var(--text-muted)", fontSize: 13, marginBottom: 10 }}>{book.subtitle}</p>

                <div className="stars" style={{ marginBottom: 14 }}>
                  {"★".repeat(Math.floor(book.rating))}{" "}
                  <span style={{ fontSize: 12, color: "var(--text-muted)" }}>
                    {book.rating} ({book.reviews})
                  </span>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "var(--gold)" }}>
                      ₹{book.price}
                    </span>
                    <span style={{ textDecoration: "line-through", marginLeft: 8, fontSize: 13, color: "var(--text-muted)" }}>
                      ₹{book.originalPrice}
                    </span>
                  </div>

                  <button
                    className="btn-gold"
                    style={{ padding: "9px 18px", fontSize: 13 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAdd(book);
                    }}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty */}
        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: 80, color: "var(--text-muted)" }}>
            No books found
          </div>
        )}
      </div>

      {/* Modal */}
      {selected && (
        <div className="modal-backdrop" onClick={() => setSelected(null)}>
          <div
            style={{
              width: "100%",
              maxWidth: 640,
              background: "var(--bg-dark3)",
              border: "1px solid var(--glass-border)",
              borderRadius: 24,
              overflow: "hidden",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-grid-2col">

              {/* IMAGE SIDE */}
              <div style={{
                background: "var(--card-img-bg)",
                display: "flex", alignItems: "center", justifyContent: "center",
                minHeight: 220,
              }}>
                <img
                  src={selected.cover}
                  alt={selected.title}
                  style={{ maxWidth: "90%", maxHeight: "90%", objectFit: "contain" }}
                />
              </div>

              {/* DETAILS SIDE */}
              <div style={{ padding: "28px 28px 20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
                  <span className="tag">{selected.genre}</span>
                  <button
                    onClick={() => setSelected(null)}
                    style={{
                      background: "none", border: "none", cursor: "pointer",
                      color: "var(--text-muted)", fontSize: 18,
                    }}
                  >✕</button>
                </div>

                <h2 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 22, fontWeight: 700,
                  marginBottom: 6, lineHeight: 1.3,
                  color: "var(--text-primary)",
                }}>
                  {selected.title}
                </h2>

                <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 12 }}>
                  {selected.subtitle}
                </p>

                <div className="stars" style={{ marginBottom: 10 }}>
                  {"★".repeat(Math.floor(selected.rating))}{" "}
                  <span style={{ color: "var(--text-muted)" }}>
                    {selected.rating} · {selected.reviews.toLocaleString()} reviews
                  </span>
                </div>

                <p style={{
                  fontSize: 14, color: "var(--text-secondary)",
                  lineHeight: 1.6, marginBottom: 16,
                }}>
                  {selected.desc}
                </p>

                <div style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 20 }}>
                  📖 {selected.pages} pages · ✅ {selected.stock} in stock
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <div>
                    <span style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 28, fontWeight: 700, color: "var(--gold)",
                    }}>
                      ₹{selected.price}
                    </span>
                    <span style={{
                      fontSize: 12, color: "var(--text-muted)",
                      textDecoration: "line-through", marginLeft: 8,
                    }}>
                      ₹{selected.originalPrice}
                    </span>
                  </div>
                  <button
                    className="btn-gold"
                    onClick={() => { handleAdd(selected); setSelected(null); }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* FOOTER */}
            <div style={{
              padding: "20px 28px",
              borderTop: "1px solid var(--glass-border)",
              display: "flex", gap: 16,
              fontSize: 12, color: "var(--text-muted)",
              flexWrap: "wrap",
            }}>
              <span>🚚 Free delivery on orders above ₹499</span>
              <span>📦 Ships in 2-4 business days</span>
              <span>↩ 7-day returns</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BooksPage;