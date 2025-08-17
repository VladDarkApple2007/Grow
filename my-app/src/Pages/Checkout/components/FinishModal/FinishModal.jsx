import React from "react";
import "./finish_modal.css";

export default function FinishModal() {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Order Placed Successfully!</h2>
        <p>
          Thank you for your purchase. Your order has been received and is being
          processed.
        </p>
        <button
          className="modal-button"
          onClick={() => (window.location.href = "/")}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
