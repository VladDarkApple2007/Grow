import React from "react";
import "./../../ShopingCart/shop_cart.css";

export default function CountProduct({setCount, count}) {
  function clickHandler() {
    setCount(count + 1);
  }

  function clickMinus() {
    setCount(Math.max(1, count - 1));
  }
  return (
    <div className="minus_plus">
      <button className="minus_plus_product" onClick={clickMinus}>
        <div className="line_buton_minus"></div>
      </button>
      <span className="span_count">{count}</span>
      <button className="minus_plus_product" onClick={clickHandler}>
        <div className="line_buton_plus"></div>
      </button>
    </div>
  );
}
