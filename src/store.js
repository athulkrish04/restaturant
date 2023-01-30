import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";

// reducer 
const reducers=combineReducers({


})

// middleware
const middleware=[thunk] 


// create store
const store=createStore(reducers,applyMiddleware(...middleware))



export default store 





