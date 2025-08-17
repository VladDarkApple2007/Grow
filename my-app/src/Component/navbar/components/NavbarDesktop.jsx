import React from "react";
import "../navbar.css";
import { Link } from "react-router-dom";
import {
  FaHeart,
  FaShoppingCart
} from "react-icons/fa";
import SearchUI from "./Search/SearchUI";
import Logoout from "./../../../img_home/Logout.png";
import { useSelector } from "react-redux";

export default function NavbarDesktop({ register, user } ) {
  const products = useSelector((state) => state.cart.products);
  const items = useSelector((state) => state.cart.items);
  return (
    <div className="desktop-menu">
      {" "}
      {/* Десктопне меню */}
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link active">
            Home
            <span className="nav-link-underline"></span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/shop" className="nav-link">
            Shop
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/blog" className="nav-link">
            Blogs
          </Link>
        </li>
      </ul>
      <div className="nav-actions">
        <div>
          <SearchUI />
        </div>

        <Link to="/favorite" className="action-link">
          <FaHeart className="action-icon" />
          {items.length > 0 && (
            <span className="wishlist-count">{items.length}</span>
          )}
        </Link>

        <Link to="/basket" className="action-link">
          <FaShoppingCart className="action-icon" />
          {products.length > 0 && (
            <span className="cart-count">{products.length}</span>
          )}
        </Link>
        {!user || !register ? (
          <Link to="/auth" className="login-button">
            <img src={Logoout} alt="Login" className="login-icon" />
            <span>Login</span>
          </Link>
        ) : null}
      </div>
    </div>
  );
}
