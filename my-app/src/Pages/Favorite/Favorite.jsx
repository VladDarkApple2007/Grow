import { useDispatch, useSelector } from "react-redux";
import "./favorive.css";
import { addToBasket, removeFavorite } from "../../redux/slice/cartSlice";
import FavoriteProduct from "./components/FavoriteProduct/FavoriteProduct";
import { toggleFavorite } from "../../redux/slice/stateBtnSlice";
import { toast } from "react-toastify";
export default function Favorite() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const handleAddBasket = (product) => {
    dispatch(addToBasket(product));
  };
  
  const handleDeleteFavorite = (id) => {
    dispatch(removeFavorite(id))
    toast.error("Deleted from favorites!");
    dispatch(toggleFavorite(id))
  }

  return (
    <div className="favorite-page">
      <h1 className="page-title">Favorites</h1>

      {items.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">♥</div>
          <p>Favorites are empty for now</p>
        </div>
      ) : (
        <div className="favorite-grid">
          {items.map((product, id) => (
            <FavoriteProduct
              product={product}
              handleAddBasket={handleAddBasket}
              id={id}
              handleDeleteFavorite={handleDeleteFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
}
