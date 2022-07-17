import React from 'react'
import './style/Navbar.css'
import { AiOutlineUser,AiOutlineHeart,AiOutlineShoppingCart,AiOutlineShop } from "react-icons/ai";
import { BiTimeFive} from "react-icons/bi";
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='nav_container'>
        <div className='icon_div'>
            <div style={{width:'90%',height:'90%'}} > 
            <Link to="/">
                <img style={{width:'60%',height:'50px'}} src="https://tse3.mm.bing.net/th?id=OIP.APhWUxMFbdF5LuxbP8NogAHaD6&pid=Api" alt="" />
            </Link>
            </div>
        </div>
        <div className='input_div'> 
            <input type="Delivery Address /Post Code" />
        </div>
        <div className='ui_div'>
            <ul>
                <li> <BiTimeFive/>
                <select name="time" id="time">
                    <option value="Deliver ASAP">Deliver ASAP</option>
                    <option value="15 min.">15 min.</option>
                    <option value="20 min.">20 min.</option>
                    <option value="1 hours">1 hours</option>
                </select>
                </li>
                <li><AiOutlineShop/><p>Shops</p></li> 
            </ul>
        </div>
        <div>
            <ul className='cart_ui'> 
                <li><AiOutlineUser/><p>Sign in</p></li> 
                <li><AiOutlineHeart/><p>Like</p></li>
                <li><AiOutlineShoppingCart/><p>Cart</p></li> 
            </ul>
        </div>
    </div>
  )
}

export default Navbar