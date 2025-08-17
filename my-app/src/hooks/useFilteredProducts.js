import { useMemo } from "react";

const useFilteredProducts = (
  data,
  selectedCategory,
  selectedSize,
  topCategory
) => {
  return useMemo(() => {
    return data?.filter((product) => {
      const matchCategory = selectedCategory
        ? product.category.includes(selectedCategory)
        : true;

      const matchSize = selectedSize
        ? product.size.includes(selectedSize)
        : true;

      const matchTopCategory =
        topCategory === 0
          ? product
          : topCategory === 1
          ? product.price < 130
          : topCategory === 2
          ? product.price < 100
          : true;

      return matchCategory && matchSize && matchTopCategory;
    }) || [];
  }, [data, selectedCategory, selectedSize, topCategory]);
};

export default useFilteredProducts;
