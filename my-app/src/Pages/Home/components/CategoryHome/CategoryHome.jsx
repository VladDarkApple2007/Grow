import React from 'react'
import './category_home.css'
import { useState } from 'react'


export default function CategoryHome({value, topCategory}) {

   const category = ["All Plants",'New Arrivals', 'Sale']



  return (
    <div className='category_home'>
      <ul className='list_category_home'>

         {category.map((TopCategoryName, id) => (
            <li 
            key={id} 
           onClick={() => topCategory(id)}
           className= {value === id ? "active_child" : 'child'}
         >{TopCategoryName}</li>
         ))}

      </ul>
    </div>
  )
}
