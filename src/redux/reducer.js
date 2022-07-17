import { ADD_CART, DEC_ITEM, DELETE_CART, INC_ITEM, STORE_DATA } from './actionTypes'

const initState = {
    data: [],
    cart: []
}

const reducer = (store = initState, { type, payload }) => {
    switch (type) {
        case STORE_DATA:
            return { ...store, data: payload };
        case ADD_CART:
            let newArray = [];
            let uniqueObj = {};
            for (let i in store.cart) {
                let objId = store.cart[i]['id'];
                uniqueObj[objId] = store.cart[i]
            }
            if (uniqueObj[payload.id] === undefined) {
                uniqueObj[payload.id] = payload;
                uniqueObj[payload.id]["quantity"] = 1;
            } else {
                let quan = uniqueObj[payload.id]["quantity"];
                uniqueObj[payload.id]["quantity"] = quan + 1;
            }
            // Loop to push unique object into array
            for (let i in uniqueObj) {
                newArray.push(uniqueObj[i]);
            }
            return { ...store, cart: newArray };
        case DELETE_CART:
            var dcart = store.cart.filter((e) => {
                if (e.id !== payload) {
                    return e;
                }
            });
            return { ...store, cart: dcart };
        case INC_ITEM:

            var Incre = store.cart.map((e) => {
                if (e.id === payload) {
                    let xyz = e;
                    xyz["quantity"] = xyz["quantity"] + 1;
                    return xyz;
                } else {
                    return e;
                }
            });
            console.log("cartinc", Incre);
            return { ...store, cart: [...Incre] };
        case DEC_ITEM:
            var decre = store.cart.map((e) => {
                if (e.id === payload) {
                    let xyz = e;
                    xyz["quantity"] = xyz["quantity"] - 1;
                    return xyz;
                } else {
                    return e;
                }
            });
            console.log("cartdec", ...decre);
            return { ...store, cart: [...decre] };
        default:
            return store;
    }
}
export { reducer }