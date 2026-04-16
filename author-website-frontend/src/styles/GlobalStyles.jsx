// // ============================================================
// // GLOBAL STYLES
// // ============================================================
// const GlobalStyles = () => (
//   <style>{`
//     @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;900&family=DM+Sans:wght@300;400;500;600&display=swap');

//     *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

//     :root {
//       --gold: #C9A84C;
//       --gold-light: #E8C97A;
//       --gold-dim: rgba(201,168,76,0.18);
//       --dark: #080810;
//       --dark-2: #0F0F1A;
//       --dark-3: #161625;
//       --glass: rgba(255,255,255,0.04);
//       --glass-border: rgba(255,255,255,0.08);
//       --glass-hover: rgba(255,255,255,0.07);
//       --text-primary: #F0EDE8;
//       --text-secondary: rgba(240,237,232,0.55);
//       --text-muted: rgba(240,237,232,0.30);
//       --accent: #C9A84C;
//       --danger: #E05252;
//       --success: #52C07A;
//       --radius: 16px;
//       --radius-sm: 10px;
//       --blur: blur(24px);
//     }

//     html { scroll-behavior: smooth; }

//     body {
//       font-family: 'DM Sans', sans-serif;
//       background: var(--dark);
//       color: var(--text-primary);
//       min-height: 100vh;
//       overflow-x: hidden;
//     }

//     .playfair { font-family: 'Playfair Display', serif; }

//     /* Scrollbar */
//     ::-webkit-scrollbar { width: 4px; }
//     ::-webkit-scrollbar-track { background: var(--dark-2); }
//     ::-webkit-scrollbar-thumb { background: var(--gold-dim); border-radius: 4px; }

//     /* Background mesh */
//     .bg-mesh {
//       position: fixed; inset: 0; z-index: 0; pointer-events: none;
//       background:
//         radial-gradient(ellipse 60% 50% at 20% 20%, rgba(201,168,76,0.07) 0%, transparent 60%),
//         radial-gradient(ellipse 50% 60% at 80% 80%, rgba(80,60,180,0.06) 0%, transparent 60%),
//         radial-gradient(ellipse 40% 40% at 50% 50%, rgba(201,168,76,0.03) 0%, transparent 70%);
//     }

//     /* Glass card */
//     .glass {
//       background: var(--glass);
//       border: 1px solid var(--glass-border);
//       backdrop-filter: var(--blur);
//       -webkit-backdrop-filter: var(--blur);
//     }

//     .glass-strong {
//       background: rgba(255,255,255,0.06);
//       border: 1px solid rgba(255,255,255,0.12);
//       backdrop-filter: blur(32px);
//       -webkit-backdrop-filter: blur(32px);
//     }

//     /* Buttons */
//     .btn-gold {
//       background: linear-gradient(135deg, var(--gold), #A07830);
//       color: #080810;
//       font-family: 'DM Sans', sans-serif;
//       font-weight: 600;
//       font-size: 14px;
//       letter-spacing: 0.04em;
//       border: none;
//       border-radius: var(--radius-sm);
//       padding: 12px 24px;
//       cursor: pointer;
//       transition: all 0.2s;
//       display: inline-flex; align-items: center; gap: 8px;
//     }
//     .btn-gold:hover { transform: translateY(-1px); box-shadow: 0 8px 28px rgba(201,168,76,0.3); }
//     .btn-gold:active { transform: translateY(0); }

//     .btn-ghost {
//       background: transparent;
//       color: var(--text-primary);
//       font-family: 'DM Sans', sans-serif;
//       font-weight: 500;
//       font-size: 14px;
//       border: 1px solid var(--glass-border);
//       border-radius: var(--radius-sm);
//       padding: 11px 22px;
//       cursor: pointer;
//       transition: all 0.2s;
//       display: inline-flex; align-items: center; gap: 8px;
//     }
//     .btn-ghost:hover { background: var(--glass-hover); border-color: rgba(255,255,255,0.16); }

//     .btn-danger {
//       background: rgba(224,82,82,0.12);
//       color: var(--danger);
//       font-family: 'DM Sans', sans-serif;
//       font-weight: 500; font-size: 13px;
//       border: 1px solid rgba(224,82,82,0.2);
//       border-radius: 8px; padding: 8px 16px;
//       cursor: pointer; transition: all 0.2s;
//     }
//     .btn-danger:hover { background: rgba(224,82,82,0.2); }

//     /* Input */
//     .input-glass {
//       width: 100%;
//       background: rgba(255,255,255,0.04);
//       border: 1px solid var(--glass-border);
//       border-radius: var(--radius-sm);
//       padding: 13px 16px;
//       color: var(--text-primary);
//       font-family: 'DM Sans', sans-serif;
//       font-size: 14px;
//       outline: none;
//       transition: border-color 0.2s, background 0.2s;
//     }
//     .input-glass::placeholder { color: var(--text-muted); }
//     .input-glass:focus { border-color: rgba(201,168,76,0.4); background: rgba(255,255,255,0.06); }

