import {ADD_CART, DEC_ITEM, DELETE_CART, INC_ITEM, STORE_DATA} from './actionTypes'


export const storeData = (payload) =>({
    type : STORE_DATA,
    payload : payload 
}) 
export const addCart = (payload) => ({
    type: ADD_CART,
    payload: payload
})
export const deleteCart = (payload) => ({
    type: DELETE_CART,
    payload: payload

})
export const incrementitem = (payload) => ({
    type: INC_ITEM,
    payload: payload,
  });
  export const decrementitem = (payload) => ({
    type: DEC_ITEM,
    payload: payload,
  });

const URL = "https://shops-kamesh.herokuapp.com/shops";
export const getData = async (dispatch) =>{
    try{
        const req = await fetch(URL)
        const  res = await req.json()
        // console.log(res)
        dispatch(storeData(res))
    }catch(e){
        console.log(e)
    }
}