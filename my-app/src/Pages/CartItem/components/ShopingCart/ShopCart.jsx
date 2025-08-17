import React, { useState } from "react";
import "./../ShopingCart/shop_cart.css";
import Hurt from "./../../../../img_sec_home/heart 1.png";
import Fc from "./../../../../img_sec_home/Facebook (1).png";
import X from "./../../../../img_sec_home/Twitter (1).png";
import In from "./../../../../img_sec_home/Linkedin (1).png";
import Em from "./../../../../img_sec_home/Message.png";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CountProduct from "./components/CountProduct";
import AddButton from "./components/AddButton";
import { addToCart } from "../../../../redux/slice/cartSlice";

export default function ShopCart({ dataItem }) {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  const handleAddtoFavorite = () => {
    dispatch(addToCart(dataItem));
    toast.success("❤️ Added to favorites!");
  };
  return (
    <div className="show_product">
      <div className="photos_product">
        <div className="big_photo">
          <img src={dataItem.img} alt="" />
        </div>
      </div>
      <div className="text_desc_product">
        <h5>{dataItem.title}</h5>
        <div className="price_review">
          <div className="price_product">
            <p className="price_shop">${dataItem.price}.00</p>
          </div>
        </div>
        <div className="line_product"></div>
        <p className="title_desc_product">Short Description:</p>
        <p className="desc_product_shop">{dataItem.desc} </p>

        <div className="button_size_shop">
          <CountProduct count={count} setCount={setCount} />
          <div>
            <AddButton count={count} dataItem={dataItem}/>
          </div>
          <div>
            <button className="like_product" onClick={handleAddtoFavorite}>
              <span>
                <img src={Hurt} alt="" />
              </span>
            </button>
          </div>
        </div>
        <div className="block_sub_flex">
          <div className="sub_desc_p">
            <div className="span_shop_sub">
              SKU: <span>{dataItem.sku}</span>
            </div>
            <div className="span_shop_sub">
              Categories: <span>{dataItem.category}</span>
            </div>
            <div className="span_shop_sub">
              Tags: <span>{dataItem.tags}</span>
            </div>
          </div>
        </div>
        <div className="social">
          <p>Share this products:</p>
          <div>
            <img src={Fc} alt="" />
          </div>
          <div>
            <img src={X} alt="" />
          </div>
          <div>
            <img src={In} alt="" />
          </div>
          <div>
            <img src={Em} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
