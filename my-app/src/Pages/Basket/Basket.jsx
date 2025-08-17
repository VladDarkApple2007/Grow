import "./basket.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Counter from "./components/Counter/Counter.jsx";
import Delete from "../../img_home/Delete.png";
import { removeFromBasket } from "../../redux/slice/cartSlice";
import CartTotals from "./components/CartTotals/CartTotals";
import { toggleBasket } from "../../redux/slice/stateBtnSlice";
import { toast } from "react-toastify";

export default function Basket() {
  const products = useSelector((state) => state.cart.products);
  const navigate = useNavigate();
  const dispath = useDispatch();
  // Функция для форматирования цены


  // Подсчет общей суммы
  const total = products.reduce((sum, item) => sum + ( item.price * item.quantity), 0);

  const handleGoBack = () => {
    navigate("/");
  };

  const handleDelete = (item) => {
    dispath(removeFromBasket(item.id));
    toast.error("Deleted Item from basket!");
    dispath(toggleBasket(item.id))
  };
  return (
    <div className="basket-container">
      <div className="top_subheader">
        <p className="top_subheader_p">
          Home<span>/ Shop</span>
          <span>/ Shopping Cart</span>
        </p>
      </div>

      {products.length === 0 ? (
        <div className="empty-basket">
          <div className="empty-icon">🛒</div>
          <p>Your cart is empty</p>
          <button className="continue-shopping" onClick={handleGoBack}>
            Continue shopping
          </button>
        </div>
      ) : (
        <div className="basket_flex">
          <div className="basket-items">
            {products.map((item, id) => (
              <div className="basket-item" key={id}>
                <div className="item-image">
                  <div className="image-placeholder">
                    <img src={item.img} alt="" />
                  </div>
                </div>

                <div className="item-details">
                  <div>
                    <h3 className="item-title">{item.title}</h3>
                    <h4 className="item-title__sku">SKU: {item.sku}</h4>
                  </div>
                  <h4 className="item-prices">${item.price}.00</h4>
                  <Counter key={item.id} product={item} />
                  <button
                    className="remove-item"
                    onClick={() => handleDelete(item)}
                  >
                    <img src={Delete} alt="" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div>
            <CartTotals total={total}  />
          </div>
        </div>
      )}
    </div>
  );
}
