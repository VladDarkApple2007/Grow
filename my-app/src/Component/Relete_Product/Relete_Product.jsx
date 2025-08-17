import React, { useEffect, useState } from 'react'
import './../Relete_Product/relete_product.css'
// import RaletJson from './../../../ralate.json'

import RaletJson from  './../../ralate.json';

export default function Relete_Product() {








  return (
    <section>
<div className="container_ralete">
<h3 className='Relete_h3'> You may be interested in</h3>
<div className='line_ralete'></div>
<div className="product_ralete">
  {
    RaletJson.map((obj, id) => (
      <div key={obj.id} className="product_ralete_block">
        <div>
        <img className='img_product_ralete' src={obj.img} alt="" />
        </div>
        <p className='name_obj'>{obj.name}</p>
        <p className='price_obj'>{obj.price}</p>
      </div>
    ))
  }
</div>
  </div>      
    </section>
  )
}
