import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import PizzaCard from "./PizzaCard/PizzaCard";
import { Link } from "react-router-dom";


function PizzaMenu() {
    const dispatch = useDispatch();
    const pizzaMenu = useSelector((store) => store.pizzaMenu); //MAKE SURE TO ADD THE REDUCER FROM THE STORE HERE

    //useEffect that will get the array from the server using a GET REQUEST:
    useEffect(() => {
      getPizzaMenu();
    }, [])
    
    const getPizzaMenu = () => {
      axios({
        method: 'GET',
        url: '/api/pizza'
      })
      .then(response => {
        const pizzas = response.data;
        dispatch({
          type: 'SET_PIZZA_MENU',
          payload: pizzas
        })
      })
      .catch(err => {
        console.log('App.js err:', err)
      })
    }

    return (
        <div>
        <h3>Step 1: Select Your Pizza</h3>
        <div>
          {pizzaMenu.map((pizza) => (
            <PizzaCard
                key = {pizza.id}
                pizza = {pizza}
            />
          ))}
          <button><Link to='/customerInfoPage'>Next</Link></button>
        </div>
      </div>
    );
}

export default PizzaMenu;