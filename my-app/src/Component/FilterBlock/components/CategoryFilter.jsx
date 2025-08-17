import React from "react";
import "./../../FilterBlock/filter_block.css";
import useCategories from "../../../hooks/useCategories";


const NameFilter = [
  "House Plants",
  "Potter Plants",
  "Seeds",
  "Small Plants",
  "Big Plants",
  "Succulents",
  "Trerrariums",
  "Gardening",
  "Accessories",
];


export default function CategoryFilter({
  data,
  setSelectedCategory,
  setSelectedCategoryId,
  selectedCategoryId,
}) {
  const { categories } = useCategories(data, NameFilter);
  return (
    <div className="name_filter_block">
      {Object.entries(categories).map(([name, count], id) => {
        return (
          <div
            key={name}
            onClick={() => {
              setSelectedCategory(name);
              setSelectedCategoryId(id);
            }}
            className={
              selectedCategoryId === id ? "active_filter" : "name_filter"
            }
          >
            {name} ({count})
          </div>
        );
      })}
    </div>
  );
}
