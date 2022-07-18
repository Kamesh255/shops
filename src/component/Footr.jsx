import React from 'react'
import './style/Footer.css'

const Footr = () => {
  return (
    <div style={{backgroundColor:'black', minHeight:'250px'}}>
        <div className='footr_div'>
            <div>
                <img style={{marginTop:'50px'}} src="shops_icon-removebg-preview.png" alt="" />
            </div>
            <div className='text'>
            <p style={{fontWeight:'bold'}}>KEEP IN TOUCH</p> 
                    <p> Contact Us - +919876543210 </p>
                    <p>Help Center - shopsrun@gmail.com  </p>
                    <p> Address - Bangalore Office, CV Raman Nagar</p> 
            </div>
            <div className='text2' >
                <p style={{fontWeight:'bold'}}>All Items</p> 
                    <p>Chemist</p>
                    <p>Bakery</p> 
                    <p>Vegetables </p>
                    <p>Gift</p>
                
            </div>
            <div className='text2'>
            <p style={{fontWeight:'bold'}}>PAGES</p>
                
                    <p> About Us </p>
                    <p>Shop Registration  </p>
                    <p>Shop & Drive For Us</p>  
            </div> 
        </div>
    </div>
  )
}

export default Footr