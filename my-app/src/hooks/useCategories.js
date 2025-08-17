import { useMemo } from "react";



const useCategories = (data, defaultCategories) => {
return useMemo(() => {
   const all = data?.flatMap((p) => 
      typeof p.category === 'string' 
      ? p.category.split(",").map((c) => c.trim())
      : Array.isArray(p.category)
      ? p.category
      : []
   ) ?? [];

   const counted = all.reduce((acc, c) => {
      acc[c] = (acc[c] || 0) + 1;
      return acc
   }, {});

   const empty = Object.fromEntries(defaultCategories.map((c) => [c, 0]));
   return {categories: {...empty, ...counted }};
   
}, [data, defaultCategories])
}

export default useCategories;