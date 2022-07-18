import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../redux/action';
import { AiOutlineStar} from "react-icons/ai";
 import './style/Home.css'
import { Link, useNavigate } from 'react-router-dom';


const Home = () => {
  
  const [filter, setFilter] = useState("")
  const [search, setSearch] = useState("")
  const dispatch = useDispatch(); 
  useEffect(() => {
    dispatch(getData); 
  }, []);
  
  const data = useSelector((state) => state.reducer.data);  
  


   
  return (
    <div>
    {/* -------banner-------- */}
      <div className='baner_div'>
          <div style={{marginTop:'30px'}}> 
            <h1 style={{color:'white',fontSize:'230%',}}>Shop from your favourite</h1>
            <h1 style={{color:'white',fontSize:'250%',marginTop:'-20px'}}>grocery stores!</h1>
          </div>
          <div>
            <input style={{height:'35px',borderRadius:'20px 0px 0px 20px',border:'none'}} type="text"  placeholder=' i am shopping for..' value={search} onChange={(e)=>setSearch(e.target.value)}/>
            <button style={{height:'37px',borderRadius:'0px 20px 20px 0px',border:'none',padding:'2px 10px',backgroundColor:'green',fontWeight:'bold',color:'white'}}>SEARCH</button>
          </div>
      </div>

    {/* -------short button----- */}
    <br />
    <br />
    <div style={{width:'80%', display:'flex', flexWrap:'wrap',alignItems:'center',margin:'auto',gap:'10px'}}>
      <button style={{cursor:'pointer' ,padding:"2% 5%",boxShadow:'gray 2px 3px 10px 5px', backgroundColor:'green',border:'none', borderRadius:'5px',color:'white', fontWeight:'bold'}} onClick={()=>setFilter("")}>All</button>
      <button style={{cursor:'pointer' ,padding:"2% 5%",boxShadow:'gray 2px 3px 10px 5px', backgroundColor:'white',border:'none', borderRadius:'5px', fontWeight:'bold'}} onClick={()=>setFilter("chemist")}>Chemist</button>
      <button style={{cursor:'pointer' ,padding:"2% 5%",boxShadow:'gray 2px 3px 10px 5px', backgroundColor:'white',border:'none', borderRadius:'5px', fontWeight:'bold'}} onClick={()=>setFilter("bakery")} >Bakery</button>
      <button style={{cursor:'pointer' ,padding:"2% 5%",boxShadow:'gray 2px 3px 10px 5px', backgroundColor:'white',border:'none', borderRadius:'5px', fontWeight:'bold'}} onClick={()=>setFilter("vegetables")}>Vegetables</button>
      <button style={{cursor:'pointer' ,padding:"2% 5%",boxShadow:'gray 2px 3px 10px 5px', backgroundColor:'white',border:'none', borderRadius:'5px', fontWeight:'bold'}} onClick={()=>setFilter("gift")}>Gift</button>
    </div>
    <br />
    <br />  
         <div className='shop_container'>
          {data?.filter((el) => {
              if (filter === "") {
                return el;
              } else if (el.title.toLowerCase() === filter) {
                return el;
              }
            })
            .filter((el) => {
              if (search === "") {
                return el;
              } else if (
                el.title.toLowerCase().includes(search.toLowerCase())
              ) {
                return el;
              } 
            }).map((el)=>{
            return(
              <div style={{maxWidth:'250px',minHeight:'400px',margin:'auto',borderRadius:'5px',display:'grid',gridAutoRows:'55% 32% 13%',textAlign:'left',padding:'5px',boxShadow:'gray 5px 5px 10px 5px'}}>
                <div>
                  <img style={{width:'100%', height:'100%'}} src={el.c_img} alt="" />
                </div>
                <div>
                  <p style={{fontWeight:'700'}}>{el.title}</p>
                  <p style={{fontWeight:'500'}}>{el.adress}</p>
                  <p style={{display:'flex',alignItems:'center'}} > 58 Reviews <span style={{cursor:'pointer'}}> <AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/>  </span>  </p>
                </div>
                <div style={{textAlign:'center'}}> 
                <Link to={`/products/${el.id}`}>
                <button style={{fontWeight:'bold',backgroundColor:'green',color:'white',padding:'15px 25px',border:'none',borderRadius:'5px',cursor:'pointer'}}  >VIEW ALL ITEMS</button>
                </Link>
                     
                  <br />
                </div>
              </div>
            )
          })}
         </div>
         <br />
         <br />
    </div>
  )
}

export default Home