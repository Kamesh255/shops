import React, { useEffect, useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus, AiTwotoneDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { decrementitem, deleteCart, incrementitem } from '../redux/action';
import { store } from '../redux/store';

import './style/Cart.css'

const Cart = () => {

  const [cart, setCart] = useState(false);
  const [upi, setUpi] = useState(false);
  const [total, setTotal] = useState(0);
  const [length, setLength] = useState(0);

  const dispatch = useDispatch();

  let cartData = useSelector((state) => state.reducer.cart);

  const items = cartData.map((el) => {
    return el.price;
  });
  let totalItems = items.length;

  const setCartData = () => {
    let newPrice = 0;
    for (let i = 0; i < cartData.length; i++) {
      newPrice += cartData[i].price * cartData[i].quantity;
    }
    setTotal(newPrice);
  };
  useEffect(() => {
    setCartData();
    return () => {
      setCartData();
    };
  }, [cartData, length]);

  const handlecartRemove = async (idx) => {
    await dispatch(deleteCart(idx));

    let state = store.getState();
    setLength(state.reducer.cart.length);
  };

  const RemoveItem = (idx) => {
    dispatch(decrementitem(idx));
  };
  const Additem = (idx) => {
    dispatch(incrementitem(idx));
  };

   
  const handelSubmit= ()=> {
    alert("Your Order Deliver by 15 min...")
  }
  return (
    <div>
     
    <div className="cart_div">
      <div>
        <h3>MY CART</h3>
        <br />
        <div className="cart_item">
          {cartData.map((el) => {
            return (
              <>
                <div className="box">
                  <div className="cart_img">
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "8px 8px 0 0",
                      }}
                      src={el.c_img}
                      alt={el.title}
                    />
                  </div>
                  <div className="cart_text">
                    <p style={{fontWeight:'bold'}}>{el.title}</p>
                    <div style={{ display: "flex",marginTop:'-15px' }}>
                      <div>
                        <p style={{fontWeight:'500'}} >Price : ₹{el.price * el.quantity}</p>
                      </div>
                      <div style={{ marginLeft: "10px" }}>
                        <p style={{fontWeight:'500'}}> {`Quantity: ${el.quantity}`}</p>
                      </div>
                    </div>
                    <div className="cart_remove">
                      <button id="btn" onClick={() => Additem(el.id)}>
                        <AiOutlinePlus />
                      </button>
                      {el.quantity > 1 ? (
                        <button
                          style={{ margin: "0 0 0 10px " }}
                          onClick={() => RemoveItem(el.id)}
                        >
                          <AiOutlineMinus />
                        </button>
                      ) : null}
                      <button
                        style={{ marginLeft: "10px" }}
                        onClick={() => handlecartRemove(el.id)}
                      >
                        <AiTwotoneDelete />
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="pyment_div"> 
        <br />
        <div className="pyment_text">
          <h4>{`Total Quantity: ${totalItems}`}</h4>
          <br />
          {cartData.map((el) => {
            return (
              <>
                <div className="details">
                  <div>
                    <h4>{el.title}</h4>
                  </div>
                  <div>
                    <h4>{el.price * el.quantity}</h4>
                  </div>
                </div>
              </>
            );
          })}

          <hr />
          <div className="details">
            <div>
              <h4>Total Price</h4>
            </div>
            <div>
              <h4>{total}</h4>
            </div>
          </div> 
          <br /> 
        </div>  
        <Link to='/' onClick={handelSubmit}>
                  <button style={{ padding:'10px 15px', borderRadius:'5px', backgroundColor:'green', color:'white',fontWeight:'bold',border:"none" }}>
                    Check-Out
                  </button>
        </Link>
              
      </div>
    </div>
  </div>
  )
}

export default Cart