import React from 'react'
import './Carousal.css'
import product from '../../Images/image-product-1.jpg'
import product1 from '../../Images/image-product-4.jpg'
import product2 from '../../Images/image-product-2.jpg'
import product3 from '../../Images/image-product-3.jpg'
function Carousal() {
  return (
    <div className='car-container'>
        <img className="photos" src={product} alt="" />
       <div className="photos-container">
       <img className="photos-c" src={product} alt="" />
       <img className="photos-c" src={product1} alt="" />
       <img className="photos-c" src={product2} alt="" />
       <img className="photos-c" src={product3} alt="" />
           </div> 
    </div>
  )
}

export default Carousal