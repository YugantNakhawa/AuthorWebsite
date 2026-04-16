import { createContext, useState } from "react";

const ToastContext = createContext();

const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const show = (msg, type = "info") => {
    const id = Date.now();
    setToasts(p => [...p, { id, msg, type }]);
    setTimeout(() => setToasts(p => p.filter(t => t.id !== id)), 3500);
  };

  return (
    <ToastContext.Provider value={{ show }}>
      {children}
      {toasts.map(t => (
        <div
          key={t.id}
          className="toast"
          style={{
            borderColor:
              t.type === "success" ? "rgba(82,192,122,0.35)" :
              t.type === "error"   ? "rgba(224,82,82,0.35)" :
              "var(--glass-border)",
          }}
        >
          <span style={{
            fontSize: 18,
            color:
              t.type === "success" ? "var(--success)" :
              t.type === "error"   ? "var(--danger)" :
              "var(--gold)",
          }}>
            {t.type === "success" ? "✓" : t.type === "error" ? "✕" : "ℹ"}
          </span>
          <span>{t.msg}</span>
        </div>
      ))}
    </ToastContext.Provider>
  );
};

export { ToastContext, ToastProvider };