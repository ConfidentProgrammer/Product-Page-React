import React from 'react'
import './Navbar.css'
import iconCart from '../../Images/icon-cart.svg'
import profile from '../../Images/image-avatar.png'
import Cart from '../Cart/Cart'
import {useSelector} from 'react-redux';
import {useState} from 'react'
function NavBar() {
  const addedToCart = useSelector(state => state.addedToCart)
  const counter = useSelector(state => state.counter)
  const [n, setN] = useState(false)
  const handleClick = () => {
    setN(!n)
  }
  return (
    <>
 {n ? <Cart counter={counter} name={addedToCart.Name} price="125.00" /> : ''  }
    <nav class="navbar navbar-expand-lg navbar-light bg-white nav-container">
    <div class="container">
    <a class="navbar-brand Nav-itself" href="#">sneakers</a>
  
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">Collections</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Men</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">Women</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
     
      <div className="cartAndProfileContainer">
      <a class="navbar-brand Nav-cart" href="#"><img onClick={handleClick} className='Nav-cart' src={iconCart}/></a>
      <a class="navbar-brand " href="#"><img className='Nav-profile' src={profile} alt="" /></a>
      </div>
    
    </div>
  </nav>
  </>
  )
}

export default NavBar