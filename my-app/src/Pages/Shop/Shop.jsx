import React from 'react'
import './../Shop/shop.css'
import Relete_Product from '../../Component/Relete_Product/Relete_Product'
import ShopCart from '../CartItem/components/ShopingCart/ShopCart'
import Product_Rewiews from '../CartItem/components/Product_Rewiews/Product_Rewiews'

export default function Shop() {
  return (
    <main>
      <div className="container_shop">
      <div className="top_subheader">
        <p className='top_subheader_p'>Home<span>/ Shop</span></p>
      </div>
      <div className="shoping_cart">
        <ShopCart/>
      </div>
      <div className="product_rewiews">
        <Product_Rewiews/>
      </div>
      <div className="product_ralete">
        <Relete_Product/>
      </div>
      </div> 
    </main>
  )
}
