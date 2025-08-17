import { useState } from "react";
import "./../FilterBlock/filter_block.css";
import ResetFiltersButton from "./components/ResetFiltersButton";
import CategoryFilter from "./components/CategoryFilter";
import SizeFilter from "./components/SizeFilter";

export default function FilterBlock({
  setSelectedCategory,
  SetTopCategory,
  setSelectedSize,
  setSelectedCategoryId,
  selectedCategoryId,
  selectedCategory,
  selectedSize,
  data,
}) {
  const [topCategoryId, SetTopCategoryId] = useState();

  const handleReset = () => {
    setSelectedSize("");
    setSelectedCategory("");
    setSelectedCategoryId();
    SetTopCategoryId();
    SetTopCategory(0);
  };

  return (
    <div className="home_filter">
      <div className="home-top_flex">
        <p className="title_filter_category">Categories</p>
        <ResetFiltersButton
          selectedSize={selectedSize}
          handleReset={handleReset}
          selectedCategory={selectedCategory}
        />
      </div>
      <div className="count_name_filter">
        <CategoryFilter
          selectedCategoryId={selectedCategoryId}
          setSelectedCategoryId={setSelectedCategoryId}
          setSelectedCategory={setSelectedCategory}
          data={data}
        />
      </div>

      <p className="title_filter_size">Size</p>
      <div className="count_size_filter">
        <SizeFilter
          topCategoryId={topCategoryId}
          SetTopCategoryId={SetTopCategoryId}
          setSelectedSize={setSelectedSize}
        />
      </div>
    </div>
  );
}
