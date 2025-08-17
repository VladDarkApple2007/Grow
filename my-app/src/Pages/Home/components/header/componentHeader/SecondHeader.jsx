import React from "react";
import FlowerBaner from "./../../../../../img_home/FlowerBaner.png";
import { useNavigate } from "react-router-dom";

export default function SecondHeader() {
    const navigate = useNavigate();
    const ToBlog = () => {
      navigate('/blog')
    }
  return (
    <div class="header__container">
      <div class="header__title-button">
        <div class="header__title">
          <p class="header__top-title">Welcome to GreenShop</p>
          <h2>
            Visit our <br />
             <span>blog</span>
          </h2>
          <p class="header__sub-title">
            We are an online plant shop offering a wide range of cheap and
            trendy plants. Use our plants to create an unique Urban Jungle.
            Order your favorite plants!
          </p>
        </div>
        <button class="header__button--sec" onClick={ToBlog}>
          <span>OUR BLOG</span>
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
