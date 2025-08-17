import React, { useState } from "react";
import "./checkout.css";
import { useDispatch, useSelector } from "react-redux";
import two from "./../../img_home/01 3.png";
import OrderItem from "./components/OrderItem/OrderItem";
import { clearBasket, clearCart } from "../../redux/slice/cartSlice";
import FinishModal from "./components/FinishModal/FinishModal";

export default function Checkout() {
  const products = useSelector((state) => state.cart.products);
  const [showModal, setShowModal] = useState(false);
  const total = products.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const [selected, setSelected] = useState("");
  const shipping = 16;
  const AbTotal = total + shipping;
  const [getForm, setGetForm] = useState([]);
  const dispatch = useDispatch();
  const [formContact, setFormContanct] = useState({
    firstName: "",
    lastName: "",
    country: "",
    city: "",
    address: "",
    apartment: "",
    state: "",
    zip: "",
    email: "",
    phone: "",
    notes: "",
  });

  const formOnChange = (e) => {
    const { name, value } = e.target;
    setFormContanct({
      ...formContact,
      [name]: value,
    });
  };

  const handleGetForm = () => {
    if (!selected) {
      alert("Please select a payment option!");
      return;
    }
    if (
      !formContact.firstName.trim() ||
      !formContact.lastName.trim() ||
      !formContact.country.trim() ||
      !formContact.address.trim() ||
      !formContact.apartment.trim() ||
      !formContact.state.trim() ||
      !formContact.zip.trim() ||
      !formContact.email.trim()
    ) {
      alert("Please fill in all required fields!");
      return;
    }
    const form = {
      id: crypto.randomUUID(),
      firstName: formContact.firstName,
      lastName: formContact.lastName,
      country: formContact.firstName,
      city: formContact.city,
      address: formContact.address,
      apartment: formContact.apartment,
      state: formContact.firstName,
      zip: formContact.zip,
      email: formContact.email,
      notes: formContact.notes,
      phone: 0,
    };
    setGetForm((prev) => [...prev, form]);
    setFormContanct({
      firstName: "",
      lastName: "",
      country: "",
      city: "",
      address: "",
      apartment: "",
      state: "",
      zip: "",
      email: "",
      phone: "",
      notes: "",
    });
    console.log("formContact:", formContact);
    setSelected("");
    dispatch(clearBasket());
    dispatch(clearCart());
    setShowModal(true); // Открыть модалку
  };

  return (
    <div className="checkout-container">
      <div className="checkout-grid">
        <div>
          <div className="checkout-subheader">
            <p className="checkout-subheader_p">
              <b>Home</b> <span> / Shop</span>
              <span> / Checkout</span>
            </p>
          </div>
          <form className="checkout-form">
            <div className="form-group">
              <label className="required-label">
                First Name <span className="required-star">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                onChange={formOnChange}
                value={formContact.firstName}
              />
            </div>

            <div className="form-group">
              <label className="required-label">
                Last Name <span className="required-star">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                onChange={formOnChange}
                value={formContact.lastName}
              />
            </div>

            <div className="form-group">
              <label className="required-label">
                Country / Region <span className="required-star">*</span>
              </label>
              <select
                name="country"
                onChange={formOnChange}
                value={formContact.country}
              >
                <option>Select a country / region</option>
                <option>USA</option>
                <option>UK</option>
                <option>Ukraine</option>
                <option>EU</option>
              </select>
            </div>

            <div className="form-group">
              <label className="required-label">
                Town / City <span className="required-star">*</span>
              </label>
              <input
                type="text"
                name="city"
                onChange={formOnChange}
                value={formContact.city}
              />
            </div>

            <div className="form-group">
              <label className="required-label">
                Street Address <span className="required-star">*</span>
              </label>
              <input
                type="text"
                name="address"
                placeholder="House number and street name"
                onChange={formOnChange}
                value={formContact.address}
              />
            </div>

            <div className="form-group">
              <label>Apartment, suite, unit, etc. (optional)</label>
              <input
                type="text"
                name="apartment"
                placeholder="Apartment, suite, unit, etc. (optional)"
                onChange={formOnChange}
                value={formContact.apartment}
              />
            </div>

            <div className="form-group">
              <label className="required-label">
                State <span className="required-star">*</span>
              </label>
              <select
                name="state"
                onChange={formOnChange}
                value={formContact.state}
              >
                <option>Select a state</option>
                <option>Men</option>
                <option>Woman</option>
              </select>
            </div>

            <div className="form-group">
              <label className="required-label">
                Zip <span className="required-star">*</span>
              </label>
              <input
                type="text"
                name="zip"
                onChange={formOnChange}
                value={formContact.zip}
              />
            </div>
            <div className="form-group">
              <label className="required-label">
                Email address <span className="required-star">*</span>
              </label>
              <input
                type="email"
                name="email"
                onChange={formOnChange}
                value={formContact.email}
              />
            </div>
            <div className="form-group">
              <label className="required-label">
                Phone Number <span className="required-star">*</span>
              </label>
              <select
                name="phone"
                className="phone-form"
                onChange={formOnChange}
                value={formContact.phone}
              >
                <option>+966</option>
                <option>+380</option>
                <option>+7</option>
                <option>+1</option>
                <option>+5</option>
              </select>
            </div>

            {/* Added Order notes textarea */}
            <div className="form-group" style={{ gridColumn: "1 / -1" }}>
              <label>Order notes (optional)</label>
              <textarea
                name="notes"
                value={formContact.notes}
                onChange={formOnChange}
                placeholder="Notes about your order, e.g. special notes for delivery"
                rows="4"
                style={{
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  fontSize: "14px",
                  width: "100%",
                }}
              />
            </div>
          </form>
        </div>

        {/* Правая колонка - Сводка заказа */}
        <div className="order-summary">
          <h2 className="summary-title">Your Order</h2>
          <div className="summary-names">
            <p>Products</p>
            <p>Subtotal</p>
          </div>
          <div className="summary-lines"></div>
          <div className="order-items">
            {products.map((item) => (
              <OrderItem item={item} />
            ))}
          </div>
          <div className="order-coupon_have_div">
            <p className="order-coupon_have">
              Have a coupon code? <span>Click here</span>
            </p>
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
          <div className="summary-lines"></div>
          <div className="order_totals-row">
            <b>Total</b>
            <span>${AbTotal}.00</span>
          </div>
          <div className="payment-method">
            <h3>Payment Method</h3>

            <div
              className={`payment-option ${
                selected === "cards" ? "selected" : ""
              }`}
              onClick={() => setSelected("cards")}
            >
              <input type="radio" checked={selected === "cards"} readOnly />
              <div className="payment-logos">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                  alt="PayPal"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
                  alt="Mastercard"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
                  alt="Visa"
                />
              </div>
            </div>

            <div
              className={`payment-option ${
                selected === "bank" ? "selected" : ""
              }`}
              onClick={() => setSelected("bank")}
            >
              <input type="radio" checked={selected === "bank"} readOnly />
              <span>Direct bank transfer</span>
            </div>

            <div
              className={`payment-option ${
                selected === "cod" ? "selected" : ""
              }`}
              onClick={() => setSelected("cod")}
            >
              <input type="radio" checked={selected === "cod"} readOnly />
              <span>Cash on delivery</span>
            </div>

            <button className="place-order" onClick={handleGetForm}>
              Place Order
            </button>
          </div>
        </div>
        {showModal && <FinishModal />}
      </div>
    </div>
  );
}
