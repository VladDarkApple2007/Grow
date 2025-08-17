import React from "react";
import "./../../ShopingCart/shop_cart.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../../../../redux/slice/cartSlice";

export default function AddButton({dataItem, count}) {
  const dispatch = useDispatch();
  const handleAddtoCart = () => {
    dispatch(addToBasket({ ...dataItem, quantity: count }));
    toast.success("🛒 Item added to basket!");
  };
  return (
    <button className="buy_now_shop" onClick={handleAddtoCart}>
      <span>ADD TO CART</span>
    </button>
  );
}
