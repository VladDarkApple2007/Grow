import React from "react";
import "../../favorive.css";
import { useSelector } from "react-redux";
export default function FavoriteProduct({ product, handleAddBasket, id, handleDeleteFavorite }) {
  const items = useSelector((state) => state.cart.items);
  const handleDelete = () => {
    handleDeleteFavorite(product.id)
  };
  return (
    <div className="favorite-card" key={product.id}>
      <div className="card-header">
        <h3 className="product-title">{product.title}</h3>
        <button className="remove-btn" onClick={handleDelete}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="#555" strokeWidth="2" />
          </svg>
        </button>
      </div>

      <div className="product-details">
        <div className="detail-item">
          <span className="detail-label">Size:</span>
          <span className="detail-value">{product.size}</span>
        </div>

        <div className="detail-item price-item">
          <span className="detail-label">Price:</span>
          <span className="price-value">{product.price} ₽</span>
        </div>
      </div>

      <button
        className="add-to-cart-btn"
        onClick={() => handleAddBasket(product)}
      >
        Add in Bin
      </button>
    </div>
  );
}
