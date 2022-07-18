import React from 'react'
import './style/Footer.css'

const Footr = () => {
  return (
    <div style={{backgroundColor:'black', minHeight:'250px'}}>
        <div className='footr_div'>
            <div>
                <img style={{marginTop:'50px'}} src="shops_icon-removebg-preview.png" alt="" />
            </div>
            <div className='text' >
                <p>POPULAR SUBURBS</p> 
                    <p>Castle Hill</p>
                    <p>Kellyville</p>
                    <p>Cherrybrook</p>
                    <p>Baulkham Hills</p>
                    <p>Pennant Hill</p>
                
            </div>
            <div className='text2'>
            <p>PAGES</p>
                
                    <p> About Us </p>
                    <p>Shop Registration  </p>
                    <p>Shop & Drive For Us</p>
                    <p>Terms & COndition </p> 
                 
            </div>
            <div className='text2'>
            <p>KEEP IN TOUCH</p> 
                    <p> Contact Us </p>
                    <p>Help Center    </p>
                    <p> Facebook</p>
                    <p>Instagram </p> 
               
            </div>
        </div>
    </div>
  )
}

export default Footr