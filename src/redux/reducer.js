import {STORE_DATA} from './actionTypes'

const initState = {
    data:[]
}

const reducer = (store = initState, {type,payload})=>{
    switch(type){
        case STORE_DATA:
            return{...store, data:payload};
        default:
            return store;
    }
}
export {reducer}