import React from "react";
import FlowerBaner from "./../../../../../img_home/FlowerBaner.png";
import { useNavigate } from "react-router-dom";

export default function FirstHeader() {
  const navigate = useNavigate();
  const ToShop = () => {
    navigate('/shop')
  }
  return (
    <div class="header__container">
      <div class="header__title-button">
        <div class="header__title">
          <p class="header__top-title">Welcome to GreenShop</p>
          <h1>
            Let’s Make a <br />
            Better <span>Planet</span>
          </h1>
          <p class="header__sub-title">
            We are an online plant shop offering a wide range of cheap and
            trendy plants. Use our plants to create an unique Urban Jungle.
            Order your favorite plants!
          </p>
        </div>
        <button class="header__button" onClick={ToShop}>
          <span>SHOP NOW</span>
        </button>
      </div>
      <div class="header__image">
        <div>
          <img class="header__image--flower" src={FlowerBaner} alt="" />
        </div>
      </div>
    </div>
  );
}