//     /* Badge */
//     .badge {
//       display: inline-flex; align-items: center;
//       background: var(--gold-dim);
//       color: var(--gold-light);
//       font-size: 11px; font-weight: 600;
//       letter-spacing: 0.08em; text-transform: uppercase;
//       padding: 4px 10px; border-radius: 20px;
//       border: 1px solid rgba(201,168,76,0.2);
//     }

//     .badge-green {
//       background: rgba(82,192,122,0.12); color: var(--success);
//       border-color: rgba(82,192,122,0.2);
//     }

//     .badge-red {
//       background: rgba(224,82,82,0.12); color: var(--danger);
//       border-color: rgba(224,82,82,0.2);
//     }

//     /* Tag */
//     .tag {
//       display: inline-flex; align-items: center;
//       background: rgba(255,255,255,0.05);
//       color: var(--text-secondary);
//       font-size: 12px; font-weight: 500;
//       padding: 4px 10px; border-radius: 6px;
//       border: 1px solid var(--glass-border);
//     }

//     /* Divider */
//     .divider { border: none; border-top: 1px solid var(--glass-border); margin: 24px 0; }

//     /* Page wrapper */
//     .page { position: relative; z-index: 1; min-height: 100vh; padding-top: 72px; }

//     /* Section */
//     .section { padding: 80px 0; }
//     .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }

//     /* Grid */
//     .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
//     .grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
//     @media(max-width: 900px) {
//       .grid-3 { grid-template-columns: repeat(2, 1fr); }
//     }
//     @media(max-width: 600px) {
//       .grid-3, .grid-2 { grid-template-columns: 1fr; }
//     }

//     /* Toast */
//     .toast {
//       position: fixed; bottom: 28px; right: 28px; z-index: 9999;
//       background: rgba(15,15,26,0.95);
//       border: 1px solid var(--glass-border);
//       backdrop-filter: blur(24px);
//       border-radius: var(--radius-sm);
//       padding: 14px 20px;
//       font-size: 14px; font-weight: 500;
//       display: flex; align-items: center; gap: 10px;
//       box-shadow: 0 16px 48px rgba(0,0,0,0.4);
//       animation: slideUp 0.3s ease;
//       max-width: 320px;
//     }
//     @keyframes slideUp {
//       from { transform: translateY(20px); opacity: 0; }
//       to { transform: translateY(0); opacity: 1; }
//     }

//     /* Star */
//     .stars { color: var(--gold); font-size: 14px; letter-spacing: 2px; }

//     /* Section heading */
//     .section-label {
//       font-size: 11px; font-weight: 600; letter-spacing: 0.12em;
//       text-transform: uppercase; color: var(--gold);
//       margin-bottom: 12px; display: block;
//     }
//     .section-title {
//       font-family: 'Playfair Display', serif;
//       font-size: clamp(28px, 4vw, 44px);
//       font-weight: 700;
//       line-height: 1.2;
//       color: var(--text-primary);
//       margin-bottom: 16px;
//     }
//     .section-desc {
//       font-size: 16px; color: var(--text-secondary);
//       line-height: 1.7; max-width: 540px;
//     }

//     /* Modal */
//     .modal-backdrop {
//       position: fixed; inset: 0; z-index: 1000;
//       background: rgba(8,8,16,0.85);
//       backdrop-filter: blur(8px);
//       display: flex; align-items: center; justify-content: center;
//       padding: 24px;
//     }
//     .modal {
//       width: 100%; max-width: 460px;
//       background: var(--dark-3);
//       border: 1px solid var(--glass-border);
//       border-radius: 20px;
//       overflow: hidden;
//     }
//     .modal-header {
//       padding: 24px 28px 20px;
//       border-bottom: 1px solid var(--glass-border);
//       display: flex; align-items: center; justify-content: space-between;
//     }
//     .modal-body { padding: 28px; }

//     /* Video card hover */
//     .video-card { transition: transform 0.2s, box-shadow 0.2s; }
//     .video-card:hover { transform: translateY(-3px); box-shadow: 0 16px 48px rgba(0,0,0,0.4); }

//     /* Nav active */
//     .nav-link { position: relative; }
//     .nav-link.active { color: var(--gold) !important; }
//     .nav-link.active::after {
//       content: ''; position: absolute; bottom: -2px; left: 0; right: 0;
//       height: 2px; background: var(--gold); border-radius: 1px;
//     }

//     /* Tabs */
//     .tabs { display: flex; gap: 4px; background: rgba(255,255,255,0.04); border-radius: 12px; padding: 4px; }
//     .tab {
//       flex: 1; padding: 10px 16px; border-radius: 9px; border: none;
//       background: transparent; color: var(--text-secondary);
//       font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500;
//       cursor: pointer; transition: all 0.2s; text-align: center;
//     }
//     .tab.active { background: rgba(201,168,76,0.14); color: var(--gold); }

//     /* Progress bar */
//     .progress-bar {
//       height: 3px; background: rgba(255,255,255,0.08);
//       border-radius: 2px; overflow: hidden;
//     }
//     .progress-fill {
//       height: 100%; background: linear-gradient(90deg, var(--gold), var(--gold-light));
//       border-radius: 2px; transition: width 0.3s;
//     }

