import { useDispatch } from "react-redux";
import { decrease, increase } from "../../../../redux/slice/cartSlice";

export default function Counter({ product }) {
  const dispatch = useDispatch();
  const count = product.quantity;
  const totalSum = product.price * count;
  return (
    <div className="item-controls">
      <div className="quantity-control">
        <button className="quantity-btn_first" onClick={() => dispatch(decrease(product.id))}>
          <div className="minus"></div>
        </button>
        <span className="quantity">{product.quantity}</span>
        <button className="quantity-btn" onClick={() => dispatch(increase(product.id))}>
          <span>+</span>
        </button>
      </div>
      <h4 className="item-price">${totalSum}.00</h4>
    </div>
  );
}
