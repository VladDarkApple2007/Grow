import React from "react";
import "./../../FilterBlock/filter_block.css";

export default function ResetFiltersButton({
  selectedCategory,
  handleReset,
  selectedSize,
}) {
  const stateReset = selectedCategory || selectedSize;
  return (
    <div>
      {stateReset && (
        <button className="reset-btn" onClick={handleReset}>
          Скинути фільтри
        </button>
      )}
    </div>
  );
}