//     /* Highlight line */
//     .highlight-line {
//       display: inline;
//       background: linear-gradient(transparent 60%, rgba(201,168,76,0.25) 60%);
//     }

//     /* Form label */
//     .form-label { font-size: 13px; font-weight: 500; color: var(--text-secondary); margin-bottom: 8px; display: block; }

//     /* Select */
//     select.input-glass { appearance: none; cursor: pointer; }

//     /* Responsive navbar */
//     @media(max-width: 768px) {
//       .nav-links { display: none; }
//       .nav-mobile-menu { display: block !important; }
//     }
//     .nav-mobile-menu { display: none; }

//     /* Hero gradient text */
//     .grad-text {
//       background: linear-gradient(135deg, var(--gold-light), var(--gold), #8B6020);
//       -webkit-background-clip: text; -webkit-text-fill-color: transparent;
//       background-clip: text;
//     }

//     /* Stat card */
//     .stat-num {
//       font-family: 'Playfair Display', serif;
//       font-size: 36px; font-weight: 700; color: var(--gold);
//     }

//     /* Skeleton */
//     .skeleton {
//       background: linear-gradient(90deg, rgba(255,255,255,0.04) 25%, rgba(255,255,255,0.07) 50%, rgba(255,255,255,0.04) 75%);
//       background-size: 200% 100%;
//       animation: shimmer 1.4s infinite;
//       border-radius: 8px;
//     }
//     @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }

//     /* Floating label */
//     .floating-badge {
//       position: absolute; top: 12px; left: 12px;
//       background: rgba(8,8,16,0.85); backdrop-filter: blur(8px);
//       border: 1px solid var(--glass-border);
//       padding: 4px 10px; border-radius: 6px;
//       font-size: 11px; font-weight: 600; color: var(--text-primary);
//     }

//     /* Rating */
//     .rating-bar { display: flex; align-items: center; gap: 10px; margin-bottom: 6px; }
//     .rating-bar-fill { height: 6px; background: var(--gold); border-radius: 3px; }
//     .rating-bar-bg { flex: 1; height: 6px; background: rgba(255,255,255,0.07); border-radius: 3px; overflow: hidden; }
//   `}</style>
// );

// export default GlobalStyles;

