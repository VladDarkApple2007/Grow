import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product_Rewiews from "./components/Product_Rewiews/Product_Rewiews";
import ShopCart from "./components/ShopingCart/ShopCart";
import "./cart_item.css";

export default function CartItem() {
  const { id } = useParams();
  const [dataItem, setDataItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://6853fbc9a2a37a1d6f4ab196.mockapi.io/product/?id=${id}`
      );
      const result = await res.json();
      setDataItem(result[0]);
    };
    fetchData();
    console.log("Clicked ID2:", id);
  }, [id]);

  if (!dataItem) return <p>Loading....</p>;

  return (
    <main>
      <div className="container_shop">
        <div className="top_subheader">
          <p className="top_subheader_p">
            Home<span>/ Shop</span>
          </p>
        </div>
        <div className="shoping_cart">
          <ShopCart dataItem={dataItem}/>
        </div>
        <div className="product_rewiews">
          <Product_Rewiews />
        </div>
      </div>
    </main>
  );
}
