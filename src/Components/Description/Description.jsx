import React from 'react'
import './Description.css'
import iconPlus from '../../Images/icon-plus.svg'
import iconMinus from '../../Images/icon-minus.svg'
import iconCart from '../../Images/icon-cart.svg'
function Description() {
  return (
    <div className='desc-container'>
        <p className="companyName">SNEAKER COMPANY</p>
        <p className="productTitle">
            Fall Limited Edition Sneakers
        </p>
        <p className="description-para">
        These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
        </p>
        <div className="price-container">

            <div className="price-percent-container">
            <p className="price-actual">$125.00</p>
            <p className="price-discount">50%</p>
            </div>

            <div className="div">
            <p className="price-before">$250.00</p>
            </div>

        </div>
        <div className="quan-button">
        <div className="quantity-container">
            <p className="minus ops"><img src={iconMinus} alt="" /></p>
            <p className="number">0</p>
            <p className="plus ops"><img src={iconPlus} alt="" /></p>
        </div>
        <div className="addcart">
            <span className='cartphoto'><img src={iconCart} alt="" /></span>  &nbsp;&nbsp;&nbsp;Add to cart
        </div>
        </div>
        
    </div>
  )
}

export default Description