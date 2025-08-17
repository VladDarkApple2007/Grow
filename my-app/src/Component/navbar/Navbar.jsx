import { useEffect } from "react";
import "./navbar.css";
import Logo from "./../../img_home/Logo.png";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import NavbarDesktop from "./components/NavbarDesktop";
import NavbarMobile from "./components/NavbarMobile";
import CloseMenu from "./components/CloseMenu";
import useMenuToggle from "../../hooks/useMenuToggle";

export default function Navbar() {
  const { isOpen, toggleMenu, closeMenu } = useMenuToggle();
  const { register, user } = useAuth();
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay для затемнення фону */}
      <CloseMenu closeMenu={closeMenu} isOpen={isOpen} />
      <nav className="nav">
        <div className="nav-container">
          {/* Логотип */}
          <Link to="/" className="logo-link">
            <img src={Logo} alt="Logo" className="logo" />
          </Link>
          {/* Десктопне меню */}
          <NavbarDesktop user={user} register={register} />
          {/* Мобільне меню */}
          <NavbarMobile
            user={user}
            register={register}
            closeMenu={closeMenu}
            toggleMenu={toggleMenu}
            isOpen={isOpen}
          />
        </div>
      </nav>
    </>
  );
}
