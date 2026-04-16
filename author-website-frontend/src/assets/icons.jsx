// ============================================================
// ICON COMPONENTS
// ============================================================
const Icon = ({ name, size = 16 }) => {
  const icons = {
    cart: "🛒", check: "✓", close: "✕", play: "▶", lock: "🔒", unlock: "🔓",
    star: "★", book: "📚", video: "🎬", mic: "🎤", user: "👤", search: "🔍",
    filter: "⚡", arrow: "→", back: "←", share: "↗", download: "↓", heart: "♡",
    menu: "☰", mail: "✉", phone: "📞", location: "📍", time: "🕐", eye: "👁",
    tag: "🏷", gift: "🎁", shield: "🛡", zap: "⚡", trending: "📈",
  };
  return <span style={{ fontSize: size }}>{icons[name] || "•"}</span>;
};

export default Icon;