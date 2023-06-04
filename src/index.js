import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

//Add reducers:
//Array of temporary information:
  //1. pizza id array:
const pizzaMenu = (state = [], action) => {
  if (action.type === 'SET_PIZZA_MENU') {
    const pizzas = action.payload;
    return pizzas;
  }
  return state;
};



//IDS
  //1. customer pizzas ID:
const orderedPizzasObj = (state = [], action) => {
  if (action.type === 'ADD_PIZZA') {
    const originalDataCopy = [... state];
    originalDataCopy.push(action.payload);
    return originalDataCopy;
  }
  
  if (action.type === 'REMOVE_PIZZA') {
    for (let i = 0; i <= state.length -1; i++) {  // [..state] = give me a brand new array, that has everything state has in it.
      if (state[i] == action.payload) {
        // console.log('hi')
        // console.log('i:', i)
        // console.log('state[i]:', state[i])
        return state.toSpliced(i, 1);  // you need to return something new, so either  [...state] or state.toSpliced (since toSpliced returns something new). Return state.toSpliced inherently creates new copy of original.
      }
    }
  }

  return state;
};


const totalCost=(state=[],action)=>{
    
  if (action.type==='ADD_PRICE'){
      
      const newPrice=action.payload;
      const copyOfPrice=[...state]
      copyOfPrice.push(newPrice)
      console.log('this---->',copyOfPrice); 
      
      return copyOfPrice
  } 
    if (action.type ==='REMOVE_PRICE'){
      for (let id of state){
          console.log('this is id',action.payload);
          if (id === action.payload){
              const newPrice=action.payload;
      const copyOfPrice=[...state]
      
              const idIndex=copyOfPrice.indexOf(id)
              copyOfPrice.splice(idIndex,1)
              return copyOfPrice
          }
      }
  }

  return state
}
  //2. customer Order ID:
  const customerOrderId = (state = 0, action) => {
    if (action.type === 'ADD_CUSTOMER_ORDER') {
      const originalDataCopy = 0;
      originalDataCopy = action.payload;
      console.log('originalDataCopy:', originalDataCopy);
      return originalDataCopy;
    }
    return state;
  }






//Add store:
const pizzaStore = createStore(
  combineReducers({
    pizzaMenu,
    totalCost,
    orderedPizzasObj,
    customerOrderId
  }),
  applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={pizzaStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
