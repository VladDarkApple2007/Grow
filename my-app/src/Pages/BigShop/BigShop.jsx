import React, { useState } from "react";
import "./big_shop.css";
import FilterBlock from "../../Component/FilterBlock/FilterBlock";
import ProductHome from "../../Component/ProductHome/ProductHome";
import { useGetProductQuery } from "../../redux/slice/apiSlice";
import useFilteredProducts from "../../hooks/useFilteredProducts";

export default function BigShop() {
  const { data: dataShop, error, isLoading } = useGetProductQuery();

  const [topCategory, SetTopCategory] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState();
  const [selectedSize, setSelectedSize] = useState("");

  const filterProduct = useFilteredProducts(
    dataShop,
    selectedCategory,
    selectedSize,
    topCategory
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;


  return (
    <div className="big-shop">
      <div className="big-shop_container">
        <div className="filter__block--shop">
          <FilterBlock
            setSelectedCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
            setSelectedSize={setSelectedSize}
            SetTopCategory={SetTopCategory}
            setSelectedCategoryId={setSelectedCategoryId}
            selectedCategoryId={selectedCategoryId}
            selectedSize={selectedSize}
            data={dataShop}
          />
        </div>

        <div className="big-shop_products">
          {filterProduct && filterProduct.length > 0 ? (
            filterProduct?.map((record) => (
              <ProductHome
                key={record.id}
                record={record}
                name={record.title}
                price={record.price}
                img={record.img}
                id={record.id}
              />
            ))
          ) : (
            <div className="no-products">
              <h2>No products found</h2>
              <p>Try changing the filter or category</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
