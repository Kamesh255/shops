import React from 'react'
import './style/Navbar.css'
import { AiOutlineUser,AiOutlineHeart,AiOutlineShoppingCart,AiOutlineShop,AiOutlineSearch } from "react-icons/ai";
import { BiTimeFive} from "react-icons/bi";
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='nav_container'>
        <div className='icon_div'>
            <div style={{width:'90%',height:'90%'}} > 
            <Link to="/">
                <img style={{width:'60%',height:'50px'}} src="shops_icon-removebg-preview.png" alt="" />
            </Link>
            </div>
        </div>
        <div className='input_div'> 
        <div style={{display:'flex',alignItems:'center', border:'1px solid gray',width:'210px',padding:'5px',alignContent:'space-between',borderRadius:'5px'}}>
            <input type="text" placeholder='Delivery Address /Post Code' style={{border:'none'}}/>
            <AiOutlineSearch style={{fontSize:'20px',marginLeft:"10px"}}/>
        </div>
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
                <li><AiOutlineUser/><p>Sign in</p></li> 
                <li><AiOutlineHeart/><p>Like</p></li>
            </ul>
        </div>
        <div>
            <ul className='cart_ui'> 
                
                <Link to='/cart'><li> <AiOutlineShoppingCart/><p>Cart</p></li></Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar