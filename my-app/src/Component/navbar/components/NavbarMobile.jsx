import "../navbar.css";
import { Link } from "react-router-dom";
import Logo from "./../../../img_home/Logo.png";
import {
  FaHeart,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Logoout from "./../../../img_home/Logout.png";
import SearchUI from "./Search/SearchUI";


export default function NavbarMobile({ isOpen, closeMenu,toggleMenu,  register, user }) {
  return (
    <div className="mobile-menu">
      <button className="burger-button" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div className={`mobile-menu-content ${isOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <Link to="/" className="mobile-logo-link" onClick={closeMenu}>
            <img src={Logo} alt="Logo" className="mobile-logo" />
          </Link>
          <button className="close-menu-button" onClick={closeMenu}>
            <FaTimes />
          </button>
        </div>

        <div>
          <SearchUI />
        </div>

        <ul className="mobile-nav-list">
          <li className="mobile-nav-item">
            <Link to="/" className="mobile-nav-link active" onClick={closeMenu}>
              Home
              <span className="mobile-nav-link-underline"></span>
            </Link>
          </li>
          <li className="mobile-nav-item">
            <Link to="/shop" className="mobile-nav-link" onClick={closeMenu}>
              Shop
            </Link>
          </li>
          <li className="mobile-nav-item">
            <Link to="/blog" className="mobile-nav-link" onClick={closeMenu}>
              Blogs
            </Link>
          </li>
        </ul>

        <div className="mobile-actions">
          <Link
            to="/favorite"
            className="mobile-action-link"
            onClick={closeMenu}
          >
            <FaHeart className="mobile-action-icon" />
            <span>Favorites</span>
          </Link>

          <Link to="/basket" className="mobile-action-link" onClick={closeMenu}>
            <FaShoppingCart className="mobile-action-icon" />
            <span>Cart</span>
          </Link>

          {!user || !register ? (
            <Link
              to="/auth"
              className="mobile-login-button"
              onClick={closeMenu}
            >
              <img src={Logoout} alt="Login" className="mobile-login-icon" />
              <span>Login</span>
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}
