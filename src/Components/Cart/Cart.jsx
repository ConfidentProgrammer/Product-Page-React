import React from 'react'
import './Cart.css'
import {useSelector} from 'react-redux';
import productPhoto from '../../Images/image-product-2.jpg'
function Cart( {counter, name, price}) {
    const cart = useSelector(state=> state.addedToCart)
  return (
    <div className='cart-container container'>
        <span className="title">Cart</span>
 <hr/>
        {counter!==0 ? <><div className="product-container container d-flex mt-4">
            <div className="img-container">
            <img src={productPhoto} className='cartPhoto' alt="" />
            </div>
            <div className="mx-3">
            <p className="name">{name}</p>
            <span className="price">{price} x {counter} <span className="totalPrice">${counter*price}.00</span></span>
            </div>

        </div><div className="addcart" style={{width:'95%', margin:'10px auto'}}>
            Checkout
        </div></> : <p className='empty'>Cart is Empty</p>}

        
    </div>
  )
}

export default Cart