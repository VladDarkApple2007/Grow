import React from "react";
import "./cart_totals.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../../../hooks/useAuth";
export default function CartTotals({ total }) {
  const { register, user } = useAuth();
  const navigate = useNavigate();
  const handleCheck = () => {
    if (!user || !register) {
      toast.error("please log in or create an account");
    } else {
      navigate("/checkout");
    }
  };
  const handleGoBack = () => {
    navigate("/");
  };
  const shipping = 16;
  const AbTotal = total + shipping;

  return (
    <div className="cart-totals">
      <h3>Cart Totals</h3>
      <p className="coupon">Coupon Apply</p>
      <div className="coupon-inputs">
        <input type="text" placeholder="Enter coupon code here..." />
        <button>Apply</button>
      </div>

      <div className="subtotals-row">
        <span>Subtotal</span>
        <b>${total}.00</b>
      </div>
      <div className="subtotals-row">
        <span>Coupon Discount</span>
        <span>(-) 00.00</span>
      </div>
      <div className="subtotals-row">
        <span>Shipping</span>
        <b>${shipping}.00</b>
      </div>
      <div className="totals-row total">
        <b>Total</b>
        <span>${AbTotal}.00</span>
      </div>

      <button className="checkout-button" onClick={handleCheck}>
        <span>Proceed To Checkout</span>
      </button>
      <button className="continue" onClick={handleGoBack}>
        Continue Shopping
      </button>
    </div>
  );
}
