import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function CustomerPage() {

    const dispatch = useDispatch();
    
    const [name, setName] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');

    const orderedPizzasObj = useSelector(store => store.orderedPizzasObj);

    const postOrder = () => {
        //1. post customer information to the orders database table:
        //2. Make a GET request to the server to get the id of the order we just sent
        //   sent to the database.
        axios({
            method: 'POST',
            url: '/api/order',
            data: {
                customer_name: name,
                street_address: streetAddress,
                city: city,
                zip: zip,
                type: 'delivery',
                total: 2.00,
                pizzas: orderedPizzasObj
            }
        })
        .then(response => {
            console.log('CustromerPage.jsx POST res,:', response)
            getOrders();
        })
        .catch(err => {
            console.log('CustomerPage.jsx,:', err)
        })
    }

    
    const getOrders = () => {
      axios({
        method: 'GET',
        url: '/api/order'
      })
      .then(response => {
        const orders = response.data; // --> evaluates to an array with order objects [{name:sda, streetadress: a}]
        const currentOrder = orders.pop();
        const currentOrderId = currentOrder.id;
        dispatch({
          type: 'ADD_CUSTOMER_ORDER',
          payload: currentOrderId
        })

        console.log('CustromerPage.jsx GET res,:', response)
      })
      .catch(err => {
        console.log('CustomerPage.jsx GET res,:', err)
      })
    }

  return (
    <>
      <h3>Step 2: Customer Information</h3>
      <form action="">
        <input type="text" placeholder="name" value={name} onChange={event => setName(event.target.value)} />
        <input type="text" placeholder="street address" value={streetAddress} onChange={event => setStreetAddress(event.target.value)}/>
        <input type="text" placeholder="city" value={city} onChange={event => setCity(event.target.value)}/>
        <input type="text" placeholder="zip" value={zip} onChange={event => setZip(event.target.value)}/>
      </form>
      <button onClick={postOrder}>
        click me
        {/* <Link to="/checkoutPage">Next</Link> */}
      </button>
    </>
  );
}

export default CustomerPage;
