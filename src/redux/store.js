import { reducer } from "./reducer"
 import {createStore, applyMiddleware, combineReducers} from "redux"
 import thunk from "redux-thunk"
 const rootReducer = combineReducers({reducer:reducer})

  const store = createStore(rootReducer, applyMiddleware(thunk))

 export  {store}