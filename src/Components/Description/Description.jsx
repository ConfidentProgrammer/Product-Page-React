import React from 'react'
import './Description.css'
import iconPlus from '../../Images/icon-plus.svg'
import iconMinus from '../../Images/icon-minus.svg'
import iconCart from '../../Images/icon-cart.svg'
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement} from '../../Redux/Actions/counter'
import {getAddedProduct} from '../../Redux/Actions/Name'
import {useState} from 'react'
function Description() {
    const counter = useSelector(state => state.counter)
    const productName = 'Fall Limited Edition Sneakers'
    const dispatch = useDispatch();
    const [selectedQuantity, setSelectedQuantity] = useState(0)
    const [name, setName] = useState('');
    const handleMinus = () => {
        if(counter > 0)
            dispatch(decrement())
    }
    const handlePlus = () => {
        dispatch(increment())
    }
    const handleAddToCart = () => {
        if(counter > 0) {
            dispatch(getAddedProduct({
                "Name":productName,
                "Qty" : counter
            }))  
        }
      
    }
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
        <div className="quan-button ">
        <div className="quantity-container">
            <p className="minus ops"><img onClick={handleMinus} src={iconMinus} alt="" /></p>
            <p className="number ops">{counter}</p>
            <p className="plus ops"><img onClick={handlePlus} src={iconPlus} alt="" /></p>
        </div>
        <div className="addcart" onClick={handleAddToCart}>
            <span className='cartphoto'><img src={iconCart} alt="" /></span>  &nbsp;&nbsp;&nbsp;Add to cart
        </div>
        </div>
        
    </div>
  )
}

export default Description