// ============================================================
// Payment Loader Overlay
// ============================================================
const PaymentLoader = ({ step }) => {
  // step: 0 = verifying | 1 = confirming | 2 = done
  const steps = [
    { label: "Verifying payment signature" },
    { label: "Confirming your order" },
    { label: "Almost there…" },
  ];

  return (
    <div className="payment-loader-backdrop">
      <div className="payment-loader-box">
        {/* Spinner + pulse dot */}
        <div className="payment-spinner-wrap">
          <div className="payment-spinner" />
          <div className="payment-spinner-dot" />
        </div>

        <div className="payment-loader-title">Processing Payment</div>
        <div className="payment-loader-sub">Please don't close this window</div>

        <div className="payment-loader-steps">
          {steps.map((s, i) => {
            const isDone   = i < step;
            const isActive = i === step;
            return (
              <div
                key={i}
                className={`payment-loader-step ${isDone ? "done" : isActive ? "active" : ""}`}
              >
                <div className={`step-icon ${isDone ? "done" : isActive ? "active" : "pending"}`}>
                  {isDone ? "✓" : isActive ? "" : "·"}
                </div>
                <span>{s.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PaymentLoader;