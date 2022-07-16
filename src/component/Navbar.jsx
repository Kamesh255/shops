import React from 'react'
import './style/Navbar.css'

const Navbar = () => {
  return (
    <div className='nav_container'>
        <div className='icon_div'>
            <img src="shops_icon.png" alt="" />
        </div>
        <div className='input_div'> 
            <input type="Delivery Address /Post Code" />
        </div>
        <div className='ui_div'>
            <ul>
                <li>Deliver ASAP</li>
                <li>Shops</li>
                <li>Sign in</li>
                <li>like</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar