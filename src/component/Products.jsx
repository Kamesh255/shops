import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {useParams } from 'react-router-dom'
import { addCart } from '../redux/action';

const Products = ( ) => {

  const dispatch = useDispatch(); 
     
  const [search, setSearch] = useState("")
    const [product, setProduct] = useState([])
    const params = useParams()  
    useEffect(() => {
        const itemData = async () => {
          let req = await fetch(`https://shops-kamesh.herokuapp.com/shops?id=${params.id}`);
          let res = await req.json()  
          setProduct(res[0].product) 
        };
        itemData();
      }, []);

    

      const handelAddCart = (idx) => {
        product.forEach((e) => {
          if (e.id === idx) {
            dispatch(addCart(e));
          }
        });
      }; 
    
  return (
    <div>
        <div className='baner_div'>
          <div style={{marginTop:'30px'}}> 
            <h1 style={{color:'white',fontSize:'230%',}}>Shop from your favourite</h1>
            <h1 style={{color:'white',fontSize:'250%',marginTop:'-20px'}}>Store !</h1>
          </div>
          <div>
          <input style={{height:'35px',borderRadius:'20px 0px 0px 20px',border:'none'}} type="text"  placeholder=' i am shopping for..' value={search} onChange={(e)=>setSearch(e.target.value)}/>
            <button style={{height:'37px',borderRadius:'0px 20px 20px 0px',border:'none',padding:'2px 10px',backgroundColor:'green',fontWeight:'bold',color:'white'}}>SEARCH</button>
          </div>
      </div>

      <br />

      <div className='shop_container'>
          {product?.filter((el) => {
              if (search === "") {
                return el;
              } else if (
                el.title.toLowerCase().includes(search.toLowerCase())
              ) {
                return el;
              } 
            }).map((el)=>{
            return(
              <div style={{width:'250px',height:'400px',margin:'auto',borderRadius:'5px',display:'grid',gridAutoRows:'60% 25% 15%',textAlign:'left',padding:'5px',boxShadow:'gray 5px 5px 10px 5px'}}>
                <div>
                  <img style={{width:'100%', height:'100%'}} src={el.c_img} alt="" />
                </div>
                <div>
                  <p style={{fontWeight:'700'}}>{el.title}</p>
                  <p style={{fontWeight:'500'}}>{`Price: ${el.price}`}</p>
                </div>
                <div style={{textAlign:'center'}}> 
                     <button style={{fontWeight:'bold',backgroundColor:'green',color:'white',padding:'15px 25px',border:'none',borderRadius:'5px',cursor:'pointer'}} onClick={() =>{ handelAddCart(el.id)}} >ADD TO CART</button>
                  <br />
                </div>
              </div>
            )
          })}
         </div>
         <br />
    </div>
  )
}

export default Products