import React from "react";
import "../../checkout.css";


export default function OrderItem({ item }) {
  const count = item.quantity;
  const totalSum = item.price * count;
  return (
    <div className="order-item">
      <div className="order-image">
        <img src={item.img} alt="товар" />
      </div>
      <div className="order-details">
        <span className="order-details_name">{item.title}</span>
        <span className="order-details_sku">
          SKU: <b>{item.sku}</b>
        </span>
      </div>
      <div className="order-right-section">
        <p className="order-count">(x {count})</p>
        <b className="orderesss-price">${totalSum}.00</b>
      </div>
    </div>
  );
}
