import React from 'react'
import './Navbar.css'
import iconCart from '../../Images/icon-cart.svg'
import profile from '../../Images/image-avatar.png'
function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-white nav-container">
    <div class="container-fluid">
    <a class="navbar-brand Nav-itself" href="#">sneakers</a>
    <div className="cartAndProfileContainer">
      <a class="navbar-brand Nav-cart" href="#"><img className='Nav-cart' src={iconCart}/></a>
      <a class="navbar-brand " href="#"><img className='Nav-profile' src={profile} alt="" /></a>
      </div>
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
     

    
    </div>
  </nav>
  )
}

export default NavBar