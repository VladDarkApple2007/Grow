import React from 'react'
import './../SortHome/sort_home.css'
import VectorDown from './../../img_home/Arrow - Down 2.png'


export default function SortHome() {
  return (
    <div className='sort_flex'>
<div className="p_sort_flex">
   <p>Short by:</p>
</div>
<div className="p_sort_icon">
   <p>Default sorting</p>
   <div className="icon_sort">
      <img src={VectorDown} alt="" />
   </div>
</div>
    </div>
  )
}
