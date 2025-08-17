import React from "react";

const SizesFilter = ["Small", "Medium", "Large"];
export default function SizeFilter({setSelectedSize, SetTopCategoryId, topCategoryId}) {
  return (
    <div className="size_filter_block">
      {SizesFilter.map((name, id) => {
        return (
          <div
            key={id}
            onClick={() => {
              setSelectedSize(name);
              SetTopCategoryId(id);
            }}
            className={topCategoryId === id ? "active_filter" : "name_filter"}
          >
            {name}
          </div>
        );
      })}
    </div>
  );
}