const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;900&family=DM+Sans:wght@300;400;500;600&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    /* ============================================================
       DARK THEME (default)
    ============================================================ */
    :root,
    [data-theme="dark"] {
      --gold: #C9A84C;
      --gold-light: #E8C97A;
      --gold-dim: rgba(201,168,76,0.18);
      --dark: #080810;
      --dark-2: #0F0F1A;
      --dark-3: #161625;
      --glass: rgba(255,255,255,0.04);
      --glass-border: rgba(255,255,255,0.08);
      --glass-hover: rgba(255,255,255,0.07);
      --text-primary: #F0EDE8;
      --text-secondary: rgba(240,237,232,0.55);
      --text-muted: rgba(240,237,232,0.30);
      --accent: #C9A84C;
      --danger: #E05252;
      --success: #52C07A;
      --radius: 16px;
      --radius-sm: 10px;
      --blur: blur(24px);
      --bg-body: #080810;
      --bg-nav: rgba(8,8,16,0.85);
      --bg-footer: rgba(8,8,16,0.80);
      --bg-dark3: #161625;
      --select-bg: #161625;
      --skeleton-a: rgba(255,255,255,0.04);
      --skeleton-b: rgba(255,255,255,0.07);
      --progress-bg: rgba(255,255,255,0.08);
      --toggle-bg: rgba(255,255,255,0.06);
      --toggle-border: rgba(255,255,255,0.12);
      --card-img-bg: #0b0b0f;
    }

    /* ============================================================
       LIGHT THEME — Dense, warm, high-contrast
    ============================================================ */
    [data-theme="light"] {
      /* Deep amber gold — rich and very visible */
      --gold: #7A4F00;
      --gold-light: #A06600;
      --gold-dim: rgba(122,79,0,0.13);

      /* Warm parchment surfaces */
      --dark: #EDE8DE;
      --dark-2: #E0D9CC;
      --dark-3: #F9F7F3;

      /* Cards: solid white with visible border */
      --glass: rgba(255,255,255,0.78);
      --glass-border: rgba(90,65,20,0.16);
      --glass-hover: rgba(255,255,255,0.90);

      /* Text: near-black brown, fully opaque for max density */
      --text-primary: #1C1408;
      --text-secondary: #3D2E14;
      --text-muted: #7A6645;

      --accent: #7A4F00;
      --danger: #B91C1C;
      --success: #166534;
      --radius: 16px;
      --radius-sm: 10px;
      --blur: blur(24px);
      --bg-body: #EDE8DE;
      --bg-nav: rgba(237,232,222,0.95);
      --bg-footer: rgba(220,213,200,0.98);
      --bg-dark3: #F9F7F3;
      --select-bg: #F9F7F3;
      --skeleton-a: rgba(0,0,0,0.06);
      --skeleton-b: rgba(0,0,0,0.12);
      --progress-bg: rgba(0,0,0,0.10);
      --toggle-bg: rgba(122,79,0,0.08);
      --toggle-border: rgba(122,79,0,0.22);
      --card-img-bg: #E4DDD0;
    }

    html { scroll-behavior: smooth; }

    body {
      font-family: 'DM Sans', sans-serif;
      background: var(--bg-body);
      color: var(--text-primary);
      min-height: 100vh;
      overflow-x: hidden;
      transition: background 0.3s, color 0.3s;
    }

    .playfair { font-family: 'Playfair Display', serif; }

    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: var(--dark-2); }
    ::-webkit-scrollbar-thumb { background: var(--gold-dim); border-radius: 4px; }

    /* Background mesh */
    .bg-mesh {
      position: fixed; inset: 0; z-index: 0; pointer-events: none;
      background:
        radial-gradient(ellipse 60% 50% at 20% 20%, rgba(201,168,76,0.07) 0%, transparent 60%),
        radial-gradient(ellipse 50% 60% at 80% 80%, rgba(80,60,180,0.06) 0%, transparent 60%),
        radial-gradient(ellipse 40% 40% at 50% 50%, rgba(201,168,76,0.03) 0%, transparent 70%);
    }
    [data-theme="light"] .bg-mesh {
      background:
        radial-gradient(ellipse 60% 50% at 20% 20%, rgba(122,79,0,0.09) 0%, transparent 60%),
        radial-gradient(ellipse 50% 60% at 80% 80%, rgba(80,60,180,0.04) 0%, transparent 60%),
        radial-gradient(ellipse 40% 40% at 50% 50%, rgba(122,79,0,0.04) 0%, transparent 70%);
    }

    /* Glass card */
    .glass {
      background: var(--glass);
      border: 1px solid var(--glass-border);
      backdrop-filter: var(--blur);
      -webkit-backdrop-filter: var(--blur);
      transition: background 0.3s, border-color 0.3s;
    }
    [data-theme="light"] .glass {
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    }

    /* Dropdown */
    select.input-glass { background-color: var(--select-bg); color: var(--text-primary); }
    select.input-glass option { background: var(--select-bg); color: var(--text-primary); }
    select.input-glass option:checked { background: var(--gold-dim); color: var(--gold); }

    .glass-strong {
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.12);
      backdrop-filter: blur(32px);
      -webkit-backdrop-filter: blur(32px);
    }
    [data-theme="light"] .glass-strong {
      background: rgba(255,255,255,0.94);
      border: 1px solid rgba(90,65,20,0.14);
      box-shadow: 0 4px 24px rgba(0,0,0,0.08);
    }

    /* ============================================================
   PAY MODAL (ALWAYS DARK, HIGH DENSITY)
============================================================ */
.pay-modal-box {
  width: 100%;
  max-width: 420px;

  background: linear-gradient(180deg, #0F0F1A 0%, #080810 100%);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 22px;

  box-shadow: 0 32px 90px rgba(0,0,0,0.65);
  overflow: hidden;

  animation: modalIn 0.25s ease;
}

@keyframes modalIn {
  from { transform: translateY(10px) scale(0.98); opacity: 0; }
  to   { transform: translateY(0) scale(1); opacity: 1; }
}

.pay-modal-header {
  padding: 22px 24px;
  border-bottom: 1px solid rgba(255,255,255,0.06);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.pay-modal-title {
  font-family: 'Playfair Display', serif;
  font-size: 18px;
  font-weight: 700;
  color: #F0EDE8;
}

.pay-modal-sub {
  font-size: 12px;
  color: rgba(240,237,232,0.5);
}

.pay-modal-close {
  background: transparent;
  border: none;
  color: rgba(240,237,232,0.5);
  font-size: 18px;
  cursor: pointer;
}

.pay-modal-body {
  padding: 24px;
}

.pay-modal-card {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 14px;
  padding: 16px;
  margin-bottom: 20px;
}

.pay-modal-price {
  font-size: 26px;
  font-weight: 700;
  color: var(--gold);
  margin-top: 6px;
}

    /* ── Buttons ─────────────────────────────────────────────── */
    .btn-gold {
      background: linear-gradient(135deg, var(--gold), #A07830);
      color: #080810;
      font-family: 'DM Sans', sans-serif;
      font-weight: 600; font-size: 14px;
      letter-spacing: 0.04em;
      border: none; border-radius: var(--radius-sm);
      padding: 12px 24px; cursor: pointer;
      transition: all 0.2s;
      display: inline-flex; align-items: center; gap: 8px;
    }
    [data-theme="light"] .btn-gold {
      background: linear-gradient(135deg, #7A4F00, #4A2E00);
      color: #FFFFFF;
      box-shadow: 0 2px 12px rgba(122,79,0,0.25);
    }
    .btn-gold:hover { transform: translateY(-1px); box-shadow: 0 8px 28px rgba(201,168,76,0.30); }
    [data-theme="light"] .btn-gold:hover { box-shadow: 0 8px 28px rgba(122,79,0,0.35); }
    .btn-gold:active { transform: translateY(0); }

    .btn-ghost {
      background: transparent; color: var(--text-primary);
      font-family: 'DM Sans', sans-serif;
      font-weight: 500; font-size: 14px;
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-sm);
      padding: 11px 22px; cursor: pointer;
      transition: all 0.2s;
      display: inline-flex; align-items: center; gap: 8px;
    }
    .btn-ghost:hover { background: var(--glass-hover); border-color: rgba(255,255,255,0.16); }
    [data-theme="light"] .btn-ghost { border-color: rgba(90,65,20,0.22); color: #1C1408; }
    [data-theme="light"] .btn-ghost:hover { border-color: rgba(90,65,20,0.38); background: rgba(255,255,255,0.70); }

    .btn-danger {
      background: rgba(224,82,82,0.12); color: var(--danger);
      font-family: 'DM Sans', sans-serif;
      font-weight: 500; font-size: 13px;
      border: 1px solid rgba(224,82,82,0.2);
      border-radius: 8px; padding: 8px 16px;
      cursor: pointer; transition: all 0.2s;
    }
    .btn-danger:hover { background: rgba(224,82,82,0.2); }

    /* ── Input ───────────────────────────────────────────────── */
    .input-glass {
      width: 100%;
      background: rgba(255,255,255,0.04);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-sm);
      padding: 13px 16px;
      color: var(--text-primary);
      font-family: 'DM Sans', sans-serif;
      font-size: 14px; outline: none;
      transition: border-color 0.2s, background 0.2s;
    }
    [data-theme="light"] .input-glass {
      background: rgba(255,255,255,0.85);
      border: 1.5px solid rgba(90,65,20,0.20);
      color: #1C1408;
      font-weight: 450;
    }
    .input-glass::placeholder { color: var(--text-muted); }
    .input-glass:focus { border-color: rgba(201,168,76,0.50); background: rgba(255,255,255,0.08); }
    [data-theme="light"] .input-glass:focus {
      border-color: rgba(122,79,0,0.55);
      background: #FFFFFF;
      box-shadow: 0 0 0 3px rgba(122,79,0,0.08);
    }

    /* ── Badge ───────────────────────────────────────────────── */
    .badge {
      display: inline-flex; align-items: center;
      background: var(--gold-dim); color: var(--gold-light);
      font-size: 11px; font-weight: 600;
      letter-spacing: 0.08em; text-transform: uppercase;
      padding: 4px 10px; border-radius: 20px;
      border: 1px solid rgba(201,168,76,0.2);
    }
    [data-theme="light"] .badge { color: var(--gold); border-color: rgba(122,79,0,0.25); }

    .badge-green { background: rgba(82,192,122,0.12); color: var(--success); border-color: rgba(82,192,122,0.2); }
    .badge-red   { background: rgba(224,82,82,0.12);  color: var(--danger);  border-color: rgba(224,82,82,0.2); }

    /* ── Tag ─────────────────────────────────────────────────── */
    .tag {
      display: inline-flex; align-items: center;
      background: rgba(255,255,255,0.05);
      color: var(--text-secondary);
      font-size: 12px; font-weight: 500;
      padding: 4px 10px; border-radius: 6px;
      border: 1px solid var(--glass-border);
    }
    [data-theme="light"] .tag {
      background: rgba(122,79,0,0.09);
      border-color: rgba(122,79,0,0.18);
      color: #5A3A00;
      font-weight: 600;
    }

    .divider { border: none; border-top: 1px solid var(--glass-border); margin: 24px 0; }

    .page { position: relative; z-index: 1; min-height: 100vh; padding-top: 72px; }
    .section { padding: 80px 0; }
    .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }

    .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
    .grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
    @media (max-width: 1024px) { .grid-3 { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 600px)  { .grid-3, .grid-2 { grid-template-columns: 1fr; gap: 16px; } }

    /* ── Toast ───────────────────────────────────────────────── */
    .toast {
      position: fixed; bottom: 28px; right: 28px; z-index: 9999;
      background: var(--bg-dark3);
      border: 1px solid var(--glass-border);
      backdrop-filter: blur(24px);
      border-radius: var(--radius-sm);
      padding: 14px 20px;
      font-size: 14px; font-weight: 500;
      color: var(--text-primary);
      display: flex; align-items: center; gap: 10px;
      box-shadow: 0 16px 48px rgba(0,0,0,0.4);
      animation: slideUp 0.3s ease;
      max-width: 320px;
    }
    [data-theme="light"] .toast {
      background: #FFFFFF;
      box-shadow: 0 16px 48px rgba(0,0,0,0.14);
      color: #1C1408;
    }
    @keyframes slideUp {
      from { transform: translateY(20px); opacity: 0; }
      to   { transform: translateY(0); opacity: 1; }
    }
    @media (max-width: 480px) { .toast { bottom: 16px; right: 16px; left: 16px; max-width: unset; } }

    .stars { color: var(--gold); font-size: 14px; letter-spacing: 2px; }

    /* Section headings */
    .section-label {
      font-size: 11px; font-weight: 700; letter-spacing: 0.12em;
      text-transform: uppercase; color: var(--gold);
      margin-bottom: 12px; display: block;
    }
    .section-title {
      font-family: 'Playfair Display', serif;
      font-size: clamp(24px, 4vw, 44px);
      font-weight: 700; line-height: 1.2;
      color: var(--text-primary); margin-bottom: 16px;
    }
    .section-desc {
      font-size: 16px; color: var(--text-secondary);
      line-height: 1.7; max-width: 540px;
    }
    [data-theme="light"] .section-desc { color: #3D2E14; font-weight: 450; }
    @media (max-width: 480px) {
      .section { padding: 48px 0; }
      .section-desc { font-size: 15px; }
      .container { padding: 0 16px; }
    }

    /* ── Modal ───────────────────────────────────────────────── */
    .modal-backdrop {
      position: fixed; inset: 0; z-index: 1000;
      background: rgba(8,8,16,0.85);
      backdrop-filter: blur(8px);
      display: flex; align-items: center; justify-content: center;
      padding: 16px; overflow-y: auto;
    }
    [data-theme="light"] .modal-backdrop { background: rgba(80,55,15,0.45); }

    .modal {
      width: 100%; max-width: 460px;
      background: var(--bg-dark3);
      border: 1px solid var(--glass-border);
      border-radius: 20px; overflow: hidden;
    }
    .modal-header {
      padding: 24px 28px 20px;
      border-bottom: 1px solid var(--glass-border);
      display: flex; align-items: center; justify-content: space-between;
    }
    .modal-body { padding: 28px; }

    .modal-grid-2col { display: grid; grid-template-columns: 200px 1fr; }
    @media (max-width: 560px) {
      .modal-grid-2col { grid-template-columns: 1fr; }
      .modal-grid-2col .modal-image-side { min-height: 180px; }
    }

    /* Video card hover */
    .video-card { transition: transform 0.2s, box-shadow 0.2s; }
    .video-card:hover { transform: translateY(-3px); box-shadow: 0 16px 48px rgba(0,0,0,0.4); }
    [data-theme="light"] .video-card:hover { box-shadow: 0 16px 48px rgba(0,0,0,0.12); }

    /* ============================================================
       NAVBAR
    ============================================================ */
    .nav-link { position: relative; }
    .nav-link.active { color: var(--gold) !important; }
    .nav-link.active::after {
      content: ''; position: absolute; bottom: -2px; left: 0; right: 0;
      height: 2px; background: var(--gold); border-radius: 1px;
    }
    .nav-links { display: flex; }
    .nav-mobile-menu { display: none !important; }
    @media (max-width: 768px) {
      .nav-links { display: none !important; }
      .nav-mobile-menu { display: flex !important; }
    }

    .mobile-drawer {
      position: fixed; top: 64px; left: 0; right: 0;
      background: var(--bg-nav);
      backdrop-filter: blur(24px);
      border-bottom: 1px solid var(--glass-border);
      z-index: 998; padding: 16px 24px 24px;
      display: flex; flex-direction: column; gap: 4px;
      animation: drawerDown 0.2s ease;
    }
    @keyframes drawerDown {
      from { opacity: 0; transform: translateY(-8px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .mobile-drawer a, .mobile-drawer button {
      display: block; width: 100%; text-align: left;
      padding: 12px 16px; border-radius: 10px;
      font-family: 'DM Sans', sans-serif; font-size: 15px; font-weight: 500;
      color: var(--text-secondary); background: none; border: none;
      cursor: pointer; transition: background 0.15s, color 0.15s;
    }
    .mobile-drawer a:hover, .mobile-drawer button:hover,
    .mobile-drawer a.active, .mobile-drawer button.active {
      background: var(--gold-dim); color: var(--gold);
    }
    .mobile-drawer-divider { height: 1px; background: var(--glass-border); margin: 8px 0; }

    /* ============================================================
       THEME TOGGLE
    ============================================================ */
    .theme-toggle {
      display: inline-flex; align-items: center; gap: 6px;
      background: var(--toggle-bg);
      border: 1px solid var(--toggle-border);
      border-radius: 20px; padding: 5px 12px 5px 8px;
      cursor: pointer;
      transition: background 0.2s, border-color 0.2s, transform 0.15s;
      flex-shrink: 0;
    }
    .theme-toggle:hover { border-color: rgba(201,168,76,0.50); transform: scale(1.04); }
    [data-theme="light"] .theme-toggle:hover { border-color: rgba(122,79,0,0.45); }

    .theme-toggle-track {
      position: relative; width: 32px; height: 18px;
      background: rgba(201,168,76,0.25);
      border-radius: 9px; transition: background 0.3s; flex-shrink: 0;
    }
    [data-theme="light"] .theme-toggle-track { background: rgba(122,79,0,0.22); }

    .theme-toggle-thumb {
      position: absolute; top: 2px; left: 2px;
      width: 14px; height: 14px; border-radius: 50%;
      background: var(--gold);
      transition: transform 0.25s cubic-bezier(.34,1.56,.64,1), background 0.3s;
    }
    [data-theme="light"] .theme-toggle-thumb { transform: translateX(14px); }

    .theme-toggle-label {
      font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 600;
      color: var(--text-muted); transition: color 0.2s; white-space: nowrap;
    }

    /* ── Tabs ─────────────────────────────────────────────────── */
    .tabs { display: flex; gap: 4px; background: rgba(255,255,255,0.04); border-radius: 12px; padding: 4px; }
    [data-theme="light"] .tabs { background: rgba(0,0,0,0.06); }
    .tab {
      flex: 1; padding: 10px 16px; border-radius: 9px; border: none;
      background: transparent; color: var(--text-secondary);
      font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500;
      cursor: pointer; transition: all 0.2s; text-align: center;
    }
    .tab.active { background: rgba(201,168,76,0.14); color: var(--gold); font-weight: 600; }

    .progress-bar { height: 3px; background: var(--progress-bg); border-radius: 2px; overflow: hidden; }
    .progress-fill { height: 100%; background: linear-gradient(90deg, var(--gold), var(--gold-light)); border-radius: 2px; transition: width 0.3s; }

    .highlight-line {
      display: inline;
      background: linear-gradient(transparent 60%, rgba(201,168,76,0.25) 60%);
    }

    /* Form label */
    .form-label {
      font-size: 13px; font-weight: 600;
      color: var(--text-secondary); margin-bottom: 8px; display: block;
    }
    [data-theme="light"] .form-label { color: #1C1408; font-weight: 700; }

    select.input-glass { appearance: none; cursor: pointer; }

    .grad-text {
      background: linear-gradient(135deg, var(--gold-light), var(--gold), #8B6020);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    }
    [data-theme="light"] .grad-text {
      background: linear-gradient(135deg, #A06600, #7A4F00, #4A2E00);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    }

    .stat-num { font-family: 'Playfair Display', serif; font-size: 36px; font-weight: 700; color: var(--gold); }

    .skeleton {
      background: linear-gradient(90deg, var(--skeleton-a) 25%, var(--skeleton-b) 50%, var(--skeleton-a) 75%);
      background-size: 200% 100%;
      animation: shimmer 1.4s infinite;
      border-radius: 8px;
    }
    @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }

    /* ── Floating badges (FIXED: no overlap) ─────────────────── */
    /* Bestseller → top-left */
    .floating-badge {
      position: absolute; top: 12px; left: 12px;
      background: rgba(8,8,16,0.88);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(255,255,255,0.12);
      padding: 4px 10px; border-radius: 6px;
      font-size: 11px; font-weight: 700;
      color: #F0EDE8;
      z-index: 2; white-space: nowrap;
    }
    [data-theme="light"] .floating-badge {
      background: rgba(28,20,8,0.85);
      border-color: rgba(255,255,255,0.15);
      color: #F5EFE0;
    }

    /* Stock warning → bottom-left (separate class used in BooksPage) */
    .floating-badge-bottom {
      position: absolute; bottom: 12px; left: 12px;
      background: rgba(8,8,16,0.88);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(201,168,76,0.30);
      padding: 4px 10px; border-radius: 6px;
      font-size: 11px; font-weight: 700;
      color: var(--gold-light);
      z-index: 2; white-space: nowrap;
    }
    [data-theme="light"] .floating-badge-bottom {
      background: rgba(28,20,8,0.85);
      color: #E8C060;
      border-color: rgba(122,79,0,0.40);
    }

    .rating-bar { display: flex; align-items: center; gap: 10px; margin-bottom: 6px; }
    .rating-bar-fill { height: 6px; background: var(--gold); border-radius: 3px; }
    .rating-bar-bg { flex: 1; height: 6px; background: rgba(255,255,255,0.07); border-radius: 3px; overflow: hidden; }
    [data-theme="light"] .rating-bar-bg { background: rgba(0,0,0,0.10); }

    /* ── Cart ─────────────────────────────────────────────────── */
    .cart-layout { display: grid; grid-template-columns: 1fr 360px; gap: 32px; align-items: start; }
    @media (max-width: 900px) {
      .cart-layout { grid-template-columns: 1fr; }
      .cart-summary-sticky { position: static !important; }
    }
    .cart-item-row { display: flex; gap: 20px; align-items: center; }
    @media (max-width: 480px) {
      .cart-item-row { flex-wrap: wrap; gap: 12px; }
      .cart-item-controls { width: 100%; justify-content: space-between; }
    }

    .speeches-featured-grid { display: grid; grid-template-columns: 1fr 1fr; }
    @media (max-width: 700px) {
      .speeches-featured-grid { grid-template-columns: 1fr; }
      .speeches-featured-video { min-height: 200px !important; }
    }

    .books-filter-bar { display: flex; gap: 16px; margin-bottom: 32px; flex-wrap: wrap; align-items: center; }
    .books-filter-bar .input-glass { flex: 1 1 200px; min-width: 0; }
    .genre-pills { display: flex; gap: 8px; flex-wrap: wrap; }

    /* ============================================================
       PAYMENT LOADER OVERLAY
    ============================================================ */
    .payment-loader-backdrop {
      position: fixed; inset: 0; z-index: 9990;
      background: rgba(8,8,16,0.82);
      backdrop-filter: blur(12px);
      display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      animation: fadeInLoader 0.3s ease;
    }
    [data-theme="light"] .payment-loader-backdrop {
      background: rgba(80,55,15,0.42);
    }
    @keyframes fadeInLoader { from { opacity: 0; } to { opacity: 1; } }

    .payment-loader-box {
      background: var(--bg-dark3);
      border: 1px solid var(--glass-border);
      border-radius: 28px;
      padding: 44px 52px;
      display: flex; flex-direction: column;
      align-items: center; gap: 20px;
      box-shadow: 0 32px 80px rgba(0,0,0,0.55);
      min-width: 280px; text-align: center;
    }
    [data-theme="light"] .payment-loader-box {
      box-shadow: 0 32px 80px rgba(0,0,0,0.16);
    }

    /* Spinning ring */
    .payment-spinner {
      width: 56px; height: 56px;
      border: 3px solid var(--glass-border);
      border-top-color: var(--gold);
      border-radius: 50%;
      animation: paymentSpin 0.75s linear infinite;
    }
    @keyframes paymentSpin { to { transform: rotate(360deg); } }

    /* Gold pulse dot inside ring (layered via wrapper) */
    .payment-spinner-wrap {
      position: relative; width: 56px; height: 56px;
    }
    .payment-spinner-dot {
      position: absolute; inset: 50%; transform: translate(-50%, -50%);
      width: 14px; height: 14px; border-radius: 50%;
      background: var(--gold);
      animation: pulseDot 1.2s ease-in-out infinite;
    }
    @keyframes pulseDot {
      0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(0.85); }
      50%       { opacity: 1;   transform: translate(-50%, -50%) scale(1.1); }
    }

    .payment-loader-title {
      font-family: 'Playfair Display', serif;
      font-size: 20px; font-weight: 700;
      color: var(--text-primary);
    }
    .payment-loader-sub {
      font-size: 13px; color: var(--text-muted); margin-top: -8px;
    }
    .payment-loader-steps {
      display: flex; flex-direction: column; gap: 8px; width: 100%; margin-top: 4px;
    }
    .payment-loader-step {
      display: flex; align-items: center; gap: 10px;
      font-size: 13px; color: var(--text-muted);
    }
    .payment-loader-step.done { color: var(--success); }
    .payment-loader-step.active { color: var(--gold); font-weight: 600; }
    .step-icon {
      width: 18px; height: 18px; border-radius: 50%; flex-shrink: 0;
      display: flex; align-items: center; justify-content: center; font-size: 10px;
    }
    .step-icon.done { background: rgba(82,192,122,0.2); color: var(--success); }
    .step-icon.active {
      border: 2px solid var(--gold);
      animation: stepPulse 1s ease-in-out infinite;
    }
    .step-icon.pending { background: var(--glass-border); color: var(--text-muted); }
    @keyframes stepPulse {
      0%, 100% { box-shadow: 0 0 0 0 rgba(201,168,76,0.4); }
      50%       { box-shadow: 0 0 0 5px rgba(201,168,76,0); }
    }

    @media (max-width: 480px) { .page { padding-top: 64px; } }

    /* ============================================================
   CHECKOUT SUCCESS PAGE
============================================================ */
.success-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 72px); /* account for navbar */
  padding: 40px 20px;
  text-align: center;
}

.success-box {
  max-width: 420px;
  width: 100%;
}

.success-icon {
  font-size: 64px;
  margin-bottom: 24px;
}

.success-title {
  font-size: 32px;
  margin-bottom: 12px;
  color: var(--text-primary);
}

.success-desc {
  margin: 0 auto;
}

.success-btn {
  margin-top: 24px;
  justify-content: center;
}

/* 📱 MOBILE OPTIMIZATION */
@media (max-width: 480px) {
  .success-icon {
    font-size: 52px;
  }

  .success-title {
    font-size: 24px;
  }

  .success-desc {
    font-size: 14px;
    padding: 0 10px;
  }

  .success-btn {
    width: 100%;
    padding: 14px;
    font-size: 14px;
  }
}

/* ============================================================
   CART RESPONSIVE IMPROVEMENTS
============================================================ */

/* Cart Item Layout */
.cart-item {
  display: flex;
  gap: 20px;
  align-items: center;
  border-radius: 20px;
  padding: 24px;
  margin-bottom: 16px;
}

/* Image */
.cart-item-img {
  width: 72px;
  height: 72px;
  border-radius: 14px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Content */
.cart-item-info {
  flex: 1;
  min-width: 0;
}

/* Controls */
.cart-item-controls {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

/* MOBILE BREAK */
@media (max-width: 600px) {
  .cart-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 14px;
    padding: 16px;
  }

  .cart-item-top {
    display: flex;
    gap: 12px;
    width: 100%;
  }

  .cart-item-img {
    width: 64px;
    height: 64px;
  }

  .cart-item-controls {
    width: 100%;
    justify-content: space-between;
  }

  .cart-item-price {
    font-size: 16px;
    min-width: unset;
  }

  .cart-summary-sticky {
    padding: 20px !important;
  }
}

/* EXTRA SMALL DEVICES */
@media (max-width: 400px) {
  .cart-item {
    padding: 14px;
  }

  .cart-item-img {
    width: 56px;
    height: 56px;
  }

  .cart-item-price {
    font-size: 15px;
  }
}
  `}</style>
);

export default GlobalStyles;