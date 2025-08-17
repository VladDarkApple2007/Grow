import "./../ProductHome/product_home.css";
import two from "./../../img_home/01 3.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  addToCart,
  removeFavorite,
  removeFromBasket,
} from "../../redux/slice/cartSlice";
import { toggleBasket, toggleFavorite } from "../../redux/slice/stateBtnSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProductHome({
  name,
  price,
  img,
  id,
  record
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);
  const isFavorite = useSelector((state) => state.stateBtn.favorite[id]);
  const isInCart = useSelector((state) => state.stateBtn.basket[id]);
  const handleClickProduct = () => {
    navigate(`/product/${id}`);
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    dispatch(toggleFavorite(id));
    dispatch(addToCart(record));
    if (!isFavorite) {
      toast.success("❤️ Added to favorites!");
    } else {
      toast.error("Deleted from favorites!");
      dispatch(removeFavorite(id));
    }
    
  };

  const handleCartClick = (e) => {
    e.stopPropagation();
    dispatch(toggleBasket(id));
    dispatch(addToBasket(record));
    if (!isInCart) {
      toast.success("🛒 Item added to basket!");
    } else {
      toast.error("Deleted Item from basket!");
      dispatch(removeFromBasket(id));
    }
  };

  return (
    <div onClick={handleClickProduct}>
      <div className="product_home_flex">
        <div
          className="product_home"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="photo_prod">
            <img src={img} alt={name} />
            {isHovered && (
              <div className="product_actions">
                <button
                  className={`action_btn ${isFavorite ? "active" : ""}`}
                  onClick={handleFavoriteClick}
                >
                  <FaHeart />
                </button>
                <button
                  className={`action_btn ${isInCart ? "active" : ""}`}
                  onClick={handleCartClick}
                >
                  <FaShoppingCart />
                </button>
              </div>
            )}
          </div>
          <p className="name_product_home">{name}</p>
          <p className="price_product_home">${price}.00 </p>
        </div>
      </div>
    </div>
  );
}
