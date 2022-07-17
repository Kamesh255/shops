import {STORE_DATA} from './actionTypes'


export const storeData = (payload) =>({
    type : STORE_DATA,
    payload : payload 
}) 

const URL = "http://localhost:5000/shops"
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