import React from "react";
import axios from "axios";
import "./App.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import PizzaMenu from "../PizzaMenu/PizzaMenu";
import CustomerPage from "../CustomerPage/CustomerPage";
import { useSelector } from "react-redux";
import CheckoutPage from "../CheckoutPage/CheckoutPage"


function App() {

  const total = useSelector((store) => store.totalCost)
  console.log('total--->', total);

  let sum = 0
  for (let each of total) {
    sum = Number(each) + sum
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='App-title'>Prime Pizza </h1>
        <div className='total'><img className='cart' src="images/cart.png" alt="" /> {sum} </div>
      </header>
      <Router>
        <Link to='/'></Link>
        <Route exact path="/">
          <h2>Home Page</h2>
          <PizzaMenu />
        </Route >

        <Route exact path="/customerInfoPage">
          <h2>CUSTOMER PAGE</h2>
          <CustomerPage />
        </Route>

        <Route exact path="/CheckoutPage">
          <CheckoutPage />
        </Route>

        {/* <Route exact path="/adminPage">
          <StudentList />
        </Route> */}
      </Router >
      {/* <img src="images/pizza_photo.png" />
      <p>Pizza is great.</p> */}
    </div >
  );
}

export default App;

 //POST ORDER at checkout
    //   example post data
  // {
  //   "customer_name": "Donatello",
  //   "street_address": "20 W 34th St",
  //   "city": "New York",
  //   "zip": "10001",
  //   "total": "27.98",
  //   "type": "Pickup",
  //   "pizzas": [{
  //     "id": "1",
  //     "quantity": "1"
  //   },{
  //     "id": "2",
  //     "quantity": "1"
  //   }]
  // }