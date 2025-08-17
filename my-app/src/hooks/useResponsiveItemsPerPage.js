import { useEffect, useState } from "react";

export function useResponsiveItemsPerPage() {
  const [itemsPerPage, setItemsPerPage] = useState(9);

  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;
      if (width >= 1200) setItemsPerPage(9);
      else if (width >= 768) setItemsPerPage(6);
      else setItemsPerPage(4);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return itemsPerPage;
}
